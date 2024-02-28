<!-- @format -->

<template>
  <LazyMobileModelDrawer :title="'Withdrawal'" :drawer="drawerDetail" :header="false" :hash="'withdrawal'">
    <template #body>
      <div class="mobile-withdrawal">
        <div class="mobile-sign-header">
          <div class="flex justify-start items-center">
            <BaseIcon @click="closeFn" name="left" style="font-size: 26px" class="font-bold mr-[16px]" />
            <base-img class="h-[29px] w-[91px] logo" name="logo" type="png" path="images/logo" />
          </div>
        </div>
        <div class="mobile-withdrawal-content">
          <template v-for="(item, index) in components">
            <Suspense v-if="activeName === item.name">
              <component :is="item.component" />
              <template #fallback>
                <baseLoading :http="true"></baseLoading>
              </template>
            </Suspense>
          </template>
        </div>
        <div class="mobile-withdrawal-foot">
          <button
            v-for="item in list"
            :key="`navbar-${item.value}`"
            class="no-hover"
            :class="{current: activeName == item.code}"
            @click="changeActive(item)"
          >
            <BaseIcon
              :name="item.icon"
              :class="{animate__jello: activeName == item.code}"
              class="animate__animated text-[22px]"
            />
            <div class="text-[11px]">{{ $t(item.title) }}</div>
          </button>
        </div>
      </div>
    </template>
  </LazyMobileModelDrawer>
</template>

<script setup>
  const drawerDetail = ref(false);
  const route = useRoute();
  const list = ref([
    {icon: "tixian", title: "H0022", value: 1, code: "withdraw"},
    {icon: "tequan", title: "H0023", value: 2, code: "privilege"},
    {icon: "jilu", title: "H0024", value: 3, code: "records"},
    {icon: "info1", title: "H0025", value: 4, code: "rules"},
  ]);
  const activeName = ref("withdraw");
  const components = shallowRef([]);
  const component = ref();
  onMounted(() => {
    const modulesFiles = import.meta.glob("~/components/mobile/withdrawal/*.vue");

    const modules = [];
    Object.keys(modulesFiles).forEach((modulePath) => {
      const result = modulePath.match(/.*\/(.+).vue$/);

      const value = modulesFiles[modulePath];
      modules.push({component: defineAsyncComponent(value), name: result[1]});
    });

    components.value = [...modules];
  });
  const closeFn = () => {
    closePopup("withdrawal");
  };
  const changeActive = (item) => {
    activeName.value = item.code;
  };
  watchEffect(() => {
    drawerDetail.value = getHashValue(route.hash) === "withdrawal";
  });
</script>

<style lang="scss" scoped>
  .mobile-withdrawal {
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
    .mobile-withdrawal-foot {
      width: 100%;
      height: calc(60px + env(safe-area-inset-bottom));
      padding-bottom: env(safe-area-inset-bottom);
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      button {
        position: relative;
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        color: #e2e8e3;
        cursor: pointer;
        &.current {
          color: var(--el-color-primary);
        }
      }
      .icon {
        margin-bottom: 4px;
        font-size: 24px;
      }
      .animate__animated {
        animation-duration: 1s;
        animation-duration: 1s;
        animation-fill-mode: both;
      }
      .animate__jello {
        animation-name: jello;
        transform-origin: center;
      }
    }
    .mobile-withdrawal-content {
      width: 100%;
      height: calc(100% - 120px);
      overflow-x: hidden;
      position: relative;
    }
    .withdrawal-close .el-icon {
      font-size: 22px;
      color: var(--el-color-primary);
    }
    ::v-deep(.el-divider__text) {
      background-color: #25262b;
      padding: 0 8px;
    }
  }
</style>
