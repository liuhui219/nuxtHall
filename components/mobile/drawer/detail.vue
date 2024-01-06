<!-- @format -->

<template>
  <LazyMobileModelDrawer :title="'detail'" :drawer="drawerDetail" :hash="'detail-drawer'">
    <template #header>
      <h1>title</h1>
    </template>
  </LazyMobileModelDrawer>
</template>

<script setup lang="ts">
  const drawerDetail = ref(false);
  const route = useRoute();
  watchEffect(() => {
    drawerDetail.value = getHashValue(route.hash) === "detail-drawer";
  });
</script>

<style></style>
