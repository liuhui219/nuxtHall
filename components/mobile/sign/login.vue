<!-- @format -->

<template>
  <el-divider
    ><span class="font-black">{{ t("L1001") }}</span>
  </el-divider>
  <el-form ref="formRef" :model="ruleForm" :rules="rules" inline-message key="formRef">
    <el-form-item prop="phoneNumber">
      <el-input
        size="large"
        autoComplete="off"
        @input="inputFn"
        type="tel"
        maxlength="11"
        v-model="ruleForm.phoneNumber"
        :placeholder="$t('L1015')"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        size="large"
        :type="showPassword ? 'text' : 'password'"
        v-model="ruleForm.password"
        :placeholder="$t('L1026')"
        ><template #suffix>
          <span class="input_icon" @click="switchPassword">
            <BaseIcon v-if="showPassword" name="view-show" style="font-size: 20px" />
            <BaseIcon v-else name="view_closed" style="font-size: 20px" />
          </span>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        v-btn
        color="#626aef"
        :loading="loding"
        @click="submitForm(formRef)"
        class="w-full h-[50px] submit font-black"
        size="large"
        ><span class="font-black">{{ t("L1001") }}</span></el-button
      >
    </el-form-item>
  </el-form>

  <div>
    <div class="text-[14px] mb-[20px] font-black" @click="openPopup('reset')"><a>Esqueceu sua senha?</a></div>
    <div class="text-[14px] font-black" style="color: #4c546c">
      <div>
        Não tem uma conta?
        <a style="color: #4875fe" @click="openPopup('register')">Inscrever-se</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {FormInstance} from "element-plus";
  import {useDebounceFn} from "@vueuse/core";
  import md5 from "js-md5";
  import {useStorage} from "@vueuse/core";
  import {cloneDeep} from "lodash";
  import store from "store";
  const {locale, t} = useI18n();
  const loginDialog = useLoginDialog();
  const formRef = ref<FormInstance>();
  const isLogin = useIsLogin();
  const route = useRoute();
  const loding = ref(false);
  const drawerDetail = ref(false);
  const ruleForm = reactive({
    phoneNumber: "",
    password: "",
    oid: "697996",
    rememberCheck: false,
  });
  const rules = computed(() => {
    const rule = {
      phoneNumber: [
        {
          required: true,
          message: t("L1009"),
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
  const closeFn = () => {
    closePopup("login");
  };

  const showPassword = ref(false);

  // 点击切换密码显示状态
  const switchPassword = () => {
    showPassword.value = !showPassword.value;
  };

  const inputFn = (val) => {
    let reg = /[^0-9]/g;
    let value = val;

    value = value.replace(reg, "");

    ruleForm.phoneNumber = value;
  };

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;

    await formEl.validate((valid, fields) => {
      if (valid) {
        loding.value = true;
        submitFn();
        console.log("submit!");
      } else {
        console.log("error submit!", fields);
      }
    });
  };

  const submitFn = useDebounceFn(() => {
    const ruleFormClone = cloneDeep(ruleForm);
    ruleFormClone.password = md5(ruleFormClone.password);
    store.set("w_l_s_a", btoa(encodeURIComponent(JSON.stringify(ruleFormClone))));
    isLogin.value = true;
    closePopup("login");
    loding.value = false;
  }, 1000);
  watchEffect(() => {
    drawerDetail.value = getHashValue(route.hash) === "login";
  });
</script>

<style lang="scss" scoped>
  ::v-deep(.el-input__wrapper) {
    background-color: #07080a;
    box-shadow: 0 0 0 1px #07080a inset;
  }

  ::v-deep(.el-input__wrapper.is-focus) {
    box-shadow: 0 0 0 1px #6188fd inset;
  }
  ::v-deep(.el-form-item.is-error .el-input__wrapper) {
    box-shadow: 0 0 0 1px var(--el-color-danger) inset;
  }
  ::v-deep(.el-form-item__error) {
    margin-left: 0;
  }
  .submit {
    background-image: linear-gradient(90deg, #6188fd 0%, #3b6cff 100%), linear-gradient(#53c16c, #53c16c);
  }
  ::v-deep(input:-webkit-autofill) {
    -webkit-box-shadow: 0 0 0 1000px #07080a inset !important;
  }
  ::v-deep(:-webkit-autofill) {
    -webkit-text-fill-color: #ffffff !important;

    transition: background-color 5000s ease-in-out 0s;
  }
</style>
