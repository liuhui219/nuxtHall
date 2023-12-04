<!-- @format -->

<template>
  <client-only
    ><Lazy-el-dialog
      v-model="loginDialog"
      modal-class="mobile-el-overlay-dialog"
      :show-close="false"
      title=""
      width="100%"
      destroy-on-close
      center
      align-center
      @close="closeLogin"
      @open="openDialog"
    >
      <template #header>
        <div @click="closeLogin" class="login-close p-[15px] absolute right-0 top-0 z-[1] text-[14px]">
          <el-icon><component is="CloseBold"></component></el-icon>
        </div>
      </template>
      <div class="pb-[25px] shrink-0 text-[20px] login-white">{{ $t("L1001") }}</div>
      <el-form ref="formRef" :model="ruleForm" :rules="rules" status-icon inline-message key="formRef">
        <el-form-item prop="account">
          <el-input
            size="large"
            type="tel"
            autoComplete="off"
            clearable
            v-model="ruleForm.account"
            :placeholder="$t('L1015')"
            ><template #prefix>
              <span>+55</span>
            </template></el-input
          >
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            size="large"
            type="password"
            show-password
            clearable
            v-model="ruleForm.password"
            :placeholder="$t('L1006')"
          ></el-input>
        </el-form-item>
        <el-form-item prop="rememberCheck">
          <el-checkbox v-model="ruleForm.rememberCheck">{{ $t("L1003") }}</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm(formRef)" type="primary" class="w-full h-[50px]" size="large">{{
            t("L1001")
          }}</el-button>
        </el-form-item>
        <div class="quick-link quick-link-center mb-[20px]">
          <span @click="openPopup('reset')">{{ $t("L1004") }}</span>
        </div>
        <div class="quick-link quick-link-center w-full">
          <div>
            {{ $t("L1007") }}
            <span class="login-main pointer" @click="openPopup('register')">{{ $t("L1002") }}</span>
          </div>
        </div>
      </el-form>
    </Lazy-el-dialog></client-only
  >
</template>

<script setup lang="ts">
  import {FormInstance} from "element-plus";
  import {useDebounceFn} from "@vueuse/core";
  const {locale, t} = useI18n();
  const loginDialog = useLoginDialog();
  const formRef = ref<FormInstance>();
  const route = useRoute();
  const ruleForm = reactive({
    account: "",
    password: "",
    rememberCheck: false,
  });
  const rules = computed(() => {
    const rule = {
      account: [
        {
          required: true,
          message: t("L1015"),
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
    };

    return rule;
  });

  const closeLogin = () => {
    closePopup("login");
    formRef.value?.resetFields();
  };

  const openDialog = () => {};

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;

    await formEl.validate((valid, fields) => {
      if (valid) {
        submitFn();
        console.log("submit!");
      } else {
        console.log("error submit!", fields);
      }
    });
  };

  const submitFn = useDebounceFn(() => {}, 1000);

  watchEffect(() => {
    loginDialog.value = route.hash.includes("login");
  });
</script>

<style lang="scss">
  .mobile-el-overlay-dialog {
    backdrop-filter: blur(12px);
    .el-dialog {
      width: calc(100% - 40px);
      border-radius: 10px;
      .login-close .el-icon {
        font-size: 18px;
        color: var(--el-border-color-darker);
      }
    }
    .el-form .el-form-item__content {
      .el-input {
        --el-input-height: 50px;
        .el-input__wrapper {
          border-radius: 8px;
          font-weight: bold;
        }
        .el-input__prefix {
          color: var(--el-text-color-primary);
          font-weight: 500;
        }
      }
      .el-form-item__error {
        margin-left: 0;
        margin-top: 6px;
      }
      .el-button {
        border-radius: 8px;
        --el-button-size: 50px;
      }
    }

    .quick-link {
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 12px;
      color: var(--el-text-color-regular);
    }

    .login-main {
      color: var(--el-color-primary);
    }
  }
</style>
