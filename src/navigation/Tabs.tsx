import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../routes/HomeScreen';
import LogMoodScreen from '../routes/LogMoodScreen';
import ProfileScreen from '../routes/ProfileScreen';
import {HomeIcon, MoodIcon, ProfileIcon} from '../../assets';
import TabBarIcon from './components/TabBarIcon';
import {StyleSheet} from 'react-native-unistyles';

const styles = StyleSheet.create(theme => ({
  tabBarBackgroundColor: {
    color: theme.colors.common.primary,
  },
}));

const BottomTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarIcon: props => (
          <TabBarIcon Icon={HomeIcon} focused={props.focused} />
        ),
      },
    },
    LogMood: {
      screen: LogMoodScreen,
      options: {
        tabBarIcon: props => (
          <TabBarIcon Icon={MoodIcon} focused={props.focused} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        tabBarIcon: props => (
          <TabBarIcon Icon={ProfileIcon} focused={props.focused} />
        ),
      },
    },
  },
  screenOptions: {
    tabBarInactiveBackgroundColor: styles.tabBarBackgroundColor.color,
    tabBarActiveBackgroundColor: styles.tabBarBackgroundColor.color,
    tabBarShowLabel: false,
    headerShown: false,
  },
});

export default BottomTabs;
