/** @format */

import enLocale from "./en";
import zhLocale from "./cn";
import ptBrLocale from "./pt-br";
import en from "element-plus/dist/locale/en.mjs";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import ptBr from "element-plus/dist/locale/pt-br.mjs";

const messages = {
  en: {
    ...enLocale,
    ...en,
  },
  "zh-cn": {
    ...zhLocale,
    ...zhCn,
  },
  "pt-br": {
    ...ptBrLocale,
    ...ptBr,
  },
};

export default messages;
