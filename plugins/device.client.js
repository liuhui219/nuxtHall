/** @format */

export default defineNuxtPlugin({
  name: "device",
  enforce: "pre", // 或 'post'
  async setup(nuxtApp) {
    // 这相当于一个普通的功能性插件
    nuxtApp.provide(
      "isMobile",
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  },
});
