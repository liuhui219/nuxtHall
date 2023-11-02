<!-- @format -->

<!--
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-11-02 09:53:16
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-11-02 09:55:50
 * @FilePath: \hall\components\mobile\drawer\setting.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEsetting
-->
<!-- @format -->

<template>
  <LazyMobileModelDrawer :title="'setting'" :drawer="drawerSetting">
    <template #header> </template>
  </LazyMobileModelDrawer>
</template>

<script setup lang="ts">
  const drawerSetting = ref(false);
  const route = useRoute();
  watchEffect(() => {
    drawerSetting.value = route.hash.includes("setting-drawer");
  });
</script>

<style></style>
