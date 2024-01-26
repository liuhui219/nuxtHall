<!-- @format -->

<template>
  <header class="mobile-header fixed">
    <div
      v-if="tipShow && !isDesktop"
      class="down-tip flex items-center justify-between w-full text-[12px] whitespace-pre-wrap relative px-[15px]"
    >
      <span>{{ $t("H0033") }}</span>
      <el-button @click="downLoadFn" size="small" icon="Cellphone" color="#ffffff">{{ $t("H0034") }}</el-button>
      <button
        @click="closeTip"
        style="background: rgba(0, 0, 0, 0.3)"
        class="text-color-alpha-white-05 bg-color-alpha-black-03 rounded-br-[10px] w-[22px] h-[20px] flex items-center justify-center absolute top-0 left-0"
      >
        <el-icon><Close /></el-icon>
      </button>
    </div>
    <section class="mobile-header-main flex justify-between w-full px-[15px] h-full">
      <div class="left flex justify-center items-center" @click="goHome">
        <base-img class="h-[36px] w-[133px] logo" name="logo" type="png" path="images/logo" />
      </div>
      <div class="right tools-login">
        <template v-if="!isLogin"
          ><el-button @click="openPopup('login')" size="large" type="primary" text>{{ $t("L1001") }}</el-button>
          <el-button @click="openPopup('register')" class="el-button-sign-up" size="large" type="primary">{{
            $t("L1002")
          }}</el-button></template
        >
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
    </section>
  </header>
</template>

<script setup lang="ts">
  import {useImage, useIntersectionObserver} from "@vueuse/core";
  import store from "store";
  const {locale, setLocale} = useI18n();
  const {isAndroid, isApple, isDesktop} = useDevice();
  const avatar = ref("https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png");
  const {isLoading} = useImage({src: avatar.value});
  import {Search, Plus, CirclePlusFilled, CirclePlus, Check, CircleCheck} from "@element-plus/icons-vue";
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
  const goHome = () => {
    navigateTo("/");
  };
  const errorHandler = () => {
    nextTick();
    return isLoading.value;
  };
  const tipShow = useTipShow();
  const router = useRouter();
  const isLogin = useIsLogin();
  const finish = ref(false);
  onMounted(() => {
    finish.value = true;
  });

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
  const downLoadFn = () => {
    if (isApple) {
      openPopup("download");
    }
    if (isAndroid) {
      navigateTo("https://zjdown.easygameapi.com/patch/PresenteSlots20320.apk", {
        open: {
          target: "_blank",
        },
      });
    }
  };
  const closeTip = () => {
    tipShow.value = false;
    store.set("sk_d_t_k", 1);
    document.documentElement.style.setProperty("--app-download-height", "0px");
  };
</script>

<style lang="scss" scoped>
  .mobile-header {
    top: 0;
    left: 50%;
    z-index: 300;
    width: 100%;
    max-width: var(--maxWidth);
    transform: translateX(-50%);
    background-color: var(--el-bg-color);
    .down-tip {
      background: var(--background);
      height: var(--app-download-height, 0);
      .el-button {
        color: var(--el-color-primary);
      }
    }

    .mobile-header-main {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--mobile-header-height);
    }
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
