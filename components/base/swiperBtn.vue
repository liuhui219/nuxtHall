<!-- @format -->

<template>
  <el-button
    class="sys-btn btn-home-next"
    color="#373939"
    @click="slidePrev"
    :icon="ArrowLeft"
    :class="{'swiper-button-disabled': disabled && activeIndex === 0}"
    :disabled="disabled && activeIndex === 0"
  />
  <el-button
    class="sys-btn btn-home-next"
    color="#373939"
    @click="slideNext"
    :icon="ArrowRight"
    :class="{'swiper-button-disabled': disabled && activeIndex === swiperLength}"
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

    swiper: {
      type: Object,
      required: true,
    },
  });

  watch(
    () => props.swiper?.$el.swiper.activeIndex,
    (newValue, oldValue) => {
      activeIndex.value = newValue;
    },
    {deep: true, immediate: true}
  );

  onMounted(() => {
    nextTick(() => {
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

<style></style>
