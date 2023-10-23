<!-- @format -->

<template>
  <div class="vip-nl-container">
    <div class="vip-nl-banner" :style="{backgroundImage: `url(${$importImage('banner_pc', 'avif', 'images/vip')})`}">
      <div class="vip-nl-banner-title">
        <div class="vip-nl-club">
          {{ $t("V0026") }}
        </div>
        <div class="leading-[1.6] mt-[20px] mb-[27px]">
          {{ $t("V0027") }}
        </div>

        <el-button
          type="warning"
          color="#ffc700"
          class="sys-btn btn-main-text w-[350px] !h-[63PX] !text-[20px]"
          @click="openLoginOrRegister()"
        >
          {{ $t("V0028") }}
        </el-button>
      </div>
    </div>

    <div class="vip-nl-setup-container">
      <h3 class="vip-nl-title">{{ $t("V0029") }}</h3>
      <div class="vip-nl-setup-context">
        <div
          v-for="item in setupList"
          :key="item.value"
          class="vip-nl-setup-context-item"
          :class="[`setup-${item.value}`]"
        >
          <div class="vip-nl-setup-context-container">
            <div class="vip-nl-setup-title">{{ $t(item.title) }}</div>
            <p class="vip-nl-setup-context-text">{{ $t(item.text) }}</p>
          </div>
          <div class="vip-nl-setup-image">
            <img :src="item.img" />
          </div>
        </div>
      </div>
    </div>

    <div class="vip-nl-reward-item-container">
      <h3 class="flex justify-between items-center vip-nl-title">
        <span>{{ $t("V0036") }}</span>
        <div class="flex items-center ml-[6px]">
          <BaseSwiperBtn :swiper="rewardRef" :disabled="true" :type="other" />
        </div>
      </h3>
      <swiper
        ref="rewardRef"
        :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectCoverflow, SwiperPagination, SwiperEffectCreative]"
        :slides-per-view="4"
        :space-between="16"
        :slides-per-group="1"
        :loop="false"
        @slide-change="slideChange"
      >
        <swiper-slide v-for="(item, index) in vipStore" :key="index" class="vip-nl-reward-item">
          <div class="vip-nl-reward-item-context">
            <div class="vip-nl-reward-item-title">{{ $t(item.title) }}</div>
            <p>{{ $t(item.text) }}</p>
          </div>
          <div :style="{backgroundImage: `url(${item.img})`}" class="vip-nl-reward-item-image" />
        </swiper-slide>
      </swiper>
      <div v-if="vipStore.length > 4" class="vip-nl-p">
        <div
          v-for="(item, index) in Math.max(1, vipStore.length - 3)"
          :key="item"
          :class="{'vip-nl-p-a': index == activeIndex}"
          @click="changeSlide(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ArrowLeft, ArrowRight} from "@element-plus/icons-vue";
  definePageMeta({
    title: "Meus Jogos",
    name: "体育",
    icon: "Grid",
  });

  const rewardRef = ref();
  const activeIndex = ref(0);
  const {$importImage} = useNuxtApp();
  const slideChange = (event) => {
    activeIndex.value = event.realIndex;
  };
  const changeSlide = (index) => {
    rewardRef.value?.$el.swiper.slideTo(index);
  };
  const setupList = [
    {
      value: 1,
      text: "V0033",
      title: "V0030",
      img: $importImage("setup_1_pc", "avif", "images/vip"),
    },
    {
      value: 2,
      text: "V0034",
      title: "V0031",
      img: $importImage("setup_2_pc", "avif", "images/vip"),
    },
    {
      value: 3,
      text: "V0035",
      title: "V0032",
      img: $importImage("setup_3_pc", "avif", "images/vip"),
    },
  ];

  const vipStore = [
    {
      value: 1,
      text: "V0033",
      title: "V0030",
      img: $importImage("r_bonus", "avif", "images/vip"),
    },
    {
      value: 2,
      text: "V0034",
      title: "V0031",
      img: $importImage("r_rebate", "avif", "images/vip"),
    },
    {
      value: 3,
      text: "V0035",
      title: "V0032",
      img: $importImage("r_weekly", "avif", "images/vip"),
    },
    {
      value: 4,
      text: "V0035",
      title: "V0032",
      img: $importImage("r_roulette_3", "avif", "images/vip"),
    },
    {
      value: 5,
      text: "V0035",
      title: "V0032",
      img: $importImage("r_host", "avif", "images/vip"),
    },
    {
      value: 6,
      text: "V0035",
      title: "V0032",
      img: $importImage("r_exclusive", "avif", "images/vip"),
    },
    {
      value: 7,
      text: "V0035",
      title: "V0032",
      img: $importImage("r_luxury", "avif", "images/vip"),
    },
  ];
