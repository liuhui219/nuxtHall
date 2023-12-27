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
            <!-- <div class="carousel-nl-container w-full flex flex-col items-center absolute top-[36px] px-[20px]">
              <div class="flex flex-col items-center justify-center w-[267px]">
                <div class="font-black text-[24px]">Best Crypto Casino</div>
                <p class="text-center text-[12px] mt-[10px]">
                  With our subscription, you’ll get much more bonuses and extra rewards.
                </p>
              </div>
            </div> -->
            <div class="container-banner-box w-full">
              <LazyBaseImg class="w-full banner-image" :name="item.img" type="jpg" path="images/home" />
            </div>
          </swiper-slide>
          <!-- <div class="mobile-home-sign absolute">
            <el-button @click="openPopupFn" class="mobile-home-sign-btn w-[267px]"
              ><span class="font-black">SIGN UP</span></el-button
            >
          </div> -->
        </swiper>

        <div v-if="list.length > 1" class="home-nl-p">
          <div v-for="(item, index) in list.length" :key="item" :class="{'home-nl-p-a': index == activeIndex}" />
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
      <!-- 游戏分类导航栏 -->
      <div class="home-tab" ref="homeTab">
        <div
          class="home-tab-btn"
          :class="{active: index === activeTabIndex}"
          v-for="(item, index) in tabList"
          :key="index"
          @click="tabClick(index)"
        >
          <i class="iconfont" :class="`icon-${item.icon}`"></i>
          {{ item.text }}
        </div>
      </div>

      <div class="hot-games w-full">
        <div class="games-item" v-for="(item, index) in hotGamesList" :key="index" @click="openGame(item)">
          <Lazy-base-game-component :game="item"></Lazy-base-game-component>
        </div>
      </div>
      <!-- 游戏分类 -->
      <div class="game-classification w-full">
        <div v-for="(item, index) in tabList" :key="index" class="game-classification-box w-full">
          <div class="game-classification-title" :id="item.text">
            <span>{{ item.text }}</span>
          </div>
          <template v-if="item.children">
            <div class="w-full game-classification-wrap">
              <div v-for="(child, i) in item.children" :key="i" class="games-item" @click="openGame(child)">
                <Lazy-base-game-component :game="child"></Lazy-base-game-component>
              </div>
            </div>
            <el-button @click="moreFn" class="game-classification-btn w-full">View All {{ info }}</el-button>
          </template>
        </div>
      </div>
    </div>
    <LazyMobilePagesFooter />
  </div>
</template>

