<!-- @format -->

<template>
  <div class="sider_menu" ref="siderMenu" :class="{hide: is_collapse}">
    <div class="logo">
      <div class="sysName" @click="isCollapseFn">
        <el-icon><component :is="is_collapse ? 'Expand' : 'Fold'"></component></el-icon>
      </div>
      <div class="title" v-if="!is_collapse">
        <img class="h-[50px]" :src="$importImage('logo-h', 'avif', 'images/logo')" />
      </div>
    </div>
    <div class="menu">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        router
        :unique-opened="false"
        :popper-effect="light"
        mode="vertical"
        :collapse-transition="true"
        :collapse="is_collapse"
      >
        <template v-for="routes in menus">
          <el-menu-item-group v-if="routes.itemGroup"
            ><LayoutItem v-for="route in routes.itemGroup" :key="route.path" :item="route" :base-path="route.path"
          /></el-menu-item-group>
          <template v-else>
            <LayoutItem :key="routes.path" :item="routes" :base-path="routes.path" />
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
  import {computed, onMounted, ref, nextTick} from "vue";
  import router from "@/router";
  const {$importImage} = useNuxtApp();
  const siderMenu = ref(null);
  const routers = useRouter();
  const route = useRoute();
  const menu = routers.getRoutes();

  const menus = ref(router);

  const is_collapse = useIsCollapse();

  const activeMenu = computed({
    get: () => {
      const {meta, path, name} = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  });

  onMounted(() => {});

  const isCollapseFn = async () => {
    let width;

    is_collapse.value = !is_collapse.value;
    width = !is_collapse.value ? "320px" : "72px";
    await nextTick();

    document.documentElement.style.setProperty("--main-width", width);
  };
</script>

<style lang="scss" scoped>
  .sider_menu {
    height: 100%;
    width: var(--main-width);
    min-width: var(--main-width);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: var(--el-box-shadow);
    background-color: var(--el-bg-color);
    pointer-events: auto;
    transition: all 0.3s;
    padding: 0 var(--slider-padding);

    .logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      box-sizing: border-box;
      height: var(--header-height);

      padding: 10px 0;
      img {
      }
      .sysName {
        padding: 14px;
        display: flex;
        background-color: var(--el-fill-color);
        font-size: 30px;
        color: var(--el-text-color-primary);
        cursor: pointer;
        border-radius: 4px;
        width: 64px;
        box-sizing: border-box;
        justify-content: center;
      }
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
    .menu {
      flex: 1;
      width: 100%;
      overflow-x: hidden;
      .el-menu {
        border-right: none;
      }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: var(--slider-width);
      .el-menu-item {
        background-color: var(--el-fill-color);
        margin: 5px 0;
        border-radius: 6px;
      }
      ::v-deep(.el-sub-menu__title) {
        background-color: var(--el-fill-color);
        margin: 5px 0;
        border-radius: 6px;
      }
    }
  }

  .hide {
    padding: 0 4px;
    transition: all 0.3s;
  }
</style>