</script>

<style lang="scss" scoped>
  :root {
    --setup_1_color: #5f9aff;
  }

  .vip-nl-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 50px;
    padding-top: 30px;

    .vip-nl-title {
      color: #fff;
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 24px;
    }
    .vip-nl-banner {
      background-size: 100% 100%;
      border-radius: 6px;
      height: 0;
      padding-bottom: 25.078125%;
      position: relative;
      width: 100%;
      .vip-nl-banner-title > div {
        padding-left: 13px;
      }
      .vip-nl-banner-title {
        bottom: 0;
        color: #fff;
        display: flex;
        flex-direction: column;
        font-size: 22px;
        height: 100%;
        justify-content: center;
        left: 26px;
        position: absolute;
        width: 700px;

        .vip-nl-club {
          color: #ffc700;
          font-size: 40px;
          font-weight: 700;
          line-height: 1;
          text-shadow: 0 2px 2px rgba(0, 0, 0, 0.34);
          text-transform: capitalize;
        }
      }
    }

    .vip-nl-setup-container {
      position: relative;

      .vip-nl-setup-context {
        display: flex;
        gap: 22px;
        width: 100%;

        .vip-nl-setup-context-item {
          align-items: flex-end;
          background: #262828;
          border: 0.5px solid #3e4142;
          border-radius: 6px;
          display: flex;
          flex: 1;
          flex-shrink: 0;
          font-size: 18px;
          height: 190px;
          overflow: hidden;
          position: relative;

          .vip-nl-setup-context-container {
            display: flex;
            flex-direction: column;
            gap: 14px;
            height: 100%;
            padding: 30px 10px 30px 20px;
            .vip-nl-setup-title {
              color: #ffc700;
              font-size: 24px;
              font-weight: 700;
              text-shadow: 0 2px 2px rgba(0, 0, 0, 0.34);
              text-transform: capitalize;
              white-space: nowrap;
            }
            .vip-nl-setup-context-text {
              color: #b2babb;
              font-size: 18px;
              font-weight: 500;
            }
          }
          .vip-nl-setup-image {
            align-self: center;
            border-radius: 50%;
            flex-shrink: 0;
            height: 120px;
            margin-right: 18px;
            position: relative;
            width: 103px;
            z-index: 0;
          }
        }
      }
    }

    .vip-nl-reward-item-container {
      .vip-nl-reward-item {
        height: 246px;
        flex-shrink: 0;
        border-radius: 6px;
        border-radius: 12px;
        background: #262828;
        border: 1px solid #373939;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;

        .vip-nl-reward-item-context {
          flex: 1;
          font-size: 16px;
          text-transform: capitalize;
          line-height: 20px;
          text-align: center;
          padding: 0 20px;
          .vip-nl-reward-item-title {
            color: #ffc700;
            text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.34);
            font-size: 22px;
            font-weight: 700;
            line-height: 24px; /* 109.091% */
            text-transform: capitalize;
            margin-bottom: 4px;
            white-space: nowrap;
          }
        }
        .vip-nl-reward-item-image {
          width: 140px;
          height: 140px;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
        }
      }
      .vip-nl-p {
        width: 681px;
        margin: 24px auto 0;
        height: 6px;
        border-radius: 3px;
        background: #262828;

        display: flex;
        & > div {
          flex: 1;
          height: 6px;
          border-radius: 3px;
          transition: all 0.3s;
          background: transparent;
          cursor: pointer;
        }
        & > div:not(.vip-nl-p-a):hover {
          background: #373939;
        }
        .vip-nl-p-a {
          background: #ffc700;
        }
      }
    }
  }
</style>
