<!-- @format -->

<template>
  <svg class="icon-font">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script setup lang="ts">
  import {defineProps} from "vue";
  const props = defineProps({
    icon: {
      type: String,
      default: "quanjingshijiao",
    },
  });
</script>

<style scoped></style>
