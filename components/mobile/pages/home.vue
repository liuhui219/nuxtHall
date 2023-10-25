<!-- @format -->

<template>
  <div class="mobile-home-container w-full h-full overflow-x-hidden">
    <div class="mobile-home-container-header w-full h-[30px]"></div>
    <div class="mobile-home-container-main w-full px-[10px] pt-[20px]">
      <div class="container-banner w-full">
        <swiper
          ref="rewardRef"
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
            <base-img class="w-full" :name="item.img" type="png" path="images/home" />
          </swiper-slide>
          <div class="mobile-home-sign absolute">
            <el-button class="mobile-home-sign-btn w-[267px]"><span class="font-black">SIGN UP</span></el-button>
          </div>
        </swiper>
        <div v-if="list.length > 1" class="home-nl-p">
          <div v-for="(item, index) in list.length" :key="item" :class="{'home-nl-p-a': index == activeIndex}" />
        </div>

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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

  const tabList = [
    {
      value: 1,
      text: "All Games",
    },
    {
      value: 2,
      text: "Slots",
    },
    {
      value: 3,
      text: "Roulette",
    },
  ];

  const activeIndex = ref(0);
  const activeTabIndex = ref(0);
  const slideChange = (event: {realIndex: number}) => {
    activeIndex.value = event.realIndex;
  };

  const tabClick = (index: number) => {
    activeTabIndex.value = index;
  };
</script>
<style lang="scss" scoped>
  .mobile-home-container {
    background-color: var(--el-bg-color);
    box-sizing: border-box;
    .mobile-home-container-main {
      height: calc(100% - 30px);
      box-sizing: border-box;
      .container-banner {
        border-radius: var(--border-radius);
        .mobile-home-sign {
          top: 80%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 100;
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
        height: 35px;
        border: 1px solid var(--el-text-color-disabled);
        border-radius: var(--border-radius);
        margin-top: 24px;
        overflow-x: auto;
        overflow-y: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2px;
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
        }
      }
    }
  }
</style>
