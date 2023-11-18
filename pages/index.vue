<!-- @format -->

<template>
  <DesktopPagesHome v-if="$device.isDesktop" />
  <MobilePagesHome v-else />
</template>

<script setup>
  definePageMeta({
    name: "首页",
    auth: false,
  });
</script>

<style lang="scss" scoped></style>
