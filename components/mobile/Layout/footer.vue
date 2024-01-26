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
      <BaseIcon
        :name="item.name"
        class="animate__animated text-[22px]"
        :class="{animate__jello: activeName === item.text && isChanged}"
      />
      <div class="text-[12px]">{{ $t(item.title) }}</div>
      <div v-if="item.bg" class="mobile_bg"></div>
    </button>
  </div>
</template>

<script setup lang="ts">
  const list = ref([
    {name: "menu", text: "Menu", hash: "menu", title: "H0001"},
    // {name: "Rewards", text: "About", path: "about", title: "H0004"},
    {name: "moneygo", text: "Moneygo", hash: "charge", title: "H0014"},
    {name: "share", text: "Share", hash: "share", title: "H0015", bg: true},
    // {name: "Mygame", text: "Vip", path: "vip", title: "TR0001"},

    {name: "tixian", text: "Withdrawal", hash: "withdrawal", title: "H0022"},
    {name: "user", text: "User", path: "user", title: "H0016"},
    // {name: "home", text: "Home", path: "", title: "H0003"},
    // { name: 'member', text: 'userInfo', hash: 'userInfo', title: 'H0048' },
    // {name: "chatb", text: "Chat", hash: "chat", title: "Chat", isTranslation: true},
  ]);
  const isChanged = ref(false);

  const menuDrawer = useMenuDrawer();
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

  watchEffect(() => {
    const menuDrawer = useMenuDrawer();
    menuDrawer.value = activeName.value == "Menu";
  });
</script>

<style lang="scss" scoped>
  .mobileNavbar {
    display: flex;
    background: var(--foot-bg);
    bottom: 0;
    box-shadow: 0 -12px 24px var(--el-bg-color-page);

    height: calc(65px + env(safe-area-inset-bottom));
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
      & > .icon {
        margin-bottom: 4px;
        font-size: 22px;
      }
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

  .icon-moneygo {
    font-size: 24px !important;
    margin-top: -4px;
  }

  .icon-share {
    margin-top: -18px;
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

  .animate__animated {
    animation-duration: 1s;
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  .animate__jello {
    animation-name: jello;
    transform-origin: center;
  }
</style>
