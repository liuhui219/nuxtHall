<!-- @format -->

<template>
  <ElImage
    ref="img"
    :src="image"
    :alt="alt"
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
  </ElImage>
</template>

<script setup lang="ts">
  import {useImage, useIntersectionObserver} from "@vueuse/core";
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
  const img = ref(null);
  const loaded = ref(false);
  const image = ref(propsConf.src ? propsConf.src : $importImage(propsConf.name, propsConf.type, propsConf.path));

  const {isLoading} = useImage({src: image.value});
  const {stop} = useIntersectionObserver(img, ([{isIntersecting}], observerElement) => {
    if (isIntersecting) {
      loaded.value = isIntersecting;
    }
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
