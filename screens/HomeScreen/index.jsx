import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeLogo from '../../components/homeLogo';
const HomeScreen = (props) => {

    return(
        <View>
            < HomeLogo />
            
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default HomeScreen;