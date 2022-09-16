import React, {useState} from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,TextInput,Button } from 'react-native';
import Loginbtn from '../../components/loginbtn';
//import styles from './styles.js';


   
    
   
const LoginLanding = ({navigation}) => {
    const pressHandler =() =>{
        navigation.navigate('Logininput');
        
    }
    const signup =() =>{
      navigation.navigate('RegisterInput');
      
  }
    return(
        <View styles={styles.container}>
          <Image 
            style= {styles.Image}
            source={require( '../../assets/HealthWetu.png' )}
          />
          <View style={styles.cardContainer}>
          <Loginbtn text='login 'onPress={pressHandler} />
          <Loginbtn text='Sign Up' onPress={signup}/>
          <Text style={styles.suggest}>New Ambulance? </Text>
          </View>


        </View>

        

    )
}
const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '70%',
  },
  Image:{
      
      paddingTop:20,
      margin:50,
      height:'40%',
      width:'auto',
  },
  cardContainer:{
    marginTop:60,

  },
  suggest:{
    marginTop:10,
    textAlign:'center',
    color:'grey',
    fontSize:12,
  },
})
export default LoginLanding