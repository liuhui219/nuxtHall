<!-- @format -->

<template>
  <el-button
    class="sys-btn btn-home-next"
    color="#373939"
    aria-label="Prev"
    @click="slidePrev"
    :icon="ArrowLeft"
    :class="{'swiper-button-disabled': disabled && activeIndex === 0}"
    :disabled="disabled && activeIndex === 0"
  />
  <el-button
    class="sys-btn btn-home-next"
    color="#373939"
    aria-label="Next"
    @click="slideNext"
    :icon="ArrowRight"
    :class="{'swiper-button-disabled': disabled && (activeIndex === swiperLength || swiperLength <= 0)}"
    :disabled="disabled && (activeIndex === swiperLength || swiperLength <= 0)"
  />
</template>

<script setup lang="ts">
  import {onMounted, ref} from "vue";
  import {ArrowLeft, ArrowRight} from "@element-plus/icons-vue";
  const {isMobile, isDesktop} = useDevice();
  const activeIndex = ref(0);
  const swiperLength = ref(0);
  const w_H = ref("30px");
  const scale = ref(1);
  const props = defineProps({
    disabled: {
      type: Boolean,
      default: true,
    },

    swiper: {
      type: Object,
    },
  });

  onMounted(() => {
    if (isMobile) {
      w_H.value = "30px";
      scale.value = 1;
    } else {
      w_H.value = "36px";
      scale.value = 0.7;
    }
    nextTick(() => {
      watch(
        () => props.swiper?.$el?.swiper.activeIndex,
        (newValue, oldValue) => {
          activeIndex.value = newValue;
        },
        {deep: true}
      );

      activeIndex.value = props.swiper?.$el.swiper.activeIndex;
      swiperLength.value = props.swiper?.$el.swiper.slidesGrid.length - props.swiper?.slidesPerView;
    });
  });

  const slideNext = () => {
    props.swiper?.$el.swiper.slideNext();
  };
  const slidePrev = () => {
    props.swiper?.$el.swiper.slidePrev();
  };
</script>

<style lang="scss" scoped>
  $w_H: v-bind(w_H);
  .sys-btn.btn-home-next {
    align-items: center;
    background: var(--el-border-color-lighter);
    border: none;
    border-radius: 3px;
    color: var(--el-color-primary);
    display: flex;
    font-size: 14.4px;
    height: $w_H;
    justify-content: center;
    min-width: unset;
    padding: 0;
    width: $w_H;
    &:active {
      scale: v-bind(scale);
      opacity: 0.6;
    }
    &:focus {
      color: var(--el-color-primary);
      background: var(--el-border-color-lighter);
    }
    &:hover {
      opacity: 0.6;
    }
  }
  .el-button + .el-button {
    margin-left: 8px;
  }
  .sys-btn.btn-home-next.swiper-button-disabled {
    background: var(--el-border-color-lighter);
    color: var(--el-text-color-disabled);
    pointer-events: none;
  }
</style>
