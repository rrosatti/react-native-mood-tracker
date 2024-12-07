import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../routes/HomeScreen';
import LogMoodScreen from '../routes/LogMoodScreen';
import ProfileScreen from '../routes/ProfileScreen';

const BottomTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    LogMood: LogMoodScreen,
    Profile: ProfileScreen,
  },
});

export default BottomTabs;
