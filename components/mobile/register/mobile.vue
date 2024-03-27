<!-- @format -->

<template>
    <div class="mobile-register">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="0" class="demo-ruleForm">
            <div class="mobile-register-cont">
                <div class="mobile-register-label">{{ $t("L1031") }}</div>
                <el-form-item label="" prop="phoneNumber">
                    <el-input size="large" @input="inputFn" v-model="ruleForm.phoneNumber" :placeholder="$t('L1009')">
                        <template #prepend>+55</template>
                    </el-input>
                </el-form-item>
            </div>

            <div class="mobile-register-cont">
                <div class="mobile-register-label">{{ $t("L1032") }}</div>
                <el-form-item label="" prop="captcha">
                    <el-row :gutter="6" class="w-full">
                        <el-col :span="18">
                            <el-input size="large" v-model="ruleForm.captcha" clearable :placeholder="$t('L1033')" />
                        </el-col>
                        <el-col :span="6">
                            <el-button
                                v-btn
                                class="w-full CaptchaBtn"
                                size="large"
                                :disabled="countdown"
                                @click="codeFn(ruleFormRef)"
                                ><span v-if="!countdown">{{ $t("L1017") }}</span
                                ><span v-else>{{ time }}S</span></el-button
                            >
                        </el-col>
                    </el-row>
                </el-form-item>
            </div>

            <div class="mobile-register-cont">
                <div class="mobile-register-label">{{ $t("L1026") }}</div>
                <el-form-item label="" prop="password">
                    <el-input
                        size="large"
                        v-model="ruleForm.password"
                        clearable
                        show-password
                        type="password"
                        :placeholder="$t('L1006')"
                    />
                </el-form-item>
            </div>

            <div class="mobile-register-cont">
                <div class="mobile-register-label">{{ $t("L1027") }}</div>
                <el-form-item label="" prop="confirm">
                    <el-input
                        size="large"
                        v-model="ruleForm.confirm"
                        clearable
                        show-password
                        type="password"
                        :placeholder="$t('L1028')"
                    />
                </el-form-item>
            </div>
            <el-button v-btn v-loading="loding" size="large" @click="submitForm(ruleFormRef)" class="submit">{{
                $t("L1029")
            }}</el-button>
        </el-form>
    </div>
</template>

<script setup>
    import {useThrottleFn} from "@vueuse/core";
    import {cloneDeep} from "lodash";
    import store from "store";
    const {locale, t} = useI18n();
    const loding = ref(false);
    const countdown = ref(false);
    const conut = 60;
    const time = ref(conut);
    const ruleFormRef = ref();
    const ruleForm = reactive({
        phoneNumber: "",
        captcha: "",
        password: "",
        confirm: "",
    });

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
    .mobile-register {
        width: 100%;
        height: 100%;
        background: #25262b;
        padding: 20px 8px;
        overflow-x: hidden;

        ::v-deep(.el-form) {
            width: 100%;
            padding-bottom: 50px;
            gap: 10px;
            display: flex;
            flex-direction: column;
        }
        .mobile-register-cont {
            background: #45464a;
            width: 100%;
            border-radius: 4px;
            padding: 10px;
            padding-top: 20px;
            display: flex;

            flex-direction: column;
            gap: 20px;
            .mobile-register-label {
                font-size: 14px;
                position: relative;
                padding-left: 20px;
                &::before {
                    content: "";
                    position: absolute;
                    left: 5px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: var(--el-color-primary);
                    border: 1px solid var(--el-text-color-primary);
                }
            }

            ::v-deep(.el-input__wrapper) {
                background-color: #2b2f35;
            }

            ::v-deep(.el-input-group__prepend) {
                background-color: #3b3f44;
                font-weight: bold;
            }
        }
        ::v-deep(.CaptchaBtn) {
            background: var(--background);
        }
        ::v-deep(.submit) {
            width: 100%;
            height: 50px;
            font-size: 18px;
            background: var(--background);
        }
    }
</style>
