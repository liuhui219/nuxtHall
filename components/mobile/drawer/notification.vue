<!-- @format -->

<template>
  <LazyMobileModelDrawer :title="'notification'" :header="false" :drawer="notification" :hash="'notification'">
    <template #body>
      <div class="mobile-sign">
        <div class="mobile-sign-header">
          <div class="flex justify-start items-center">
            <BaseIcon @click="closeFn" name="left" style="font-size: 26px" class="font-bold mr-[16px]" />
            <base-img class="h-[14px] w-[18px] logo" name="h5_youjian_icon" type="png" path="images/menu" />
            <span class="font-black ml-[4px] text-[14px]">E-mail</span>
          </div>
        </div>

        <div class="mobile-sign-content">
          <div class="shrink-0">
            <div class="tabs flex h-[46px] w-full text-[12px] z-[1] relative overflow-x-auto text-[12px]">
              <div
                class="tab-item flex-[1] min-w-[20%] flex items-center justify-center relative z-[2]"
                :class="{active: activeName === item.value}"
                v-for="(item, index) in tabList"
                :key="index"
                @click="tabHandleFn(item)"
              >
                <div class="text flex items-center justify-center">
                  <div class="relative">{{ item.text }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="mobile-sign-message">
            <div
              @click="readFn(item)"
              v-for="(item, index) in notificationList"
              :key="index"
              class="mobile-sign-message-box p-[10px] mb-[10px] rounded-[4px]"
              :class="{active: index === 0}"
            >
              <div class="text-[10px] flex justify-between items-center" style="color: #a5b1d3">
                <div>{{ item.time }}</div>
                <!---->
              </div>
              <div class="text-[13px] font-semibold mt-[5px] mb-[10px]" style="color: #fff">
                {{ item.title }}
              </div>
              <!---->
              <div
                class="text-[12px] whitespace-break-spaces gap-[10px] transition-all duration-300"
                :class="{'max-h-[72px] line-clamp-4': item.read}"
                style="color: #97a8c7"
              >
                <p class="">
                  {{ item.content }}
                </p>
              </div>
              <button class="text-[12px] my-[4px] flex items-center justify-end w-full" style="color: #fff">
                <div><template v-if="item.read">Mostrar Todos</template> <template v-else>Ocultar</template></div>
                <el-icon size="14" class="ml-[4px]"><ArrowDownBold v-if="item.read" /><ArrowUpBold v-else /></el-icon>
              </button>
              <div data-v-2836fdb5-s="" class="h-[0.5px] mt-[10px] shrink-0" style="background: #2a2f39"></div>
              <div class="pt-[10px] flex items-center justify-center text-[12px] shrink-0" style="color: #286aff">
                <div data-v-2836fdb5-s="" class="text-[12px] font-medium">Eliminar</div>
                <BaseIcon name="right" class="animate__animated text-[22px] ml-[10px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </LazyMobileModelDrawer>
</template>

<script setup>
  const notification = useNotification();
  const activeName = ref("1");

  const read = ref(true);
  let tabList = [
    {
      text: "Pessoal",
      value: "1",
    },
  ];

  const notificationList = ref([
    {
      time: "2024-02-27 05:00",
      read: true,
      title: "Seu Cashback está pronto para ser reivindicado!",
      content:
        "Vamos esquecer as deficiências da semana passada e olhar para as vitórias potenciais desta semana. Seu bônus de reembolso está aqui. Como funciona: • Envie sua inscrição entre segunda e quarta-feira a partir do momento deste e-mail • Receba reembolso das perdas da semana anterior • Aguarde o bônus entrar em sua conta",
    },
    {
      time: "2024-02-27 05:00",
      read: true,
      title: "Seu Cashback está pronto para ser reivindicado!",
      content:
        "Vamos esquecer as deficiências da semana passada e olhar para as vitórias potenciais desta semana. Seu bônus de reembolso está aqui. Como funciona: • Envie sua inscrição entre segunda e quarta-feira a partir do momento deste e-mail • Receba reembolso das perdas da semana anterior • Aguarde o bônus entrar em sua conta",
    },
  ]);

  const tabHandleFn = (item) => {
    activeName.value = item.value;
  };

  const readFn = (item) => {
    item.read = !item.read;
  };
  const closeFn = () => {
    notification.value = false;
  };
</script>

<style lang="scss" scoped>
  .mobile-sign {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #17191f;

    .mobile-sign-header {
      width: 100%;
      height: 60px;
      padding: 0 15px;
      display: flex;
      background-color: #25262b;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      // box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.5);
      position: relative;
      z-index: 1;
    }

    .mobile-sign-content {
      width: 100%;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      height: calc(100% - 60px);
      padding-bottom: env(safe-area-inset-bottom);
    }

    .tabs {
      background: #191b21;
      color: #97a8c7;
      gap: 5px;
      .tab-item {
        background-image: linear-gradient(0deg, #1e2028 0%, #1c1e24 36%, #1a1b20 100%),
          linear-gradient(#53c16c, #53c16c);
      }
      .active {
        background: linear-gradient(
          180deg,
          rgba(40, 106, 255, 0) 31.77%,
          rgba(40, 106, 255, 0.2) 80.21%,
          rgba(40, 106, 255, 0.3) 94.78%,
          #286aff 94.79%
        );
        .text {
          font-weight: bold;
          color: #fff;
        }
      }
    }

    .mobile-sign-message {
      width: 100%;
      height: calc(100% - 46px);
      overflow-x: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      .mobile-sign-message-box {
        background-image: linear-gradient(
            180deg,
            rgba(191, 194, 254, 0.96) 0%,
            rgba(110, 114, 152, 0.96) 0%,
            rgba(29, 33, 49, 0.96) 0%,
            rgba(30, 33, 46, 0.97) 75%,
            rgba(30, 33, 42, 0.97) 100%
          ),
          linear-gradient(#313642, #313642);
      }
      .active {
        background: linear-gradient(0deg, #1d2027, #1b2746 84%);
      }
    }
  }
</style>
