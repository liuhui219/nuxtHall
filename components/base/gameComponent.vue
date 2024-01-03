<!-- @format -->
<template>
  <div ref="target" class="game-component w-full relative">
    <div class="game-cover relative z-[1]" :style="{backgroundImage: !isLoading && loaded ? `url(${game.src})` : ''}">
      <div v-if="mask && show" class="game-mask">
        <div class="game-mask-content">
          <div class="game-play pointer">
            <i class="iconfont icon-play2"></i>
          </div>
          <div class="game-info">
            <span>{{ game.text }}</span>
            <span>{{ game.en }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="game-text-info text-left" v-if="textInfo">
      <div class="game-provider" v-if="provider">Original</div>
      <h4 v-if="showGameName" class="game-name !text-[20px] scale-50 text-left">67****6</h4>
      <div
        v-if="showGameName"
        class="recent-point !text-[18px] scale-50 -mt-[12px] text-left !w-[200%] -translate-x-[1px]"
      >
        <span class="text-home-second mr-[4px]">R$</span><em class="text-number not-italic">56.390,00</em>
      </div>
    </div>
    <div v-if="isLoading || !loaded" class="game-cover game-cover-copy" />
  </div>
</template>

<script setup lang="ts">
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
      default: false,
    },
    showDetail: {
      type: Boolean,
      default: false,
    },
    showMask: {
      type: Boolean,
      default: false,
    },
    imageRadius: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: false,
    },
    textInfo: {
      type: Boolean,
      default: false,
    },
  });
  const loaded = ref(false);
  const show = ref(false);
  const target = ref(null);
  const {isLoading} = useImage({src: propsConf.game.src});

  const {stop} = useIntersectionObserver(target, ([{isIntersecting}], observerElement) => {
    if (isIntersecting) {
      show.value = isIntersecting;
      setTimeout(() => {
        loaded.value = isIntersecting;
      }, 100);
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
    box-sizing: border-box;
    .game-cover {
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

      .game-mask {
        width: 100%;
        height: 100%;
        display: none;
        backdrop-filter: blur(1.5px);
        background-color: #242424b3;
        opacity: 1;

        position: absolute;
        top: 0;
        left: 0;
        justify-content: center;
        transition: all 0.2s;
        .game-mask-content {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transition: all 0.3s;
          width: 100%;
          .game-play {
            flex-shrink: 0;
            width: 50.42px;
            height: 50.42px;
            border-radius: 50%;
            // border: 3px solid rgba(255, 255, 255, 0.15);
            background: var(--el-color-primary);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .game-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            margin-top: 10px;
            span {
              padding-top: 2px;
              color: rgb(151, 168, 199);
              font-weight: bold;
            }
          }
        }
      }

      &:hover .game-mask {
        display: flex;
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

    .game-text-info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;
      .game-provider {
        color: "#97a8c7";
        font-size: 12px;
        font-weight: 500;
        white-space: nowrap;
        text-overflow: "ellipsis";
        width: 100%;
        overflow: hidden;
        padding: 9px 8px;
      }
      .game-name {
        color: #97a8c7;
        padding-left: 8px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 200%;
      }
      .recent-point {
        padding-left: 8px;
        border-radius: 2px;
        color: #1bb83d;
        flex: 0;
        flex-grow: 0;
        flex-shrink: 0;
        font-size: 12px;
        overflow: hidden;
        width: auto;
      }
    }
    .not-italic {
      font-style: normal;
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
