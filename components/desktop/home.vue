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

    <template v-for="(item, index) in components"
      ><component :is="item.component" v-if="route.hash.includes(item.name)"
    /></template>
  </div>
</template>

<script setup>
  const httpLoading = useHttpLoading();
  const components = shallowRef([]);
  const route = useRoute();
  onMounted(() => {
    const modulesFiles = import.meta.glob("~/components/desktop/model/*.vue");

    const modules = [];
    Object.keys(modulesFiles).forEach((modulePath) => {
      const result = modulePath.match(/.*\/(.+).vue$/);
      const value = modulesFiles[modulePath];
      modules.push({component: defineAsyncComponent(value), name: result[1]});
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
