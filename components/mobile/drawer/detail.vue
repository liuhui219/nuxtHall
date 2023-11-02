<!-- @format -->

/* * @Author: liuhui * @Date: 2023-11-02 11:23:54 * @Last Modified by: liuhui * @Last Modified time: 2023-11-02 11:23:54
*/
<!-- @format -->

<template>
  <LazyMobileModelDrawer :title="'detail'" :drawer="drawerDetail">
    <template #header>
      <h1>title</h1>
    </template>
  </LazyMobileModelDrawer>
</template>

<script setup lang="ts">
  const drawerDetail = ref(false);
  const route = useRoute();
  watchEffect(() => {
    drawerDetail.value = route.hash.includes("detail-drawer");
  });
</script>

<style></style>
