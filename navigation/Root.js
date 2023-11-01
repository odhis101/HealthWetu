import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import LoginLanding from '../screens/LoginLanding';
import {createStackNavigator} from '@react-navigation/stack';

import Destination from '../screens/HomeScreen/DestinationSearch';
import SearchResults from '../screens/SearchResults';

import { createAppContainer } from 'react-navigation';
import EnRoute from '../screens/EnRoute';
import Homesearch from '../screens/HomeSearch';


const Stack = createStackNavigator();
const RootNavigator = () => {
    return (
     <NavigationContainer  >
        <Stack.Navigator  
        defaultScreenOptions={Homesearch}>

            <Stack.Screen
                name="Home"
                component={Homesearch}
              
             />
             <Stack.Screen
                name="destination"
                component={Destination}
              
             />
             <Stack.Screen
                name="searchResults"
                component={SearchResults}
              
             />
             <Stack.Screen
                name="EnRoute"
                component={EnRoute}
              
             />
            </Stack.Navigator>
    
     </NavigationContainer>
    );
    };
export default RootNavigator