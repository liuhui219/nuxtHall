<!-- @format -->

<template>
  <div class="mobile-home-container w-full" ref="homeContainer">
    <div class="mobile-home-container-main w-full px-[10px] pt-[10px] pb-[20px]">
      <!-- 轮播图 -->
      <div class="container-banner w-full">
        <swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="1"
          :space-between="16"
          :slides-per-group="1"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          @slide-change="slideChange"
        >
          <swiper-slide v-for="(item, index) in list" :key="index" class="flex justify-center">
            <div class="container-banner-box w-full">
              <LazyBaseImg class="w-full banner-image" :name="item.img" type="jpg" path="images/home" />
            </div>
          </swiper-slide>
        </swiper>

        <div v-if="list.length > 1" class="home-nl-p">
          <div v-for="(item, index) in list.length" :key="item" :class="{'home-nl-p-a': index === activeIndex}">
            <div class="progress"></div>
          </div>
        </div>
      </div>
      <!-- 滚动播放站内通知 -->
      <div class="mobile-home-container-header flex w-full h-[30px] overflow-y-hidden">
        <BaseIcon name="notifications" />
        <div class="mobile-home-container-news flex h-full">
          <div class="mobile-home-container-news-main flex h-full">
            <div ref="containerNews" class="mobile-home-container-news-box flex h-full">
              <span v-for="(item, index) in newsList" :key="index">{{ item.text }}</span>
            </div>
            <div ref="containerNews" class="mobile-home-container-news-box flex h-full">
              <span v-for="(item, index) in newsList" :key="index">{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="headMenu w-full">
        <swiper :modules="[SwiperNavigation, SwiperPagination]" :slides-per-view="5" :space-between="6">
          <swiper-slide v-for="(item, index) in headMenu" :key="index" class="flex justify-center">
            <div class="home-tab-btn" :key="index">
              <i class="iconfont" :class="`icon-${item.icon}`"></i>
              {{ item.text }}
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <section class="mobile-hot-games w-full">
        <div class="section-title mb-[12px] p-[0!important] flex justify-between">
          <div data-v-5af0f1b2="" class="game_title flex items-center justify-start">Grandes Vitórias Recentes</div>
        </div>
        <div>
          <swiper
            ref="rewardRef"
            :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectCoverflow, SwiperPagination, SwiperEffectCreative]"
            :slides-per-view="4"
            :space-between="8"
            :slides-per-group="1"
          >
            <swiper-slide v-for="(item, index) in hotGamesList" :key="index" class="flex justify-center">
              <div class="mobile-hot-games-box w-full">
                <base-game-component :game="item" textInfo showGameName @click="openGame(item)"></base-game-component>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </section>

      <section class="game-classification mt-[20px] w-full" v-for="(item, index) in tabList" :key="index">
        <div class="section-title p-[0!important] flex justify-between">
          <div data-v-5af0f1b2="" class="game_title flex items-center justify-start">
            {{ item.text }}
          </div>
          <div class="shrink-0 flex items-center">
            <BaseSwiperBtn :swiper="nodes[index]" :disabled="true"></BaseSwiperBtn>
          </div>
        </div>
        <div>
          <swiper
            :ref="setRef"
            :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectCoverflow]"
            :slides-per-view="3"
            :space-between="8"
            :slides-per-group="1"
          >
            <swiper-slide v-for="count in Math.ceil(item.children.length / 2)" :key="count" class="flex justify-center">
              <div class="game-classification-component w-full flex flex-col gap-y-[10px]">
                <base-game-component
                  key="(count - 1) * 2"
                  @click="openGame(item.children[(count - 1) * 2])"
                  textInfo
                  provider
                  :game="item.children[(count - 1) * 2]"
                ></base-game-component>
                <base-game-component
                  key="(count - 1) * 2 + 1"
                  v-if="
                    !(
                      count === Math.ceil(item.children.length / 2) &&
                      item.children.length / 2 < Math.ceil(item.children.length / 2)
                    )
                  "
                  @click="openGame(item.children[(count - 1) * 2 + 1])"
                  textInfo
                  provider
                  :game="item.children[(count - 1) * 2 + 1]"
                ></base-game-component>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </section>
    </div>
    <LazyMobilePagesFooter />
  </div>
</template>

