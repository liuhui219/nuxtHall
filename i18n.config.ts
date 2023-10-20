/** @format */
import locales from "./locales/index.js";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: locales,
}));
