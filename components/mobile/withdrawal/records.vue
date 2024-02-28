<!-- @format -->

<template>
  <div class="records">
    <el-divider
      ><span class="font-black">{{ $t("H0024") }}</span>
    </el-divider>
    <div class="records-content">
      <div class="records-content-head records-content-cont">
        <span>Valor</span>
        <span>Tempo</span>
        <span>Estado</span>
        <span>pedido</span>
      </div>
      <div class="records-content-cont" v-for="(item, index) in list" :key="index">
        <span class="vip">{{ item.Privilege }}</span>
        <span>{{ item.Count }}</span>
        <span><BaseIcon :name="item.quota ? 'yes' : 'no'" :class="{yes: item.quota, no: !item.quota}" /></span>
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
  .records {
    width: 100%;
    height: 100%;
    padding: 0 16px;
    background-color: #25262b;

    .records-content {
      width: 100%;
      border-radius: 4px;
      height: calc(100% - 50px);

      padding: 0 8px;

      .records-content-cont {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        margin-bottom: 5px;
        background: #313642;
        border-radius: 4px;
        span {
          font-size: 14px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          .yes {
            color: var(--el-color-primary);
          }
          .no {
            color: #d0344e;
          }
          .icon {
            font-size: 14px;
          }
        }
        .vip {
          color: var(--el-color-primary);
        }
        &:nth-child(2n) {
        }
      }
      .records-content-head {
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
