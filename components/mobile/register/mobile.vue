<!-- @format -->

<template>
  <div class="mobile-register">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="0" class="demo-ruleForm">
      <div class="mobile-register-cont">
        <div class="mobile-register-label">Telefone</div>
        <el-form-item label="" prop="pass">
          <el-input size="large" v-model="ruleForm.input1" placeholder="Please input">
            <template #prepend>+55</template>
          </el-input>
        </el-form-item>
      </div>

      <div class="mobile-register-cont">
        <div class="mobile-register-label">Captcha</div>
        <el-form-item label="" prop="pass">
          <el-row :gutter="6" class="w-full">
            <el-col :span="18">
              <el-input size="large" v-model="ruleForm.name" clearable placeholder="Insira o código de verificação" />
            </el-col>
            <el-col :span="6">
              <el-button v-btn class="w-full CaptchaBtn" size="large">Enviar</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </div>

      <div class="mobile-register-cont">
        <div class="mobile-register-label">Senha</div>
        <el-form-item label="" prop="pass">
          <el-input size="large" v-model="ruleForm.pass" type="password" placeholder="Por favor, insira sua senha" />
        </el-form-item>
      </div>

      <div class="mobile-register-cont">
        <div class="mobile-register-label">Confirmar</div>
        <el-form-item label="" prop="pass">
          <el-input size="large" v-model="ruleForm.pass" type="password" placeholder="Confirmar senha" />
        </el-form-item>
      </div>
      <el-button v-btn size="large" class="submit">Register</el-button>
    </el-form>
  </div>
</template>

<script setup>
  const {locale, t} = useI18n();
  const ruleForm = reactive({
    account: "",
    password: "",
    oid: "697996",
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
          message: t("L1006"),
          trigger: ["blur", "change"],
        },
      ],
      oid: [
        {
          required: true,
          message: t("L1021"),
          trigger: ["blur", "change"],
        },
      ],
    };

    return rule;
  });
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
