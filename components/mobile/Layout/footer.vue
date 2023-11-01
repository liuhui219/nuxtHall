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
        class="animate__animated text-[18px]"
        :class="{animate__jello: activeName === item.text && isChanged}"
      />
      <div>{{ $t(item.title) }}</div>
    </button>
  </div>
</template>

<script setup lang="ts">
  const list = ref([
    {name: "menu", text: "Menu", hash: "menu", title: "H0001"},
    {name: "Casino", text: "Casino", path: "casino", title: "H0002"},
    // {name: "Mygame", text: "Vip", path: "vip", title: "TR0001"},
    {name: "home", text: "Home", path: "", title: "H0003"},
    {name: "Rewards", text: "bonus-center", path: "bonus-center", title: "H0004"},
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
    background: var(--el-border-color-extra-light);
    bottom: 0;
    box-shadow: 0 -12px 24px var(--el-bg-color-page);
    height: 65px;
    height: calc(65px + env(safe-area-inset-bottom));
    left: 0;
    padding-bottom: env(safe-area-inset-bottom);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
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
        font-size: 18px;
      }
      &.current {
        color: var(--el-color-primary);
      }
    }
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
