
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView,PermissionsAndroid,Platform} from 'react-native';


import { useEffect } from 'react';
import * as Location from 'expo-location';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import Root from './navigation/Root';

import { withAuthenticator } from 'aws-amplify-react-native'


Amplify.configure(config)

//navigator.geolocation = require('@react-native-community/geolocation');
const App = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
          buttonPositive:'ok'

        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //To Check, If Permission is granted
        alert('Location Permission Granted.s');
      }}
      catch (err) { return callback && callback(err); }}

    useEffect (() => {
      if(Platform.OS === 'android'){
        androidPermission();
      }
      else{
        //ios
        Geolocation.requestAuthorization();

      }
    },[])
  return (
    <Root/>
 
  );
};
export default withAuthenticator(App);