<!-- @format -->

<template>
  <div class="page-container">
    <LazyLayoutSlider />
    <div class="page-container-right">
      <LazyLayoutHeader />

      <main class="page-container-main">
        <div class="page-container-main-wrap">
          <NuxtPage />
        </div>
        <el-backtop :bottom="100" :right="50" target=".page-container-main" />
      </main>
      <baseLoading :http="true" v-if="httpLoading"></baseLoading>
    </div>
    <component v-for="(item, index) in components" :key="index" :is="item" />
  </div>
</template>

<script setup lang="ts">
  const httpLoading = useHttpLoading();
  const components = shallowRef<any>([]);
  onMounted(() => {
    const modulesFiles = import.meta.glob("~/components/desktop/model/*.vue");

    const modules: Array<any> = [];
    Object.keys(modulesFiles).forEach((modulePath) => {
      const value: any = modulesFiles[modulePath];
      modules.push(defineAsyncComponent(value));
    });

    components.value = [...modules];
  });
</script>
<style lang="scss" scoped>
  .page-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .page-container-right {
    // width: calc(100% - var(--main-width));
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    position: relative;

    .page-container-main {
      width: 100%;
      height: calc(100% - var(--nav-height));
      display: flex;
      justify-content: center;
      overflow-x: hidden;

      .page-container-main-wrap {
        max-width: var(--container-width);
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
