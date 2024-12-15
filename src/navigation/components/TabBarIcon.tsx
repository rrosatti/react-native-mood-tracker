import React from 'react';
import {View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {StyleSheet} from 'react-native-unistyles';

type Props = {
  Icon: React.FC<SvgProps>;
  focused: boolean;
};

const ICON_SIZE = 32;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
});

const TabBarIcon = ({Icon, focused}: Props) => {
  return (
    <View style={styles.container}>
      <Icon
        fill="white"
        color="white"
        opacity={focused ? 1 : 0.5}
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    </View>
  );
};

export default TabBarIcon;
