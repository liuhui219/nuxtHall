<!-- @format -->

<template>
  <header class="navbar">
    <div class="navbar-wrapper">
      <div class="header-left">
        <el-button size="large" @click="routerFn" v-btn text :bg="path === '/'"
          ><i class="iconfont" :class="`icon-Casino`"></i>{{ $t("H0002") }}</el-button
        >
      </div>
      <div class="header-right flex items-center">
        <template v-if="!isLogin">
          <el-button @click="openPopup('login')" v-btn size="large">{{ $t("L1001") }}</el-button>
          <el-button @click="openPopup('register')" v-btn class="el-button-sign-up" size="large">{{
            $t("L1002")
          }}</el-button>
        </template>

        <el-dropdown v-else trigger="click" placement="bottom-end" popper-class="el-dropdown-popper">
          <span class="el-dropdown-link" aria-label="dropdown">
            <el-badge is-dot
              ><el-avatar fit="fit" :size="35" alt="" :src="avatar" @error="errorHandler">
                <base-img class="h-[35px] w-[35px]" name="error" type="png" path="images/load" /></el-avatar
            ></el-badge>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="(item, index) in dropdownMenu"
                :divided="item.divided"
                :key="index"
                @click="setLang(item)"
                >{{ $t(item.text) }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import {Search, Plus, CirclePlusFilled, CirclePlus, Check, CircleCheck} from "@element-plus/icons-vue";
  import {useImage, useIntersectionObserver} from "@vueuse/core";
  import store from "store";
  import {useStorage} from "@vueuse/core";
  const {locale, setLocale} = useI18n();
  const router = useRouter();
  const route = useRoute();
  const isLogin = useIsLogin();
  const path = ref(route.path);
  const avatar = ref("https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png");
  const {isLoading} = useImage({src: avatar.value});
  const resetBtn = ref();
  const dropdownMenu = [
    {
      text: "C1001",
      icon: "",
      code: "zh-cn",
      divided: false,
      lang: true,
    },
    {
      text: "C1002",
      icon: "",
      code: "en",
      divided: false,
      lang: true,
    },
    {
      text: "C1003",
      icon: "",
      code: "pt-br",
      divided: false,
      lang: true,
    },
    {
      text: "L1018",
      icon: "",
      code: "out",
      divided: true,
      lang: false,
    },
  ];
  const errorHandler = () => {
    nextTick();
    return isLoading.value;
  };

  const setLang = async (item: {lang: boolean; code: string}) => {
    if (item.lang) {
      //locale.value = item.code;
      store.set("lang", item.code);
      setLocale(item.code);
    } else {
      store.remove("w_l_s_a");
      isLogin.value = false;
      router.push({path: "/"});
    }
  };

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
    max-width: var(--container-width);
    width: 100%;
    height: var(--header-height);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
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
</style>
