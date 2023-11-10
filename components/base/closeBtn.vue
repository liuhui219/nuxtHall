<!-- @format -->

<template>
  <div class="login-close">
    <el-icon><component is="CloseBold"></component></el-icon>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .login-close {
    cursor: pointer;

    .el-icon {
      transition: all 0.3s;
    }
    &:hover .el-icon {
      transform: rotate(-90deg);
    }
  }
</style>
