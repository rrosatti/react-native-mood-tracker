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

StyleSheet.configure({
  themes: {
    light: theme,
  },
  settings: {
    initialTheme: 'light',
  },
});

const App = () => {
  return <Navigation />;
};

export default App;
