/**
 * @format
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-10-23 09:39:52
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-11-01 18:27:39
 * @FilePath: \hall\composables\useConfig.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/** @format */

export const useIsCollapse = () => useState("is_Collapse", () => false);
export const usePageLoading = () => useState("page-loading", () => true);

export const useMenuDrawer = () => useState("menu-drawer", () => false);

export const useLoginDialog = () => useState("login-dialog", () => false);
export const useResetDialog = () => useState("reset-dialog", () => false);
export const useRegisterDialog = () => useState("register-dialog", () => false);

//判断当前是否在某个页面(current必须以【/】开头)或弹窗(不带【/】开头则是弹窗)
export function isPageInSome(current: string, path = "") {
  if (!current) {
    current = "/";
  }

  if (!path) {
    if (current.charAt(0) == "/") {
      path = useRoute().path.toString();
    } else {
      path = useRoute().hash.toString();
    }
  }
  if (current == "/") {
    return path == "/";
  }
  return path.toString().includes(current);
}

export const closePopup = (name?: string | undefined) => {
  const route = useRoute();
  let {params, query, path, hash} = route;
  let nextHash = hash;
  nextHash = nextHash.replace("/" + name, "");
  navigateTo({path, params, hash: nextHash, query});
};

export const openPopup = (name?: string | undefined) => {
  const route = useRoute();
  let {params, query, path, hash} = route;
  if (!useNuxtApp().$device.isDesktop && name != "menu") {
    hash = hash.replace("/menu", "");
  }
  let nextHash = "";
  nextHash = "#/" + name;
  navigateTo({path, params, hash: nextHash, query});
};

export const closeAllPopup = () => {
  const route = useRoute();
  let {params, query, path, hash} = route;
  let nextHash = hash;
  nextHash = nextHash.replace(hash, "");
  navigateTo({path, params, hash: nextHash, query});
};
