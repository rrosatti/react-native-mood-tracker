/* eslint-disable @typescript-eslint/no-unused-vars */
import 'i18next';

import common from '../src/locales/languages/en/common.json';

const resources = {
  common,
} as const;

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}
