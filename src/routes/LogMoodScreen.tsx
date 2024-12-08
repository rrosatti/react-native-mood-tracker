import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

import MoodSlider from '../components/MoodSlider';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
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
});

const LogMoodScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>How's your mood today?</Text>
      <View style={styles.contentWrapper}>
        <MoodSlider />
        <View style={styles.buttonWrapper}>
          <Button title="Submit" onPress={() => Alert.alert('TODO')} />
        </View>
      </View>
    </View>
  );
};

export default LogMoodScreen;
