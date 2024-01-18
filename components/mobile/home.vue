<!-- @format -->

/* * @Author: liuhui * @Date: 2023-11-02 10:04:14 * @Last Modified by: liuhui * @Last Modified time: 2023-11-02 10:04:14
*/
<!-- @format -->

<template>
  <div class="mobile-root">
    <LazyMobileLayoutHeader />

    <LazyMobileLayoutMenu />
    <main class="mobile-container-main">
      <NuxtPage />
      <NuxtPwaManifest />
    </main>
    <LazyMobileLayoutFooter />

    <template v-for="(item, index) in components"
      ><component :is="item.component" v-if="route.hash.includes(item.name)"
    /></template>
    <baseLoading :http="true" v-if="httpLoading"></baseLoading>
  </div>
</template>

<script setup>
  const components = shallowRef([]);
  const httpLoading = useHttpLoading();
  const route = useRoute();
  onMounted(() => {
    const modulesFiles = import.meta.glob("~/components/mobile/drawer/*.vue");

    const modules = [];
    Object.keys(modulesFiles).forEach((modulePath) => {
      const result = modulePath.match(/.*\/(.+).vue$/);

      const value = modulesFiles[modulePath];
      modules.push({component: defineAsyncComponent(value), name: result[1]});
    });

    components.value = [...modules];
  });
</script>

<style lang="scss" scoped>
  .mobile-root {
    width: 100%;
    height: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .mobile-container-main {
    width: 100%;
    padding-bottom: 65px;
    padding-top: 60px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
