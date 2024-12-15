/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Navigation} from './src/navigation';

import {StyleSheet} from 'react-native-unistyles';
import theme from './src/styles/theme';
import {SafeAreaView} from 'react-native';

StyleSheet.configure({
  themes: {
    light: theme,
  },
  settings: {
    initialTheme: 'light',
  },
});

const styles = StyleSheet.create(theme => ({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.common.primary,
  },
}));

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
