<!-- @format -->

<template>
    <div class="mobile-register">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="0" class="demo-ruleForm">
            <div class="mobile-register-cont">
                <div class="mobile-register-label">{{ $t("L1012") }}</div>
                <el-form-item label="" prop="email">
                    <el-input size="large" v-model="ruleForm.email" clearable :placeholder="$t('L1014')" />
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
    const {locale, t} = useI18n();
    const loding = ref(false);
    const ruleFormRef = ref();
    const ruleForm = reactive({
        email: "",
        password: "",
        confirm: "",
    });

    const validateEmil = (rule, value, callback) => {
        const emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (value === "") {
            callback(new Error(t("L1014")));
        } else {
            if (!emailRegex.test(value)) {
                callback(new Error(t("L1022")));
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
            email: [
                {validator: validateEmil, trigger: ["blur", "change"]},
                {
                    required: true,
                    message: t("L1014"),
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

        ::v-deep(.el-form) {
            width: 100%;
            gap: 10px;
            display: flex;
            flex-direction: column;
            padding-bottom: 50px;
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
        }
        ::v-deep(.submit) {
            width: 100%;
            height: 50px;
            font-size: 18px;
            background: var(--background);
        }
    }
</style>
