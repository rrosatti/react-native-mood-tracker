import {useCallback} from 'react';
import useStorage from './useStorage';
import {Language} from '../types';

import {changeLanguage as changeI18nLanguage} from '../../../locales/i18n';

const useLanguage = () => {
  const {setItem, storage} = useStorage();

  const changeLanguage = useCallback(
    (language: Language | null | undefined) => {
      if (!language) return;
      setItem('language', language);
      changeI18nLanguage(language);
    },
    [],
  );

  return {changeLanguage, language: storage.language};
};

export default useLanguage;
