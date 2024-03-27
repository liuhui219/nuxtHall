<!-- @format -->

<template>
    <div class="withdraw">
        <div class="px-[16px]">
            <el-divider
                ><span class="font-black">{{ $t("H0038") }}</span>
            </el-divider>
            <div class="withdraw-money py-[20px] gap-[10px]">
                <div class="inline gap-[8px]">
                    <span class="unit">R$</span> <span class="money">{{ formattedNum(money) }}</span>
                </div>
                <div class="title text-[12px]">Ainda faltam 0 apostas para poderfazer o saque</div>
            </div>
        </div>

        <div class="withdraw-form">
            <el-form
                ref="ruleFormRef"
                hide-required-asterisk
                :model="ruleForm"
                :rules="rules"
                label-width="0"
                class="demo-ruleForm"
            >
                <div class="withdraw-view px-[16px]">
                    <div class="title mb-[5px]">
                        <span class="whitespace-pre">{{ formattedNum(PayChannel.minLimit) }}</span> -
                        <span class="whitespace-pre">{{ formattedNum(PayChannel.maxLimit) }}</span
                        ><span class="ml-[4px]">BRL</span>
                    </div>
                    <div class="withdraw-view-money">
                        <el-form-item label="" prop="price"
                            ><el-input
                                v-model="ruleForm.price"
                                class="w-full"
                                size="large"
                                clearable
                                @input="inputFn"
                                @blur="blurFn"
                                placeholder="Por favor, insira o valor do saque"
                            >
                            </el-input
                        ></el-form-item>
                    </div>
                    <div class="withdraw-view-list grid grid-cols-3 gap-[10px]">
                        <div
                            class="withdraw-view-list-btn"
                            :class="{active: item.value === activeIndex}"
                            v-for="item in list"
                            :key="item.value"
                            @click="checkFn(item)"
                        >
                            R$ {{ item.text }}
                        </div>
                    </div>
                    <p class="text-[10px] text-left mt-[10px]" style="color: #f8bd31">
                        Para sacar com Pix, registre seu CPF através do aplicativo do seu banco.
                    </p>
                </div>

                <div class="withdraw-info p-[16px]">
                    <el-form-item label="" prop="" label-width="0px">
                        <el-row :gutter="4">
                            <el-col :span="8">
                                <el-select
                                    size="large"
                                    v-model="ruleForm.extends.WalletType"
                                    placeholder="Activity zone"
                                >
                                    <el-option
                                        :label="item"
                                        :value="item"
                                        v-for="(item, index) in supportBankCode"
                                        :key="index"
                                    />
                                </el-select>
                            </el-col>
                            <el-col :span="16">
                                <el-form-item label="" prop="extends.WalletNumber" label-width="0px"
                                    ><el-input
                                        size="large"
                                        v-model="ruleForm.extends.WalletNumber"
                                        clearable
                                        placeholder="Insira sua conta"
                                /></el-form-item>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="" prop="extends.WalletHolder" label-width="0px">
                        <el-input
                            v-model="ruleForm.extends.WalletHolder"
                            size="large"
                            clearable
                            placeholder="Insira seu nome"
                        />
                    </el-form-item>
                    <el-form-item label="" prop="extends.IDNumber" label-width="0px">
                        <el-input
                            v-model="ruleForm.extends.IDNumber"
                            size="large"
                            clearable
                            placeholder="Insira sua conta"
                        />
                    </el-form-item>

                    <div class="text-[12px] text-left mt-[10px]" style="color: rgb(100 119 163)">
                        <p>1. Abra o aplicativo bancário.</p>
                        <p>2. Abra a seção Pix e toque em “Registrar chave".</p>
                        <p>3. Insira o CPF e registre sua chave.</p>
                        <p>4. Saque PIX pronto após confirmação da chave.</p>
                        <p class="mt-[20px]">R${{ ruleForm.price }} depósito em sua conta pessoal</p>
                    </div>

                    <div
                        @click="submitForm(ruleFormRef)"
                        class="flex submit items-center min-h-[40px] justify-center w-full rounded-[4px] text-[13px] font-bold text-color-white"
                    >
                        {{ $t("H0038") }}
                    </div>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
    const {locale, t} = useI18n();
    import {FormInstance} from "element-plus";
    import {useThrottleFn} from "@vueuse/core";
    import {cloneDeep} from "lodash";
    import store from "store";
    const isLogin = useIsLogin();
    const ruleFormRef = ref<FormInstance>();
    let parmas = JSON.parse(store.get("w_l_s_r"));
    const PayChannel = ref<tagPayChannel>({
        channelID: 0, // 充值渠道标识
        channelName: "", // 充值渠道名称
        minLimit: 0, // 提现限制最小值
        maxLimit: 0, // 提现限制最大值
        boSupportWithdraw: false, // 是否支持提现
        supportBankCode: "", // 银行码：cnpj|cpj
        defaultMask: 0,
    });

    const money = ref(parmas.userScore);

    const ruleForm = reactive({
        price: 0,
        extends: {
            WalletType: "",
            WalletNumber: "",
            WalletHolder: "",
            IDNumber: "",
        },
    });

    const ruleForms = reactive<CMD_MB_PlaceOrder>({
        userID: parmas.userID, // 用户标识
        productID: 0, // 商品标识
        price: 0, // 价格
        nickName: parmas.nickName, // 用户昵称
        machineID: "", // 机器码
        ip: "", // IP地址
        extends: "",
    });

    const supportBankCode = ref<string[]>([]);
    const list = ref([
        {text: 50, value: "50"},
        {text: 100, value: "100"},
        {text: 200, value: "200"},
        {text: 300, value: "300"},
        {text: 500, value: "500"},
        {text: 1000, value: "1000"},
    ]);

    const rules = computed(() => {
        const rule = {
            price: [
                {
                    required: true,
                    message: t("L1020"),
                    trigger: ["blur", "change"],
                },
            ],
            "extends.WalletNumber": [
                {
                    required: true,
                    message: "Insira sua conta",
                    trigger: ["blur", "change"],
                },
            ],
            "extends.WalletHolder": [
                {
                    required: true,
                    message: "Insira seu nome",
                    trigger: ["blur", "change"],
                },
            ],
            "extends.IDNumber": [
                {
                    required: true,
                    message: "Insira sua conta",
                    trigger: ["blur", "change"],
                },
            ],
        };

        return rule;
    });

    const activeIndex = ref("");

    const priceFilter = (value: number) => {
        if (value < PayChannel.value.minLimit) {
            value = PayChannel.value.minLimit;
        } else if (value > PayChannel.value.maxLimit) {
            value = PayChannel.value.maxLimit;
        }

        activeIndex.value = String(value);
        ruleForm.price = value;
    };
    const blurFn = (e: {target: {value: number}}) => {
        let value = e.target.value;
        priceFilter(value);
    };

    const inputFn = (val: any) => {
        let regNumber = /^([0])(\d)+$/;
        let reg = /[^0-9]/g;
        let value = val;

        value = value.replace(reg, "");

        if (regNumber.test(value)) {
            value = value.replace(regNumber, "$2");
        }
        ruleForm.price = value;
        activeIndex.value = String(value);
    };

    const checkFn = (parmas: {value: string}) => {
        priceFilter(Number(parmas.value));
    };

    onMounted(() => {
        getPayChannel({userID: parmas.userID}, "withdraw", function (s: INetService, e: INetEventParam) {
            let channelName = "epay";
            if (e.scmd === 2161) {
                let {items} = e.data as CMD_MB_GetPayChannelResult;
                if (items.length) {
                    items.map((item: tagPayChannel, index: number) => {
                        if (item.channelName === channelName) {
                            PayChannel.value = item;
                            ruleForm.price = item.minLimit;
                            supportBankCode.value = item.supportBankCode.split("|");
                            ruleForm.extends.WalletType = supportBankCode.value[0];
                        }
                    });
                }
            }

            s.off("withdraw");
        });
    });

    const submitForm = async (formEl: FormInstance | undefined) => {
        if (!formEl) return;

        await formEl.validate((valid, fields) => {
            if (valid) {
                submitFn();
            } else {
                console.log("error submit!", fields);
            }
        });
    };

    const submitFn = useThrottleFn(() => {
        const ruleFormClone = cloneDeep(ruleForm);
        ruleForms.price = ruleFormClone.price;
        ruleForms.extends = objectToQueryString(ruleFormClone.extends);
        Withdraw(ruleForms, "withdraw", (s: INetService, e: INetEventParam) => {});
    }, 1000);
