import theme from '../src/styles/theme';

type AppThemes = {
  light: typeof theme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
