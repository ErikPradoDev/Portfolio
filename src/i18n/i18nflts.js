import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import enTranslation from './enLang.json' // English - US
import ptTranslation from './ptLang.json' // Português - BR


const resources = {
  en: { // English - US
    translation: enTranslation,
    },
  pt: { // Português - BR
    translation: ptTranslation,
    }
};


i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "pt", // idioma padrão
    fallbackLng: "pt", // Idioma de fallback, caso o idioma padrão não estar disponível.

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;