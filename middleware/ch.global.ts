/** @format */

export default defineNuxtRouteMiddleware((to, from) => {
  if (!useNuxtApp().$device.isDesktop) {
    if (to.path != from.path) {
      to.meta.pageTransition = from.meta.pageTransition = {
        name: "page",
        mode: "in-out",
      };
    } else {
      to.meta.pageTransition = from.meta.pageTransition = {};
    }
  }
});
