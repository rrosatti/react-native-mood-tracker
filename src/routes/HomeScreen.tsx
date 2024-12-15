import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useStorage from '../state/local/hooks/useStorage';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  moodText: {
    fontSize: 24,
    textAlign: 'center',
  },
});

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
