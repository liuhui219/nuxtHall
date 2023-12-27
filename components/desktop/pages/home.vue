<!-- @format -->

<template>
  <!-- banner -->
  <div class="home-view-pc flex flex-col gap-[30px] pb-[32px]">
    <div class="home-view-pc-banner w-full">
      <swiper
        :modules="[SwiperAutoplay, SwiperNavigation, SwiperParallax]"
        :slides-per-view="1"
        :slides-per-group="1"
        :loop="true"
        :parallax="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide v-for="(item, index) in list" :key="index" class="flex justify-center">
          <div class="container-banner-box w-full">
            <LazyBaseImg
              class="w-full banner-image"
              :scrollContainer="'.home-view-pc-banner .swiper'"
              :name="item.img"
              :type="item.type"
              path="images/home"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 滚动播放站内通知 -->
    <div class="home-container-header flex w-full overflow-y-hidden">
      <BaseIcon name="notifications" />
      <div class="home-container-news flex h-full">
        <div class="home-container-news-main flex h-full">
          <div ref="containerNews" class="home-container-news-box flex h-full">
            <span v-for="(item, index) in newsList" :key="index">{{ item.text }}</span>
          </div>
          <div ref="containerNews" class="home-container-news-box flex h-full">
            <span v-for="(item, index) in newsList" :key="index">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- hot -->
    <section class="hot-games w-full">
      <div class="section-title mb-[12px] p-[0!important] flex justify-between">
        <div data-v-5af0f1b2="" class="flex items-center justify-start">Grandes Vitórias Recentes</div>
        <div class="shrink-0 flex items-center">
          <BaseSwiperBtn :swiper="rewardRef" :disabled="false"></BaseSwiperBtn>
        </div>
      </div>
      <div>
        <swiper
          ref="rewardRef"
          :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectCoverflow, SwiperPagination, SwiperEffectCreative]"
          :slides-per-view="6.7"
          :space-between="24"
          :slides-per-group="2"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          @slide-change="slideChange"
        >
          <swiper-slide v-for="(item, index) in hotGamesList" :key="index" class="flex justify-center">
            <div class="hot-games-box w-full">
              <base-game-component @click="openGame(item)" mask :game="item"></base-game-component>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <div class="home-tab w-full">
      <swiper
        :modules="[SwiperNavigation, SwiperPagination]"
        :slides-per-view="7"
        :space-between="24"
        @slide-change="slideChange"
      >
        <swiper-slide v-for="(item, index) in tabList" :key="index" class="flex justify-center">
          <div class="home-tab-btn" :class="{active: index === activeTabIndex}" :key="index" @click="tabClick(index)">
            <i class="iconfont" :class="`icon-${item.icon}`"></i>
            {{ item.text }}
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 游戏分类 -->
    <section class="game-classification mb-[12px] w-full" v-for="(item, index) in tabList" :key="index">
      <div class="section-title p-[0!important] flex justify-between">
        <div data-v-5af0f1b2="" class="flex items-center justify-start">{{ item.text }}</div>
        <div class="shrink-0 flex items-center">
          <BaseSwiperBtn :swiper="nodes[index]" :disabled="true"></BaseSwiperBtn>
        </div>
      </div>
      <div>
        <swiper
          :ref="setRef"
          :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectCoverflow]"
          :slides-per-view="6"
          :space-between="24"
          :slides-per-group="1"
        >
          <swiper-slide v-for="count in Math.ceil(item.children.length / 2)" :key="count" class="flex justify-center">
            <div class="w-full flex flex-col gap-y-[24px]">
              <base-game-component
                key="(count - 1) * 2"
                @click="openGame(item.children[(count - 1) * 2])"
                mask
                :game="item.children[(count - 1) * 2]"
              ></base-game-component>
              <base-game-component
                key="(count - 1) * 2 + 1"
                @click="openGame(item.children[(count - 1) * 2 + 1])"
                mask
                :game="item.children[(count - 1) * 2 + 1]"
              ></base-game-component>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
  <LazyDesktopPagesFooter />
