<!-- @format -->

<template>
  <div class="mobile-game w-full h-full"><LazyMobilePagesGame /></div>
</template>

<script setup>
  definePageMeta({
    name: "游戏",
    auth: true,
    scrollToTop: true,
    pageIndex: 10,
  });
</script>

<style lang="scss" scoped>
  .mobile-game {
    background-color: var(--el-bg-color);
    position: absolute;
    z-index: 1000;
    top: 0;
  }
</style>
