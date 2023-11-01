<!-- @format -->

<!--
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-10-25 09:35:22
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-11-01 15:28:40
 * @FilePath: \hall\app.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
  setUid();

  const pageLoading = usePageLoading();
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component);
  }

  // useStorage("LastUid", uuidv4());
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
    if (isMobile) {
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
