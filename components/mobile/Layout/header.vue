<!-- @format -->

import { Header } from 'element-plus/es/components/table-v2/src/components'; import { Header } from
'element-plus/es/components/table-v2/src/components';
<template>
  <header class="mobile-header fixed">
    <section class="flex justify-between w-full px-[15px] h-full">
      <div class="left"></div>
      <div class="right tools-login">
        <el-button size="large" text>SIGN IN</el-button>
        <el-button size="large" type="success">SIGN UP</el-button>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .mobile-header {
    top: 0;
    left: 0;
    z-index: 300;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: var(--mobile-header-height);
    background-color: var(--el-bg-color);

    .tools-login {
      align-items: center;
      display: flex;
    }
  }
</style>
