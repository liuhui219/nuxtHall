<!-- @format -->

<template>
  <div class="page-container">
    <LayoutSlider />
    <div class="page-container-right">
      <LayoutHeader />

      <main class="page-container-main">
        <div class="page-container-main-wrap"><NuxtPage /></div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
  .page-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .page-container-right {
    // width: calc(100% - var(--main-width));
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;

    .page-container-main {
      width: 100%;
      height: calc(100% - var(--nav-height));
      display: flex;
      justify-content: center;
      overflow-x: hidden;
      .page-container-main-wrap {
        max-width: var(--container-width);
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
