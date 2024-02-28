<!-- @format -->

<template>
  <LazyMobileModelDrawer :title="'login'" :header="false" :drawer="drawerDetail" :hash="'login'">
    <template #body>
      <div class="mobile-sign">
        <div class="mobile-sign-header">
          <div class="flex justify-start items-center">
            <BaseIcon @click="closeFn" name="left" style="font-size: 26px" class="font-bold mr-[16px]" />
            <base-img class="h-[29px] w-[91px] logo" name="logo" type="png" path="images/logo" />
          </div>
        </div>
        <div class="mobile-sign-content">
          <div class="mobile-sign-content-banner">
            <base-img class="w-full logo rounded-[4px]" name="h5_tu1_bg" type="jpg" path="images/sign" />
          </div>

          <div>
            <template v-for="(item, index) in components">
              <Suspense v-if="getHashValue(route.hash) === item.name">
                <component :is="item.component" />
                <template #fallback>
                  <baseLoading :http="true"></baseLoading>
                </template>
              </Suspense>
            </template>
          </div>

          <div class="text-[0px] absolute bottom-[20px] left-0 w-full bg-color-4 pt-[10px] !shrink-0">
            <!---->
            <div class="text-center w-full px-[20px]">
              <div class="font-[200] text-color-text-0 mb-[2px] text-[13px]">
                Bem-vindo ao
                <b style="color: #4875fe" class="text-color-main-1 font-[900] uppercase text-[14px]">www.rico33.com</b>
              </div>
              <div class="text-[12px] mb-[9px] text-color-text-1">
                Proporcionar a você uma experiência de jogo sem precedentes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </LazyMobileModelDrawer>
</template>

<script setup>
  const route = useRoute();
  const drawerDetail = ref(false);
  const components = shallowRef([]);
  const closeDialog = () => {
    const parmas = route.hash.split("/")[1];
    closePopup(parmas);
  };
  const closeFn = () => {
    const parmas = route.hash.split("/")[1];
    closePopup(parmas);
    if (parmas === "reset") {
      openPopup("login");
    }
  };
  const openDialog = () => {};

  watchEffect(() => {
    drawerDetail.value = ["login", "register", "reset"].includes(getHashValue(route.hash));
  });

  onMounted(() => {
    const modulesFiles = import.meta.glob("~/components/mobile/sign/*.vue");
    const modules = [];
    Object.keys(modulesFiles).forEach((modulePath) => {
      const result = modulePath.match(/.*\/(.+).vue$/);
      const value = modulesFiles[modulePath];
      modules.push({component: defineAsyncComponent(value), name: result[1]});
    });

    components.value = [...modules];
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
      height: calc(100% - 60px);
      padding-bottom: env(safe-area-inset-bottom);
      overflow-x: hidden;
      position: relative;
      padding: 16px;
      box-sizing: border-box;
      .mobile-sign-content-banner {
        width: 100%;
      }
      ::v-deep(.el-divider__text) {
        background-color: #25262b;
        padding: 0 8px;
      }
    }
  }
</style>
