<!-- @format -->

<template>
  <div class="app-loading" :class="{'http-loading': http}">
    <!-- <div ref="vanta" class="vanta" v-if="!http"></div> -->
    <img class="loading-base-img" :src="$importImage('loading', 'png', 'images/load')" />
  </div>
</template>
<script setup>
  // import * as THREE from "three";
  // import NET from "vanta/src/vanta.net";
  const {$importImage} = useNuxtApp();
  const propsConf = defineProps({
    size: {
      type: Number,
      default: 80,
    },
    http: {
      type: Boolean,
      default: false,
    },
  });
  // const vanta = ref();
  // onMounted(() => {
  //   NET({
  //     el: vanta.value,
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.0,
  //     minWidth: 200.0,
  //     scale: 1.0,
  //     scaleMobile: 1.0,
  //     color: 0x929b09,
  //     backgroundColor: 0xa0611,
  //     points: 19.0,
  //     maxDistance: 18.0,
  //     spacing: 18.0,
  //     THREE: THREE,
  //   });
  // });
</script>
<style scoped lang="scss">
  .app-loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000000;
    background-color: var(--bg-background);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    height: 100%;
  }
  .vanta {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .app-loading.http-loading {
    background-color: var(--el-mask-color);
    position: absolute;
  }
  .loading-base-img {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    animation: list-loading-spinner 0.8s linear infinite;
  }
</style>
