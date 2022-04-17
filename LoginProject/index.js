/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginScreen from './screen/login/LoginScreen';
import {name as appName} from './app.json';
import DataBidingScreen from './screen/databiding/DataBidingScreen';

AppRegistry.registerComponent(appName, () => DataBidingScreen);
