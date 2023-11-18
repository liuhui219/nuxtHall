<!-- @format -->

<template>
  <baseLoading v-if="pageLoading"></baseLoading>

  <NuxtLayout
    ><el-config-provider :locale="locales" size="default"
      ><desktopHome v-if="isDesktop" /><mobileHome v-if="isMobile"
    /></el-config-provider>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import * as ElementPlusIconsVue from "@element-plus/icons-vue";
  import {useOnline} from "@vueuse/core";
  const {isMobile, isDesktop} = useDevice();
  const {locale, messages, t} = useI18n();
  const nuxtApp = useNuxtApp();
  const httpLoading = useHttpLoading();
  const online = useOnline();
  const locales = ref();
  const pageLoading = usePageLoading();

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component);
  }

  watchEffect(() => {
    locales.value = messages["value"][locale.value];
    if (!online.value) {
      ElMessage({
        message: t("H0012"),
        type: "warning",
        showClose: true,
        duration: 5000,
      });
    }
  });

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

  onMounted(() => {
    setUid();
    setLoginStatus();
    window.addEventListener("message", games.handleIframeMsg);
  });

  nuxtApp.hook("page:finish", (vueApp) => {
    console.log("page:finish");
    httpLoading.value = false;
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
