<!-- @format -->

/* * @Author: liuhui * @Date: 2023-11-02 10:04:14 * @Last Modified by: liuhui * @Last Modified time: 2023-11-02 10:04:14
*/
<!-- @format -->

<template>
  <MobileLayoutHeader />

  <MobileLayoutMenu />
  <main class="mobile-container-main">
    <NuxtPage />
  </main>
  <MobileLayoutFooter />
  <LazyMobileModelLogin />
  <LazyMobileModelReset />
  <LazyMobileModelRegister />

  <component v-for="(item, index) in components" :key="index" :is="item" />
</template>

<script setup lang="ts">
  const components = shallowRef<any>([]);
  onMounted(() => {
    const modulesFiles = import.meta.glob("~/components/mobile/drawer/*.vue");

    const modules: Array<any> = [];
    Object.keys(modulesFiles).forEach((modulePath) => {
      const value: any = modulesFiles[modulePath];
      modules.push(defineAsyncComponent(value));
    });

    components.value = [...modules];
  });
</script>

<style lang="scss" scoped>
  .mobile-container-main {
    width: 100%;
    padding-bottom: 65px;
    padding-top: 60px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
