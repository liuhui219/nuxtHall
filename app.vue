<!-- @format -->

<template>
  <baseLoading v-if="pageLoading"></baseLoading>

  <client-only>
    <NuxtLayout><desktopHome v-if="isDesktop" /><mobileHome v-if="isMobile" /> </NuxtLayout
  ></client-only>
</template>

<script setup lang="ts">
  import * as ElementPlusIconsVue from "@element-plus/icons-vue";
  const {isMobile, isDesktop} = useDevice();
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
    pageLoading.value = false;
    useHead({
      title: "afun Apostas Esportivas | Plataforma de Cassino online",
    });
  });

  nuxtApp.hook("page:finish", (vueApp) => {
    console.log("page:finish");
    if (useNuxtApp().$device.isMobile) {
      document.addEventListener("gesturestart", function (event) {
        event.preventDefault();
      });
    }

    // pageLoading.value = false;
    // useHead({
    //   title: "afun Apostas Esportivas | Plataforma de Cassino online",
    // });
  });
</script>

<style lang="scss" scoped></style>
