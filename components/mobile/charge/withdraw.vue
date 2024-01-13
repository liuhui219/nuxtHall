<!-- @format -->

<template>
  <div class="withdraw">
    <div class="withdraw-title">Bonus De Teste</div>
    <div class="withdraw-money">
      <div class="inline py-[35px] gap-[6px]">
        <span class="unit">R$</span> <span class="money">{{ formattedNum(money) }}</span>
      </div>
      <div class="title text-[14px]">Ainda faltam 0 apostas para poderfazer o saque</div>
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
        <div class="withdraw-view">
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
                <template #prefix>
                  <span class="unit">R$</span>
                </template>
              </el-input></el-form-item
            >
          </div>
          <div class="withdraw-view-list grid grid-cols-2 gap-[10px]">
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
        </div>

        <div class="withdraw-info">
          <el-form-item label="PIX" prop="amount" label-width="60px">
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
          <el-form-item label="NOME" prop="amount" label-width="60px">
            <el-input v-model="ruleForm.amount" size="large" clearable placeholder="Insira seu nome" />
          </el-form-item>
          <el-form-item label="CPF" prop="amount" label-width="60px">
            <el-input v-model="ruleForm.amount" size="large" clearable placeholder="Insira sua conta" />
          </el-form-item>
        </div>
      </el-form>
      <el-button v-btn size="large" class="submit">Saque</el-button>
    </div>
  </div>
</template>

<script setup>
  const {locale, t} = useI18n();
  const list = ref([
    {text: 100, value: "100"},
    {text: 200, value: "200"},
    {text: 300, value: "300"},
    {text: 500, value: "500"},
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
    ruleForm.amount = val;
    activeIndex.value = String(val);
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

      font-family: Arial-BoldMT;
      .unit {
        color: var(--el-color-primary);
        font-size: 32px;
        font-weight: bolder;
      }
      .money {
        font-size: 42px;
        font-weight: bolder;
      }

      .title {
        color: #99a7b4;
      }
    }

    .withdraw-form {
      width: 100%;
      padding: 0 8px;
      margin-top: 20px;
      gap: 10px;
      .withdraw-view {
        background: #36373b;
        width: 100%;
        padding: 8px;
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
            background: #45464a;
            border-radius: 4px;
            font-size: 24px;
            font-weight: bold;
          }
          .active {
            background: var(--background);
          }
        }
        ::v-deep(.el-input__inner) {
          font-weight: bold;
        }
      }

      .withdraw-info {
        background: #36373b;
        width: 100%;
        padding: 8px;
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
        margin-top: 40px;
        height: 50px;
        font-size: 18px;
        background: var(--background);
      }
      padding-bottom: 50px;
    }
    ::v-deep(.el-input__wrapper) {
      background-color: #2b2f35;
    }
  }
</style>
