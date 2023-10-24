<!-- @format -->

<template>
  <el-dialog
    v-model="centerDialogVisible"
    modal-class="mobile-el-overlay-dialog"
    :show-close="true"
    title=""
    width="100%"
    destroy-on-close
    center
    align-center
  >
    <span>
      Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered
    </span>
    <div>
      <strong>Extra content (Not rendered)</strong>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
  const centerDialogVisible = ref(true);
</script>

<style lang="scss">
  .mobile-el-overlay-dialog {
    backdrop-filter: blur(12px);
    .el-dialog {
      width: calc(100% - 40px);
      border-radius: 10px;
    }
  }
</style>
