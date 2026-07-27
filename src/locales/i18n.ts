import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { NativeModules, Platform } from "react-native";

import { ca } from "./ca";
import { en } from "./en";

const resources = {
  en: { translation: en },
  ca: { translation: ca },
};

const getDeviceLanguage = () => {
  const locale =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;
  return locale ? locale.split('_')[0] : 'en';
};

const initI18n = async () => {
  const savedLanguage = 'en'; // WIP: To replace with prefered language from storage
  const language = savedLanguage || getDeviceLanguage();
  i18n.use(initReactI18next).init({
    resources,
    lng: language,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
};

initI18n();

export default i18n;