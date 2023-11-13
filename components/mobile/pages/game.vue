<!-- @format -->

<template>
  <LazyMobileModelDrawer :title="'game'" :drawer="drawerGame" :header="false" :hash="''">
    <template #body>
      <div class="game-iframe">
        <div class="iframe-box">
          <iframe
            ref="iframe"
            :src="url"
            frameborder="0"
            allowtransparency="true"
            allow="autoplay"
            auto=" "
            allowfullscreen
            @load="iFrameLoad"
          />
        </div>
      </div>
    </template>
  </LazyMobileModelDrawer>
</template>

<script setup lang="ts">
  import {useFullscreen} from "@vueuse/core";
  const iframe = ref(null);

  const {enter} = useFullscreen(iframe);
  const drawerGame = ref(false);

  const route = useRoute();

  const url = games.gameURL();
  const httpLoading = useHttpLoading();
  const iFrameLoad = () => {
    if (url.value != "") {
      httpLoading.value = false;
      enter();
    } else {
      setTimeout(() => {
        navigateTo({path: "/"});
        drawerGame.value = false;
      }, 3000);
    }
  };
  watchEffect(() => {
    drawerGame.value = route.path === "/game";
  });
</script>

<style lang="scss" scoped>
  .game-iframe {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
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
