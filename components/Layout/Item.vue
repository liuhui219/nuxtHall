<!-- @format -->

<template>
  <template v-if="hasOneShowingChild(item)">
    <el-menu-item :index="item.path">
      <el-icon class="menuIcon"><component :is="item.meta.icon"></component></el-icon>
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
  .el-menu--collapse .menuIcon {
    font-size: 30px;
  }
</style>
