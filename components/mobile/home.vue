<!-- @format -->

<template>
  <MobileLayoutHeader />
  <MobileLayoutMenu />
  <main class="mobile-container-main">
    <NuxtPage />
  </main>
  <MobileLayoutFooter />
  <MobileModelLogin />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .mobile-container-main {
    width: 100%;
    padding-bottom: 65px;
    padding-top: 60px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
