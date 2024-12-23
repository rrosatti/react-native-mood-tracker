import React, {useCallback, useState} from 'react';
import {Button, Text, View} from 'react-native';

import {StyleSheet} from 'react-native-unistyles';

import MoodSlider from '../components/MoodSlider';
import {MoodConfig} from '../state/local/types';
import useMoods from '../state/local/hooks/useMoods';
import {useTranslation} from 'react-i18next';

const styles = StyleSheet.create((theme, miniRuntime) => ({
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: miniRuntime.insets.top + 20,
    paddingBottom: miniRuntime.insets.bottom + 20,
    backgroundColor: theme.colors.common.background,
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
    textAlign: 'center',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonWrapper: {
    marginTop: 20,
  },
}));

const LogMoodScreen = () => {
  const [selectedMood, setSelectedMood] = useState<MoodConfig | null>();

  const {t} = useTranslation('common');

  const {addMood} = useMoods();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{t('logMood.title')}</Text>
      <View style={styles.contentWrapper}>
        <MoodSlider onSelectedMood={setSelectedMood} />
        <View style={styles.buttonWrapper}>
          <Button
            title={t('logMood.submitButton')}
            onPress={useCallback(() => addMood(selectedMood), [selectedMood])}
          />
        </View>
      </View>
    </View>
  );
};

export default LogMoodScreen;