<script setup lang="ts">
  import {useThrottleFn} from "@vueuse/core";
  const {$importImage} = useNuxtApp();
  const nuxtApp = useNuxtApp();
  const homeContainer = ref(null);
  const homeTab = ref<any>(null);
  const info = ref();
  const containerNews = ref<any>(null);
  const containerNewsWidth = ref<any>(null);
  onMounted(() => {
    containerNewsWidth.value = 0 - containerNews.value.offsetWidth + "px";
  });
  const url = games.gameURL();
  const openPopupFn = () => {};

  // message_notifications
  const newsList = [
    {
      text: "1现成梵蒂冈电饭锅发的尴尬代发给代发更大更代发给代发",
    },
    {
      text: "2现成梵蒂冈电饭锅发的尴尬代发给代发更大更代发给代发",
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

  const hotGamesList = [
    {
      value: 1,
      text: "V0033",
      title: "V0030",
      roomId: "4000",
      url: "",
      src: $importImage("4000_pic", "png", "images/games"),
    },
    {
      value: 2,
      text: "V0034",
      title: "V0031",
      roomId: "4100",
      url: "",
      src: $importImage("4100_pic", "png", "images/games"),
    },
    {
      value: 3,
      text: "V0035",
      title: "V0032",
      roomId: "4200",
      url: "",
      src: $importImage("4200_pic", "png", "images/games"),
    },
    {
      value: 4,
      text: "V0035",
      title: "V0032",
      roomId: "4300",
      url: "",
      src: $importImage("4300_pic", "png", "images/games"),
    },
    {
      value: 5,
      text: "V0035",
      title: "V0032",
      roomId: "4400",
      url: "",
      src: $importImage("4400_pic", "png", "images/games"),
    },
    {
      value: 6,
      text: "V0035",
      title: "V0032",
      roomId: "4500",
      src: $importImage("4500_pic", "png", "images/games"),
    },
  ];

  const json = {
    All: [
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "4000",
        url: "",
        src: $importImage("4000_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "4100",
        url: "",
        src: $importImage("4100_pic", "png", "images/games"),
      },
      {
        value: 3,
        text: "V0035",
        title: "V0032",
        roomId: "4200",
        url: "",
        src: $importImage("4200_pic", "png", "images/games"),
      },
      {
        value: 4,
        text: "V0035",
        title: "V0032",
        roomId: "4300",
        url: "",
        src: $importImage("4300_pic", "png", "images/games"),
      },
      {
        value: 5,
        text: "V0035",
        title: "V0032",
        roomId: "4400",
        url: "",
        src: $importImage("4400_pic", "png", "images/games"),
      },
      {
        value: 6,
        text: "V0035",
        title: "V0032",
        roomId: "4500",
        src: $importImage("4500_pic", "png", "images/games"),
      },
    ],
    Originais: [
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "7300",
        url: "",
        src: $importImage("7300_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "5800",
        url: "",
        src: $importImage("5800_pic", "png", "images/games"),
      },
      {
        value: 3,
        text: "V0035",
        title: "V0032",
        roomId: "5900",
        url: "",
        src: $importImage("5900_pic", "png", "images/games"),
      },
      {
        value: 4,
        text: "V0035",
        title: "V0032",
        roomId: "6000",
        url: "",
        src: $importImage("6000_pic", "png", "images/games"),
      },
      {
        value: 5,
        text: "V0035",
        title: "V0032",
        roomId: "6100",
        url: "",
        src: $importImage("6100_pic", "png", "images/games"),
      },
      {
        value: 6,
        text: "V0035",
        title: "V0032",
        roomId: "6200",
        src: $importImage("6200_pic", "png", "images/games"),
      },
    ],
    Slots: [
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "7400",
        url: "",
        src: $importImage("7400_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "8600",
        url: "",
        src: $importImage("8600_pic", "png", "images/games"),
      },
      {
        value: 3,
        text: "V0035",
        title: "V0032",
        roomId: "7600",
        url: "",
        src: $importImage("7600_pic", "png", "images/games"),
      },
      {
        value: 4,
        text: "V0035",
        title: "V0032",
        roomId: "7700",
        url: "",
        src: $importImage("7700_pic", "png", "images/games"),
      },
      {
        value: 5,
        text: "V0035",
        title: "V0032",
        roomId: "7800",
        url: "",
        src: $importImage("7800_pic", "png", "images/games"),
      },
      {
        value: 6,
        text: "V0035",
        title: "V0032",
        roomId: "28300",
        src: $importImage("28300_pic", "png", "images/games"),
      },
    ],
    vivo: [
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "8700",
        url: "",
        src: $importImage("8700_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "8900",
        url: "",
        src: $importImage("8900_pic", "png", "images/games"),
      },
      {
        value: 3,
        text: "V0035",
        title: "V0032",
        roomId: "9100",
        url: "",
        src: $importImage("9100_pic", "png", "images/games"),
      },
      {
        value: 4,
        text: "V0035",
        title: "V0032",
        roomId: "9400",
        url: "",
        src: $importImage("9400_pic", "png", "images/games"),
      },
      {
        value: 5,
        text: "V0035",
        title: "V0032",
        roomId: "10000",
        url: "",
        src: $importImage("10000_pic", "png", "images/games"),
      },
      {
        value: 6,
        text: "V0035",
        title: "V0032",
        roomId: "11000",
        src: $importImage("11000_pic", "png", "images/games"),
      },
    ],
    Lazer: [
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "12300",
        url: "",
        src: $importImage("12300_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "12400",
        url: "",
        src: $importImage("12400_pic", "png", "images/games"),
      },
      {
        value: 3,
        text: "V0035",
        title: "V0032",
        roomId: "12500",
        url: "",
        src: $importImage("12500_pic", "png", "images/games"),
      },
      {
        value: 4,
        text: "V0035",
        title: "V0032",
        roomId: "12700",
        url: "",
        src: $importImage("12700_pic", "png", "images/games"),
      },
      {
        value: 5,
        text: "V0035",
        title: "V0032",
        roomId: "12900",
        url: "",
        src: $importImage("12900_pic", "png", "images/games"),
      },
      {
        value: 6,
        text: "V0035",
        title: "V0032",
        roomId: "23600",
        src: $importImage("23600_pic", "png", "images/games"),
      },
    ],

    Shows: [
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "28400",
        url: "",
        src: $importImage("28400_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "28500",
        url: "",
        src: $importImage("28500_pic", "png", "images/games"),
      },
      {
        value: 6,
        text: "V0035",
        title: "V0032",
        roomId: "28600",
        src: $importImage("28600_pic", "png", "images/games"),
      },
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "28700",
        url: "",
        src: $importImage("28700_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "28800",
        url: "",
        src: $importImage("28800_pic", "png", "images/games"),
      },
      {
        value: 6,
        text: "V0035",
        title: "V0032",
        roomId: "28900",
        src: $importImage("28900_pic", "png", "images/games"),
      },
    ],
  };

  const tabList = [
    {
      value: 1,
      text: "All Games",
      length: 6,
      icon: "lobby",
      children: json.All,
    },
    {
      value: 2,
      text: "Originais",
      length: 6,
      icon: "fire",
      children: json.Originais,
    },
    {
      value: 3,
      text: "Slots",
      length: 6,
      icon: "cherry1",
      children: json.Slots,
    },
    {
      value: 4,
      text: "Ao vivo",
      length: 6,
      icon: "play1",
      children: json.vivo,
    },
    {
      value: 5,
      text: "Lazer",
      length: 6,
      icon: "badge1",
      children: json.Lazer,
    },
    {
      value: 6,
      text: "Shows",
      length: 6,
      icon: "tv-one",
      children: json.Shows,
    },
    {
      value: 7,
      text: "Esportes",
      length: 6,
      icon: "baseball",
      children: hotGamesList,
    },
  ];

  const activeIndex = ref(0);
  const activeTabIndex = ref(0);
  const slideChange = (event: {realIndex: number}) => {
    activeIndex.value = event.realIndex;
  };

  const tabClick = (index: number) => {
    const element = document.querySelectorAll(".game-classification-box")[index] as HTMLDivElement;
    const targetPosition = element.offsetTop - 120;

    document.querySelectorAll(".mobile-container-main")[0].scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    // document.querySelectorAll(".game-classification-box")[index].scrollIntoView({
    //   behavior: "smooth", // 平滑过渡
    //   block: "center", // 上边框与视窗顶部平齐。默认值
    // });
  };

  const scrollFn = useThrottleFn((event: {target: {scrollTop: number}}) => {
    const scrollItems = document.querySelectorAll(".game-classification-box");
    let index = activeTabIndex.value;
    for (let i = scrollItems.length - 1; i >= 0; i--) {
      // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
      let judge = event.target.scrollTop > (scrollItems[i] as HTMLDivElement).offsetTop;
      if (judge) {
        index = i + 1;
        if (index > scrollItems.length - 1) {
          index = scrollItems.length - 1;
        }
        break;
      } else {
        index = 0;
      }
    }
    activeTabIndex.value = index;
  }, 100);

  watch(
    () => activeTabIndex.value,
    (newValue) => {
      let tabElement = document.querySelectorAll(".home-tab-btn")[newValue] as HTMLDivElement;

      let left = tabElement && tabElement.offsetLeft - homeTab.value.offsetWidth / 2;
      let scrollLeft = 0;
      if (left > 0) {
        scrollLeft = left + tabElement.offsetWidth / 2;
      }
      homeTab.value.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  );

  const id = ref(1);

  const moreFn = () => {
    id.value++;
  };

  const moreFns = async () => {
    //
    const {data, pending, error, refresh} = await useDefaultRequest.get("/mountains", null, {param1: id});
    info.value = data.value[0]?.title;
  };

  //moreFns();

  onMounted(async () => {
    document
      .querySelectorAll(".mobile-container-main")[0]
      .addEventListener("scroll", scrollFn as unknown as EventListener);
  });
</script>
<style lang="scss" scoped>
  $end-position: v-bind(containerNewsWidth);
  .mobile-home-container {
    background-color: var(--el-bg-color);
    box-sizing: border-box;
    .mobile-home-container-main {
      height: 100%;
      box-sizing: border-box;
      .container-banner,
      .swiper {
        border-radius: var(--border-radius);
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

          display: flex;
          & > div {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            transition: all 0.3s;
            background: var(--el-bg-color);
            cursor: pointer;
            border: 1px solid var(--el-text-color-disabled);
          }

          .home-nl-p-a {
            background: var(--el-color-primary);
            border: 1px solid var(--el-text-color-primary);
          }
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
        margin-top: 24px;
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

        .home-tab-btn {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 16px;
          font-size: 12px;
          flex-shrink: 0;
          font-weight: 700;
          color: var(--el-text-color-placeholder);
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
      .game-classification-box {
        margin-top: 20px;
      }
      margin-top: 20px;
      .game-classification-wrap {
        display: grid;
        margin-top: 16px;
        box-sizing: content-box;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;
        gap: 10px;
      }
      .game-classification-btn {
        margin-top: 10px;
        height: 40px;
        color: var(--el-text-color-primary);
        background: linear-gradient(to right, #80d693, #34aa4e);
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
