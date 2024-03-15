<!-- @format -->

<template>
  <div class="mobile-home-container-header flex w-full h-[30px] overflow-y-hidden">
    <BaseIcon name="notifications" />
    <div ref="container" class="mobile-home-container-news flex h-full">
      <div class="mobile-home-container-news-main flex h-full" ref="newsContainer">
        <div ref="containerNews" class="mobile-home-container-news-box flex h-full">
          <span v-for="(item, index) in newsList" :key="index">{{ item.text }}</span>
        </div>
        <div class="mobile-home-container-news-box flex h-full">
          <span v-for="(item, index) in newsList" :key="index">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // message_notifications
  const newsList = ref([
    {
      text: "央行通知：目前巴西央行临时维护将影响部分希望提款的用户，对于出现的意外情况我们深表歉意，我们将尽快解决。",
    },
    {
      text: "央行通知：目前巴西央行临时维护将影响部分希望提款的用户，对于出现的意外情况我们深表歉意，我们将尽快解决。",
    },
  ]);
  const containerNews = ref(null);

  const newsContainer = ref(null);
  let style;
  onMounted(() => {
    nextTick(() => {
      let containerNewsWidth = 0 - containerNews.value.offsetWidth + "px";

      const dymanicStyle = `@keyframes scroll-left {
        0% {
          transform: translateX(0px);
        }
        100% {
          transform: translateX(${containerNewsWidth});
        }
      }`;
      style = document.createElement("style");
      style.innerHTML = dymanicStyle;

      document.body.appendChild(style);

      let scrollLength = containerNews.value.offsetWidth;
      let scrollTime = scrollLength / 40;
      newsContainer.value.style.animationDuration = `${scrollTime}s`;
    });
  });

  onUnmounted(() => {
    document.body.removeChild(style);
  });
</script>

<style lang="scss" scoped>
  .mobile-home-container-header {
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
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
</style>