<script setup lang="ts">
  import {useThrottleFn} from "@vueuse/core";
  const {$importImage} = useNuxtApp();
  const nuxtApp = useNuxtApp();
  const {locale, t} = useI18n();
  const homeContainer = ref(null);
  const homeTab = ref<any>(null);
  const info = ref();
  const containerNews = ref<any>(null);
  const containerNewsWidth = ref<any>(0);
  onMounted(() => {
    containerNewsWidth.value = 0 - containerNews.value.offsetWidth + "px";
  });
  const url = games.gameURL();
  const openPopupFn = () => {};
  const nodes = reactive<any>([]);
  const setRef = (el: any) => {
    if (el) {
      nodes.push(el);
    }
  };
  // message_notifications
  const newsList = [
    {
      text: "央行通知：目前巴西央行临时维护将影响部分希望提款的用户，对于出现的意外情况我们深表歉意，我们将尽快解决。",
    },
    {
      text: "央行通知：目前巴西央行临时维护将影响部分希望提款的用户，对于出现的意外情况我们深表歉意，我们将尽快解决。",
    },
  ];
  const duration = `${newsList.length * 10}s`;
  const list = [
    {
      value: 1,
      text: "V0033",
      title: "V0030",
      img: "hby111",
    },
    {
      value: 2,
      text: "V0033",
      title: "V0030",
      img: "jc1103",
    },
    {
      value: 3,
      text: "V0033",
      title: "V0030",
      img: "kuisunlun1",
    },
    {
      value: 4,
      text: "V0033",
      title: "V0030",
      img: "phb11-6",
    },
  ];
  const gamereload = gameReload();
  const httpLoading = useHttpLoading();
  const openGame = (item: {roomId: string}) => {
    // url.value = item.url;
    //httpLoading.value = true;
    //openPopup("game-drawer");
    navigateTo({
      path: "/game",
      query: {
        roomId: item.roomId,
      },
    });
    gamereload.value++;
  };

  let List = gameList.getData();

  const headMenu = [
    {
      text: t("H0017"),
      icon: "qiandao",
    },
    {
      text: t("H0018"),
      icon: "choujiangzhuanpan",
    },
    {
      text: t("H0019"),
      icon: "Rewards",
    },
    {
      text: t("H0020"),
      icon: "vip1",
    },
    {
      text: t("H0021"),
      icon: "huodong",
    },
  ];

  const hotGamesList = List.slice(0, 10);

  const tabList = [
    {
      value: 1,
      text: t("L1023"),
      length: 6,
      icon: "lobby",
      children: List.slice(0, 30),
    },
    {
      value: 2,
      text: t("L1024"),
      length: 6,
      icon: "fire",
      children: List.slice(30, 60),
    },
    {
      value: 3,
      text: t("L1024"),
      length: 6,
      icon: "cherry1",
      children: List.slice(60, 81),
    },
  ];

  const activeIndex = ref(0);
  const slideChange = (event: {realIndex: number}) => {
    activeIndex.value = event.realIndex;
  };

  onMounted(() => {});
