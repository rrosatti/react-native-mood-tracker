import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

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
}));

const ProfileScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
