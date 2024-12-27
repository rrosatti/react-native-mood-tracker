import remoteConfig from '@react-native-firebase/remote-config';

import commonEn from '../locales/languages/en/common.json';
import commonPt from '../locales/languages/pt/common.json';
import i18next from 'i18next';

remoteConfig().setConfigSettings({
  fetchTimeMillis: 60000,
  minimumFetchIntervalMillis: 0, // uncomment for testing purposes
});

remoteConfig()
  .setDefaults({
    common_en: JSON.stringify(commonEn),
    common_pt: JSON.stringify(commonPt),
  })
  .then(() => remoteConfig().fetchAndActivate())
  .then(fetchedRemotely => {
    if (fetchedRemotely) {
      console.log('Configs were retrieved from the backend and activated.');
    } else {
      console.log(
        'No configs were fetched from the backend, and the local configs were already activated',
      );
    }

    try {
      const common_en = remoteConfig().getString('common_en');
      const common_pt = remoteConfig().getString('common_pt');
      i18next.addResourceBundle('en', 'common', JSON.parse(common_en));
      i18next.addResourceBundle('pt', 'common', JSON.parse(common_pt));
      i18next.changeLanguage();
    } catch (e) {
      console.log('Error when trying to parse locales: ', e);
    }
  });
