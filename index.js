/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import RNRedux from './App'; // RNRedux because of redux , otherwise App
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RNRedux); // same here
