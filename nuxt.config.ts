/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  devServer: {
    port: 8888,
  },
  app: {
    rootId: "root-p",
    head: {
      htmlAttrs: {
        class: "dark",
      },
    },
  },
  modules: ["@nuxtjs/i18n", "@element-plus/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/device", "@nuxt/image"],
  image: {
    inject: true,
    dir: "assets/images",

    format: ["webp", "avif", "jpeg", "jpg", "png", "gif"],
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/Stylesheets/_variables.scss";`,
        },
      },
    },
  },
  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
    themes: ["dark"],
  },
  css: ["@/assets/Stylesheets/index.scss", "element-plus/dist/index.css"],
});
