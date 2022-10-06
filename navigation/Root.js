import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import LoginLanding from '../screens/LoginLanding';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const RootNavigator = () => {
  
    return (
     <NavigationContainer  >
       
        
     </NavigationContainer>
    );
    };
export default RootNavigator