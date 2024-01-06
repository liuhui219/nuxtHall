<!-- @format -->

<template>
  <client-only>
    <el-dialog
      v-model="dialog"
      modal-class="pc-el-overlay-dialog"
      :show-close="false"
      title=""
      destroy-on-close
      center
      width="800"
      align-center
      @close="closeDialog"
      @open="openDialog"
    >
      <div class="login-modal-content">
        <base-close-btn class="p-[15px] absolute right-0 top-0 z-[1] text-[22px]" @click="close"></base-close-btn>
        <div class="modal-content-img w-[360px] h-[600px]">
          <base-img class="w-full banner-image" name="banner_pc" type="jpg" path="images/show" />
        </div>
        <div class="modal-suspense">
          <template v-for="(item, index) in components">
            <Suspense v-if="route.hash.includes(item.name)">
              <component :is="item.component" />
              <template #fallback>
                <baseLoading :http="true"></baseLoading>
              </template>
            </Suspense>
          </template>
        </div>
      </div>
    </el-dialog>
  </client-only>
</template>

<script setup>
  const dialog = useDialog();

  const route = useRoute();
  const components = shallowRef([]);
  const closeDialog = () => {
    const parmas = route.hash.split("/")[1];
    closePopup(parmas);
  };
  const close = () => {
    const parmas = route.hash.split("/")[1];
    closePopup(parmas);
    if (parmas === "reset") {
      openPopup("login");
    }
  };
  const openDialog = () => {};

  watchEffect(() => {
    dialog.value = ["login", "register", "reset"].includes(getHashValue(route.hash));
  });

  onMounted(() => {
    const modulesFiles = import.meta.glob("~/components/desktop/sign/*.vue");
    const modules = [];
    Object.keys(modulesFiles).forEach((modulePath) => {
      const result = modulePath.match(/.*\/(.+).vue$/);
      const value = modulesFiles[modulePath];
      modules.push({component: defineAsyncComponent(value), name: result[1]});
    });

    components.value = [...modules];
  });
</script>

<style lang="scss">
  .pc-el-overlay-dialog {
    .el-dialog__header {
      display: none;
    }

    .el-dialog__body {
      padding: 0 !important;
      width: 100%;

      .login-modal-content {
        width: 100%;
        height: 600px;
        display: flex;
        flex-direction: row;
        position: relative;
      }
      .modal-suspense {
        position: relative;
        width: calc(100% - 360px);
        padding: 0 50px;
        display: flex;
        flex-direction: column;
      }
      .modal-content-form {
        width: 100%;
        height: 100%;
        .el-form {
          width: 100%;

          .el-form-item__content {
            .el-input {
              --el-input-height: 50px;
              .el-input__wrapper {
                border-radius: 8px;
                font-weight: bold;
              }
              .el-input__prefix {
                color: var(--el-text-color-primary);
                font-weight: 500;
              }
            }
            .el-form-item__error {
              margin-left: 0;
              margin-top: 6px;
            }
            .el-button {
              border-radius: 8px;
              --el-button-size: 50px;
            }
          }
        }
      }
    }
    .login-main {
      color: var(--el-color-primary);
    }
    .pointer {
      cursor: pointer;
    }
  }
</style>
