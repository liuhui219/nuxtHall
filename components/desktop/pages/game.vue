<!-- @format -->

<template>
  <div class="game-breadcrumb mt-[36px]">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{path: '/'}">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="game-iframe-cont">
    <div class="game-iframe">
      <iframe
        ref="iframe"
        :src="url"
        title="game"
        allowpaymentrequest="true"
        allowTransparency="true"
        allow="autoplay"
        auto=" "
        allowfullscreen
        style="color-scheme: light"
        @load="iFrameLoad"
      />
      <div class="w-full h-full absolute top-0 left-0 flex items-center justify-center" v-if="!url">
        <div>{{ $t("E0002") }}</div>
      </div>
    </div>
    <div class="flex justify-between items-center px-6 py-4">
      <div class="screen">
        <button @click="toggle"><i class="iconfont icon-full-screen1"></i></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ArrowRight} from "@element-plus/icons-vue";
  import {useFullscreen} from "@vueuse/core";
  const iframe = ref(null);

  const route = useRoute();
  const {toggle} = useFullscreen(iframe);

  const url = ref("");
  const iFrameLoad = () => {};
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
  .game-breadcrumb {
    width: 100%;
    margin-bottom: 16px;
    .el-breadcrumb {
      font-size: 16px;
    }
  }
  .game-iframe-cont {
    width: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
    overflow: hidden;
    background: var(--el-bg-color-overlay);
    .game-iframe {
      position: relative;
      display: flex;
      background: var(--el-bg-color);
      width: 100%;
      height: 720px;
    }
    .screen {
      button:hover {
        color: var(--el-color-primary);
      }
      .iconfont {
        font-size: 36px;
      }
    }
  }

  iframe {
    width: 100%;
    flex: 1;
    background: #000000;
    border: none;
  }
</style>
