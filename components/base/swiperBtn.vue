<!-- @format -->

<template>
  <el-button color="#373939" @click="slidePrev" :icon="ArrowLeft" :disabled="disabled && activeIndex === 0" />
  <el-button
    color="#373939"
    @click="slideNext"
    :icon="ArrowRight"
    :disabled="disabled && activeIndex === swiperLength"
  />
</template>

<script setup lang="ts">
  import {onMounted, ref} from "vue";
  import {ArrowLeft, ArrowRight} from "@element-plus/icons-vue";
  const activeIndex = ref(0);
  const swiperLength = ref(0);
  const props = defineProps({
    index: {
      type: Number,
      required: true,
      default: 1,
    },
    disabled: {
      type: Boolean,
      required: true,
      default: true,
    },

    type: {
      type: String,
      required: true,
      default: "slideTo",
    },

    swiper: {
      type: Object,
      required: true,
    },
  });
  watch(
    () => props.swiper?.$el.swiper.activeIndex,
    (newValue) => {
      activeIndex.value = newValue;
    }
  );

  onMounted(() => {
    nextTick(() => {
      activeIndex.value = props.swiper?.$el.swiper.activeIndex;
      swiperLength.value = props.swiper?.$el.swiper.slides.length - props.swiper?.slidesPerView;
    });
  });

  const slideNext = () => {
    if (props.type === "slideTo") {
      activeIndex.value = props.swiper?.$el.swiper.activeIndex + props.index;
      props.swiper?.$el.swiper[props.type](activeIndex.value);
    } else {
      props.swiper?.$el.swiper.slideNext();
    }
  };
  const slidePrev = () => {
    if (props.type === "slideTo") {
      activeIndex.value = props.swiper?.$el.swiper.activeIndex - props.index;
      props.swiper?.$el.swiper[props.type](activeIndex.value);
    } else {
      props.swiper?.$el.swiper.slidePrev();
    }
  };
</script>

<style></style>
