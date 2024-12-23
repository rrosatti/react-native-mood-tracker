import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';
import {useTranslation} from 'react-i18next';

import LanguagePicker from '../components/LanguagePicker';

const styles = StyleSheet.create((theme, miniRuntime) => ({
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: miniRuntime.insets.top + 20,
    paddingBottom: miniRuntime.insets.bottom + 20,
    backgroundColor: theme.colors.common.background,
  },
  languageSelectionTitle: {fontSize: 24, fontWeight: 'bold'},
}));

const ProfileScreen = () => {
  const {t} = useTranslation('common');
  return (
    <View style={styles.wrapper}>
      <Text style={styles.languageSelectionTitle}>
        {t('profile.languageSelectorTitle')}
      </Text>
      <LanguagePicker />
    </View>
  );
};

export default ProfileScreen;
