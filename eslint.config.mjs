import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    ignores: ['node_modules/', 'dist/', 'build/'],
    plugins: {
      react,
      reactNative,
      '@typescript-eslint': typescript,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        module: 'readonly', // Define 'module' as a global variable
        require: 'readonly', // Define 'require' as a global variable
        __dirname: 'readonly', // Define '__dirname' as a global variable,
        console: 'readonly', // Define 'console' as a global variable
      },
    },
    rules: {
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', // Ignore arguments prefixed with _
          varsIgnorePattern: '^_', // Ignore variables prefixed with _
        },
      ],
    },
  },
];
