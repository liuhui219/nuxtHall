/** @format */

export const download = {
  callBack: () => {
    if (useNuxtApp().$device.isApple) {
      openPopup("download");
    }
    if (useNuxtApp().$device.isAndroid) {
      navigateTo("https://zjdown.easygameapi.com/patch/PresenteSlots20320.apk", {
        open: {
          target: "_blank",
        },
      });
    }
    if (useNuxtApp().$device.isDesktop && window.deferredPrompt) {
      window.deferredPrompt.prompt();
      // 在用户选择安装或取消后，处理相应的逻辑
      window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("用户已安装");
        } else {
          console.log("用户取消安装");
        }
        window.deferredPrompt = null;
      });
    }
  },
};
