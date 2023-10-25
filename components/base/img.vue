<!-- @format -->

<template>
  <img :src="$importImage(name, type, path)" :alt="alt" @error="renderError" @load="renderImage" @click="handleClick" />
</template>

<script setup lang="ts">
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

<style></style>
