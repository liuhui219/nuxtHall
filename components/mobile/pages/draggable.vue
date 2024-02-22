<!-- @format -->

<template>
  <client-only
    ><div
      ref="redpacketRef"
      @click="redpacket"
      class="redpacket-mobile"
      :class="{duration: !isDrag}"
      :style="transformStyle"
      v-if="show"
    >
      <div class="cursor-pointer">
        <!-- <el-progress type="circle" status="success" :width="60" :show-text="false" :stroke-width="4" :percentage="60" /> -->
        <div class="redpacket-image w-full h-full">
          <base-img class="h-[60px] w-[60px] logo" :name="img" type="png" path="images/home" />
        </div>
      </div>
      <div @click="closeFn" class="redpacket-close text-[14px]">
        <el-icon><component is="CloseBold"></component></el-icon>
      </div>
      <div class="redpacket-text"></div></div
  ></client-only>
</template>

<script setup>
  import {useDraggable, useParentElement, useScroll} from "@vueuse/core";
  const props = defineProps({
    initialX: {
      type: String,
      default: "10",
    },
    initialY: {
      type: String,
      default: "100",
    },
    img: {
      type: String,
      default: "",
    },
  });
  const redpacketRef = ref(null);
  const parentEl = useParentElement();
  const {isScrolling} = useScroll(parentEl, {behavior: "auto"});
  const isDrag = ref(false);
  const show = ref(true);

  let timer = null;
  let right = true;
  let firstTime = 0;
  let lastTime = 0;
  let key;
  const closeFn = () => {
    show.value = false;
  };
  const dragStart = (position, event) => {
    isDrag.value = true;
    firstTime = new Date().getTime();
    key = false;
  };

  const dragEnd = (position, event) => {
    isDrag.value = false;
    lastTime = new Date().getTime();
    if (lastTime - firstTime < 200) {
      //如果这个时间差小于200  ，就把锁打开
      key = true;
    }
    const innerWidth = document.querySelector(".mobile-root").getBoundingClientRect().width;
    const innerHeight = document.querySelector(".mobile-root").getBoundingClientRect().height;
    const elWidth = redpacketRef.value?.getBoundingClientRect().width;
    const elHeight = redpacketRef.value?.getBoundingClientRect().height;
    let offsetLeft = document.querySelector(".mobile-root").offsetLeft;

    if (position.x - offsetLeft <= (innerWidth - elWidth) / 2) {
      position.x = props.initialX + offsetLeft;
      right = false;
    }
    if (position.x - offsetLeft >= (innerWidth - elWidth) / 2) {
      position.x = innerWidth - elWidth - props.initialX - 7 + offsetLeft;
      right = true;
    }
    if (position.y <= 100) {
      position.y = 100;
    }
    if (position.y >= innerHeight - elHeight - 100) {
      position.y = innerHeight - elHeight - props.initialY;
    }
  };

  const {x, y, style, position} = useDraggable(redpacketRef, {
    initialValue: {x: 10, y: 100},
    preventDefault: true,
    onStart: dragStart,
    onEnd: dragEnd,
    pointerTypes: [],
  });

  const transformStyle = computed(() => `transform: translate(${position.value.x}px, ${position.value.y}px)`);

  onMounted(() => {
    let innerWidth = document.querySelector(".mobile-root").getBoundingClientRect().width;
    let innerHeight = document.querySelector(".mobile-root").getBoundingClientRect().height;
    let offsetLeft = document.querySelector(".mobile-root").offsetLeft;

    position.value.x = innerWidth - 60 - props.initialX - 7 + offsetLeft;
    position.value.y = innerHeight - 60 - props.initialY;
  });

  watch(isScrolling, (newVal, oldVal) => {
    let innerWidth = document.querySelector(".mobile-root").getBoundingClientRect().width;
    let offsetLeft = document.querySelector(".mobile-root").offsetLeft;
    let elWidth = 60;

    if (newVal) {
      clearTimeout(timer);
      timer = null;
      if (!right) {
        position.value.x = offsetLeft - elWidth / 2;
      }
      if (right) {
        position.value.x = innerWidth - elWidth / 2 + offsetLeft;
      }
    } else {
      timer = setTimeout(() => {
        if (!right) {
          position.value.x = 10 + offsetLeft;
        }
        if (right) {
          position.value.x = innerWidth - elWidth - props.initialX - 7 + offsetLeft;
        }
      }, 500);
    }
  });

  const redpacket = () => {
    openPopup("moneyRain");
  };
</script>

<style lang="scss" scoped>
  .redpacket-mobile {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 290;
    touch-action: none;
    left: 0;
    top: 0;

    .cursor-pointer {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      overflow: hidden;

      .el-progress {
        position: absolute;
        z-index: 1000;
        left: 0;
        top: 0;
      }
      // .redpacket-image {
      //   background: linear-gradient(90deg, #f90, #ec0039);
      // }
    }
    .redpacket-close {
      position: absolute;
      top: -7px;
      right: -7px;
    }
  }
  .duration {
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