</template>

<script setup lang="ts">
  import {useThrottleFn, useNetwork} from "@vueuse/core";
  const {isOnline} = useNetwork();
  const {$importImage} = useNuxtApp();
  const router = useRouter();
  const rewardRef = ref();
  const nodes = reactive<any>([]);
  const setRef = (el: any) => {
    if (el) {
      nodes.push(el);
    }
  };

  const url = games.gameURL();
  const gamereload = gameReload();
  const containerNews = ref<any>(null);
  const containerNewsWidth = ref<any>(null);
  const openGame = (item: {roomId: string}) => {
    navigateTo({
      path: "/game",
      query: {
        roomId: item.roomId,
      },
    });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "customEvent",
      customValue: "123",
    });

    gamereload.value++;
  };
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
    {
      value: 1,
      text: "V0033",
      title: "V0030",
      roomId: "4600",
      url: "",
      src: $importImage("4600_pic", "png", "images/games"),
    },
    {
      value: 2,
      text: "V0034",
      title: "V0031",
      roomId: "4700",
      url: "",
      src: $importImage("4700_pic", "png", "images/games"),
    },
    {
      value: 3,
      text: "V0035",
      title: "V0032",
      roomId: "4800",
      url: "",
      src: $importImage("4800_pic", "png", "images/games"),
    },
    {
      value: 4,
      text: "V0035",
      title: "V0032",
      roomId: "4900",
      url: "",
      src: $importImage("4900_pic", "png", "images/games"),
    },
    {
      value: 5,
      text: "V0035",
      title: "V0032",
      roomId: "5000",
      url: "",
      src: $importImage("5000_pic", "png", "images/games"),
    },
    {
      value: 6,
      text: "V0035",
      title: "V0032",
      roomId: "5100",
      src: $importImage("5100_pic", "png", "images/games"),
    },
    {
      value: 1,
      text: "V0033",
      title: "V0030",
      roomId: "5200",
      url: "",
      src: $importImage("5200_pic", "png", "images/games"),
    },
    {
      value: 2,
      text: "V0034",
      title: "V0031",
      roomId: "5300",
      url: "",
      src: $importImage("5300_pic", "png", "images/games"),
    },
    {
      value: 1,
      text: "V0033",
      title: "V0030",
      roomId: "5200",
      url: "",
      src: $importImage("5200_pic", "png", "images/games"),
    },
    {
      value: 2,
      text: "V0034",
      title: "V0031",
      roomId: "5300",
      url: "",
      src: $importImage("5300_pic", "png", "images/games"),
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
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "4600",
        url: "",
        src: $importImage("4600_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "4700",
        url: "",
        src: $importImage("4700_pic", "png", "images/games"),
      },
      {
        value: 3,
        text: "V0035",
        title: "V0032",
        roomId: "4800",
        url: "",
        src: $importImage("4800_pic", "png", "images/games"),
      },
      {
        value: 4,
        text: "V0035",
        title: "V0032",
        roomId: "4900",
        url: "",
        src: $importImage("4900_pic", "png", "images/games"),
      },
      {
        value: 5,
        text: "V0035",
        title: "V0032",
        roomId: "5000",
        url: "",
        src: $importImage("5000_pic", "png", "images/games"),
      },
      {
        value: 6,
        text: "V0035",
        title: "V0032",
        roomId: "5100",
        src: $importImage("5100_pic", "png", "images/games"),
      },
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "5200",
        url: "",
        src: $importImage("5200_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "5300",
        url: "",
        src: $importImage("5300_pic", "png", "images/games"),
      },
      {
        value: 3,
        text: "V0035",
        title: "V0032",
        roomId: "5400",
        url: "",
        src: $importImage("5400_pic", "png", "images/games"),
      },
      {
        value: 4,
        text: "V0035",
        title: "V0032",
        roomId: "5500",
        url: "",
        src: $importImage("5500_pic", "png", "images/games"),
      },
      {
        value: 5,
        text: "V0035",
        title: "V0032",
        roomId: "5600",
        url: "",
        src: $importImage("5600_pic", "png", "images/games"),
      },
      {
        value: 6,
        text: "V0035",
        title: "V0032",
        roomId: "5700",
        src: $importImage("5700_pic", "png", "images/games"),
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
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "6300",
        url: "",
        src: $importImage("6300_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "6400",
        url: "",
        src: $importImage("6400_pic", "png", "images/games"),
      },
      {
        value: 3,
        text: "V0035",
        title: "V0032",
        roomId: "6500",
        url: "",
        src: $importImage("6500_pic", "png", "images/games"),
      },
      {
        value: 4,
        text: "V0035",
        title: "V0032",
        roomId: "6600",
        url: "",
        src: $importImage("6600_pic", "png", "images/games"),
      },
      {
        value: 5,
        text: "V0035",
        title: "V0032",
        roomId: "6700",
        url: "",
        src: $importImage("6700_pic", "png", "images/games"),
      },
      {
        value: 6,
        text: "V0035",
        title: "V0032",
        roomId: "6800",
        src: $importImage("6800_pic", "png", "images/games"),
      },
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "6900",
        url: "",
        src: $importImage("6900_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "7000",
        url: "",
        src: $importImage("7000_pic", "png", "images/games"),
      },
      {
        value: 3,
        text: "V0035",
        title: "V0032",
        roomId: "7100",
        url: "",
        src: $importImage("7100_pic", "png", "images/games"),
      },
      {
        value: 4,
        text: "V0035",
        title: "V0032",
        roomId: "7200",
        url: "",
        src: $importImage("7200_pic", "png", "images/games"),
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
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "29000",
        url: "",
        src: $importImage("29000_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "29100",
        url: "",
        src: $importImage("29100_pic", "png", "images/games"),
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
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "12000",
        url: "",
        src: $importImage("12000_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "12100",
        url: "",
        src: $importImage("12100_pic", "png", "images/games"),
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
      {
        value: 1,
        text: "V0033",
        title: "V0030",
        roomId: "23800",
        url: "",
        src: $importImage("23800_pic", "png", "images/games"),
      },
      {
        value: 2,
        text: "V0034",
        title: "V0031",
        roomId: "27100",
        url: "",
        src: $importImage("27100_pic", "png", "images/games"),
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
  const activeTabIndex = ref(null);
  const slideChange = (event: {realIndex: number}) => {
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
  }, 50);

  onMounted(async () => {
    containerNewsWidth.value = 0 - containerNews.value.offsetWidth + "px";
    activeTabIndex.value = 0;
    document.querySelectorAll(".page-container-main") &&
      document
        .querySelectorAll(".page-container-main")[0]
        .addEventListener("scroll", scrollFn as unknown as EventListener);
  });
  onUnmounted(() => {});
</script>

<style lang="scss" scoped>
  $end-position: v-bind(containerNewsWidth);
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

    .home-container-header {
      flex-direction: row;
      align-items: center;
      margin-top: 20px;
      border: 0.5px solid var(--el-fill-color-light);
      -moz-border-radius: 6px;
      border-radius: 6px;
      padding: 15px 20px;
      i {
        font-size: 20px;
      }
    }

    .home-container-news {
      flex: 1;
      overflow-y: hidden;
      margin-left: 6px;
    }

    .home-container-news-main {
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

      .home-container-news-box {
        white-space: nowrap;
        display: flex;

        flex-direction: row;
        align-items: center;
        & > span {
          display: block;
          padding: 0 20px;
          min-width: 50%;
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
      padding: 15px 0px;
      position: sticky;
      top: 0px;
      background-color: var(--el-bg-color);
      // background-image: radial-gradient(transparent 1px, var(--el-fill-color) 1px);
      z-index: 100;

      .swiper {
        width: 100%;
        height: 100%;
      }

      .home-tab-btn {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 16px;
        font-size: 14px;
        flex-shrink: 0;
        font-weight: 700;
        cursor: pointer;
        color: var(--el-text-color-placeholder);
        background-color: var(--el-bg-color-overlay);
        border-radius: var(--border-radius);
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
