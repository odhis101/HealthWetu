import React, {useState} from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,TextInput,Button } from 'react-native';
import Loginbtn from '../../components/loginbtn';
import InputData from '../../components/inputData';
import ModuleLogin from '../../components/ModuleLogin';
//import styles from './styles.js';


   
    
   
const Logininput = ({navigation}) => {
    const pressHandler =() =>{
        navigation.navigate('Home');
        
    }
      const signup =() =>{
        navigation.navigate('RegisterInput');
        
    }
    return(
        <View>
       
        <View style={styles.container}>
        <InputData text='Username' />
        <InputData text='Password' />
        <View style = {styles.Btncontainer}>
        < ModuleLogin text = 'Login' onPress={pressHandler}/>
        < ModuleLogin text = 'Register' onPress={signup}/>
        </View>
       
        
        
     
        </View>


        </View>

        

    )
}
const styles = StyleSheet.create({
    Btncontainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    container2:{ 
        marginTop:40,
    },
  container:{
    marginTop:60,
  },
  suggest:{
    marginTop:10,
    textAlign:'center',
    color:'grey',
    fontSize:12,
  },
})
export default Logininput