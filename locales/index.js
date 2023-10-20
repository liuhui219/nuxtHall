/** @format */

import enLocale from "./en";
import zhLocale from "./cn";
import en from "element-plus/dist/locale/en.mjs";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const messages = {
  en: {
    ...enLocale,
    ...en,
  },
  "zh-cn": {
    ...zhLocale,
    ...zhCn,
  },
};

export default messages;
