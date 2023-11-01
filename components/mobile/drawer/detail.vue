<!-- @format -->

<!--
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-11-01 17:47:25
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-11-01 18:42:47
 * @FilePath: \hall\components\mobile\drawer\detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- @format -->

<template>
  <LazyMobileModelDrawer :title="'home1'" :drawer="drawerDetail">
    <template #header>
      <h1>title</h1>
    </template>
  </LazyMobileModelDrawer>
</template>

<script setup lang="ts">
  console.log(121);

  const drawerDetail = ref(false);
  const route = useRoute();
  watchEffect(() => {
    drawerDetail.value = route.hash.includes("detail-drawer");
  });
</script>

<style></style>
