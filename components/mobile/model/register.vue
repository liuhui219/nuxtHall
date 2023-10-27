<!-- @format -->

<template>
  <el-dialog
    v-model="registerDialog"
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

    <el-form ref="formRef" :model="ruleForm" :rules="rules" status-icon inline-message key="formRef">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane :label="$t('U0026')" name="first"
          ><el-form-item prop="account">
            <el-input size="large" clearable v-model="ruleForm.account" :placeholder="t('L1006')"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              size="large"
              type="password"
              show-password
              clearable
              v-model="ruleForm.password"
              :placeholder="t('L1007')"
            ></el-input>
          </el-form-item>
          <el-form-item prop="rememberCheck">
            <el-checkbox v-model="ruleForm.rememberCheck">{{ $t("L1003") }}</el-checkbox>
          </el-form-item></el-tab-pane
        >
        <el-tab-pane :label="$t('U0027')" name="second"
          ><el-form-item prop="account">
            <el-input size="large" clearable v-model="ruleForm.account" :placeholder="t('L1008')">
              <template #prepend>
                <span>+55</span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              size="large"
              type="password"
              show-password
              clearable
              v-model="ruleForm.password"
              :placeholder="t('L1007')"
            ></el-input>
          </el-form-item>
          <el-form-item prop="rememberCheck">
            <el-checkbox v-model="ruleForm.rememberCheck">{{ $t("L1003") }}</el-checkbox>
          </el-form-item></el-tab-pane
        >
      </el-tabs>

      <el-form-item>
        <el-button type="primary" class="w-full h-[50px]" size="large">{{ t("L1002") }}</el-button>
      </el-form-item>

      <div class="quick-link quick-link-center w-full">
        <div>
          {{ $t("L1016") }}
          <span class="login-main pointer" @click="openPopup('login')">{{ $t("L1001") }}</span>
        </div>
      </div>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
  import {onMounted, onUnmounted} from "vue";
  import {FormInstance} from "element-plus";
  const {locale, t} = useI18n();
  const registerDialog = useRegisterDialog();
  const activeName = ref("first");
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
    closePopup("register");
  };

  const closeLogin = () => {
    closePopup("register");
  };

  watchEffect(() => {
    registerDialog.value = route.hash.includes("register");
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
        .el-input__wrapper,
        .el-input-group__prepend {
          border-radius: 8px;
        }
        .el-input-group__prepend {
          border-right: 0;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
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
    .el-input-group--prepend > .el-input__wrapper {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }
    .el-dialog__body,
    .el-form,
    .el-tabs,
    .el-tabs__header,
    .el-tabs__nav-wrap,
    .el-tabs__nav-scroll,
    .el-tabs__nav {
      width: 100%;
    }

    .el-tabs__header {
      margin-bottom: 30px;
    }

    .el-tabs__nav-scroll {
      width: 100%;
      .el-tabs__nav {
        padding-bottom: 20px;
      }
      .el-tabs__active-bar {
        width: 50% !important;
      }
      .el-tabs__item {
        flex: 1;
        font-size: 16px;
        font-weight: 700;
      }
    }

    .quick-link {
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 12px;
      color: var(--el-text-color-regular);
    }
  }
</style>
