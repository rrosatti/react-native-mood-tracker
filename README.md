# Mood Tracker

## Description
Mood Tracker is a personal learning project in React Native aimed at helping users track their moods. The app allows users to log their mood, displays the latest mood on the home screen, and provides multi-language support. This project is a sandbox for exploring React Native technologies and features, including global state management, styling, and local storage.

## Current Features
- **Log Mood**: An input field for users to log their mood.
- **Local Storage**: Mood information is saved using `react-native-mmkv`.
- **Home Screen Display**: Latest mood is displayed on the home screen.
- **Multi-language Support**: English and Portuguese languages are supported.
- **Global State Management**: Implemented with Zustand.
- **Styling**: Utilizes `react-native-unistyles` for consistent and theme-based styling.

## Technologies Used
### Dependencies
- `@react-native-community/slider`
- `@react-native-picker/picker`
- `@react-navigation/bottom-tabs`
- `@react-navigation/native`
- `react`
- `react-native`
- `react-native-codegen`
- `react-native-edge-to-edge`
- `react-native-gesture-handler`
- `react-native-mmkv`
- `react-native-nitro-modules`
- `react-native-safe-area-context`
- `react-native-screens`
- `react-native-svg`
- `react-native-unistyles`
- `zustand`

### Dev Dependencies
- `@babel/core`
- `@babel/preset-env`
- `@babel/runtime`
- `@react-native-community/cli`
- `@react-native-community/cli-platform-android`
- `@react-native-community/cli-platform-ios`
- `@react-native/babel-preset`
- `@react-native/eslint-config`
- `@react-native/metro-config`
- `@react-native/typescript-config`
- `@types/react`
- `@types/react-test-renderer`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `babel-jest`
- `eslint`
- `eslint-config-prettier`
- `eslint-plugin-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-native`
- `husky`
- `i18next`
- `jest`
- `prettier`
- `react-i18next`
- `react-native-svg-transformer`
- `react-test-renderer`
- `typescript`

## Setup and Installation

Make sure that you have your React Native environment setup correctly. Take a look at [React Native](https://reactnative.dev/docs/set-up-your-environment) doc for further instructions.

1. Install dependencies: `yarn install`
2. Start the project: `yarn start`
3. Android

   3.1. Run: `yarn android`
4. iOS

   4.1. Run: `yarn ios`. Or open the project (`RNMoodTracker.xcworkspace`) using XCode and build it from there

## Future Plans
- **AI Integration**: Provide users with content (e.g., text, images, news) based on their logged mood to cheer them up.
- **Enhanced Mood Logging**: Allow logging multiple moods per day and calculate daily mood percentages.
- **User Profile**: Integrate Firebase or Google login and save user data in Firebase.
- **Animations**: Add simple animations using `react-native-reanimated`.
- **Offline Mode**: Enable app functionality without an internet connection.
- **Theming**: Add light and dark themes.
- **Remote Config**: Use remote configuration to manage locales dynamically.
- **Splash Screen**: Create an engaging splash screen.
- **Testing**: Write comprehensive tests for app functionality.

## Lessons Learned
This section will be updated as the project evolves and new insights are gained.
