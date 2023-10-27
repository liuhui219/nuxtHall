<!-- @format -->

<!--
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-10-24 11:09:08
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-10-27 15:01:28
 * @FilePath: \hall\components\mobile\Layout\header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- @format -->

import { Header } from 'element-plus/es/components/table-v2/src/components'; import { Header } from
'element-plus/es/components/table-v2/src/components';
<template>
  <header class="mobile-header fixed">
    <section class="flex justify-between w-full px-[15px] h-full">
      <div class="left flex justify-center items-center">
        <base-img class="h-[40px] w-[104px] logo" name="logo-h" type="avif" path="images/logo" />
      </div>
      <div class="right tools-login">
        <el-button @click="openLoginDialog" size="large" type="primary" text>{{ $t("L1001") }}</el-button>
        <el-button class="el-button-sign-up" size="large" type="primary">{{ $t("L1002") }}</el-button>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
  const loginDialog = useLoginDialog();
  const openLoginDialog = () => {
    openPopup("login");
  };
</script>

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
    .logo {
      cursor: pointer;
      flex-shrink: 0;
      .el-image__inner {
        height: 40px;
      }
    }
    .tools-login {
      align-items: center;
      display: flex;
    }

    .el-button-sign-up {
      background: linear-gradient(to right, #80d693, #34aa4e);
      position: relative;
      &::after {
        content: "";
        background-color: var(--el-color-primary);
        position: absolute;
        left: -16%;
        top: -7%;
        width: 132%;
        height: 114%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        opacity: 0.7;
        z-index: 1;
        filter: blur(20px);
      }
    }
  }
</style>
