/** @format */

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      importImage: (name, type = "png", folder = "images") => {
        const glob = import.meta.glob("~/assets/images/**/*", {
          eager: true,
        });

        let path = glob[`/assets/${folder}/${name}.${type}`]
          ? glob[`/assets/${folder}/${name}.${type}`]["default"]
          : "";

        return path;
      },
    },
  };
});
