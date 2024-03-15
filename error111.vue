<!-- @format -->

<template>
  <el-empty :description="$t('E0001')">
    <NuxtLink to="/"
      ><el-button>{{ $t("L1019") }}</el-button></NuxtLink
    >
  </el-empty>
</template>

<script setup lang="ts">
  const router = useRouter();
  const goHome = () => {
    router.push({path: "/"});
  };
</script>

<style lang="scss" scoped>
  .el-empty {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
