/** @format */

export const useIsCollapse = () => useState("is_Collapse", () => false);
export const usePageLoading = () => useState("page-loading", () => true);

export const useMenuDrawer = () => useState("menu-drawer", () => false);

export const useLoginDialog = () => useState("login-dialog", () => false);

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
  const menuDrawer = useMenuDrawer();
  const route = useRoute();
  let {params, query, path, hash} = route;
  let nextHash = hash;
  nextHash = nextHash.replace("/" + name, "");
  navigateTo({path, params, hash: nextHash, query});
  menuDrawer.value = false;
};

export const openPopup = (name?: string | undefined) => {
  const menuDrawer = useMenuDrawer();
  const route = useRoute();
  let {params, query, path, hash} = route;
  let nextHash = "";
  nextHash = "#/" + name;
  navigateTo({path, params, hash: nextHash, query});
  menuDrawer.value = true;
};
