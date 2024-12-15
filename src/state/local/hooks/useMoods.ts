import {useCallback} from 'react';
import useStorage from './useStorage';
import {MoodConfig} from '../types';

const useMoods = () => {
  const {storage, setItem} = useStorage();

  const addMood = useCallback((moodConfig: MoodConfig | null | undefined) => {
    if (!moodConfig) return;
    setItem('moods', [moodConfig, ...storage.moods]);
  }, []);

  return {addMood};
};

export default useMoods;
