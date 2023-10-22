/** @format */

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      importImage: (name: string, type = "png", folder = "images") => {
        const glob = import.meta.glob("~/assets/images/**/*", {
          eager: true,
        });

        return glob[`/assets/${folder}/${name}.${type}`]["default"];
      },
    },
  };
});