</script>

<style lang="scss" scoped>
    .withdraw {
        width: 100%;
        height: 100%;
        background-color: #25262b;
        .withdraw-title {
            width: 100%;
            height: 36px;
            background-color: #36373b;
            font-size: 14px;
            display: flex;
            align-items: center;
            padding-left: 30px;
            position: relative;
            margin-top: 8px;
            &::before {
                content: "";
                position: absolute;
                left: 15px;
                top: 50%;
                transform: translateY(-50%);
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: var(--el-color-primary);
                border: 1px solid var(--el-text-color-primary);
            }
        }
        .withdraw-money {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #313642;
            border-radius: 4px;

            font-family: Arial-BoldMT;
            .unit {
                color: #2ff85a;
                font-size: 18px;

                font-family: FZ;
            }
            .money {
                font-size: 32px;

                font-family: FZ;
            }

            .title {
                color: #99a7b4;
            }
        }

        .withdraw-form {
            width: 100%;
            margin-top: 20px;
            gap: 10px;
            .withdraw-view {
                width: 100%;

                gap: 10px;
                border-radius: 4px;
                .unit {
                    color: var(--el-color-primary);
                    font-size: 18px;
                    font-weight: bolder;
                    font-family: Arial-BoldMT;
                }
                .withdraw-view-list {
                    width: 100%;
                    margin-top: 10px;
                    .withdraw-view-list-btn {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 50px;
                        background-color: rgb(93 99 116 / 25%);
                        border: solid 1px rgb(192 197 213 / 25%);
                        border-radius: 4px;
                        font-size: 18px;
                        font-family: FZ;
                    }
                    .active {
                        background-image: linear-gradient(0deg, #203c1f 0%, #1f1f25 100%),
                            linear-gradient(#5d6374, #5d6374);
                        border: solid 1px #2df832;
                    }
                }
                ::v-deep(.el-input__inner) {
                    font-weight: bold;
                }
            }

            .title {
                color: #7582a1;
                font-size: 12px;
                margin-left: 8px;
            }

            .withdraw-info {
                background: #36373b;
                width: 100%;

                border-radius: 4px;
                margin-top: 10px;
                ::v-deep(.el-form-item) {
                    align-items: center;
                }
                ::v-deep(.el-form-item__label) {
                    color: var(--el-color-primary);
                    font-weight: bold;
                }
            }
            ::v-deep(.submit) {
                width: 100%;
                margin-top: 10px;
                font-weight: bold;
                background-image: linear-gradient(90deg, #62cc7a 0%, #34aa4e 100%), linear-gradient(#53c16c, #53c16c);
            }
        }
        ::v-deep(.el-input__wrapper) {
            background-color: #2b2f35;
        }

        ::v-deep(.el-input__wrapper) {
            background-color: #07080a;
            box-shadow: 0 0 0 1px #07080a inset;
        }

        ::v-deep(.el-input__wrapper.is-focus) {
            box-shadow: 0 0 0 1px #6188fd inset;
        }
        ::v-deep(.el-form-item.is-error .el-input__wrapper) {
            box-shadow: 0 0 0 1px var(--el-color-danger) inset;
        }
        ::v-deep(.el-form-item__error) {
            margin-left: 0;
        }

        ::v-deep(.el-select .el-input) {
            border-radius: 4px;
        }
        ::v-deep(.el-select .el-input__wrapper) {
            background-color: #4d5466;
            box-shadow: none;
        }
        ::v-deep(.el-input .el-input__wrapper.is-focus) {
            box-shadow: 0 0 0 1px #6188fd inset !important;
        }
        ::v-deep(.el-select .el-input__inner) {
            text-align: center;
            font-weight: bold;
            font-size: 16px;
        }
    }
</style>
