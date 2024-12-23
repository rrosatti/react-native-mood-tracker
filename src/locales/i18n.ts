import i18n, {LanguageDetectorModule} from 'i18next';
import {initReactI18next} from 'react-i18next';

import commonEn from './languages/en/common.json';
import commonPt from './languages/pt/common.json';
import i18next from 'i18next';
import useStorage from '../state/local/hooks/useStorage';
import {Language} from '../state/local/types';

export const resources = {
  en: {
    common: commonEn,
  },
  pt: {
    common: commonPt,
  },
} as const;

export const defaultNS = 'common';

const getLocale = (): string => {
  const selectedLanguage = useStorage.getState().getItem('language');
  if (selectedLanguage) return selectedLanguage;
  return 'en';
};

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: getLocale,
  init: () => {},
  cacheUserLanguage: language => {
    useStorage.getState().setItem('language', language as Language);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    ns: [defaultNS],
    defaultNS,
    fallbackNS: defaultNS,
    // lng: 'en',
    fallbackLng: 'en',
  });

export const changeLanguage = i18next.changeLanguage;

export default i18n;
