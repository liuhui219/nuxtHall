<!-- @format -->

<!--
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-10-24 10:59:16
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-10-27 15:38:46
 * @FilePath: \hall\components\mobile\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- @format -->

<template>
  <LazyMobileLayoutHeader />
  <LazyMobileLayoutMenu />
  <main class="mobile-container-main">
    <NuxtPage />
  </main>
  <LazyMobileLayoutFooter />
  <LazyMobileModelLogin />
  <LazyMobileModelReset />
  <LazyMobileModelRegister />
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
