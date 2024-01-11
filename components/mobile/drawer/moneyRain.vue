<!-- @format -->

<template>
  <LazyMobileModelDrawer
    :title="'moneyRain'"
    :direction="'btt'"
    :drawer="drawerDetail"
    :header="false"
    :hash="'moneyRain'"
  >
    <template #body>
      <div class="mobile-moneyRain">
        <div @click="closeFn" class="close p-[15px] absolute right-0 top-0 z-[1] text-[14px]">
          <el-icon><component is="CloseBold"></component></el-icon>
        </div>

        <div class="moneyRain w-full h-full">
          <base-img
            style="position: absolute"
            class="w-full bottom-[0] opacity-0 z-[1] bottom-animation"
            name="redpacket_bottom"
            type="png"
            path="images/home"
          />
        </div>
      </div>
    </template>
  </LazyMobileModelDrawer>
</template>

<script setup>
  const drawerDetail = ref(false);
  const route = useRoute();
  const closeFn = () => {
    closePopup("moneyRain");
  };

  const arr = [
    {
      width: 77,
      height: 48,
    },
    {
      width: 77,
      height: 47,
    },
    {
      width: 77,
      height: 45,
    },
    {
      width: 77,
      height: 46,
    },
    {
      width: 101,
      height: 45,
    },
  ];

  let conut = Math.ceil(window.innerWidth / 5);

  const getRandom = (e, t) => {
    return Math.random() * (t - e) + e;
  };

  const createMoneySymbol = (e) => {
    var a = Math.ceil(4 * Math.random());
    let money = document.createElement("div");
    money.classList.add("money" + a);
    let i = arr[a - 1];
    let left = getRandom(0, window.innerWidth - i.width / 2);
    let top = 30 * getRandom(0.7, 1) - 100;

    money.style.left = "".concat(left, "px");
    money.style.top = "".concat(top, "px");
    money.style.transform = "rotate(".concat(360 * Math.random(), "deg)");
    var r = getRandom(0.4, 1);
    money.style.width = "".concat(r * i.width, "px");
    money.style.height = "".concat(r * i.height, "px");
    money.style["animation-name"] = "fallAndSpin".concat(Math.ceil(3 * Math.random()));
    money.style["background-size"] = "".concat(r * i.width, "px ").concat(r * i.height, "px");
    var c = 5 * Math.random() + 5;

    money.style.animationDuration = "".concat(c, "s, ").concat(c / 2, "s");
    document.querySelector(".moneyRain") && document.querySelector(".moneyRain").appendChild(money);
    money.addEventListener("animationend", function () {
      money.remove();
      createMoneySymbol();
    });
  };

  onMounted(() => {
    for (var t = 0; t < conut; t++)
      setTimeout(function () {
        createMoneySymbol();
      }, 20 * t * Math.random());
  });

  watchEffect(() => {
    drawerDetail.value = getHashValue(route.hash) === "moneyRain";
  });
</script>

<style lang="scss" scoped>
  .mobile-moneyRain {
    width: 100%;
    height: 100%;
    .close .el-icon {
      font-size: 18px;
      color: var(--el-border-color-darker);
    }

    .moneyRain {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      ::v-deep(.money1) {
        background-image: url("~/assets/images/home/money1.png");
        position: absolute;
        animation-timing-function: linear;
        transform-style: preserve-3d;
      }
      ::v-deep(.money2) {
        background-image: url("~/assets/images/home/money2.png");
        position: absolute;
        animation-timing-function: linear;
        transform-style: preserve-3d;
      }
      ::v-deep(.money3) {
        background-image: url("~/assets/images/home/money3.png");
        position: absolute;
        animation-timing-function: linear;
        transform-style: preserve-3d;
      }
      ::v-deep(.money4) {
        background-image: url("~/assets/images/home/money4.png");
        position: absolute;
        animation-timing-function: linear;
        transform-style: preserve-3d;
      }
      .bottom-animation {
        animation: bottom-animation 8s forwards;
      }
    }
  }
</style>
