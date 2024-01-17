<!-- @format -->

<template>
  <LazyMobileModelDrawer :title="'Charge'" :direction="'btt'" :drawer="drawerDetail" :header="false" :hash="'charge'">
    <template #body>
      <div class="mobile-charge">
        <div class="mobile-charge-header">
          <div class="flex justify-start items-center">
            <base-img class="h-[36px] w-[133px] logo" name="logo" type="png" path="images/logo" />
          </div>
          <div @click="closeFn" class="charge-close text-[14px]">
            <el-icon><component is="CloseBold"></component></el-icon>
          </div>
        </div>
        <div class="mobile-charge-content">
          <div class="mobile-charge-main">
            <div class="mobile-charge-input">
              <el-input
                v-model="amount"
                class="w-full"
                size="large"
                clearable
                @input="inputFn"
                placeholder="Por favor, insira o valor do saque"
              >
                <template #prefix>
                  <span class="unit">R$</span>
                </template>
              </el-input>
            </div>
            <div class="mobile-charge-box">
              <div
                class="mobile-charge-check"
                :class="{active: activeIndex === item.money}"
                v-for="(item, index) in list"
                :key="index"
                @click="checkFn(item)"
              >
                <span class="unit">R$ {{ item.money }}</span>
                <span class="Obter">Obter {{ item.Obter }}R$</span>
                <div class="hot" v-if="item.hot"></div>
              </div>
            </div>
          </div>

          <el-button v-btn size="large" class="submit">Comprar</el-button>
          <div class="mobile-charge-info">
            Se perder dinheiro real no jogo, oferecemos reembolso em dinheiro de até 40% no dia seguinte!
          </div>
        </div>
      </div>
    </template>
  </LazyMobileModelDrawer>
</template>

<script setup>
  const drawerDetail = ref(false);
  const route = useRoute();
  const activeIndex = ref("");
  const amount = ref("");
  const list = ref([
    {
      money: "50",
      Obter: "1",
      hot: true,
    },
    {
      money: "100",
      Obter: "3",
      hot: true,
    },
    {
      money: "200",
      Obter: "8",
      hot: true,
    },
    {
      money: "500",
      Obter: "25",
      hot: false,
    },
    {
      money: "80",
      Obter: "0",
      hot: false,
    },
    {
      money: "20",
      Obter: "0",
      hot: false,
    },
    {
      money: "1000",
      Obter: "50",
      hot: false,
    },
    {
      money: "2000",
      Obter: "100",
      hot: false,
    },
    {
      money: "5000",
      Obter: "250",
      hot: false,
    },
    {
      money: "10000",
      Obter: "500",
      hot: false,
    },
  ]);
  const checkFn = (item) => {
    activeIndex.value = item.money;
    amount.value = item.money;
  };

  const inputFn = (val) => {
    let regNumber = /^([0])(\d)+$/;
    let reg = /[^0-9]/g;
    let value = val;

    value = value.replace(reg, "");

    if (regNumber.test(value)) {
      value = value.replace(regNumber, "$2");
    }

    activeIndex.value = value;
    amount.value = value;
  };

  const closeFn = () => {
    closePopup("charge");
  };

  watchEffect(() => {
    drawerDetail.value = getHashValue(route.hash) === "charge";
  });
</script>

<style lang="scss" scoped>
  .mobile-charge {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .mobile-charge-header {
      width: 100%;
      height: 60px;
      padding: 0 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: #25262b;
      box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.5);
      position: relative;
      z-index: 1;
    }

    .mobile-charge-content {
      width: 100%;
      height: calc(100% - 60px);
      padding-bottom: env(safe-area-inset-bottom);
      overflow-x: hidden;
      position: relative;
      background: #25262b;
      padding: 8px;
      box-sizing: border-box;

      .mobile-charge-main {
        width: 100%;
        border-radius: 4px;
        background-color: #36373b;
        padding: 6px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .mobile-charge-input {
          width: 100%;

          .unit {
            color: var(--el-color-primary);
            font-size: 18px;
            font-weight: bolder;
            font-family: Arial-BoldMT;
          }
        }

        .mobile-charge-box {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;

          .mobile-charge-check {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 4px;
            width: 100%;
            height: 65px;
            background-color: #45464a;
            border-radius: 4px;
            font-size: 14px;
            position: relative;
            .unit {
              font-size: 24px;
              font-weight: bolder;
              font-family: Arial-BoldMT;
            }

            .Obter {
              font-size: 14px;
              color: #99a7b4;
            }

            .hot {
              position: absolute;
              top: 0;
              left: 0;
              z-index: 10;
              &::before {
                content: "";
                width: 0;
                height: 0;
                border-top: 45px solid #fc0000;
                border-right: 45px solid transparent;
                border-top-left-radius: 4px;
                position: absolute;
                left: 0;
                top: 0;
                z-index: -1;
              }

              &::after {
                content: "HOT";
                width: 0;
                height: 0;
                font-size: 12px;
                position: absolute;
                left: 0px;
                top: 19px;
                z-index: -1;
                transform: rotate(-45deg);
              }
            }
          }

          .active {
            background-image: var(--background);
            position: relative;
            z-index: 10;
            font-weight: bold;
            .Obter {
              color: #ffffff;
            }
          }
        }
      }

      .submit {
        width: 100%;
        height: 50px;
        background-image: var(--background);
        margin-top: 15px;
      }

      .mobile-charge-info {
        display: flex;
        color: #fc1313;
        font-size: 14px;
        margin-top: 15px;
      }
    }
    .charge-close .el-icon {
      font-size: 22px;
      color: var(--el-color-primary);
    }
  }
</style>
