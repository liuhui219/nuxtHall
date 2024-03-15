<!-- @format -->

<template>
  <client-only>
    <el-dialog
      v-model="dialogVisible"
      title=""
      width="100%"
      modal-class="vipLevel"
      :show-close="false"
      destroy-on-close
      center
      align-center
    >
      <template #header="{close, titleId, titleClass}">
        <div class="my-header">
          <div
            class="sticky top-0 z-[1] w-full flex items-center bg-color-linear-12 text-color-text-0 h-[44px] shrink-0"
          >
            <div class="flex-1 flex items-center">
              <div class="flex items-center pl-[15px] shrink-0"></div>
              <div class="text-[15px] font-bold">Próximo Nível</div>
            </div>
            <div
              class="closeBtn absolute right-[0px] top-[12px] bottom-0 m-auto z-[1] pr-[16px] pl-[16px]"
              @click="handleClose"
            >
              <el-icon size="22px"><component is="CloseBold"></component></el-icon>
            </div>
          </div>
        </div>
      </template>
      <div class="px-[15px] pb-[15px] w-full h-[500px] relative">
        <div class="absolute right-[0px] top-[8px] z-[100]">
          <base-img class="w-[14px] mx-auto" name="zk" type="png" path="images/vip" />
        </div>
        <div class="w-full h-full relative overflow-scroll overscroll-none text-[12px]">
          <div class="flex flex-row w-fit sticky top-0 item-head">
            <span
              v-for="(item, index) in listHead"
              :key="index"
              class="flex justify-center items-center w-[80px] h-[30px]"
            >
              {{ item }}
            </span>
          </div>
          <div
            v-for="(child, i) in list"
            class="item-style flex flex-row w-fit"
            :class="{active: activeIndex === child.value}"
          >
            <span
              v-for="(item, index) in listHead"
              :key="index"
              class="flex justify-center items-center w-[80px] h-[40px]"
            >
              {{ child[item] }}
            </span>
          </div>
        </div>
      </div>
    </el-dialog>
  </client-only>
</template>

