<!-- @format -->

<template>
  <LazyMobileModelDrawer :title="'Charge'" :direction="'btt'" :drawer="drawerDetail" :header="false" :hash="'charge'">
    <template #body>
      <div class="mobile-charge">
        <div @click="closeFn" class="charge-close p-[15px] absolute right-0 top-0 z-[1] text-[14px]">
          <el-icon><component is="CloseBold"></component></el-icon>
        </div>
        <div class="flex justify-center items-center">
          <base-img class="h-[40px] w-[104px] logo" name="logo-h" type="png" path="images/logo" />
        </div>
      </div>
    </template>
  </LazyMobileModelDrawer>
</template>

<script setup lang="ts">
  const drawerDetail = ref(false);
  const route = useRoute();
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
    .charge-close .el-icon {
      font-size: 18px;
      color: var(--el-border-color-darker);
    }
  }
</style>
