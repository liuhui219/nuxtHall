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
          <template v-for="(item, index) in components">
            <Suspense v-if="activeName === item.name">
              <component :is="item.component" />
              <template #fallback>
                <baseLoading :http="true"></baseLoading>
              </template>
            </Suspense>
          </template>
        </div>
        <div class="mobile-charge-foot">
          <button
            v-for="item in list"
            :key="`navbar-${item.value}`"
            class="no-hover"
            :class="{current: activeName == item.code}"
            @click="changeActive(item)"
          >
            <BaseIcon :name="item.icon" class="animate__animated text-[22px]" />
            <div class="text-[12px]">{{ $t(item.title) }}</div>
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
    const modulesFiles = import.meta.glob("~/components/mobile/charge/*.vue");

    const modules = [];
    Object.keys(modulesFiles).forEach((modulePath) => {
      const result = modulePath.match(/.*\/(.+).vue$/);

      const value = modulesFiles[modulePath];
      modules.push({component: defineAsyncComponent(value), name: result[1]});
    });

    components.value = [...modules];
  });
  const closeFn = () => {
    closePopup("charge");
  };
  const changeActive = (item) => {
    activeName.value = item.code;
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
    }
    .mobile-charge-foot {
      width: 100%;
      height: 60px;
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
        font-size: 22px;
      }
    }
    .mobile-charge-content {
      width: 100%;
      height: calc(100% - 120px);
      overflow-x: hidden;
    }
    .charge-close .el-icon {
      font-size: 22px;
      color: var(--el-color-primary);
    }
  }
</style>
