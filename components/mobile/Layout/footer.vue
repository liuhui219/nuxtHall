<!-- @format -->

<template>
  <div class="mobileNavbar fixed">
    <button
      v-for="item in list"
      :key="`navbar-${item.text}`"
      class="no-hover"
      :class="{current: activeName == item.text}"
      @click="changeActive(item)"
    >
      <div class="icon-box">
        <div v-if="item.bg" class="img-box">
          <base-img
            class="h-[42px] w-[38px] mt-[-8px] logo animate__animated"
            :class="{animate__jello: activeName === item.text && isChanged}"
            name="fenxiang_btn"
            type="png"
            path="images/home"
          />
        </div>

        <BaseIcon
          v-else
          :name="item.name"
          class="animate__animated text-[22px]"
          :class="{animate__jello: activeName === item.text && isChanged}"
        />
      </div>

      <div class="text-[11px]">{{ $t(item.title) }}</div>
      <div v-if="item.bg" class="mobile_bg"></div>
    </button>
  </div>
</template>

<script setup lang="ts">
  const list = ref([
    {name: "home2", text: "Home", path: "", title: "H0003"},
    // {name: "Rewards", text: "About", path: "about", title: "H0004"},
    {name: "meiyuan", text: "Recharge", hash: "recharge", title: "H0014"},
    {name: "share", text: "Share", hash: "share", title: "H0008", bg: true},
    // {name: "Mygame", text: "Vip", path: "vip", title: "TR0001"},

    {name: "vip1", text: "Vip", hash: "Vip", title: "H0005"},
    {name: "xd-icon-avatar", text: "Profile", path: "profile", title: "H0016"},
    // {name: "home", text: "Home", path: "", title: "H0003"},
    // { name: 'member', text: 'userInfo', hash: 'userInfo', title: 'H0048' },
    // {name: "chatb", text: "Chat", hash: "chat", title: "Chat", isTranslation: true},
  ]);
  const isChanged = ref(false);

  const changeActive = (from: any) => {
    isChanged.value = true;
    const hash: string = from.hash;
    if (hash) {
      if (hash == "menu") {
        if (isPageInSome("menu")) {
          closePopup("menu");
          return;
        }
      }
      openPopup(hash);
    } else {
      navigateTo("/" + from.path);
    }
  };

  const activeName = computed(() => {
    const route = useRoute();
    let hash = (route.hash || "").toLocaleUpperCase();
    let hashFind = list.value.find((el) => el.hash && hash.includes(el.text.toLocaleUpperCase()));
    if (hashFind) {
      return hashFind.text;
    }
    let path = (route.path || "").replace("/", "").toLocaleUpperCase();
    if (!path) {
      path = "HOME";
    }
    let modalFind = list.value.find((el) => path.includes(el.text.toLocaleUpperCase()));
    if (modalFind) {
      return modalFind.text;
    }
    return "";
  });
</script>

<style lang="scss" scoped>
  .mobileNavbar {
    display: flex;
    background: var(--foot-bg);
    bottom: 0;
    box-shadow: 0 -12px 24px var(--el-bg-color-page);

    height: calc(60px + env(safe-area-inset-bottom));
    left: 50%;
    padding-bottom: env(safe-area-inset-bottom);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
    max-width: var(--maxWidth);
    transform: translateX(-50%);
    z-index: 350;

    & > button {
      position: relative;
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #e2e8e3;
      cursor: pointer;

      &.current {
        color: var(--el-color-primary);
      }
    }

    .mobile_bg {
      width: 56px;
      height: 56px;
      position: absolute;
      left: 0;
      right: 0;
      top: -12px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 50%;
      z-index: -1;
      background: var(--foot-bg);
    }
  }
  .icon-box {
    width: 100%;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    .img-box {
      position: absolute;
      top: -8px;
      border-radius: 50%;
      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;

      align-items: center;
      background-color: #4a3d4dc9;
    }
    & > .icon {
      font-size: 24px;
    }
  }

  .icon-vip1 {
    font-size: 22px !important;
  }

  .icon-share {
    margin-top: -18px;
    margin-bottom: 6px !important;
    border: 1px solid var(--el-color-primary);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: var(--el-color-primary);
    background: linear-gradient(180deg, rgba(31, 223, 117, 0.1), rgba(23, 212, 55, 0.4) 93.23%, rgba(6, 155, 68, 0.4));
  }
</style>
