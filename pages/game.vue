<!-- @format -->

<template>
  <LazyDesktopPagesGame v-if="$device.isDesktop && show" />
  <LazyMobilePagesGame v-else-if="show" />
</template>

<script setup>
  definePageMeta({
    auth: false,
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
