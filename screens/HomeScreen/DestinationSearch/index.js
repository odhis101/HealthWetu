import React, {useState} from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AntDesign from 'react-native-vector-icons/AntDesign';

//import styles from './styles.js';
const Destination = (props) => {
    const [fromText, setFromText] = useState()
    const [destinationText,setDestinationText] = useState();
   const [originPlace,setOriginPlace]= useState()
   const [Desitnation,setDesitnation]= useState()
    return(
        <View>
            <View style ={styles.container}>
            <View style ={styles.Timebar}>
            <AntDesign name ={'arrowleft'} size ={12} color={'red'}></AntDesign> 
            
            </View>
            <View style={styles.inputBox}>
            <TextInput value={fromText} onChangeText = {setFromText}placeholder="Current Location" style={styles.inputText}></TextInput>
            <View style ={styles.Timebar}>
            <AntDesign name ={'arrowright'} size ={16} color={'red'}></AntDesign> 
            
            </View>

            </View>


            <View style={styles.inputBox}>
        
            <View style ={styles.Timebar}>
            <AntDesign name ={'arrowright'} size ={16} color={'red'}></AntDesign> 
            
            </View>
            </View>
            
            
        </View>
    
        </View>
        

    )
}
const styles = StyleSheet.create({

    container:{
        marginTop:40,
        marginLeft:10,
        marginRight:10,
        height:800,
     backgroundColor:'black',
    },
  
    inputText:{
        fontSize:14,
        color:'black',


        
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
})
export default Destination