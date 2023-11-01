<!-- @format -->

<!--
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-11-01 16:18:47
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-11-01 18:50:02
 * @FilePath: \hall\components\mobile\model\drawer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- @format -->

<template>
  <el-drawer
    v-model="drawer"
    modal-class="mobile-drawer-el-overlay"
    title="I am the title"
    :with-header="false"
    :close-on-press-escape="false"
    :destroy-on-close="true"
    :modal="false"
    :size="'100%'"
  >
    <div class="mobile-modal-content">
      <header class="mobile-modal-content-header">
        <button @click="closeAllPopup()" class="back-btn"><BaseIcon name="back" class="text-[18px]" /></button>
        <h1 class="header-title">{{ title }}</h1>
        <div class="header-right">
          <slot name="header"></slot>
        </div>
      </header>
      <main class="mobile-modal-content-main">
        <slot name="body"></slot>
      </main>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: "",
    },
    drawer: {
      type: Boolean,
      default: false,
    },
  });
  const drawer = ref(false);
  watchEffect(() => {
    drawer.value = props.drawer;
  });
</script>

<style lang="scss">
  .mobile-drawer-el-overlay {
    .el-drawer__body {
      padding: 0;
    }
    .mobile-modal-content {
      background-color: var(--el-bg-color);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .mobile-modal-content-header {
        background: linear-gradient(90deg, #1b2746 0.03%, #1d2027 99.93%);
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        .back-btn {
          height: 100%;
          padding: 0 17px;
          position: absolute;
          top: 0;
          left: 0;
          i {
            font-size: 20px;
          }
        }
        .header-title {
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          width: 100%;
        }
        .header-right {
          height: 100%;
          padding: 0 17px;
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .mobile-modal-content-main {
        width: 100%;
        height: calc(100% - 60px);
        overflow-x: hidden;
        background: var(--el-bg-color);
      }
    }
  }
</style>
