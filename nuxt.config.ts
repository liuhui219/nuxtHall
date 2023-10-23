/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  devServer: {
    port: 8888,
  },
  app: {
    rootId: "root-p",
    keepalive: true,
    head: {
      meta: [
        {name: "description", content: "描述"},
        {name: "keywords", content: "关键词"},
        {
          name: "viewport",
          content:
            "width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no,initial-scale=1.0,viewport-fit=cover",
        },
        {name: "render", content: "webkit"},
        {name: "format-detection", content: "telephone=no"},
        {name: "force-rendering", content: "webkit"},
      ],
      charset: "utf-8",
      htmlAttrs: {
        class: "dark",
      },
    },
  },
  modules: ["nuxt-swiper", "@nuxtjs/i18n", "@element-plus/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/device"],

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
  css: ["@/assets/Stylesheets/index.scss", "element-plus/dist/index.css", "@/assets/fonts/iconfont/iconfont.css"],
});
