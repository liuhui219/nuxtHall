<!-- @format -->

<template>
  <LazyDesktopPagesHome v-if="$device.isDesktop" />
  <LazyMobilePagesHome v-else />
</template>

<script setup>
  definePageMeta({
    name: "首页",
  });
</script>

<style lang="scss" scoped></style>
