<!-- @format -->

<template>
    <el-divider
        ><span class="font-black">{{ t("L1001") }}</span>
    </el-divider>
    <el-form ref="formRef" :model="ruleForm" :rules="rules" inline-message key="formRef">
        <el-form-item prop="phoneNumber">
            <el-input
                size="large"
                autoComplete="off"
                @input="inputFn"
                type="tel"
                maxlength="11"
                v-model="ruleForm.phoneNumber"
                :placeholder="$t('L1015')"
            ></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                size="large"
                :type="showPassword ? 'text' : 'password'"
                v-model="ruleForm.password"
                :placeholder="$t('L1026')"
                ><template #suffix>
                    <span class="input_icon" @click="switchPassword">
                        <BaseIcon v-if="showPassword" name="view-show" style="font-size: 20px" />
                        <BaseIcon v-else name="view_closed" style="font-size: 20px" />
                    </span>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button
                v-btn
                color="#626aef"
                :loading="loding"
                @click="submitForm(formRef)"
                class="w-full h-[50px] submit font-black"
                size="large"
                ><span class="font-black">{{ t("L1001") }}</span></el-button
            >
        </el-form-item>
    </el-form>

    <div>
        <div class="text-[14px] mb-[20px] font-black" @click="openPopup('reset')"><a>Esqueceu sua senha?</a></div>
        <div class="text-[14px] font-black" style="color: #4c546c">
            <div>
                Não tem uma conta?
                <a style="color: #4875fe" @click="openPopup('register')">Inscrever-se</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {FormInstance} from "element-plus";
    import {useThrottleFn} from "@vueuse/core";
    import {HxNetPack, HxCipher} from "~/core/HxNetCipher";
    import {v4 as uuidv4} from "uuid";
    import {useStorage} from "@vueuse/core";
    import {cloneDeep} from "lodash";
    import store from "store";
    const {locale, t} = useI18n();
    const loginDialog = useLoginDialog();
    const formRef = ref<FormInstance>();
    const isLogin = useIsLogin();
    const Score = userScore();
    const route = useRoute();
    const loding = ref(false);
    const drawerDetail = ref(false);
    const ruleForm = reactive({
        phoneNumber: "",
        password: "",
        oid: "697996",
    });
    const logonAccounts = reactive<CMD_MB_LogonAccounts>({
        moduleID: 1, // 模块标识(废弃)
        plazaVersion: 0x06070001, // 大厅版本(定值0x06070001)
        deviceType: 3, // 设备类型(参见DeviceType枚举)
        machineID: HxCipher.md5(uuidv4()), // 机器码
        accounts: "", // 用户账号
        password: "", // 登陆密码或者动态密码
        ipAddr: [], // 加密后IP地址
        channelName: "ORGANIC-10001", // 推广渠道名称
        spreadBindID: 1, // 剪贴板绑定标识
    });
    const rules = computed(() => {
        const rule = {
            phoneNumber: [
                {
                    required: true,
                    message: t("L1009"),
                    trigger: ["blur", "change"],
                },
            ],
            password: [
                {
                    required: true,
                    message: t("L1006"),
                    trigger: ["blur", "change"],
                },
            ],
            oid: [
                {
                    required: true,
                    message: t("L1021"),
                    trigger: ["blur", "change"],
                },
            ],
        };

        return rule;
    });
    const closeFn = () => {
        closePopup("login");
    };

    const showPassword = ref(false);

    // 点击切换密码显示状态
    const switchPassword = () => {
        showPassword.value = !showPassword.value;
    };

    const inputFn = (val: any) => {
        let reg = /[^0-9]/g;
        let value = val;

        value = value.replace(reg, "");

        ruleForm.phoneNumber = value;
    };

    const submitForm = async (formEl: FormInstance | undefined) => {
        if (!formEl) return;

        await formEl.validate((valid, fields) => {
            if (valid) {
                loding.value = true;
                submitFn();
                console.log("submit!");
            } else {
                console.log("error submit!", fields);
            }
        });
    };

    const submitFn = useThrottleFn(() => {
        const ruleFormClone = cloneDeep(ruleForm);
        ruleFormClone.password = HxCipher.md5(ruleFormClone.password);
        logonAccounts.accounts = "0055" + ruleFormClone.phoneNumber;
        logonAccounts.password = ruleFormClone.password;

        login(logonAccounts, "login", function (s: INetService, e: INetEventParam) {
            loding.value = false;

            if (e.scmd === 101) {
                ElMessage({
                    message: e?.data?.describeString,
                    offset: 260,
                    type: "enum",
                });
            }
            if (e.scmd === 100) {
                //console.log("登陆成功");
                //store.set("w_l_s_a", btoa(encodeURIComponent(JSON.stringify(e.data))));
                store.set("w_l_s_a", btoa(encodeURIComponent(JSON.stringify(ruleFormClone))));
                store.set("w_l_s_r", JSON.stringify(e.data));

                isLogin.value = true;
                loginCallback({userID: e.data.userID});
                closePopup("login");
            }
            s.off("register");
        });
    }, 1000);
    watchEffect(() => {
        drawerDetail.value = getHashValue(route.hash) === "login";
    });
</script>

<style lang="scss" scoped>
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
    .submit {
        background-image: linear-gradient(90deg, #6188fd 0%, #3b6cff 100%), linear-gradient(#53c16c, #53c16c);
    }
    ::v-deep(input:-webkit-autofill) {
        -webkit-box-shadow: 0 0 0 1000px #07080a inset !important;
    }
    ::v-deep(:-webkit-autofill) {
        -webkit-text-fill-color: #ffffff !important;

        transition: background-color 5000s ease-in-out 0s;
    }
</style>
