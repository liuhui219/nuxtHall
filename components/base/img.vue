<!-- @format -->

<!--
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-10-25 15:37:11
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-10-27 11:45:18
 * @FilePath: \hall\components\base\img.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- @format -->

<template>
  <el-image
    :src="src ? src : $importImage(name, type, path)"
    :alt="alt"
    :lazy="lazy"
    loading="lazy"
    :scroll-container="scrollContainer"
    @error="renderError"
    @load="renderImage"
    @click="handleClick"
  >
    <template #error>
      <div class="image-slot">
        <el-icon><icon-picture /></el-icon>
      </div>
    </template>
    <template #placeholder>
      <div class="image-slot">Loading</div>
    </template>
  </el-image>
</template>

<script setup lang="ts">
  import {Picture as IconPicture} from "@element-plus/icons-vue";
  const {$importImage} = useNuxtApp();
  const propsConf = defineProps({
    src: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    scrollContainer: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "png",
    },
    path: {
      type: String,
      default: "images",
    },
    alt: {
      type: String,
      default: "",
    },
  });
  const emits = defineEmits(["click"]);
  const handleClick = () => {
    emits("click");
  };

  const renderError = (event: Event) => {};

  const renderImage = (event: Event) => {};
</script>

<style lang="scss" scoped>
  .image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 18px;
  }
  .image-slot .el-icon {
    font-size: 30px;
  }
</style>
