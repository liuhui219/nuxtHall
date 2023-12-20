<!-- @format -->

<template>
  <div class="modal-content-form">
    <div class="shrink-0 text-[20px] pt-[67px] pb-[40px] login-white">{{ $t("L1002") }}</div>
    <el-form ref="formRef" :model="ruleForm" :rules="rules" status-icon inline-message key="formRef">
      <el-form-item prop="phoneNumber">
        <el-input size="large" type="tel" clearable v-model="ruleForm.phoneNumber" :placeholder="$t('L1015')">
          <template #prefix>
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
          :placeholder="$t('L1006')"
        ></el-input>
      </el-form-item>
      <el-form-item prop="rememberCheck">
        <el-checkbox v-model="ruleForm.rememberCheck">{{ $t("L1003") }}</el-checkbox>
      </el-form-item>

      <el-form-item>
        <el-button v-btn type="primary" class="w-full h-[50px]" size="large">{{ t("L1002") }}</el-button>
      </el-form-item>

      <div class="quick-link quick-link-center w-full text-[12px] text-center">
        <div>
          {{ $t("L1016") }}
          <span class="login-main pointer" @click="openPopup('login')">{{ $t("L1001") }}</span>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import {FormInstance} from "element-plus";
  const {locale, t} = useI18n();
  const activeName = ref("first");
  const formRef = ref<FormInstance>();
  const route = useRoute();
  const ruleForm = reactive({
    account: "",
    password: "",
    phoneNumber: "",
    rememberCheck: false,
  });
  const rules = computed(() => {
    const rule = {
      account: [
        {
          required: true,
          message: t("L1014"),
          trigger: ["blur", "change"],
        },
      ],
      phoneNumber: [
        {
          required: true,
          message: t("H0010"),
          trigger: ["blur", "change"],
        },
      ],
      password: [
        {
          required: true,
          message: t("H0011", {min: "6", max: "30"}),
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
    formRef.value?.resetFields();
  };
</script>

<style lang="scss">
  .pc-el-overlay-dialog {
    .el-dialog__header {
      display: none;
    }

    .el-dialog__body {
      padding: 0 !important;
      width: 100%;

      .login-modal-content {
        width: 100%;
        height: 600px;
        display: flex;
        flex-direction: row;
        position: relative;
      }
      .modal-content-form {
        display: flex;
        flex-direction: column;
        .el-form {
          width: 100%;

          .el-form-item__content {
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
        }
      }
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
    .login-main {
      color: var(--el-color-primary);
    }
    .pointer {
      cursor: pointer;
    }
  }
</style>
