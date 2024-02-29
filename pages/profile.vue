<!-- @format -->

<template>
  <div class="w-full"><LazyMobilePagesProfile /></div>
</template>

<script setup>
  definePageMeta({
    name: "个人中心",
    auth: false,
    pageIndex: 5,
    keepalive: true,
  });
</script>

<style lang="scss" scoped></style>
