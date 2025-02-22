import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.js';
import es from './locales/es/translation.js';
import fr from './locales/fr/translation.js';
import ch from './locales/ch/translation.js';

// 🔹 Definir los recursos de traducción
const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  ch: { translation: ch },
};

// 🔹 Detectar idioma guardado o usar el del navegador
const savedLanguage = localStorage.getItem('language') || navigator.language.split('-')[0] || 'en';

// 🔹 Inicialización de i18next con el idioma guardado en localStorage
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,  // Usar el idioma guardado en localStorage
    fallbackLng: 'es',  // Si no se encuentra el idioma, usa español como fallback
    debug: false,
    interpolation: {
      escapeValue: false,  // React ya se encarga de evitar XSS
    },
  });

// 🔹 Función para cambiar y guardar el idioma
export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);  // Cambiar el idioma
  localStorage.setItem('language', lng);  // Guardar el idioma seleccionado en localStorage
};

export default i18n;
