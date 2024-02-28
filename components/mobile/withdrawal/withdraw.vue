<!-- @format -->

<template>
  <div class="withdraw">
    <div class="px-[16px]">
      <el-divider
        ><span class="font-black">{{ $t("H0038") }}</span>
      </el-divider>
      <div class="withdraw-money py-[20px] gap-[10px]">
        <div class="inline gap-[8px]">
          <span class="unit">R$</span> <span class="money">{{ formattedNum(money) }}</span>
        </div>
        <div class="title text-[12px]">Ainda faltam 0 apostas para poderfazer o saque</div>
      </div>
    </div>

    <div class="withdraw-form">
      <el-form
        ref="ruleFormRef"
        hide-required-asterisk
        :model="ruleForm"
        :rules="rules"
        label-width="0"
        class="demo-ruleForm"
      >
        <div class="withdraw-view px-[16px]">
          <div class="withdraw-view-money">
            <el-form-item label="" prop="amount"
              ><el-input
                v-model="ruleForm.amount"
                class="w-full"
                size="large"
                clearable
                @input="inputFn"
                placeholder="Por favor, insira o valor do saque"
              >
              </el-input
            ></el-form-item>
          </div>
          <div class="withdraw-view-list grid grid-cols-3 gap-[10px]">
            <div
              class="withdraw-view-list-btn"
              :class="{active: item.value === activeIndex}"
              v-for="item in list"
              :key="item.value"
              @click="checkFn(item)"
            >
              R$ {{ item.text }}
            </div>
          </div>
          <p class="text-[10px] text-left mt-[10px]" style="color: #f8bd31">
            Para sacar com Pix, registre seu CPF através do aplicativo do seu banco.
          </p>
        </div>

        <div class="withdraw-info p-[16px]">
          <el-form-item label="" prop="amount" label-width="0px">
            <el-row :gutter="4">
              <el-col :span="8">
                <el-select size="large" v-model="ruleForm.amount" placeholder="Activity zone">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-col>
              <el-col :span="16">
                <el-input size="large" v-model="ruleForm.name" clearable placeholder="Insira sua conta" />
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="" prop="amount" label-width="0px">
            <el-input v-model="ruleForm.amount" size="large" clearable placeholder="Insira seu nome" />
          </el-form-item>
          <el-form-item label="" prop="amount" label-width="0px">
            <el-input v-model="ruleForm.amount" size="large" clearable placeholder="Insira sua conta" />
          </el-form-item>

          <div class="text-[12px] text-left mt-[10px]" style="color: rgb(100 119 163)">
            <p>1. Abra o aplicativo bancário.</p>
            <p>2. Abra a seção Pix e toque em “Registrar chave".</p>
            <p>3. Insira o CPF e registre sua chave.</p>
            <p>4. Saque PIX pronto após confirmação da chave.</p>
            <p class="mt-[20px]">R${{ ruleForm.amount }} depósito em sua conta pessoal</p>
          </div>

          <button
            class="flex submit items-center min-h-[40px] justify-center w-full rounded-[4px] text-[13px] font-bold text-color-white"
          >
            {{ $t("H0038") }}
          </button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
  const {locale, t} = useI18n();
  const list = ref([
    {text: 50, value: "50"},
    {text: 100, value: "100"},
    {text: 200, value: "200"},
    {text: 300, value: "300"},
    {text: 500, value: "500"},
    {text: 1000, value: "1000"},
  ]);

  const rules = computed(() => {
    const rule = {
      amount: [
        {
          required: true,
          message: t("L1020"),
          trigger: ["blur", "change"],
        },
      ],
    };

    return rule;
  });

  const ruleForm = reactive({
    amount: "",
  });

  const activeIndex = ref("");

  const money = ref(1515160);

  const inputFn = (val) => {
    let regNumber = /^([0])(\d)+$/;
    let reg = /[^0-9]/g;
    let value = val;

    value = value.replace(reg, "");

    if (regNumber.test(value)) {
      value = value.replace(regNumber, "$2");
    }
    ruleForm.amount = value;
    activeIndex.value = String(value);
  };

  const checkFn = (parmas) => {
    ruleForm.amount = parmas.value;
    activeIndex.value = parmas.value;
  };

  const formattedNum = (num) => {
    return num.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
</script>

<style lang="scss" scoped>
  .withdraw {
    width: 100%;
    height: 100%;
    background-color: #25262b;
    .withdraw-title {
      width: 100%;
      height: 36px;
      background-color: #36373b;
      font-size: 14px;
      display: flex;
      align-items: center;
      padding-left: 30px;
      position: relative;
      margin-top: 8px;
      &::before {
        content: "";
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--el-color-primary);
        border: 1px solid var(--el-text-color-primary);
      }
    }
    .withdraw-money {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #313642;
      border-radius: 4px;

      font-family: Arial-BoldMT;
      .unit {
        color: #2ff85a;
        font-size: 18px;

        font-family: FZ;
      }
      .money {
        font-size: 32px;

        font-family: FZ;
      }

      .title {
        color: #99a7b4;
      }
    }

    .withdraw-form {
      width: 100%;
      margin-top: 20px;
      gap: 10px;
      .withdraw-view {
        width: 100%;

        gap: 10px;
        border-radius: 4px;
        .unit {
          color: var(--el-color-primary);
          font-size: 18px;
          font-weight: bolder;
          font-family: Arial-BoldMT;
        }
        .withdraw-view-list {
          width: 100%;
          margin-top: 10px;
          .withdraw-view-list-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            background-color: rgb(93 99 116 / 25%);
            border: solid 1px rgb(192 197 213 / 25%);
            border-radius: 4px;
            font-size: 18px;
            font-family: FZ;
          }
          .active {
            background-image: linear-gradient(0deg, #203c1f 0%, #1f1f25 100%), linear-gradient(#5d6374, #5d6374);
            border: solid 1px #2df832;
          }
        }
        ::v-deep(.el-input__inner) {
          font-weight: bold;
        }
      }

      .withdraw-info {
        background: #36373b;
        width: 100%;

        border-radius: 4px;
        margin-top: 10px;
        ::v-deep(.el-form-item) {
          align-items: center;
        }
        ::v-deep(.el-form-item__label) {
          color: var(--el-color-primary);
          font-weight: bold;
        }
      }
      ::v-deep(.submit) {
        width: 100%;
        margin-top: 10px;
        font-weight: bold;
        background-image: linear-gradient(90deg, #62cc7a 0%, #34aa4e 100%), linear-gradient(#53c16c, #53c16c);
      }
    }
    ::v-deep(.el-input__wrapper) {
      background-color: #2b2f35;
    }

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
  }
</style>
