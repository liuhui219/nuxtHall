<!-- @format -->

<template>
  <LazyMobileModelDrawer :title="'Share'" :direction="'btt'" :drawer="drawerDetail" :header="false" :hash="'share'">
    <template #body>
      <div class="mobile-share">
        <div class="mobile-share-header">
          <div class="flex justify-start items-center">
            <base-img class="h-[29px] w-[91px] logo" name="logo" type="png" path="images/logo" />
          </div>
          <div @click="closeFn" class="share-close text-[14px]">
            <el-icon><component is="CloseBold"></component></el-icon>
          </div>
        </div>
        <div class="mobile-share-content">
          <template v-for="(item, index) in components">
            <Suspense v-if="activeName === item.name">
              <component :is="item.component" />
              <template #fallback>
                <baseLoading :http="true"></baseLoading>
              </template>
            </Suspense>
          </template>
        </div>
        <div class="mobile-share-foot">
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
    {icon: "share1", title: "H0015", value: 1, code: "social"},
    {icon: "laidianxianshi", title: "H0026", value: 2, code: "mobile"},
  ]);
  const activeName = ref("social");
  const components = shallowRef([]);
  const component = ref();
  onMounted(() => {
    const modulesFiles = import.meta.glob("~/components/mobile/share/*.vue");

    const modules = [];
    Object.keys(modulesFiles).forEach((modulePath) => {
      const result = modulePath.match(/.*\/(.+).vue$/);

      const value = modulesFiles[modulePath];
      modules.push({component: defineAsyncComponent(value), name: result[1]});
    });

    components.value = [...modules];
  });
  const closeFn = () => {
    closePopup("share");
  };
  const changeActive = (item) => {
    activeName.value = item.code;
  };
  watchEffect(() => {
    drawerDetail.value = getHashValue(route.hash) === "share";
  });
</script>

<style lang="scss" scoped>
  .mobile-share {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .mobile-share-header {
      width: 100%;
      height: 60px;
      padding: 0 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: #25262b;
      box-shadow: 0px 2px 16px 5px rgb(0 0 0 / 50%);
      position: relative;
      z-index: 1;
    }
    .mobile-share-foot {
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
    .mobile-share-content {
      width: 100%;
      height: calc(100% - 120px);
      overflow-x: hidden;
      position: relative;
    }
    .share-close .el-icon {
      font-size: 22px;
      color: var(--el-color-primary);
    }
  }
</style>
