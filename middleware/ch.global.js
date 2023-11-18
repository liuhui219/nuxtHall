/** @format */

export default defineNuxtRouteMiddleware((to, from) => {
  const islogin = useLogin();

  if (to.meta.auth && !~~islogin.value) {
    return navigateTo({
      path: "/",
      hash: "#/login",
    });
  }

  if (to.hash.includes("/login") || to.hash.includes("/register")) {
    if (~~islogin.value) {
      let hash = to.hash.replace("/login", "").replace("/register", "");
      return navigateTo({path: to.path, query: to.query, params: to.params, hash: hash});
    }
  }

  if (!to.name) {
    return navigateTo("/");
  }

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

  if (from.path != to.path) {
    const httpLoading = useHttpLoading();
    httpLoading.value = true;
  }
});