<script setup>
  const dialogVisible = useVipLevel();
  const activeIndex = ref(0);
  const listHead = ["Level", "Rescue", "Upgrade", "Weekly", "Monthly", "Spin", "Bankruptcy"];
  const list = [
    {
      Level: "Vip0",
      Rescue: "20%",
      Upgrade: "0.00",
      Weekly: "0.00",
      Monthly: "0.00",
      Spin: "0%",
      Bankruptcy: "0.00",
      value: 0,
    },
    {
      Level: "Vip1",
      Rescue: "21%",
      Upgrade: "3.00",
      Weekly: "1.00",
      Monthly: "2.00",
      Spin: "5%",
      Bankruptcy: "3.00",
      value: 1,
    },
    {
      Level: "Vip2",
      Rescue: "22%",
      Upgrade: "5.00",
      Weekly: "2.00",
      Monthly: "3.00",
      Spin: "10%",
      Bankruptcy: "4.50",
      value: 2,
    },
    {
      Level: "Vip3",
      Rescue: "23%",
      Upgrade: "6.00",
      Weekly: "2.00",
      Monthly: "4.00",
      Spin: "20%",
      Bankruptcy: "6.00",
      value: 3,
    },
    {
      Level: "Vip4",
      Rescue: "24%",
      Upgrade: "8.00",
      Weekly: "3.00",
      Monthly: "6.00",
      Spin: "30%",
      Bankruptcy: "7.50",
      value: 4,
    },
    {
      Level: "Vip5",
      Rescue: "25%",
      Upgrade: "16.00",
      Weekly: "7.00",
      Monthly: "12.00",
      Spin: "40%",
      Bankruptcy: "9.00",
      value: 5,
    },
    {
      Level: "Vip6",
      Rescue: "26%",
      Upgrade: "25.00",
      Weekly: "10.00",
      Monthly: "20.00",
      Spin: "60%",
      Bankruptcy: "10.50",
      value: 6,
    },
    {
      Level: "Vip7",
      Rescue: "27%",
      Upgrade: "40.00",
      Weekly: "16.00",
      Monthly: "32.00",
      Spin: "80%",
      Bankruptcy: "12.00",
      value: 7,
    },
    {
      Level: "Vip8",
      Rescue: "28%",
      Upgrade: "50.00",
      Weekly: "20.00",
      Monthly: "40.00",
      Spin: "100%",
      Bankruptcy: "13.50",
      value: 8,
    },
    {
      Level: "Vip9",
      Rescue: "29%",
      Upgrade: "75.00",
      Weekly: "30.00",
      Monthly: "60.00",
      Spin: "125%",
      Bankruptcy: "15.00",
      value: 9,
    },
    {
      Level: "Vip10",
      Rescue: "30%",
      Upgrade: "80.00",
      Weekly: "40.00",
      Monthly: "60.00",
      Spin: "150%",
      Bankruptcy: "16.50",
      value: 10,
    },
    {
      Level: "Vip11",
      Rescue: "31%",
      Upgrade: "200.00",
      Weekly: "100.00",
      Monthly: "150.00",
      Spin: "175%",
      Bankruptcy: "18.00",
      value: 11,
    },
    {
      Level: "Vip12",
      Rescue: "32%",
      Upgrade: "400.00",
      Weekly: "200.00",
      Monthly: "300.00",
      Spin: "200%",
      Bankruptcy: "19.50",
      value: 12,
    },
    {
      Level: "Vip13",
      Rescue: "33%",
      Upgrade: "600.00",
      Weekly: "300.00",
      Monthly: "400.00",
      Spin: "250%",
      Bankruptcy: "21.00",
      value: 13,
    },
    {
      Level: "Vip14",
      Rescue: "34%",
      Upgrade: "1500.00",
      Weekly: "750.00",
      Monthly: "1000.00",
      Spin: "300%",
      Bankruptcy: "22.50",
      value: 14,
    },
    {
      Level: "Vip15",
      Rescue: "35%",
      Upgrade: "3000.00",
      Weekly: "1000.00",
      Monthly: "2000.00",
      Spin: "400%",
      Bankruptcy: "24.00",
      value: 15,
    },
    {
      Level: "Vip16",
      Rescue: "36%",
      Upgrade: "6000.00",
      Weekly: "2000.00",
      Monthly: "4000.00",
      Spin: "500%",
      Bankruptcy: "25.50",
      value: 16,
    },
    {
      Level: "Vip17",
      Rescue: "37%",
      Upgrade: "10000.00",
      Weekly: "2500.00",
      Monthly: "5000.00",
      Spin: "600%",
      Bankruptcy: "27.00",
      value: 17,
    },
    {
      Level: "Vip18",
      Rescue: "38%",
      Upgrade: "20000.00",
      Weekly: "5000.00",
      Monthly: "10000.00",
      Spin: "700%",
      Bankruptcy: "28.50",
      value: 18,
    },
    {
      Level: "Vip19",
      Rescue: "40%",
      Upgrade: "100.00K",
      Weekly: "25000.00",
      Monthly: "50000.00",
      Spin: "800%",
      Bankruptcy: "30.00",
      value: 19,
    },
    {
      Level: "Vip20",
      Rescue: "50%",
      Upgrade: "200.00K",
      Weekly: "50000.00",
      Monthly: "100.00K",
      Spin: "900%",
      Bankruptcy: "120.00",
      value: 20,
    },
  ];
  const handleClose = () => {
    dialogVisible.value = false;
  };
</script>

<style lang="scss">
  .vipLevel {
    backdrop-filter: blur(12px);
    .el-dialog {
      width: calc(100% - 40px);
      max-width: calc(var(--maxWidth) - 40px);
      border-radius: 8px;
      overflow: hidden;
    }
    .el-dialog__header {
      margin: 0 !important;
      padding: 0 !important;
    }
    .el-dialog__body {
      padding: 0 !important;
      background: #1d2027;
    }
    .bg-color-linear-12 {
      background: linear-gradient(270deg, #1d2027, #1b2746);
    }
    .item-head {
      z-index: 10;
      span {
        background: #1d2027;
      }
      span:nth-child(1) {
        position: sticky;
        left: 0;
      }
    }
    .item-style {
      background-color: #313642;

      margin: 5px 0;
      span {
        font-weight: bold;
        &:nth-child(1) {
          position: sticky;
          left: 0;
          background-color: #313642;
          color: #2b5fd7;
        }
      }
    }

    .active {
      span {
        color: #ef6e01 !important;
      }
    }
  }
</style>
