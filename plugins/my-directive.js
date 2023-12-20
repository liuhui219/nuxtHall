/** @format */

export default defineNuxtPlugin((nuxtApp) => {
  const fun = function (evt) {
    let target = evt.target;
    if (target.nodeName == "SPAN") {
      target = evt.target.parentNode;
    }
    target.blur();
  };
  nuxtApp.vueApp.directive("btn", {
    mounted(el) {
      el.addEventListener("focus", fun);
    },
    unmounted(el) {
      el.removeEventListener("focus", fun);
    },
    getSSRProps(binding, vnode) {
      // 你可以在这里提供SSR特定的props
      return {};
    },
  });
});
