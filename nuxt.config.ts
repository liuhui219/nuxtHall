/** @format */
import {loadEnv} from "vite";
import {compression} from "vite-plugin-compression2";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import viteImagemin from "vite-plugin-imagemin";
const envScript = (process.env.npm_lifecycle_script as string).split(" ");
const envName = envScript[envScript.length - 1]; // 通过启动命令区分环境
const envData: any = loadEnv(envName, process.cwd());

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,

    timeline: {
      enabled: false,
    },
  },
  ssr: true,

  sourcemap: {
    server: false,
    client: true,
  },

  devServer: {
    port: 6789,
    host: "0.0.0.0",
  },

  routeRules: {
    // "/about": {prerender: true},
    // 针对路径进行接口转发
    "/dev-api/**": {
      // https://cnodejs.org/api/v1 是个公共接口api前缀，将其替换为后端写好的接口调用地址就好
      proxy: `https://dummyjson.com/**`,
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
      locale: envData?.VITE_PUBLIC_LANG || "en",
      // gameURL: envData?.VITE_PUBLIC_GAME_URL,
    },
  },

  build: {
    analyze: false,
  },

  app: {
    rootId: "root-p",
    keepalive: true,
    buildAssetsDir: "/hall/",
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no,initial-scale=1.0,viewport-fit=cover",
        },

        {
          charset: "utf-8",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "mobile-web-app-capable",
          content: "yes",
        },
        {name: "description", content: "描述"},
        {name: "keywords", content: "关键词"},
      ],
      charset: "utf-8",
      htmlAttrs: {
        class: "dark",
        lang: envData?.VITE_PUBLIC_LANG || "en",
      },
      link: [{rel: "manifest", href: "/manifest.webmanifest"}],
      script: [{src: "https://www.googletagmanager.com/gtag/js?id=G-CPF0DDW6YE", defer: true}, {src: "config.js"}],
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
    "@zadigetvoltaire/nuxt-gtm",
    "@nuxtjs/robots",
    "@vite-pwa/nuxt",
  ],

  pwa: {
    registerType: "autoUpdate",
    injectRegister: "inline",
    manifest: {
      name: "EasyGame",
      short_name: "EasyGame",
      theme_color: "#141414",
      display: "standalone",
      background_color: "#141414",
      start_url: "/",
      scope: "/",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },

    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
  },

  gtm: {
    id: "GTM-PG9LNMLJ",

    defer: true, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
    compatibility: true, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`

    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: true, // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
    enableRouterSync: false, // Pass the router instance of your app to automatically sync with router (optional)

    trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
    devtools: true, // (optional)
  },

  delayHydration: {
    mode: "init",
  },

  i18n: {
    defaultLocale: envData?.VITE_PUBLIC_LANG || "en",
    vueI18n: "./locales/index.js",
  },

  vite: {
    plugins: [
      compression(),
      cssInjectedByJsPlugin({
        injectCode: (cssCode, options) => {
          return `try{if(typeof document != 'undefined'){var elementStyle = document.createElement('style');elementStyle.appendChild(document.createTextNode(${cssCode}));document.head.appendChild(elementStyle);}}catch(e){console.error('vite-plugin-css-injected-by-js', e);}`;
        },
      }),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 80,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: "removeViewBox",
            },
            {
              name: "removeEmptyAttrs",
              active: false,
            },
          ],
        },
      }),
    ],
    build: {
      target: "es2015",
      assetsInlineLimit: 10240,
      cssCodeSplit: true,
      minify: "terser", // 必须开启：使用terserOptions才有效果
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true, // 生产环境去除 console
          drop_debugger: true, // 生产环境去除 debugger
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
