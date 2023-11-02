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

import viteCompression from "vite-plugin-compression";
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: false},

  devServer: {
    port: 8888,
    host: "0.0.0.0",
  },
  // routeRules: {
  //   // 针对路径进行接口转发
  //   "/dev-api/**": {
  //     // https://cnodejs.org/api/v1 是个公共接口api前缀，将其替换为后端写好的接口调用地址就好
  //     proxy: `https://dummyjson.com/**`,
  //   },
  // },

  build: {
    analyze: true,
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
    plugins: [
      ViteImageOptimizer({
        /* pass your config */
      }),
      // ...
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 1024,
        algorithm: "gzip",
        ext: ".gz",
      }),
    ],
    external: ["vue", "element-plus"],
    build: {
      target: "es2015",
      cssTarget: "chrome80",
      minify: "terser", // 必须开启：使用terserOptions才有效果
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true, // 生产环境去除 console
          drop_debugger: true, // 生产环境去除 debugger
        },
      },

      brotliSize: false, // 进行压缩计算
      chunkSizeWarningLimit: 2000, // chunk 大小警告的限制（以 kbs 为单位）
      rollupOptions: {
        treeshake: true,
        output: {
          // 分包
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          },
        },
      },
    },

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
