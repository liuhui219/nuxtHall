<!-- @format -->

<template>
    <el-divider>
        <span class="font-black">{{ t("L1002") }} </span></el-divider
    >
    <el-form ref="formRef" :model="ruleForm" :rules="rules" inline-message key="formRef">
        <el-form-item prop="phoneNumber">
            <el-input
                size="large"
                autoComplete="off"
                maxlength="11"
                type="tel"
                @input="inputFn"
                v-model="ruleForm.phoneNumber"
                :placeholder="$t('L1015')"
                ><template #prefix>
                    <div class="prefixText"><span class="font-bold text-[16px]">+55</span></div>
                </template></el-input
            >
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
                    </span> </template
            ></el-input>
        </el-form-item>

        <el-form-item prop="confirm">
            <el-input
                size="large"
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="ruleForm.confirm"
                :placeholder="$t('L1028')"
                ><template #suffix>
                    <span class="input_icon" @click="switchConfirmPassword">
                        <BaseIcon v-if="showConfirmPassword" name="view-show" style="font-size: 20px" />
                        <BaseIcon v-else name="view_closed" style="font-size: 20px" />
                    </span> </template
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button
                v-btn
                color="#626aef"
                :loading="loding"
                @click="submitForm(formRef)"
                class="w-full h-[50px] submit font-black"
                size="large"
                ><span class="font-black">{{ t("L1002") }}</span></el-button
            >
        </el-form-item>
    </el-form>

    <div>
        <div class="text-[14px] font-black" style="color: #4c546c">
            <div>Já tem conta? <a style="color: #4875fe" @click="openPopup('login')">Entrar</a></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {useDebounceFn} from "@vueuse/core";
    import md5 from "js-md5";
    import {HxNetPack, HxCipher} from "~/core/HxNetCipher";
    import {useStorage} from "@vueuse/core";
    import {cloneDeep} from "lodash";
    import store from "store";
    const {locale, t} = useI18n();
    const formRef = ref();
    const ws = useWs();
    const isLogin = useIsLogin();
    const route = useRoute();
    const loding = ref(false);
    const countdown = ref(false);
    const conut = 60;
    const time = ref<any>(conut);
    const drawerDetail = ref(false);
    const ruleForm = reactive({
        phoneNumber: "",
        password: "",
        confirm: "",
    });

    const RegisterAccounts = reactive<CMD_MB_RegisterAccounts>({
        moduleID: 1, // 模块标识(废弃)
        plazaVersion: 0x06070600, // 大厅版本(定值0x06070001)
        deviceType: 3, // 设备类型(参见DeviceType枚举)
        machineID: "521d26d2eac86935f2bab17fc60aa590", // 机器码
        accounts: "", // 用户账号
        logonPass: "", // 登陆密码
        checkCode: "123456", // 手机验证码
        nickName: "none", // 用户昵称
        faceID: 1, // 图像标识
        gender: 0, // 性别
        ipAddr: [13, 238, 37, 4, 51, 108, 0, 108, 249, 0, 18, 7, 0, 0], // 加密后IP地址
        channelName: "ORGANIC-10001", // 推广渠道名称
        spreadBindID: 0, // 剪贴板绑定标识
    });

    const showPassword = ref(false);
    const showConfirmPassword = ref(false);

    // 点击切换密码显示状态
    const switchConfirmPassword = () => {
        showConfirmPassword.value = !showConfirmPassword.value;
    };

    // 点击切换密码显示状态
    const switchPassword = () => {
        showPassword.value = !showPassword.value;
    };

    const validatePhoneNumber = (rule: any, value: string, callback: (arg0?: Error | undefined) => void) => {
        let reg = /^\d{2}9\d{8}$/;
        if (value === "") {
            callback(new Error(t("L1009")));
        } else {
            if (value.length < 11) {
                callback(new Error(t("H0047", {length: "11"})));
            } else if (!reg.test(value)) {
                callback(new Error(t("H0048", {number: "9"})));
            } else {
                callback();
            }
        }
    };

    const validatePassword = (rule: any, value: string, callback: (arg0?: Error | undefined) => void) => {
        let reg = /^[0-9a-zA-Z]{6,8}$/;

        if (value === "") {
            callback(new Error(t("L1006")));
        } else {
            if (reg.test(value)) {
                callback();
            } else {
                callback(new Error(t("H0011", {min: "6", max: "8"})));
            }
        }
    };

    const validateConfirm = (rule: any, value: string, callback: (arg0?: Error | undefined) => void) => {
        if (value === "") {
            callback(new Error(t("L1028")));
        } else {
            if (value !== ruleForm.password) {
                callback(new Error(t("L1030")));
            } else {
                callback();
            }
        }
    };
    const rules = computed(() => {
        const rule = {
            phoneNumber: [
                {
                    required: true,
                    message: t("L1009"),
                    trigger: ["blur", "change"],
                },
                {validator: validatePhoneNumber, trigger: ["blur", "change"]},
            ],

            password: [{validator: validatePassword, trigger: ["blur", "change"]}],
            confirm: [
                {validator: validateConfirm, trigger: ["blur", "change"]},
                {
                    required: true,
                    message: t("L1028"),
                    trigger: ["blur", "change"],
                },
            ],
        };

        return rule;
    });
    const closeFn = () => {
        closePopup("register");
    };

    const inputFn = (val: any) => {
        let reg = /[^0-9]/g;
        let value = val;

        value = value.replace(reg, "");

        ruleForm.phoneNumber = value;
    };

    const intervalFn = (s: any) => {
        let timer: any;
        timer = setInterval(() => {
            if (s === 1) {
                time.value = conut;
                clearInterval(timer);
                countdown.value = false;
                timer = null;
                return;
            }
            s--;
            time.value = new Intl.NumberFormat(undefined, {
                minimumIntegerDigits: 2,
            }).format(s);
        }, 1000);
    };

    const codeFn = (formEl: {validateField: (arg0: string, arg1: (valid: any) => void) => void}) => {
        if (!formEl) return;
        formEl.validateField("phoneNumber", (valid) => {
            if (valid) {
                let nowTime = new Date().getTime();
                let Countdown = Number(nowTime) + time.value * 1000;
                store.set("w_l_s_cd", Countdown);
                countdown.value = true;
                intervalFn(time.value);
            }
        });
    };

    onMounted(() => {
        let Countdown = store.get("w_l_s_cd");
        let nowTime = new Date().getTime();
        if (Countdown && nowTime < Countdown) {
            countdown.value = true;
            let times = Math.ceil((Countdown - nowTime) / 1000);
            time.value = times;
            intervalFn(times);
        }
    });

    const submitForm = async (formEl: {validate: (arg0: (valid: any, fields: any) => void) => any}) => {
        if (!formEl) return;
        await formEl.validate((valid: any, fields: any) => {
            if (valid) {
                loding.value = true;
                submitFn();
            } else {
                console.log("error submit!", fields);
            }
        });
    };

    const submitFn = useDebounceFn(() => {
        const ruleFormClone = cloneDeep(ruleForm);
        RegisterAccounts.accounts = "0055" + ruleFormClone.phoneNumber;
        RegisterAccounts.logonPass = HxCipher.md5(ruleFormClone.password);

        register(RegisterAccounts, "register", function (s: INetService, e: INetEventParam) {
            loding.value = false;
            if (e.scmd === 102) {
                //console.log("注册失败");
            }
            if (e.scmd === 103) {
                //console.log("注册成功");
            }
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
                isLogin.value = true;
                closePopup("register");
            }
            s.off("register");
        });
    }, 1000);
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

    ::v-deep(.CaptchaBtn) {
        background-image: linear-gradient(90deg, #5ed404 0%, #38b20d 100%), linear-gradient(#53c16c, #53c16c);
    }
    ::v-deep(input:-webkit-autofill) {
        -webkit-box-shadow: 0 0 0 1000px #07080a inset !important;
    }
    ::v-deep(:-webkit-autofill) {
        -webkit-text-fill-color: #ffffff !important;

        transition: background-color 5000s ease-in-out 0s;
    }
    .prefixText {
        padding-right: 10px;
        position: relative;
        &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 16px;
            background-color: #40434b;
        }
    }
</style>
: any: string | any[]: (arg0: Error | undefined) => void: any: string: (arg0: Error | undefined) => void: any: string:
(arg0: Error | undefined) => void: any: number | bigint: string | number | NodeJS.Timeout | null | undefined: {
validateField: (arg0: string, arg1: (valid: any) => void) => void; }: any: { validate: (arg0: (valid: any, fields: any)
=> void) => any; }: any: any
