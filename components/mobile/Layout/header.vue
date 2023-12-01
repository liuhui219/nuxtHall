<!-- @format -->

<template>
  <header class="mobile-header fixed">
    <section class="flex justify-between w-full px-[15px] h-full">
      <div class="left flex justify-center items-center" @click="goHome">
        <base-img class="h-[40px] w-[104px] logo" name="logo-h" type="png" path="images/logo" />
      </div>
      <div class="right tools-login">
        <template v-if="isLogin"
          ><el-button @click="openPopup('login')" size="large" type="primary" text>{{ $t("L1001") }}</el-button>
          <el-button @click="openPopup('register')" class="el-button-sign-up" size="large" type="primary">{{
            $t("L1002")
          }}</el-button></template
        >
        <template v-else>
          <el-button @click="openPopup('login')" size="large" type="primary" text>{{ $t("L1001") }}</el-button>
          <el-dropdown trigger="click" placement="bottom-end" popper-class="el-mobile-dropdown-popper">
            <span class="el-dropdown-link">
              <el-badge is-dot
                ><el-avatar
                  fit="fit"
                  :size="35"
                  alt=""
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                >
                  <base-img class="h-[35px] w-[35px]" name="error" type="png" path="images/load" /></el-avatar
              ></el-badge>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled"> Action 2 </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                <el-dropdown-item divided :icon="CircleCheck">{{ $t("L1018") }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
  import {Search, Plus, CirclePlusFilled, CirclePlus, Check, CircleCheck} from "@element-plus/icons-vue";
  const goHome = () => {
    navigateTo("/");
  };

  const isLogin = useLogin();
</script>

<style lang="scss" scoped>
  .mobile-header {
    top: 0;
    left: 0;
    z-index: 300;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: var(--mobile-header-height);
    background-color: var(--el-bg-color);
    .logo {
      cursor: pointer;
      flex-shrink: 0;
      .el-image__inner {
        height: 40px;
      }
    }
    .tools-login {
      align-items: center;
      display: flex;
    }

    .el-button-sign-up {
      background: linear-gradient(to right, #80d693, #34aa4e);
      position: relative;
      &::after {
        content: "";
        background-color: var(--el-color-primary);
        position: absolute;
        left: -16%;
        top: -7%;
        width: 132%;
        height: 114%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        opacity: 0.7;
        z-index: 1;
        filter: blur(20px);
      }
    }
  }

  .el-mobile-dropdown-popper {
    .el-scrollbar {
      width: 175px;
    }
    .el-dropdown-menu__item {
      height: 43px;
    }
  }
</style>
