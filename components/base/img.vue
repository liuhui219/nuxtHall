<!-- @format -->

<template>
  <el-image
    :src="$importImage(name, type, path)"
    :alt="alt"
    loading="lazy"
    :lazy="lazy"
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

  const renderError = (event: Event) => {
    (event.target as HTMLElement).setAttribute("lazy", "error");
    (event.target as HTMLElement).setAttribute(
      "src",
      "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="
    );
  };

  const renderImage = (event: Event) => {
    (event.target as HTMLElement).setAttribute("lazy", "");
  };
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
