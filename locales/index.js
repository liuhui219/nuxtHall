/** @format */

import enLocale from "./en";
import zhLocale from "./cn";
import ptBrLocale from "./pt-br";

const messages = {
  en: {
    ...enLocale,
  },
  "zh-cn": {
    ...zhLocale,
  },
  "pt-br": {
    ...ptBrLocale,
  },
};

export default defineI18nConfig(() => {
  return {legacy: false, messages};
});
