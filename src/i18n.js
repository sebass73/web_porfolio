import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from '../src/locales/en/translation.json'
import translationES from '../src/locales/es/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;