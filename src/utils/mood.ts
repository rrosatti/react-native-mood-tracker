import {useTranslation} from 'react-i18next';
import {MoodConfig} from '../state/local/types';
import {useCallback} from 'react';

export const useGetMoodLocale = () => {
  const {t} = useTranslation('common');
  return useCallback((moodType: MoodConfig['type']): string => {
    if (moodType === 'sad') return t('moodSlider.sad');
    if (moodType === 'neutral') return t('moodSlider.neutral');
    if (moodType === 'happy') return t('moodSlider.happy');
    return t('moodSlider.neutral');
  }, []);
};
