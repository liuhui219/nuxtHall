<!-- @format -->

<template>
  <header class="navbar">
    <div class="navbar-wrapper">
      <div class="header-left">
        <el-button size="large" @click="routerFn" text :bg="path === '/'"
          ><i class="iconfont" :class="`icon-Casino`"></i>CASINO</el-button
        >
      </div>
      <div class="header-right">
        <el-button @click="openPopup('login')" size="large">SIGN IN</el-button>
        <el-button size="large">SIGN UP</el-button>
        <el-dropdown trigger="click" placement="bottom-end" popper-class="el-dropdown-popper">
          <span class="el-dropdown-link">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
              <el-dropdown-item :icon="CirclePlusFilled"> Action 2 </el-dropdown-item>
              <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
              <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
              <el-dropdown-item divided :icon="CircleCheck">Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import {Search, Plus, CirclePlusFilled, CirclePlus, Check, CircleCheck} from "@element-plus/icons-vue";
  const router = useRouter();
  const route = useRoute();
  const path = ref(route.path);
  watch(
    () => route.path,
    (newValue) => {
      path.value = newValue;
    }
  );
  const routerFn = () => {
    router.push({path: "/"});
  };
</script>

<style lang="scss">
  .navbar {
    //position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    z-index: var(--nav-z-index);
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--el-fill-color-lighter);
    // background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
    // background-size: 4px 4px;
    // backdrop-filter: saturate(50%) blur(4px);
    // -webkit-backdrop-filter: saturate(50%) blur(4px);
  }

  .navbar-wrapper {
    position: relative;
    width: var(--container-width);
    height: var(--header-height);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    position: relative;
    .el-button > span {
      font-size: 16px;
    }
    .iconfont {
      margin-right: 10px;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    margin-left: 10px;
  }
  .el-dropdown-popper {
    .el-scrollbar {
      width: 230px;
    }
    .el-dropdown-menu__item {
      height: 43px;
    }
  }
</style>
