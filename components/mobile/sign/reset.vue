<!-- @format -->

<template>
    <el-divider
        ><span class="font-black">{{ t("L1008") }}</span>
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
                ><template #prefix>
                    <div class="prefixText"><span class="font-bold text-[16px]">+55</span></div>
                </template></el-input
            >
        </el-form-item>

        <el-form-item label="" prop="captcha">
            <el-row :gutter="6" class="w-full">
                <el-col :span="18">
                    <el-input size="large" v-model="ruleForm.captcha" :placeholder="$t('L1033')" />
                </el-col>
                <el-col :span="6">
                    <el-button
                        v-btn
                        class="w-full CaptchaBtn"
                        size="large"
                        :disabled="countdown"
                        @click="codeFn(formRef)"
                        ><span class="font-black" v-if="!countdown">{{ $t("L1035") }}</span
                        ><span class="font-black" v-else>{{ time }}S</span></el-button
                    >
                </el-col>
            </el-row>
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
                ><span class="font-black">{{ t("L1035") }}</span></el-button
            >
        </el-form-item>
    </el-form>
</template>

<script setup>
    import {useThrottleFn} from "@vueuse/core";
    import md5 from "js-md5";
    import {useStorage} from "@vueuse/core";
    import {cloneDeep} from "lodash";
    import store from "store";
    const {locale, t} = useI18n();
    const formRef = ref();

    const route = useRoute();
    const loding = ref(false);
    const countdown = ref(false);
    const conut = 60;
    const time = ref(conut);
    const drawerDetail = ref(false);
    const ruleForm = reactive({
        phoneNumber: "",
        captcha: "",
        password: "",
        confirm: "",
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

    const validatePhoneNumber = (rule, value, callback) => {
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

    const validatePassword = (rule, value, callback) => {
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

    const validateConfirm = (rule, value, callback) => {
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
            captcha: [
                {
                    required: true,
                    message: t("L1033"),
                    trigger: ["blur", "change"],
                },
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
        closePopup("reset");
    };

    const inputFn = (val) => {
        let reg = /[^0-9]/g;
        let value = val;

        value = value.replace(reg, "");

        ruleForm.phoneNumber = value;
    };

    const intervalFn = (s) => {
        let timer = null;
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

    const codeFn = (formEl) => {
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

    const submitForm = async (formEl) => {
        if (!formEl) return;
        await formEl.validate((valid, fields) => {
            if (valid) {
                loding.value = true;
                submitFn();
            } else {
                console.log("error submit!", fields);
            }
        });
    };

    const submitFn = useThrottleFn(() => {
        const ruleFormClone = cloneDeep(ruleForm);
        loding.value = false;
        closePopup("register");
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
