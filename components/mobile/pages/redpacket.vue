<!-- @format -->

<template>
  <client-only
    ><div ref="redpacketRef" class="redpacket-mobile" :style="transformStyle" @click="redpacket">
      <div class="cursor-pointer">
        <el-progress type="circle" status="success" :width="60" :show-text="false" :stroke-width="6" :percentage="10" />
        <div class="redpacket-image w-full h-full">
          <base-img class="h-[60px] w-[60px] logo" name="redpacket" type="avif" path="images/home" />
        </div>
      </div>
      <div class="redpacket-text"></div></div
  ></client-only>
</template>

<script setup>
  import {useDraggable} from "@vueuse/core";
  import {isClient} from "@vueuse/shared";
  const redpacketRef = ref(null);

  const dragEnd = (position, event) => {
    const innerWidth = document.querySelector(".mobile-root").getBoundingClientRect().width;
    const innerHeight = document.querySelector(".mobile-root").getBoundingClientRect().height;
    const elWidth = redpacketRef.value?.getBoundingClientRect().width;
    const elHeight = redpacketRef.value?.getBoundingClientRect().height;
    let offsetLeft = document.querySelector(".mobile-root").offsetLeft;

    if (position.x - offsetLeft <= (innerWidth - elWidth) / 2) {
      position.x = 10 + offsetLeft;
    }
    if (position.x - offsetLeft >= (innerWidth - elWidth) / 2) {
      position.x = innerWidth - elWidth - 10 + offsetLeft;
    }
    if (position.y <= 100) {
      position.y = 100;
    }
    if (position.y >= innerHeight - elHeight - 100) {
      position.y = innerHeight - elHeight - 100;
    }
  };

  const {x, y, style, position} = useDraggable(redpacketRef, {
    initialValue: {x: 10, y: 100},
    preventDefault: true,
    onEnd: dragEnd,
  });

  const transformStyle = computed(() => `transform: translate(${position.value.x}px, ${position.value.y}px)`);

  onMounted(() => {
    const innerWidth = document.querySelector(".mobile-root").getBoundingClientRect().width;
    const innerHeight = document.querySelector(".mobile-root").getBoundingClientRect().height;
    let offsetLeft = document.querySelector(".mobile-root").offsetLeft;

    position.value.x = innerWidth - 60 - 10 + offsetLeft;
    position.value.y = innerHeight - 60 - 100;
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
      .redpacket-image {
        background: linear-gradient(90deg, #f90, #ec0039);
      }
    }
  }
</style>
