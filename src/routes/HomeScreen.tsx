import React from 'react';
import {Text, View} from 'react-native';

import {StyleSheet} from 'react-native-unistyles';

import useStorage from '../state/local/hooks/useStorage';

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
  return (
    <View style={styles.wrapper}>
      {storage?.moods[0]?.type && (
        <Text style={styles.moodText}>
          Latest Mood: {JSON.stringify(storage.moods[0].type, null, 2)}
        </Text>
      )}
    </View>
  );
};

export default HomeScreen;
