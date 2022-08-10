import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Calling from './calling';
import OurData from './ourdata';
//import styles from './styles.js';
const Homesearch = (props) => {
   
    return(
        <View>
        {/* input bot */}
        <View style={styles.inputBox}>
            <Text style={styles.inputText}> Where are you ?</Text>
            <View style ={styles.Timebar}>
            <AntDesign name ={'arrowright'} size ={16} color={'red'}></AntDesign> 
            
            </View>
           
            
            

        </View>
        <Calling text = 'calling for a friend '/>
        <OurData/>
      
        {/* input bot */}
   

        {/* input bot */}
   </View>
    )
}
const styles = StyleSheet.create({
  
    inputText:{
        fontSize:20,
        fontWeight:'600',
        color:'#6e6e6e',


        
    },
    Timebar:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:35,
        padding:10,
        backgroundColor:'#fff',
        borderRadius:50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,

        elevation: 5,

    },
    inputBox:{
        backgroundColor:'#fff',
        margin:10,
        padding:10,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,

        elevation: 5,
    },

  });

export default Homesearch;

