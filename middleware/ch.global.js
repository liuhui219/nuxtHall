/** @format */
import store from "store";
export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;
  const isLogin = useIsLogin();
  let status = store.get("w_l_s_a");

  if (status === "undefined" || status === undefined) {
    isLogin.value = false;
  } else {
    isLogin.value = true;
  }

  if (to.meta.auth && !isLogin.value) {
    return navigateTo({
      path: "/",
      hash: "#/login",
    });
  }

  if (to.hash.includes("/login") || to.hash.includes("/register")) {
    if (isLogin.value) {
      let hash = to.hash.replace("/login", "").replace("/register", "");
      return navigateTo({path: to.path, query: to.query, params: to.params, hash: hash});
    }
  }

  if (to.name == from.name && JSON.stringify(to.query) != JSON.stringify(from.query)) {
    //相同页面下 特殊跳转 【替换页面】
    return navigateTo({path: to.path, query: to.query, params: to.params, hash: to.hash, replace: true});
  }

  if (!to.name) {
    return navigateTo("/");
  }
  const pageToIndex = to.meta.pageIndex;
  const pageFromIndex = from.meta.pageIndex;
  if (!useNuxtApp().$device.isDesktop) {
    if (to.path !== from.path) {
      if (pageToIndex === pageFromIndex) {
        to.meta.pageTransition = from.meta.pageTransition = {
          name: "page",
          mode: "in-out",
        };
      }
      if (pageToIndex > pageFromIndex) {
        to.meta.pageTransition = from.meta.pageTransition = {
          name: "app-slide-left",
          mode: "in-out",
        };
      }

      if (pageToIndex < pageFromIndex) {
        to.meta.pageTransition = from.meta.pageTransition = {
          name: "app-slide-right",
          mode: "in-out",
        };
      }
    } else {
      to.meta.pageTransition = from.meta.pageTransition = {};
    }
  }

  if (from.path != to.path) {
    const httpLoading = useHttpLoading();
    httpLoading.value = true;
  }
});
