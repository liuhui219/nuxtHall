<!-- @format -->

<template>
  <div class="mobile-home-container w-full" ref="homeContainer">
    <div class="mobile-home-container-main w-full px-[10px] pt-[10px] pb-[20px]">
      <!-- 轮播图 -->
      <div class="container-banner w-full">
        <swiper
          :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectCoverflow, SwiperPagination, SwiperEffectCreative]"
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
            <div class="carousel-nl-container w-full flex flex-col items-center absolute top-[36px] px-[20px]">
              <div class="flex flex-col items-center justify-center w-[267px]">
                <div class="font-black text-[24px]">Best Crypto Casino</div>
                <p class="text-center text-[12px] mt-[10px]">
                  With our subscription, you’ll get much more bonuses and extra rewards.
                </p>
              </div>
            </div>
            <div class="container-banner-box w-full">
              <base-img class="w-full banner-image" :name="item.img" type="png" path="images/home" />
            </div>
          </swiper-slide>
          <div class="mobile-home-sign absolute">
            <el-button class="mobile-home-sign-btn w-[267px]"><span class="font-black">SIGN UP</span></el-button>
          </div>
        </swiper>

        <div v-if="list.length > 1" class="home-nl-p">
          <div v-for="(item, index) in list.length" :key="item" :class="{'home-nl-p-a': index == activeIndex}" />
        </div>
      </div>
      <!-- 滚动播放站内通知 -->
      <div class="mobile-home-container-header w-full h-[30px]"></div>
      <!-- 游戏分类导航栏 -->
      <div class="home-tab">
        <div
          class="home-tab-btn"
          :class="{active: index === activeTabIndex}"
          v-for="(item, index) in tabList"
          :key="index"
          @click="tabClick(index)"
        >
          {{ item.text }}
        </div>
      </div>

      <div class="hot-games w-full">
        <div class="games-item" v-for="(item, index) in hotGamesList" :key="index">
          <base-game-component :game="item"></base-game-component>
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
              <div v-for="(child, i) in item.children" :key="i" class="games-item">
                <base-game-component :game="child"></base-game-component>
              </div>
            </div>
            <el-button class="game-classification-btn w-full">View All</el-button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const {$importImage} = useNuxtApp();
  const homeContainer = ref(null);
  const list = [
    {
      value: 1,
      text: "V0033",
      title: "V0030",
      img: "banner1",
    },
    {
      value: 2,
      text: "V0033",
      title: "V0030",
      img: "banner1",
    },
    {
      value: 3,
      text: "V0033",
      title: "V0030",
      img: "banner1",
    },
  ];

  const hotGamesList = [
    {
      value: 1,
      text: "V0033",
      title: "V0030",
      src: $importImage("r_bonus", "avif", "images/vip"),
    },
    {
      value: 2,
      text: "V0034",
      title: "V0031",
      src: $importImage("r_rebate", "avif", "images/vip"),
    },
    {
      value: 3,
      text: "V0035",
      title: "V0032",
      src: $importImage("r_weekly", "avif", "images/vip"),
    },
    {
      value: 4,
      text: "V0035",
      title: "V0032",
      src: $importImage("r_roulette_3", "avif", "images/vip"),
    },
    {
      value: 5,
      text: "V0035",
      title: "V0032",
      src: $importImage("r_host", "avif", "images/vip"),
    },
    {
      value: 6,
      text: "V0035",
      title: "V0032",
      src: $importImage("r_exclusive", "avif", "images/vip"),
    },
  ];

  const tabList = [
    {
      value: 1,
      text: "All Games",
      length: 6,
      children: hotGamesList,
    },
    {
      value: 2,
      text: "Slots",
      length: 6,
      children: hotGamesList,
    },
    {
      value: 3,
      text: "Roulette",
      length: 6,
      children: hotGamesList,
    },
    {
      value: 4,
      text: "All Games1",
      length: 6,
      children: hotGamesList,
    },
    {
      value: 5,
      text: "Slots1",
      length: 6,
      children: hotGamesList,
    },
    {
      value: 6,
      text: "Roulette1",
      length: 6,
      children: hotGamesList,
    },
  ];

  const activeIndex = ref(0);
  const activeTabIndex = ref(0);
  const slideChange = (event: {realIndex: number}) => {
    activeIndex.value = event.realIndex;
  };

  const tabClick = (index: number) => {
    // setTimeout(() => {
    //   activeTabIndex.value = index;
    // }, 1000);

    const targetPosition = document.querySelectorAll(".game-classification-box")[index].offsetTop - 110;

    document.querySelectorAll(".mobile-container-main")[0].scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    // document.querySelectorAll(".game-classification-box")[index].scrollIntoView({
    //   behavior: "smooth", // 平滑过渡
    //   block: "center", // 上边框与视窗顶部平齐。默认值
    // });
  };

  const scrollFn = (event: {target: {scrollTop: number}}) => {
    const scrollItems = document.querySelectorAll(".game-classification-box");
    let index = activeTabIndex.value;
    for (let i = scrollItems.length - 1; i >= 0; i--) {
      // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
      let judge = event.target.scrollTop > scrollItems[i].offsetTop;
      if (judge) {
        index = i + 1;
        break;
      } else {
        index = 0;
      }
    }
    activeTabIndex.value = index;
  };

  onMounted(() => {
    document.querySelectorAll(".mobile-container-main")[0].addEventListener("scroll", scrollFn);
  });

  onUnmounted(() => {
    document.querySelectorAll(".mobile-container-main")[0].removeEventListener("scroll", scrollFn);
  });
</script>
<style lang="scss" scoped>
  .mobile-home-container {
    background-color: var(--el-bg-color);
    box-sizing: border-box;
    .mobile-home-container-main {
      height: 100%;
      box-sizing: border-box;
      .container-banner {
        border-radius: var(--border-radius);
        .container-banner-box {
          position: relative;
          height: 0;
          padding-bottom: 54.6%;
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

      .home-tab {
        width: 100%;
        height: 40px;
        border: 1px solid var(--el-text-color-disabled);
        border-radius: var(--border-radius);
        margin-top: 24px;
        overflow-x: auto;
        overflow-y: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2px;
        position: sticky;
        top: 0px;
        background: var(--el-bg-color);
        z-index: 100;
        .active {
          background: var(--el-color-primary);
          border-radius: var(--border-radius);
        }
        .home-tab-btn {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 16px;
          font-size: 12px;
          flex-shrink: 0;
          font-weight: 700;
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
        margin-top: 40px;
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
