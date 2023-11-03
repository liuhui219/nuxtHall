/** @format */
import {loadEnv} from "vite";
import viteCompression from "vite-plugin-compression";
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
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 10240, // 对超过10kb的数据进行压缩
        deleteOriginalAssets: false, // 是否删除原文件
      }),
    ],

    optimization: {
      minimize: true,
      minimizer: [
        // new CssMinimizerPlugin(),
      ],
      splitChunks: {
        // 生成 chunk 的最小体积（以 bytes 为单位）
        chunks: "all",
        automaticNameDelimiter: "-",
        minSize: 10000,
        maxSize: 250000,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10, //优先级
            reuseExistingChunk: true,
          },
          common: {
            minChunks: 2,
            priority: -20, //优先级
            reuseExistingChunk: true,
          },
        },
      },
    },
  },

  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: false, // set true to turn one console messages during module init
    test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
    middleware: {
      enabled: true,
      enabledStatic: true,
      encodingsPriority: ["br", "gzip"],
    },
    gzip: {
      enabled: true,
      filename: "[path].gz[query]", // middleware will look for this filename
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: {level: 9},
    },
    brotli: {
      enabled: true,
      filename: "[path].br[query]", // middleware will look for this filename
      compressionOptions: {level: 11},
      threshold: 10240,
      minRatio: 0.8,
    },
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
          content: "width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0",
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
