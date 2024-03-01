<!-- @format -->

<template>
  <div class="mobile-profile">
    <div class="mobile-profile-info mt-[10px] rounded-[4px] px-[10px] py-[20px]">
      <div v-if="!isLogin">
        <div class="flex items-center mb-[10px]">
          <div class="flex items-center mr-[10px] flex-1">
            <base-img class="h-[60px] w-[60px] rounded-full mr-[10px]" name="r" type="png" path="images/profile" />

            <div>
              <div class="mb-[6px] text-[14px] font-[600]" style="color: #cbcdd0">
                <span>Bem-vindo ao<span class="uppercase"> www.afun.com</span></span>
              </div>
              <div class="text-[12px]" style="color: #99a7b4">Por favor, cadastre-se ou faça login primeiro.</div>
            </div>
          </div>
          <!---->
        </div>
        <div class="flex items-center font-bold gap-[10px]">
          <button
            @click="openPopup('login')"
            style="background: rgb(100 108 113)"
            class="h-[40px] flex-1 text-[12px] rounded-[4px] uppercase"
          >
            {{ $t("L1001") }}
          </button>
          <button
            @click="openPopup('register')"
            style="background: #45d91e"
            class="h-[40px] flex-1 text-[12px] rounded-[4px] uppercase"
          >
            {{ $t("L1002") }}
          </button>
        </div>
      </div>

      <div class="flex flex-col" v-if="isLogin">
        <div class="flex items-center">
          <div class="flex items-center mr-[10px] flex-1">
            <base-img class="h-[60px] w-[60px] rounded-full mr-[10px]" name="r" type="png" path="images/profile" />

            <div>
              <div class="mb-[6px] text-[14px] font-[600]" style="color: #cbcdd0">
                <span>ty2</span>
              </div>
              <div class="text-[12px] flex" style="color: #99a7b4">
                ID：784564654
                <span class="ml-[2px] flex items-center"
                  ><base-img class="w-[14px]" name="cose" type="png" path="images/profile"
                /></span>
              </div>
              <div class="text-[12px] flex" style="color: #99a7b4">
                Moeda：<span class="mr-[2px] flex items-center"
                  ><base-img
                    class="w-[14px] h-[14px]"
                    name="h5_xiaojinbi_icon"
                    type="png"
                    path="images/profile" /></span
                ><span style="color: #ffffff">50</span>
              </div>
            </div>
          </div>
          <!---->
        </div>
        <div class="w-full h-[1px] shrink-0 my-[16px]" style="background-color: #99a7b4"></div>
        <div class="flex items-center justify-between relative">
          <base-img class="w-[40px]" name="xz_1" type="png" path="images/profile" />

          <div class="text-[10px] flex flex-1 items-center mx-[20px]">
            <div class="text-[14px] mr-[10px] text-color-text-0 font-bold">VIP 1</div>
            <div class="flex-1">
              <p class="text-center text-[12px]">15.00R$</p>
              <div class="h-[6px] rounded-[3px] pb-[20px] overflow-hidden relative my-[4px]">
                <el-progress :percentage="80" color="#3764ff" :show-text="false" />
              </div>

              <p class="text-center text-[9px] absolute right-5 bottom-[2px]">
                Ainda há um gap de 3,00.00R$ a ser aumentado para VIP 2
              </p>
            </div>
          </div>
          <i
            class="icon inline-block h-[max-content] w-[max-content] sysicon-new-back text-color-text-2 rotate-[180deg]"
          ></i>
          <el-icon class="icon inline-block h-[max-content] w-[max-content]"
            ><i class="icon-right iconfont !text-[22px] !font-black" style="color: rgb(255 255 255 / 30%)"></i
          ></el-icon>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full gap-[15px]">
      <template v-for="(item, index) in routes" :key="index">
        <div class="flex flex-col gap-[5px]" :class="item.class" v-if="!item.isLogin || isLogin">
          <div
            v-for="(rout, i) in item.itemGroup"
            class="w-full flex items-center relative menu-item"
            :class="rout.meta?.class"
          >
            <base-img
              :style="{width: rout.meta.imageWidth + 'px'}"
              :name="rout.meta.icon"
              type="png"
              path="images/profile"
            />
            <span>{{ $t(rout.meta.title) }}</span>
            <el-icon v-if="rout.meta.arrow" style="position: absolute; right: 15px" class="iconRight"
              ><i class="icon-right iconfont !text-[18px] !font-black" style="color: rgb(255 255 255 / 30%)"></i
            ></el-icon>
          </div>
        </div>
      </template>
      <button v-if="isLogin" class="mb-[40px] font-bold text-[13px]" @click="signOutFn">{{ $t("L1018") }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import store from "store";
  const isLogin = useIsLogin();
  const router = useRouter();
  const signOutFn = () => {
    store.remove("w_l_s_a");
    isLogin.value = false;
    router.push({path: "/"});
  };
  let routes = ref([
    {
      class: "grid grid-cols-2 gap-[8px]",
      isLogin: false,
      itemGroup: [
        {
          path: "/Bonus",
          name: "Bonus",
          meta: {
            title: "H0041",
            icon: "bon",
            class: "menu-bonus w-full justify-center",
            imageWidth: "25",
            type: "image",
            auth: false,
            route: true,
          },
          children: [],
        },
        {
          path: "/vip",
          name: "vip",
          meta: {
            title: "H0042",
            icon: "ree",
            class: "menu-vip w-full justify-center",
            imageWidth: "28",
            type: "image",
            auth: true,
            route: true,
          },
          children: [],
        },
      ],
    },

    {
      class: "flex !flex-row !rounded-[4px] overflow-hidden !gap-0",
      isLogin: true,
      itemGroup: [
        {
          path: "/Bonus",
          name: "Bonus",
          meta: {
            title: "H0014",
            icon: "oth_pig",
            class: "flex-col w-1/3 !rounded-[0px] justify-center !gap-[4px] !h-[60px] !my-0",
            imageWidth: "24",
            type: "image",
            auth: false,
            route: true,
          },
          children: [],
        },
        {
          path: "/vip",
          name: "vip",
          meta: {
            title: "H0049",
            icon: "tx",
            class: "flex-col w-1/3 !rounded-[0px] justify-center !gap-[4px] !h-[60px] !my-0",
            imageWidth: "20",
            type: "image",
            auth: true,
            route: true,
          },
          children: [],
        },
        {
          path: "/vip",
          name: "vip",
          meta: {
            title: "H0050",
            icon: "history_tx",
            class: "flex-col w-1/3 !rounded-[0px] justify-center !gap-[4px] !h-[60px] !my-0",
            imageWidth: "20",
            type: "image",
            auth: true,
            route: true,
          },
          children: [],
        },
      ],
    },

    {
      isLogin: true,
      itemGroup: [
        {
          path: "/about",
          name: "about",
          meta: {
            title: "H0051",
            icon: "cj",
            auth: true,
            route: true,
            type: "image",
            imageWidth: "18",
            arrow: true,
          },
          children: [],
        },
        {
          path: "/Recent",
          name: "Recent",
          meta: {
            title: "H0052",
            icon: "hd",
            auth: true,
            route: true,
            type: "image",
            imageWidth: "18",
            arrow: true,
          },
          children: [],
        },
        {
          path: "/Casino",
          name: "Casino",
          meta: {
            title: "H0053",
            icon: "tg",
            auth: true,
            route: true,
            type: "image",
            imageWidth: "16",
            arrow: true,
          },
          children: [],
        },
      ],
    },

    {
      class: "menu-box",
      isLogin: false,
      itemGroup: [
        {
          path: "/Affiliate",
          name: "Affiliate",
          meta: {
            title: "H0054",
            icon: "h5_kefu_icon",
            auth: true,
            route: true,
            type: "image",
            imageWidth: "18",
            arrow: true,
          },
          children: [],
        },
        {
          path: "/Rewards",
          name: "Rewards",
          meta: {
            title: "H0055",
            icon: "set",
            auth: true,
            route: true,
            type: "image",
            imageWidth: "18",
            arrow: true,
          },
          children: [],
        },
        {
          path: "/Rewards",
          name: "Rewards",
          meta: {
            title: "H0036",
            icon: "h5_youjian_icon",
            auth: true,
            route: true,
            type: "image",
            imageWidth: "18",
            arrow: true,
          },
          children: [],
        },
        {
          path: "/Rewards",
          name: "Rewards",
          meta: {
            title: "H0056",
            icon: "pty",
            auth: true,
            route: true,
            type: "image",
            imageWidth: "20",
            arrow: true,
          },
          children: [],
        },
      ],
    },
  ]);
</script>

<style lang="scss" scoped>
  .mobile-profile {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    gap: 10px;
    padding-bottom: 30px;
    .mobile-profile-info {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: #1e2028;
    }

    .menu-item {
      display: flex;
      align-items: center;
      background-color: #1e2028;

      border-radius: 4px;
      height: 45px;
      font-size: 12px;
      position: relative;
      gap: 15px;
      color: var(--el-menu-text-color);
      padding: 0 var(--el-menu-base-level-padding);
      list-style: none;
      cursor: pointer;
      transition: border-color var(--el-transition-duration), background-color var(--el-transition-duration),
        color var(--el-transition-duration);
      padding-left: 20px;
      box-sizing: border-box;
      white-space: nowrap;
    }

    .menu-vip {
      font-size: 14px;
      font-weight: bold;
      padding: 0;
      height: 50px !important;
      gap: 4px !important;
      background-image: linear-gradient(0deg, #3c2858 0%, #1c1f25 100%), linear-gradient(#53c16c, #53c16c);
    }
    .menu-bonus {
      font-size: 14px;
      font-weight: bold;
      padding: 0;
      height: 50px !important;
      gap: 4px !important;
      background-image: linear-gradient(28deg, #4d1f1c 13.78%, rgba(38, 40, 40, 0) 152.19%);
    }
  }
</style>
