/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { Main } from './src/screens/main';
import { name as appName } from './app.json';

if (__DEV__) {
  import('./reactron-config.js').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => Main);
