<!-- @format -->

<template>
  <baseLoading v-if="pageLoading"></baseLoading>
  <client-only
    ><NuxtLayout>
      <div class="page-container">
        <LayoutSlider />
        <div class="page-container-right">
          <LayoutHeader />

          <main class="page-container-main">
            <div class="page-container-main-wrap"><NuxtPage /></div>
          </main>
        </div>
      </div> </NuxtLayout
  ></client-only>
</template>

<script setup lang="ts">
  import * as ElementPlusIconsVue from "@element-plus/icons-vue";

  const nuxtApp = useNuxtApp();
  const pageLoading = usePageLoading();
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component);
  }

  // Server & Client
  // 监听不到此函数，因为在setup里
  nuxtApp.hook("app:created", (vueApp) => {
    console.log("app:created");
  });
  // Client
  // 监听不到此函数，因为在setup里
  nuxtApp.hook("app:beforeMount", (vueApp) => {
    console.log("app:beforeMount");
  });

  // Server & Client
  // 监听不到此函数，因为在setup里
  nuxtApp.hook("vue:setup", () => {
    console.log("vue:setup");
  });

  // Server
  nuxtApp.hook("app:rendered", (renderContext) => {
    console.log("app:rendered");
  });

  // Client
  nuxtApp.hook("app:mounted", (vueApp) => {
    console.log("app:mounted");
  });

  nuxtApp.hook("page:finish", (vueApp) => {
    console.log("page:finish");
    pageLoading.value = false;
    useHead({
      title: "afun Apostas Esportivas | Plataforma de Cassino online",
    });
  });
</script>

<style lang="scss" scoped>
  .page-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .page-container-right {
    // width: calc(100% - var(--main-width));
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;

    .page-container-main {
      width: 100%;
      height: calc(100% - var(--nav-height));
      display: flex;
      justify-content: center;
      overflow-x: hidden;
      .page-container-main-wrap {
        max-width: var(--container-width);
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
