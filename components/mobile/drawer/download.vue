<!-- @format -->

<template>
  <client-only
    ><Lazy-el-dialog
      v-model="downloadDialog"
      modal-class="mobile-el-download-dialog"
      :show-close="false"
      title=""
      width="100%"
      destroy-on-close
      center
      align-center
      @close="closeDownload"
      @open="openDialog"
    >
      <div
        class="z-[700] m-auto px-[22px] max-h-[100vh] overflow-x-hidden overflow-y-auto h-[max-content] absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center border-radius-0 transition-all duration-300 pointer-events-none opacity-100 pointer-events-auto translate-y-0"
      >
        <base-img class="w-full" name="add-to-home" type="avif" path="images/home" />
        <button
          @click="closeDownload"
          class="absolute z-[2] top-[15%] right-[7.5%] w-[40px] h-[40px] text-color-text-2 text-[18px] flex items-center justify-center"
        ></button>
      </div> </Lazy-el-dialog
  ></client-only>
</template>

<script setup lang="ts">
  const {locale, t} = useI18n();
  const downloadDialog = useDownloadDialog();
  const isLogin = useIsLogin();
  const route = useRoute();

  const closeDownload = () => {
    closePopup("download");
  };

  const openDialog = () => {
    download.callBack();
  };

  watchEffect(() => {
    downloadDialog.value = getHashValue(route.hash) === "download";
  });
</script>

<style lang="scss">
  .mobile-el-download-dialog {
    backdrop-filter: blur(12px);
    .el-dialog {
      background: transparent;
      box-shadow: none;
      width: 100%;
      max-width: calc(var(--maxWidth) - 40px);
      border-radius: 10px;

      .login-close .el-icon {
        font-size: 18px;
        color: var(--el-border-color-darker);
      }
    }
  }
</style>
