<!-- @format -->

<template>
  <div class="game-iframe" ref="gameIframe">
    <div class="iframe-box">
      <iframe
        ref="iframe"
        :src="url"
        frameborder="0"
        allowtransparency="true"
        allow="autoplay"
        auto=" "
        allowfullscreen="true"
        @load="iFrameLoad"
      />
    </div>
  </div>
</template>

<script setup>
  import {useFullscreen} from "@vueuse/core";
  const iframe = ref(null);
  const gameIframe = ref(null);
  const route = useRoute();
  const {enter} = useFullscreen(gameIframe);
  const drawerGame = ref(false);

  const url = ref("");
  const iFrameLoad = () => {
    if (url.value != "") {
      // enter();
    }
  };
  onMounted(() => {
    let gameURL = games.init();
    url.value = gameURL;
  });

  onActivated(() => {
    let gameURL = games.init();
    url.value = gameURL;
  });

  onUnmounted(() => {});
  onDeactivated(() => {
    games.leaveGame();
  });
</script>

<style lang="scss" scoped>
  .game-iframe {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .iframe-box {
      width: 100%;
      display: flex;
      height: 100%;
      iframe {
        width: 100%;
        flex: 1;
      }
    }
  }
</style>
