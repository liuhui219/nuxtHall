<!-- @format -->

<template>
  <el-dialog
    v-model="loginDialog"
    modal-class="mobile-el-overlay-dialog"
    :show-close="false"
    title=""
    width="100%"
    destroy-on-close
    center
    align-center
    @close="closeDialog"
  >
    <template #header>
      <div @click="closeLogin" class="login-close p-[15px] absolute right-0 top-0 z-[1] text-[14px]">
        <el-icon><component is="CloseBold"></component></el-icon>
      </div>
    </template>
    <div class="pb-[25px] shrink-0 text-[20px] login-white">{{ $t("L1001") }}</div>
    <el-form ref="formRef" :model="ruleForm" :rules="rules" status-icon inline-message key="formRef">
      <el-form-item prop="account">
        <el-input size="large" clearable v-model="ruleForm.account" :placeholder="t('L1020')"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input size="large" clearable v-model="ruleForm.password" :placeholder="t('L1007')"></el-input>
      </el-form-item>
      <el-form-item prop="rememberCheck">
        <el-checkbox v-model="ruleForm.rememberCheck">{{ $t("L1003") }}</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="w-full h-[50px]" size="large">{{ t("L1001") }}</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
  import {onMounted, onUnmounted} from "vue";
  import {FormInstance} from "element-plus";
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
          message: t("L1020"),
          trigger: ["blur", "change"],
        },
      ],
      password: [
        {
          required: true,
          message: t("L1007"),
          trigger: ["blur", "change"],
        },
      ],
    };

    return rule;
  });

  const closeDialog = () => {
    closePopup("login");
  };

  const closeLogin = () => {
    closePopup("login");
  };

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
  }
</style>
