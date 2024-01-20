<!-- @format -->

<template>
  <client-only
    ><Lazy-el-drawer
      v-model="menuDrawer"
      modal-class="mobile-el-overlay"
      direction="ltr"
      :with-header="false"
      :size="'80%'"
      :before-close="handleClose"
    >
      <div class="mobile-navigation-header relative">
        <base-img class="h-[28px] w-[104px]" name="logo" type="png" path="images/logo" />

        <div
          class="closeBtn absolute -right-[12px] top-[0] bottom-0 m-auto z-[1] pr-[16px] pl-[16px]"
          @click="handleClose"
        >
          <el-icon><component is="CloseBold"></component></el-icon>
        </div>
      </div>
      <div class="navigation-body">
        <div class="navigation-group-wrap">
          <el-menu
            :default-active="activeMenu"
            class="el-menu-vertical-demo"
            router
            :unique-opened="false"
            mode="vertical"
            :collapse-transition="true"
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
      </div> </Lazy-el-drawer
  ></client-only>
</template>

<script setup>
  import router from "@/router";
  const {$importImage} = useNuxtApp();
  const siderMenu = ref(null);
  const route = useRoute();

  const menus = ref(router);
  const menuDrawer = useMenuDrawer();

  const activeMenu = computed({
    get: () => {
      const {meta, path} = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  });

  const handleClose = () => {
    closePopup("menu");
  };
</script>

<style lang="scss" scoped>
  .mobile-navigation-header {
    height: 65px;
    margin-bottom: 6px;
    flex-shrink: 0;
    margin: 0 12px 6px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .closeBtn {
      width: 50px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .el-icon {
      font-size: 22px;
      color: var(--el-border-color-darker);
    }
  }

  .navigation-body {
    height: calc(100% - 72px);
    overflow-x: hidden;
    width: 100%;
    .navigation-group-wrap {
      display: flex;
      flex-direction: column;
      gap: 18px;
      width: 100%;
      padding: 0 12px;
      padding-bottom: 30px;
      overflow-x: hidden;
      overflow-y: auto;

      .el-menu {
        border-right: none;
      }

      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 100%;
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

      .el-icon {
        font-size: 24px;
        margin-right: 8px;
      }
      .el-menu-item i {
        font-size: 22px;
        margin-right: 8px;
        display: block;
      }

      .menu-vip {
        font-size: 16px;
        background-image: linear-gradient(25deg, #58481f 12.57%, rgba(38, 40, 40, 0) 95.76%);
      }
      .menu-bonus {
        font-size: 16px;
        background-image: linear-gradient(28deg, #4d1f1c 13.78%, rgba(38, 40, 40, 0) 152.19%);
      }
    }
  }
</style>
