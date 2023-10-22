/** @format */

export const useIsCollapse = () => useState("is_Collapse", () => false);
export const usePageLoading = () => useState("page-loading", () => true);

export const importImage = (name, type = "png", folder = "images") => {
  const glob = import.meta.glob("~/assets/images/**/*", {
    eager: true,
  });

  return useState("import-image", () => glob[`/assets/${folder}/${name}.${type}`]["default"]);
};
