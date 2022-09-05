import React, {useState} from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,TextInput,Button } from 'react-native';
import Loginbtn from '../../components/loginbtn';
import InputData from '../../components/inputData';
import ModuleLogin from '../../components/ModuleLogin';
//import styles from './styles.js';


   
    
   
const Logininput = ({navigation}) => {
      const signup =() =>{
        navigation.navigate('Home');
        
    }
    return(
        <View>
       
        <View style={styles.container}>
        <InputData text='Name' />
        <InputData text='Email' />
        <InputData text='Phone Number' />
        <InputData text='Password' />
        <InputData text='Height' />
        <InputData text='Weight' />
        <View style = {styles.Btncontainer}>
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