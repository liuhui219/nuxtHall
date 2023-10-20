<!-- @format -->

<template>
  <div class="app-loading">
    <nuxt-img class="loading-base-img" src="/loading.avif" />
  </div>
</template>
<script setup lang="ts">
  const propsConf = defineProps({
    size: {
      type: Number,
      default: 80,
    },
    childColor: {
      type: String,
      default: "$second",
    },
  });
</script>
<style scoped lang="scss">
  .app-loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000000;
    background-color: var(--el-bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    height: 100%;
  }
  .loading-base-img {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    animation: list-loading-spinner 0.8s linear infinite;
  }
</style>
