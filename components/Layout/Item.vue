<!-- @format -->

<template>
  <template v-if="hasOneShowingChild(item)">
    <el-menu-item :index="item.path" :class="item.meta?.class" @click="routFn(item)">
      <!-- <el-icon class="menuIcon"><component :is="item.meta.icon"></component></el-icon>-->
      <!-- <el-icon class="menuIcon"><component :is="`svgo-${item.meta.icon}`" /></el-icon> -->
      <!-- <img
        v-if="item.meta.type === 'image'"
        class="w-[24px] mr-[8px]"
        :src="`_nuxt/assets/images/${item.meta.icon}.png`"
      /> -->

      <base-img
        v-if="item.meta.type === 'image'"
        class="w-[24px]"
        :class="{'mr-[8px]': !is_collapse}"
        :name="item.meta.icon"
        type="png"
        path="images/menu"
      />
      <el-icon v-else class="menuIcon"><i class="iconfont" :class="`icon-${item.meta.icon}`"></i></el-icon>
      <template #title v-if="item.meta.title">{{ t(item.meta.title) }}</template>
    </el-menu-item>
  </template>

  <el-sub-menu v-else ref="subMenu" :index="item.path">
    <template #title>
      <el-icon class="menuIcon"><component :is="item.meta.icon"></component></el-icon>
      <span v-if="item.meta.title">{{ t(item.meta.title) }}</span>
    </template>
    <LayoutItem v-for="child in item.children" :key="child.path" :item="child" :base-path="child.path" />
  </el-sub-menu>
</template>

<script setup>
  const {t} = useI18n();
  const {isMobile, isDesktop} = useDevice();
  const is_collapse = useIsCollapse();

  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  });

  // const getResConfigImage = () => {
  //   const glob = import.meta.glob("@/assets/images/menu/*.png", {eager: true});
  //   return Object.fromEntries(Object.entries(glob).map(([key, value]) => [filename(key), value.default]));
  // };

  const routFn = (item) => {
    if (item.meta.route) {
      navigateTo({path: item.path});
    } else if (item.meta.type === "install") {
      if (isDesktop && window.deferredPrompt) {
        window.deferredPrompt.prompt();
        // 在用户选择安装或取消后，处理相应的逻辑
        window.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("用户已安装");
          } else {
            console.log("用户取消安装");
          }
          window.deferredPrompt = null;
        });
      }
    }
  };

  const hasOneShowingChild = (item) => {
    if (item.children) {
      if (item.children.length > 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };
</script>

<style lang="scss" scoped>
  .el-menu--collapse {
    .menuIcon i {
      font-size: 26px;
    }
  }

  .el-menu-item.is-disabled {
    cursor: default;
  }

  .sider_menu .el-menu-vertical-demo:not(.el-menu--collapse) {
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
</style>
