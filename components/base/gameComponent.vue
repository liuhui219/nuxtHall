<!-- @format -->
<template>
  <div ref="target" class="game-component w-full">
    <div
      class="game-cover relative z-[1]"
      :style="{backgroundImage: !isLoading && loaded ? `url(${game.src})` : ''}"
    ></div>
    <div v-if="isLoading || !loaded" class="game-cover game-cover-copy" />
  </div>
</template>

<script setup lang="ts">
  const {$importImage} = useNuxtApp();
  import {useImage, useIntersectionObserver} from "@vueuse/core";
  const propsConf = defineProps({
    game: {
      type: Object,
      default: () => ({}),
    },
    showGameName: {
      type: Boolean,
      default: false,
    },
    provider: {
      type: Boolean,
      default: true,
    },
    showDetail: {
      type: Boolean,
      default: true,
    },
    showMask: {
      type: Boolean,
      default: false,
    },
    imageRadius: {
      type: Boolean,
      default: false,
    },
  });
  const loaded = ref(false);
  const isRemove = ref(false);
  const target = ref(null);
  const {isLoading} = useImage({src: propsConf.game.src});

  const {stop} = useIntersectionObserver(target, ([{isIntersecting}], observerElement) => {
    if (isIntersecting) {
      loaded.value = isIntersecting;
    }
  });
  // onMounted(() => {
  //   var img = document.createElement("img");
  //   img.src = propsConf.game.src;
  //   img.onload = function () {
  //     loaded.value = true;
  //     setTimeout(() => {
  //       isRemove.value = true;
  //     }, 2000);
  //   };
  // });
</script>

<style lang="scss" scoped>
  .game-component {
    cursor: pointer;
    .game-cover {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 4px;
      overflow: hidden;
      background-color: transparent;
      height: 0;
      position: relative;
      padding-bottom: 100%;
      &::before {
        content: "";
        height: 0;
        padding-bottom: 100%;
        position: absolute;
        width: 100%;
      }
    }

    .game-cover.game-cover-copy {
      display: inline-block;
      height: 0;
      width: 100%;
      padding-bottom: 100%;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-color: transparent;
      position: absolute;
      left: 0;
      top: 0;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding-bottom: 100%;
        background-image: url("~/assets/images/load/game_back.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding-bottom: 100%;
        background-image: url("~/assets/images/load/game_placeholder.png");
        background-size: 42%;
        background-position: center;
        background-repeat: no-repeat;
        animation: gamePlaceholder 1.8s linear infinite 0.2s forwards;
      }
    }
    .game-cover {
      height: 0;
      padding-bottom: 100%;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-color: transparent;
      position: relative;
    }
  }

  @keyframes gamePlaceholder {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