</script>
<style lang="scss" scoped>
  $end-position: v-bind(containerNewsWidth);
  .mobile-home-container {
    background-color: var(--el-bg-color);
    box-sizing: border-box;
    .mobile-home-container-main {
      height: 100%;
      box-sizing: border-box;
      position: relative;
      .container-banner,
      .swiper {
        border-radius: var(--border-radius);
        position: relative;
        .container-banner-box {
          position: relative;
          height: 0;
          padding-bottom: 51.6%;
          border-radius: var(--border-radius);
          overflow: hidden;
        }
        .banner-image {
          position: relative;
          width: 100%;
        }
        .mobile-home-sign {
          top: 80%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 100;
        }
        .carousel-nl-container {
          z-index: 10;
        }
        .mobile-home-sign-btn {
          border-radius: var(--border-radius);
          backdrop-filter: blur(2px);
          z-index: 1;
          position: relative;
          background: rgba(255, 255, 255, 0.3);
          height: 40px;
        }

        .home-nl-p {
          width: 100%;
          margin: 8px auto 0;
          height: 6px;
          border-radius: 3px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          position: absolute;
          bottom: 8px;
          z-index: 10;

          display: flex;
          & > div {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            transition: all 0.3s;
            // background: var(--el-bg-color);
            cursor: pointer;
            border: 1px solid var(--el-text-color-primary);
          }

          .home-nl-p-a {
            // background: var(--el-color-primary);
            border-radius: 10px;
            border: 1px solid var(--el-text-color-primary);
            width: 30px;
            position: relative;
            .progress {
              position: absolute;
              left: 0;
              top: 0;
              width: 0%;
              height: 100%;
              background-color: var(--el-color-primary);
              border-radius: 10px;
              white-space: nowrap;
              animation: home-progress 4s;
              animation-fill-mode: forwards;
            }
          }
        }
      }

      .headMenu {
        overflow-x: auto;
        overflow-y: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 15px 0px;

        // background-image: radial-gradient(transparent 1px, var(--el-fill-color) 1px);
        z-index: 100;

        .swiper {
          width: 100%;
          height: 100%;
        }

        .home-tab-btn {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px 0;
          gap: 8px;
          font-size: 12px;
          flex-shrink: 0;
          cursor: pointer;
          color: var(--el-color-primary);
          background: rgb(255 255 255 / 8%);
          // background-color: var(--el-bg-color-overlay);
          border-radius: var(--border-radius);
          border: 2px solid rgb(141 144 149 / 10%);
          &:hover {
            color: var(--el-text-color-primary);
          }
        }
        .active {
          background: var(--el-color-primary);
          border-radius: var(--border-radius);
          color: var(--el-text-color-primary);
        }

        .iconfont {
          font-size: 24px;
          font-weight: initial;
        }

        &::before {
          content: "";
          background-color: var(--el-color-primary);
          position: absolute;
          left: -28%;
          top: 15%;
          width: 65%;
          height: 15%;
          border-radius: 50%;
          opacity: 0.4;
          filter: blur(100px);
        }
      }

      .mobile-hot-games {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-top: 16px;
        .mobile-hot-games-box {
          position: relative;
          background: rgb(255 255 255 / 8%);
          border-radius: var(--border-radius);
          overflow: hidden;
          padding: 2px;
          border: 2px solid rgb(141 144 149 / 10%);
        }
      }

      .mobile-home-container-header {
        flex-direction: row;
        align-items: center;
        margin-top: 20px;
        pointer-events: none;
        i {
          font-size: 20px;
        }
      }

      .mobile-home-container-news {
        flex: 1;
        overflow-y: hidden;
        margin-left: 6px;
      }

      .mobile-home-container-news-main {
        white-space: nowrap;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 12px;
        width: 100%;
        animation-name: scroll-left;
        animation-duration: v-bind(duration);
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        .mobile-home-container-news-box {
          white-space: nowrap;
          display: flex;
          flex-direction: row;
          align-items: center;
          & > span {
            display: block;
            padding: 0 20px;
          }
        }
      }

      @keyframes scroll-left {
        0% {
          transform: translateX(0px);
        }
        100% {
          transform: translateX($end-position);
        }
      }

      .home-tab {
        width: 100%;
        height: 60px;
        //border: 1px solid var(--el-text-color-disabled);
        //border-radius: var(--border-radius);

        overflow-x: auto;
        overflow-y: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 0px;
        position: sticky;
        top: 0px;
        background: var(--el-bg-color);
        z-index: 100;
        gap: 10px;

        .home-tab-btn {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 16px;
          font-size: 12px;
          flex-shrink: 0;
          flex: 1;
          font-weight: 700;
          color: var(--el-text-color-placeholder);
          border-radius: var(--border-radius);
          background-color: var(--el-border-color-extra-light);
        }
        .active {
          background: var(--el-color-primary);
          border-radius: var(--border-radius);
          color: var(--el-text-color-primary);
        }
        .iconfont {
          padding-right: 5px;
          font-weight: bold;
        }
      }
    }

    .hot-games {
      display: grid;
      margin-top: 16px;
      box-sizing: content-box;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 10px;
      gap: 10px;
    }

    .game-classification {
      display: flex;
      flex-direction: column;
      position: relative;
      .game-classification-component .game-component {
        background: var(--el-fill-color-light);
        border-radius: 4px;
      }
      .section-title {
        color: var(--el-text-color-primary);
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 12px;
      }
      // &:nth-child(2n-1)::after {
      //   content: "";
      //   background-color: var(--el-color-primary);
      //   position: absolute;
      //   right: -35%;
      //   top: -5%;
      //   width: 65%;
      //   height: 36%;
      //   border-radius: 50%;
      //   opacity: 0.7;
      //   filter: blur(100px);
      // }
      // &:nth-child(2n)::before {
      //   content: "";
      //   background-color: var(--el-color-primary);
      //   position: absolute;
      //   left: -28%;
      //   top: -5%;
      //   width: 65%;
      //   height: 36%;
      //   border-radius: 50%;
      //   opacity: 0.7;
      //   filter: blur(100px);
      // }
    }
    .game_title {
      position: relative;
      padding-left: 16px;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--el-color-primary);
        border: 1px solid var(--el-text-color-primary);
      }
    }
  }

  .games-item {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    flex-shrink: 0;
    border-radius: 4px;
    background: var(--el-fill-color-light);
  }
</style>
