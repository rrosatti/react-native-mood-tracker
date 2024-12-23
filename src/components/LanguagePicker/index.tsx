import {Picker} from '@react-native-picker/picker';
import React, {useCallback, useMemo} from 'react';
import useLanguage from '../../state/local/hooks/useLanguage';
import {Language} from '../../state/local/types';
import {StyleSheet} from 'react-native-unistyles';
import theme from '../../styles/theme';

import {useTranslation} from 'react-i18next';

const styles = StyleSheet.create(theme => ({
  picker: {width: '100%', height: 150},
  item: {
    color: theme.colors.common.primary,
  },
}));

type Item = {
  label: string;
  value: Language;
};

type Props = {
  isSelected: boolean;
  label: string;
  value: Language;
};

const usePickerItems = () => {
  const {t} = useTranslation('common');
  return useMemo<Item[]>(() => {
    return [
      {value: 'en', label: t('languageSelector.en')},
      {value: 'pt', label: t('languageSelector.pt')},
    ];
  }, [t]);
};

const PickerItem = ({isSelected, label, value}: Props) => {
  return (
    <Picker.Item
      label={label}
      value={value}
      color={
        isSelected
          ? theme.colors.common.primary
          : theme.colors.progressBar.minTrack
      }
    />
  );
};

const LanguagePicker = () => {
  const {changeLanguage, language} = useLanguage();
  const items = usePickerItems();
  return (
    <Picker
      selectedValue={language}
      onValueChange={useCallback(
        (lang: string) => changeLanguage(lang as Language),
        [],
      )}
      style={styles.picker}
      itemStyle={styles.item}>
      {items.map(item => (
        <PickerItem
          value={item.value}
          label={item.label}
          isSelected={item.value === language}
        />
      ))}
    </Picker>
  );
};

export default LanguagePicker;
