<!-- @format -->

<template>
  <!-- banner -->
  <div class="home-view-pc flex flex-col gap-[30px] pb-[32px]">
    <div class="home-view-pc-banner w-full">
      <swiper
        :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectCoverflow, SwiperPagination, SwiperEffectCreative]"
        :slides-per-view="1"
        :slides-per-group="1"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide v-for="(item, index) in list" :key="index" class="flex justify-center">
          <div class="container-banner-box w-full">
            <base-img class="w-full banner-image" :name="item.img" :type="item.type" path="images/home" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="home-tab w-full">
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
    <!-- hot -->
    <section class="hot-games w-full">
      <div class="section-title mb-[12px] p-[0!important] flex justify-between">
        <div data-v-5af0f1b2="" class="flex items-center justify-start">Grandes Vitórias Recentes</div>
        <div class="shrink-0 flex items-center">
          <BaseSwiperBtn :swiper="rewardRef" :disabled="false" :type="'other'"></BaseSwiperBtn>
        </div>
      </div>
      <div>
        <swiper
          ref="rewardRef"
          :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectCoverflow, SwiperPagination, SwiperEffectCreative]"
          :slides-per-view="7"
          :space-between="24"
          :slides-per-group="1"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          @slide-change="slideChange"
        >
          <swiper-slide v-for="(item, index) in hotGamesList" :key="index" class="flex justify-center">
            <div class="hot-games-box w-full">
              <base-game-component :game="item"></base-game-component>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- 游戏分类 -->
    <section class="game-classification w-full" v-for="(item, index) in tabList" :key="index">
      <div class="section-title mb-[12px] p-[0!important] flex justify-between">
        <div data-v-5af0f1b2="" class="flex items-center justify-start">{{ item.text }}</div>
        <div class="shrink-0 flex items-center">
          <BaseSwiperBtn :swiper="nodes[index]" :disabled="true" :type="'other'" :index="index"></BaseSwiperBtn>
        </div>
      </div>
      <div>
        <swiper
          :ref="
            (el) => {
              nodes[index] = el;
            }
          "
          :index="index"
          :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectCoverflow]"
          :slides-per-view="6"
          :space-between="24"
          :slides-per-group="1"
        >
          <swiper-slide v-for="count in Math.ceil(item.children.length / 2)" :key="count" class="flex justify-center">
            <div class="w-full flex flex-col gap-y-[24px]">
              <base-game-component :game="item.children[(count - 1) * 2]"></base-game-component>
              <base-game-component :game="item.children[(count - 1) * 2 + 1]"></base-game-component>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import {useThrottleFn} from "@vueuse/core";
  const {$importImage} = useNuxtApp();
  const rewardRef = ref();
  const nodes = ref<any>({});
  const list = [
    {
      value: 1,
      text: "V0033",
      title: "V0030",
      img: "rain1",
      type: "png",
    },
    {
      value: 2,
      text: "V0033",
      title: "V0030",
      img: "banner50-2",
      type: "jpg",
    },
    {
      value: 3,
      text: "V0033",
      title: "V0030",
      img: "backcash1",
      type: "jpg",
    },
  ];

  const hotGamesList = [
    {
      value: 1,
      text: "V0033",
      title: "V0030",
      url: "https://mobile.easygamehome.com/4900/?account_name=613382_101085247&account_id=101085247&platform_token=cJwcMLuWXHf4JzodzSGxSirvnH99sQrK&rate=1&roomID=4900&lang=BR&apimode=1",
      src: $importImage("111902008", "jpg", "images/games"),
    },
    {
      value: 2,
      text: "V0034",
      title: "V0031",
      url: "https://mobile.easygamehome.com/27200/?account_name=613382_101085247&account_id=101085247&platform_token=VSUfauRHtTaihbuzVyR5dF8yuttgMHsR&rate=1&roomID=27200&lang=BR&apimode=1",
      src: $importImage("111902051", "jpg", "images/games"),
    },
    {
      value: 3,
      text: "V0035",
      title: "V0032",
      url: "https://mobile.easygamehome.com/4300/?account_name=613382_101085247&account_id=101085247&platform_token=s1ucgorP40YwQBcF0CRt0pzncEu3sP84&rate=1&roomID=4300&lang=BR&apimode=1",
      src: $importImage("111902053", "jpg", "images/games"),
    },
    {
      value: 4,
      text: "V0035",
      title: "V0032",
      url: "",
      src: $importImage("111902075", "jpg", "images/games"),
    },
    {
      value: 5,
      text: "V0035",
      title: "V0032",
      src: $importImage("111902076", "jpg", "images/games"),
    },
    {
      value: 6,
      text: "V0035",
      title: "V0032",
      src: $importImage("111902079", "jpg", "images/games"),
    },
    {
      value: 1,
      text: "V0033",
      title: "V0030",
      url: "https://mobile.easygamehome.com/4900/?account_name=613382_101085247&account_id=101085247&platform_token=cJwcMLuWXHf4JzodzSGxSirvnH99sQrK&rate=1&roomID=4900&lang=BR&apimode=1",
      src: $importImage("111902008", "jpg", "images/games"),
    },
    {
      value: 2,
      text: "V0034",
      title: "V0031",
      url: "https://mobile.easygamehome.com/27200/?account_name=613382_101085247&account_id=101085247&platform_token=VSUfauRHtTaihbuzVyR5dF8yuttgMHsR&rate=1&roomID=27200&lang=BR&apimode=1",
      src: $importImage("111902051", "jpg", "images/games"),
    },
    {
      value: 3,
      text: "V0035",
      title: "V0032",
      url: "https://mobile.easygamehome.com/4300/?account_name=613382_101085247&account_id=101085247&platform_token=s1ucgorP40YwQBcF0CRt0pzncEu3sP84&rate=1&roomID=4300&lang=BR&apimode=1",
      src: $importImage("111902053", "jpg", "images/games"),
    },
    {
      value: 4,
      text: "V0035",
      title: "V0032",
      url: "",
      src: $importImage("111902075", "jpg", "images/games"),
    },
    {
      value: 5,
      text: "V0035",
      title: "V0032",
      src: $importImage("111902076", "jpg", "images/games"),
    },
    {
      value: 6,
      text: "V0035",
      title: "V0032",
      src: $importImage("111902079", "jpg", "images/games"),
    },
    {
      value: 1,
      text: "V0033",
      title: "V0030",
      url: "https://mobile.easygamehome.com/4900/?account_name=613382_101085247&account_id=101085247&platform_token=cJwcMLuWXHf4JzodzSGxSirvnH99sQrK&rate=1&roomID=4900&lang=BR&apimode=1",
      src: $importImage("111902008", "jpg", "images/games"),
    },
    {
      value: 2,
      text: "V0034",
      title: "V0031",
      url: "https://mobile.easygamehome.com/27200/?account_name=613382_101085247&account_id=101085247&platform_token=VSUfauRHtTaihbuzVyR5dF8yuttgMHsR&rate=1&roomID=27200&lang=BR&apimode=1",
      src: $importImage("111902051", "jpg", "images/games"),
    },
    {
      value: 3,
      text: "V0035",
      title: "V0032",
      url: "https://mobile.easygamehome.com/4300/?account_name=613382_101085247&account_id=101085247&platform_token=s1ucgorP40YwQBcF0CRt0pzncEu3sP84&rate=1&roomID=4300&lang=BR&apimode=1",
      src: $importImage("111902053", "jpg", "images/games"),
    },
    {
      value: 4,
      text: "V0035",
      title: "V0032",
      url: "",
      src: $importImage("111902075", "jpg", "images/games"),
    },
    {
      value: 5,
      text: "V0035",
      title: "V0032",
      src: $importImage("111902076", "jpg", "images/games"),
    },
    {
      value: 6,
      text: "V0035",
      title: "V0032",
      src: $importImage("111902079", "jpg", "images/games"),
    },
  ];

  const tabList = [
    {
      value: 1,
      text: "All Games",
      length: 6,
      icon: "lobby",
      children: hotGamesList,
    },
    {
      value: 2,
      text: "Originais",
      length: 6,
      icon: "fire",
      children: hotGamesList,
    },
    {
      value: 3,
      text: "Slots",
      length: 6,
      icon: "cherry1",
      children: hotGamesList,
    },
    {
      value: 4,
      text: "Ao vivo",
      length: 6,
      icon: "play1",
      children: hotGamesList,
    },
    {
      value: 5,
      text: "Lazer",
      length: 6,
      icon: "badge1",
      children: hotGamesList,
    },
    {
      value: 6,
      text: "Shows",
      length: 6,
      icon: "tv-one",
      children: hotGamesList,
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
  const slideChange = (event) => {
    activeIndex.value = event.realIndex;
  };

  const tabClick = (index: number) => {
    const element = document.querySelectorAll(".game-classification")[index] as HTMLDivElement;
    const targetPosition = element.offsetTop - 80;

    document.querySelectorAll(".page-container-main")[0].scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const scrollFn = useThrottleFn((event: {target: {scrollTop: number}}) => {
    const scrollItems = document.querySelectorAll(".game-classification");
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
  }, 10);

  onMounted(async () => {
    document.querySelectorAll(".page-container-main") &&
      document
        .querySelectorAll(".page-container-main")[0]
        .addEventListener("scroll", scrollFn as unknown as EventListener);
  });
  onUnmounted(() => {});
</script>

<style lang="scss" scoped>
  .home-view-pc {
    position: relative;
    margin: 0 auto;
    width: 100%;
    .home-view-pc-banner {
      position: relative;
      .container-banner-box {
        position: relative;
        height: 0;
        padding-bottom: 29.1%;
        border-radius: var(--border-radius);
        overflow: hidden;
      }
    }

    .home-tab {
      height: 70px;
      //border: 1px solid var(--el-text-color-disabled);
      // border-radius: var(--border-radius);
      // background-size: 2px 2px;
      // backdrop-filter: saturate(50%) blur(20px);
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 15px 12px;
      position: sticky;
      top: 0px;
      background-color: var(--el-bg-color);
      // background-image: radial-gradient(transparent 1px, var(--el-fill-color) 1px);
      z-index: 100;

      .home-tab-btn {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 16px;
        font-size: 14px;
        flex-shrink: 0;
        font-weight: 700;
        margin-right: 15px;
        cursor: pointer;
        color: var(--el-text-color-placeholder);
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
        font-size: 20px;
        padding-right: 8px;
        font-weight: bold;
      }
    }

    .section-title {
      color: var(--el-text-color-primary);
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 24px;
    }

    .hot-games {
      display: flex;
      flex-direction: column;
      position: relative;

      .hot-games-box {
        position: relative;
        height: 0;
        padding-bottom: 100%;
        border-radius: var(--border-radius);
        overflow: hidden;
      }
    }
    .game-classification {
      display: flex;
      flex-direction: column;
      position: relative;
    }
  }
</style>
