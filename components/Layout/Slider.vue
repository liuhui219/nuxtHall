<!-- @format -->

<template>
  <div class="sider_menu" :class="{hide: is_collapse}">
    <div class="logo">
      <div class="sysName" @click="isCollapseFn">
        <el-icon><component :is="is_collapse ? 'Expand' : 'Fold'"></component></el-icon>
      </div>
      <div class="title" v-if="!is_collapse">logo</div>
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
        <LayoutItem v-for="route in menus" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </div>
  </div>
</template>

<script setup>
  import {computed, ref} from "vue";

  const router = useRouter();
  const route = useRoute();
  const menu = router.getRoutes();

  const menus = ref(menu);

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

  const isCollapseFn = () => {
    is_collapse.value = !is_collapse.value;
  };
</script>

<style lang="scss" scoped>
  .sider_menu {
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: var(--el-box-shadow);
    background-color: var(--el-bg-color);
    pointer-events: auto;
    -o-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    padding: 0 16px;

    .logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      box-sizing: border-box;
      height: var(--header-height);

      padding: 10px 0;
      img {
        width: 24px;
        padding-right: 6px;
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
        font-size: 14px;
        text-align: center;
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
      width: 320px;
      .el-menu-item {
        background-color: var(--el-fill-color);
        margin: 5px 0;
        border-radius: 4px;
      }
      ::v-deep(.el-sub-menu__title) {
        background-color: var(--el-fill-color);
        margin: 5px 0;
        border-radius: 4px;
      }
    }
  }

  .hide {
    padding: 0 4px;
  }
</style>
