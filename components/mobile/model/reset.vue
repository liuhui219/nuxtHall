<!-- @format -->

<!--
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-10-27 15:20:02
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-11-01 15:14:37
 * @FilePath: \hall\components\mobile\model\reset.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- @format -->

<template>
  <client-only
    ><el-dialog
      v-model="resetDialog"
      modal-class="mobile-el-overlay-reset-dialog"
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
      <div class="pb-[25px] shrink-0 text-[20px] login-white">{{ $t("L1008") }}</div>
      <el-form ref="formRef" :model="ruleForm" :rules="rules" status-icon inline-message key="formRef">
        <el-form-item prop="account">
          <el-input
            size="large"
            type="tel"
            clearable
            v-model.number="ruleForm.account"
            autocomplete="off"
            :placeholder="$t('L1015')"
            ><template #prefix>
              <span>+55</span>
            </template></el-input
          >
        </el-form-item>
        <el-form-item prop="password">
          <el-input size="large" clearable v-model="ruleForm.password" :placeholder="$t('L1010')"
            ><template #append>
              <el-button class="min-w-[67px]" :disabled="countdown" @click="codeFn(formRef)"
                ><span v-if="!countdown">{{ $t("L1017") }}</span
                ><span v-else>{{ time }}S</span></el-button
              >
            </template></el-input
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)" class="w-full h-[50px]" size="large">{{
            t("L1011")
          }}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog></client-only
  >
</template>

<script setup lang="ts">
  import {onMounted, onUnmounted} from "vue";
  import {FormInstance} from "element-plus";

  interface RuleForm {
    account: number | "";
    password: string;
  }
  const {locale, t} = useI18n();
  const resetDialog = useResetDialog();
  const formRef = ref<FormInstance>();
  const countdown = storages("w_l_s_c", false);
  const route = useRoute();

  const time = ref<number>(20);
  const ruleForm = reactive<RuleForm>({
    account: "",
    password: "",
  });
  const rules = computed(() => {
    const rule = {
      account: [
        {
          required: true,
          message: t("L1015"),
          trigger: ["blur", "change"],
        },
        {type: "number", message: "Phone Number must be a number"},
      ],
      password: [
        {
          required: true,
          message: t("L1010"),
          trigger: ["blur", "change"],
        },
      ],
    };

    return rule;
  });

  const closeDialog = () => {
    closePopup("reset");
    formRef.value?.resetFields();
  };

  const closeLogin = () => {
    closePopup("reset");
    openPopup("login");
    formRef.value?.resetFields();
  };

  onMounted(() => {
    if (countdown.value) {
      intervalFn();
    }
  });

  const intervalFn = () => {
    let timer: any = null;
    timer = setInterval(() => {
      if (time.value === 0) {
        clearInterval(timer);
        countdown.value = false;
        timer = null;
      }
      time.value--;
    }, 1000);
  };

  const codeFn = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validateField("account", (valid: any) => {
      if (valid) {
        time.value = 20;
        countdown.value = true;
        intervalFn();
      }
    });
  };

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;

    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log("submit!");
      } else {
        console.log("error submit!", fields);
      }
    });
  };

  watchEffect(() => {
    resetDialog.value = route.hash.includes("reset");
  });
</script>

<style lang="scss">
  .mobile-el-overlay-reset-dialog {
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
        .el-input-group__append {
          border-radius: 8px;
          font-weight: bold;
        }
        .el-input__prefix {
          color: var(--el-text-color-primary);
          font-weight: 500;
        }

        .el-input-group__append {
          border-left: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
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

    .el-input-group--append > .el-input__wrapper {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
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
