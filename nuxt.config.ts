/** @format */
import {loadEnv} from "vite";
import {compression} from "vite-plugin-compression2";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const envScript = (process.env.npm_lifecycle_script as string).split(" ");
const envName = envScript[envScript.length - 1]; // 通过启动命令区分环境
const envData: any = loadEnv(envName, process.cwd());

console.log(666, envName, envData);

const CompressionPlugin = require("compression-webpack-plugin");
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: false},

  devServer: {
    port: 8888,
    host: "0.0.0.0",
  },

  routeRules: {
    // 针对路径进行接口转发
    "/dev-api/**": {
      // https://cnodejs.org/api/v1 是个公共接口api前缀，将其替换为后端写好的接口调用地址就好
      proxy: `https://api.nuxtjs.dev/**`,
    },
  },

  // nitro: {
  //   devProxy: {
  //     "/dev-api/": {
  //       target: "https://api.nuxtjs.dev/",
  //       changeOrigin: true,
  //     },
  //   },
  // },

  runtimeConfig: {
    public: {
      apiBase: envData?.VITE_PUBLIC_API_BASE,
    },
  },

  build: {
    analyze: true,
  },

  app: {
    rootId: "root-p",
    keepalive: true,
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=5.0",
        },
        {
          charset: "utf-8",
        },
        {name: "description", content: "描述"},
        {name: "keywords", content: "关键词"},
      ],
      charset: "utf-8",
      htmlAttrs: {
        class: "dark",
        lang: "zh-CN",
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
    "dayjs-nuxt",
    "nuxt-delay-hydration",
  ],

  delayHydration: {
    mode: "init",
  },

  i18n: {
    vueI18n: "./i18n.config.ts",
  },

  vite: {
    plugins: [
      compression(),
      cssInjectedByJsPlugin({
        injectCode: (cssCode, options) => {
          return `try{if(typeof document != 'undefined'){var elementStyle = document.createElement('style');elementStyle.appendChild(document.createTextNode(${cssCode}));document.head.appendChild(elementStyle);}}catch(e){console.error('vite-plugin-css-injected-by-js', e);}`;
        },
      }),
    ],
    build: {
      target: "es2015",
      assetsInlineLimit: "10240",
      cssCodeSplit: true,
      minify: "terser", // 必须开启：使用terserOptions才有效果
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true, // 生产环境去除 console
          drop_debugger: true, // 生产环境去除 debugger
        },
      },

      sourcemap: false,
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
