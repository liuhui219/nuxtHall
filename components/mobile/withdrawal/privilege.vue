<!-- @format -->

<template>
  <div class="privilege">
    <el-divider
      ><span class="font-black">{{ $t("H0023") }}</span>
    </el-divider>
    <div class="privilege-content">
      <div class="privilege-content-head privilege-content-cont">
        <span>Privilege</span>
        <span>Count</span>
        <span>Free quota</span>
        <span>Limitation</span>
      </div>
      <div class="privilege-content-cont" v-for="(item, index) in list" :key="index">
        <span class="vip">{{ item.Privilege }}</span>
        <span>{{ item.Count }}</span>
        <span>{{ item.quota }}</span>
        <span>{{ item.Limitation }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  const list = ref([]);
  onMounted(() => {
    let conut = 20;
    let arr = [];
    for (let i = 0; i < conut; i++) {
      arr.push({
        Privilege: "vip" + i,
        Count: i,
        quota: i,
        Limitation: i,
      });
    }

    list.value = arr;
  });
</script>

<style lang="scss" scoped>
  .privilege {
    width: 100%;
    height: 100%;
    padding: 0 16px;
    background-color: #25262b;

    .privilege-content {
      width: 100%;

      border-radius: 4px;
      height: calc(100% - 50px);

      padding: 0 8px;

      .privilege-content-cont {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
        height: 50px;
        background: #313642;
        border-radius: 4px;
        span {
          font-size: 14px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vip {
          color: var(--el-color-primary);
        }
      }
      .privilege-content-head {
        position: sticky;
        top: 0;
        background-color: transparent;
        height: auto;
        background-color: #25262b;
        color: #46516b;
      }
    }
  }
</style>
