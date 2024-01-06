<!-- @format -->

<template>
  <!-- <LazyDesktopPagesGame v-if="$device.isDesktop && show" /> -->
  <div><LazyMobilePagesGame v-if="show" /></div>
</template>

<script setup>
  definePageMeta({
    name: "游戏",
    auth: true,
    scrollToTop: true,
    pageIndex: 10,
  });

  const show = ref(true);
  const gamereload = gameReload();
  const gameReloadSave = ref(gamereload.value);
  watchEffect(() => {
    if (gameReloadSave.value != gamereload.value) {
      gameReloadSave.value = gamereload.value;
      // reloadNuxtApp({path: "/game"});
      show.value = false;

      nextTick(() => {
        show.value = true;
      });
    }
  });
</script>

<style></style>
