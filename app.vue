<!-- @format -->

<template>
  <transition name="el-fade-in-linear"><baseLoading v-if="pageLoading"></baseLoading></transition>

  <NuxtLayout
    ><el-config-provider :locale="locales" size="default">
      <!-- <desktopHome v-if="isDesktop" /> -->
      <mobileHome />
    </el-config-provider>
  </NuxtLayout>
</template>

<script setup>
  import * as ElementPlusIconsVue from "@element-plus/icons-vue";
  import {useOnline} from "@vueuse/core";
  import store from "store";
  import {getAnalytics, logEvent} from "firebase/analytics";
  const {isMobile, isDesktop} = useDevice();
  const {locale, messages, t, setLocale} = useI18n();
  const nuxtApp = useNuxtApp();
  nuxtApp.globalName = "hall";
  const {$isMobile} = nuxtApp;
  const httpLoading = useHttpLoading();
  const online = useOnline();
  const locales = ref();
  const config = useRuntimeConfig();
  const pageLoading = usePageLoading();

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component);
  }

  watchEffect(() => {
    let lang = store.get("lang");
    if (lang === "undefined") {
      store.set("lang", config.public.locale);
      lang = config.public.locale;
    }
    setLocale(lang);
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
    const initfirebase = initialize();
    getAnalytics(initfirebase.app);
    console.log("app:mounted");
    const gameurl = gameURL();
    gameurl.value = window.BASE_CONFIG.GAME_URL;
    if (isMobile) {
      document.addEventListener("gesturestart", function (event) {
        event.preventDefault();
      });
    }
    useHead({
      title: "afun Apostas Esportivas | Plataforma de Cassino online",
    });
  });

  onMounted(() => {
    console.log("onMounted");
    pageLoading.value = false;
    setUid();

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-CPF0DDW6YE");
    window.addEventListener("message", games.handleIframeMsg);
    window.addEventListener("beforeinstallprompt", (event) => {
      console.log("====================================");
      console.log(123);
      console.log("====================================");
      event.preventDefault();
      window.deferredPrompt = event;
    });

    window.addEventListener("appinstalled", function (event) {
      window.deferredPrompt = null;
    });
  });
  nuxtApp.hook("page:finish", (vueApp) => {
    console.log("page:finish");
    httpLoading.value = false;
  });
</script>

<style lang="scss" scoped></style>
