/**
 * @format
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-10-25 09:35:22
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-10-30 18:12:28
 * @FilePath: \hall\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: false},
  devServer: {
    port: 8888,
    host: "0.0.0.0",
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
            "width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=yes,initial-scale=1.0,viewport-fit=cover",
        },
        {name: "apple-mobile-web-app-capable", content: "yes"},
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
  modules: [
    "nuxt-swiper",
    "@nuxtjs/i18n",
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/device",
    "@vueuse/nuxt",
  ],

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
