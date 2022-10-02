
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView,PermissionsAndroid,Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterInput from './screens/RegisterInput';
import Stack from './routes/Stack';
import ServerStack from './routes/ServerStack';
import { useEffect } from 'react';
import * as Location from 'expo-location';


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
        alert('Location Permission Granted.');
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
    <Stack/>
 
  );
};
export default App;