<!-- @format -->

<template>
  <div class="records">
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
    padding: 8px;

    .records-content {
      width: 100%;
      background: #36373b;
      border-radius: 4px;
      height: 100%;
      overflow-x: hidden;
      padding: 0 8px;
      .records-content-head {
        position: sticky;
        top: 0;
        background: #36373b;
      }
      .records-content-cont {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
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
          background: #45464a;
          border-radius: 4px;
        }
      }
    }
  }
</style>
