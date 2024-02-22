<!-- @format -->

<template>
  <div class="mobile-root">
    <LazyMobileLayoutHeader />

    <LazyMobileLayoutMenu />
    <main class="mobile-container-main">
      <NuxtPage />
      <NuxtPwaManifest />
      <LazyMobilePagesDraggable :initialX="10" :initialY="180" img="qiandao" />
      <LazyMobilePagesDraggable img="feiji" />
    </main>
    <LazyMobileLayoutFooter />

    <template v-for="(item, index) in components"
      ><component :is="item.component" v-if="getHashValue(route.hash) === item.name"
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

    padding-bottom: calc(60px + env(safe-area-inset-bottom));
    padding-top: calc(60px + var(--app-download-height, 0px));
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
