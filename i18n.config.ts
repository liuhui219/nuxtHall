/** @format */
import locales from "./locales/index.js";
export default defineI18nConfig(() => {
  return {legacy: false, locale: "en", messages: locales};
});
