// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import en from './i18n/en.json';
import nl from './i18n/nl.json';  // You can add other languages similarly

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
        nl: {
            translation: nl
        },
    },
    supportedLngs:['en','nl'],
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language when the selected one is not available
    interpolation: {
        escapeValue: false // React already escapes values, so no need to do it again
    }
});

export default i18n;