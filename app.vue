<!-- @format -->

<template>
  <baseLoading v-if="pageLoading"></baseLoading>

  <NuxtLayout
    ><desktopHome v-if="isDesktop" /><mobileHome v-if="isMobile" />
    <baseLoading :http="true" v-if="httpLoading"></baseLoading
  ></NuxtLayout>
</template>

<script setup lang="ts">
  import * as ElementPlusIconsVue from "@element-plus/icons-vue";
  const {isMobile, isDesktop} = useDevice();
  const nuxtApp = useNuxtApp();
  setUid();

  const pageLoading = usePageLoading();
  const httpLoading = useHttpLoading();
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

      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N3Z58T3V');`,
        },
      ],
    });
  });

  onMounted(() => {
    window.addEventListener("message", games.handleIframeMsg);
  });

  nuxtApp.hook("page:finish", (vueApp) => {
    console.log("page:finish");
    pageLoading.value = false;
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
