import React from 'react';
import {Text, View} from 'react-native';

import {StyleSheet} from 'react-native-unistyles';

import useStorage from '../state/local/hooks/useStorage';
import {useTranslation} from 'react-i18next';
import {useGetMoodLocale} from '../utils/mood';

const styles = StyleSheet.create((theme, miniRuntime) => ({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: miniRuntime.insets.top + 20,
    paddingBottom: miniRuntime.insets.bottom + 20,
    backgroundColor: theme.colors.common.background,
  },
  moodText: {
    fontSize: 24,
    textAlign: 'center',
  },
}));

const HomeScreen = () => {
  const {storage} = useStorage();

  const {t} = useTranslation();
  const getMoodLocale = useGetMoodLocale();
  return (
    <View style={styles.wrapper}>
      {storage?.moods[0]?.type && (
        <Text style={styles.moodText}>
          {t('home.latestMood', {mood: getMoodLocale(storage.moods[0].type)})}
        </Text>
      )}
    </View>
  );
};

export default HomeScreen;
