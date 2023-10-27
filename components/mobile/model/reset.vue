<!-- @format -->

<!--
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-10-27 15:20:02
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-10-27 15:33:28
 * @FilePath: \hall\components\mobile\model\reset.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- @format -->

<template>
  <el-dialog
    v-model="resetDialog"
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
    <div class="pb-[25px] shrink-0 text-[20px] login-white">{{ $t("L1013") }}</div>
    <el-form ref="formRef" :model="ruleForm" :rules="rules" status-icon inline-message key="formRef">
      <el-form-item prop="account">
        <el-input size="large" clearable v-model="ruleForm.account" :placeholder="t('L1036')"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          size="large"
          type="password"
          show-password
          clearable
          v-model="ruleForm.password"
          :placeholder="t('L1038')"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="w-full h-[50px]" size="large">{{ t("L1011") }}</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
  import {onMounted, onUnmounted} from "vue";
  import {FormInstance} from "element-plus";
  const {locale, t} = useI18n();
  const resetDialog = useResetDialog();
  const formRef = ref<FormInstance>();
  const route = useRoute();
  const ruleForm = reactive({
    account: "",
    password: "",
  });
  const rules = computed(() => {
    const rule = {
      account: [
        {
          required: true,
          message: t("L1036"),
          trigger: ["blur", "change"],
        },
      ],
      password: [
        {
          required: true,
          message: t("L1038"),
          trigger: ["blur", "change"],
        },
      ],
    };

    return rule;
  });

  const closeDialog = () => {
    closePopup("reset");
  };

  const closeLogin = () => {
    closePopup("reset");
    openPopup("login");
  };

  watchEffect(() => {
    resetDialog.value = route.hash.includes("reset");
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

    .quick-link {
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 12px;
      color: var(--el-text-color-regular);
    }
  }
</style>
