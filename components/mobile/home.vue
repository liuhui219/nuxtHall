<!-- @format -->

<!--
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-10-24 10:59:16
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-11-01 19:03:46
 * @FilePath: \hall\components\mobile\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- @format -->

<template>
  <LazyMobileLayoutHeader />
  <LazyMobileLayoutMenu />
  <main class="mobile-container-main">
    <NuxtPage />
  </main>
  <LazyMobileLayoutFooter />
  <LazyMobileModelLogin />
  <LazyMobileModelReset />
  <LazyMobileModelRegister />
  <component v-for="item in components" :key="item" :is="item" />
</template>

<script setup lang="ts">
  const components = ref<any>([]);
  onMounted(() => {
    const modulesFiles = import.meta.glob("~/components/mobile/drawer/*.vue", {
      eager: true,
    });

    const modules = Object.keys(modulesFiles).reduce((modules: any, modulePath) => {
      const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
      const value: any = modulesFiles[modulePath];
      modules[moduleName] = value.default;
      return modules;
    }, {});

    components.value = Object.values({...modules});
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
