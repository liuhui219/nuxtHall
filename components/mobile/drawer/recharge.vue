<!-- @format -->

<template>
  <LazyMobileModelDrawer :title="'recharge'" :header="false" :drawer="drawerDetail" :hash="'recharge'">
    <template #body>
      <div class="mobile-sign">
        <div class="mobile-sign-header">
          <div class="flex justify-start items-center">
            <BaseIcon @click="closeFn" name="left" style="font-size: 26px" class="font-bold mr-[16px]" />
            <base-img class="h-[29px] w-[91px] logo" name="logo" type="png" path="images/logo" />
          </div>
        </div>
        <div class="mobile-sign-content">
          <div class="mobile-home-card">
            <div class="w-1/2">
              <base-img class="w-full h-full rounded-[4px]" name="cunkuan" type="jpg" path="images/home" />
            </div>
            <div class="w-1/2">
              <base-img class="w-full h-full rounded-[4px]" name="jiangli" type="jpg" path="images/home" />
            </div>
          </div>
          <el-divider
            ><span class="font-black">{{ $t("L1036") }}</span>
          </el-divider>
          <div>
            <div class="title">Métodos de depósito</div>
            <div class="border-radius-0 description mb-[10px] shrink-0 overflow-hidden" @click="showFn">
              <div class="h-[46px] flex items-center justify-between pl-[8px] pr-[14px] relative">
                <div class="flex items-center justify-start">
                  <div class="relative mr-[6px]">
                    <base-img class="w-[30px]" name="h5_pix_icon" type="png" path="images/recharge" />
                  </div>
                  <span class="text-[14px] font-bold text-color-text-0 inline-block">PIX</span>
                </div>
                <div class="flex-1 text-right ml-[20px] overflow-hidden">
                  <div class="text-[12px] color-text-1" style="color: #7582a1">
                    <span class="whitespace-pre">5</span>-<span class="whitespace-pre">50.000</span
                    ><span class="ml-[4px]">BRL</span>
                  </div>
                  <p class="text-[10px] text-color-tip-2 break-words line-clamp-1" style="color: #f0c43d">
                    Se seu depósito não chegou na sua conta, por favor
                  </p>
                </div>

                <BaseIcon
                  name="down"
                  v-if="show"
                  style="font-size: 14px; color: rgb(255 255 255 / 30%)"
                  class="font-bold ml-[16px]"
                />
              </div>
            </div>
            <div v-if="show">
              <div class="title mb-[5px]">
                <span class="whitespace-pre">5</span>-<span class="whitespace-pre">50.000</span
                ><span class="ml-[4px]">BRL</span>
              </div>

              <el-input
                v-model="amount"
                class="w-full"
                size="large"
                type="number"
                clearable
                @input="inputFn"
                @blur="blurFn"
                placeholder="Por favor, insira o valor do saque"
              >
              </el-input>

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
              <p class="text-[12px] text-right mt-[10px]" style="color: #97a8c7">
                Recarga sem sucesso? Encontre <span class="font-bold" style="color: #286aff">Bate-papo ao vivo</span>
              </p>

              <button
                class="flex submit items-center min-h-[40px] justify-center w-full rounded-[4px] text-[13px] font-bold text-color-white mt-[50px]"
              >
                Depósito
              </button>
            </div>
          </div>
        </div>
        <LazyMobileLayoutFooter />
      </div>
    </template>
  </LazyMobileModelDrawer>
</template>

<script setup>
  const route = useRoute();
  const router = useRouter();
  const drawerDetail = ref(false);
  const amount = ref("50");
  const show = ref(true);
  const activeIndex = ref("50");
  const httpLoading = useHttpLoading();
  httpLoading.value = false;
  const list = ref([
    {
      money: "30",
      Obter: "0",
    },
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
      hot: false,
    },
    {
      money: "500",
      Obter: "25",
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
  const closeFn = () => {
    closePopup("recharge");
  };

  const showFn = () => {
    show.value = !show.value;
  };

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

  const blurFn = (e) => {
    let value = e.target.value;
    if (value < 5) {
      value = 5;
    } else if (value > 50000) {
      value = 50000;
    }

    activeIndex.value = value;
    amount.value = value;
  };

  onUnmounted(() => {});

  watchEffect(() => {
    drawerDetail.value = getHashValue(route.hash) === "recharge";
  });
</script>

<style lang="scss" scoped>
  .mobile-sign {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #25262b;
    .mobile-sign-header {
      width: 100%;
      height: 60px;
      padding: 0 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      // box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.5);
      position: relative;
      z-index: 1;
    }

    .mobile-sign-content {
      width: 100%;

      height: calc(100% - 120px);
      padding-bottom: env(safe-area-inset-bottom);
      overflow-x: hidden;
      position: relative;
      padding: 16px;
      box-sizing: border-box;
      .mobile-home-card {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 6px;
      }

      .title {
        color: #7582a1;
        font-size: 12px;
        margin-left: 8px;
      }

      .description {
        background-color: #313642;
        border-radius: 4px;
        margin-top: 10px;
      }

      .mobile-charge-box {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
        margin-top: 10px;

        .mobile-charge-check {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0px;
          width: 100%;
          height: 50px;
          background-color: rgb(93 99 116 / 25%);
          border: solid 1px rgb(192 197 213 / 25%);
          border-radius: 4px;
          font-size: 14px;
          position: relative;
          .unit {
            font-size: 18px;
            font-family: FZ;
          }

          .Obter {
            font-size: 12px;
            color: #f88a2d;
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
              border-top: 30px solid #fc0000;
              border-right: 30px solid transparent;
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
              font-size: 8px;
              font-weight: bold;
              position: absolute;
              left: -1px;
              top: 12px;
              z-index: -1;
              transform: rotate(-45deg);
            }
          }
        }

        .active {
          background-image: linear-gradient(0deg, #3c201f 0%, #1f1f25 100%), linear-gradient(#5d6374, #5d6374);
          position: relative;
          z-index: 10;

          border-color: #f88a2d;
        }
      }

      ::v-deep(.el-divider__text) {
        background-color: #25262b;
        padding: 0 8px;
      }
    }
    ::v-deep(.el-input__wrapper) {
      background-color: #07080a;
      box-shadow: 0 0 0 1px #07080a inset;
      font-weight: bold;
      color: #ffffff;
      font-size: 14px;
    }

    ::v-deep(.el-input__wrapper.is-focus) {
      box-shadow: 0 0 0 1px #6188fd inset;
    }
    ::v-deep(.el-form-item.is-error .el-input__wrapper) {
      box-shadow: 0 0 0 1px var(--el-color-danger) inset;
    }
    .submit {
      background-image: linear-gradient(90deg, #f88f36 0%, #f67100 100%), linear-gradient(#53c16c, #53c16c);
      margin-bottom: 30px;
    }
  }
</style>
