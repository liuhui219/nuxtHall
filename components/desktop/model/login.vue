<!-- @format -->

<template>
  <client-only>
    <el-dialog
      v-model="loginDialog"
      modal-class="pc-el-overlay-dialog"
      :show-close="false"
      title=""
      destroy-on-close
      center
      width="800"
      align-center
      @close="closeLogin"
      @open="openDialog"
    >
      <div class="login-modal-content">
        <base-close-btn class="p-[15px] absolute right-0 top-0 z-[1] text-[22px]" @click="closeLogin"></base-close-btn>
        <div class="modal-content-img w-[360px] h-[600px]">
          <base-img class="w-full banner-image" name="banner_pc" type="jpg" path="images/show" />
        </div>
        <div class="modal-content-form">
          <div class="shrink-0 text-[20px] pt-[67px] pb-[40px] login-white">{{ $t("L1001") }}</div>
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
            <div class="quick-link quick-link-center mb-[20px] text-[12px] text-center">
              <span class="pointer" @click="openPopup('reset')">{{ $t("L1004") }}</span>
            </div>
            <div class="quick-link quick-link-center w-full text-[12px] text-center">
              <div>
                {{ $t("L1007") }}
                <span class="login-main pointer" @click="openPopup('register')">{{ $t("L1002") }}</span>
              </div>
            </div>
          </el-form>
        </div>
      </div>
    </el-dialog>
  </client-only>
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
        width: calc(100% - 360px);
        padding: 0 50px;
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
    .login-main {
      color: var(--el-color-primary);
    }
    .pointer {
      cursor: pointer;
    }
  }
</style>
