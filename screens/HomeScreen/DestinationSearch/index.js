import React, {useState} from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,TextInput,Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Calling from '../../../components/calling';
import OurButton from '../../../components/GoToButton';
import ModuleButton from '../../../components/moduleButton';
//import styles from './styles.js';


   
    
   
const Destination = ({navigation}) => {
    const [fromText, setFromText] = useState()
    const [destinationText,setDestinationText] = useState();
   const [originPlace,setOriginPlace]= useState()
   const [Desitnation,setDesitnation]= useState()
   const pressHandler =() =>{
    navigation.navigate('searchResults');
    
}
    return(
        <View>
            <View style ={styles.container}>
            <View style={styles.inputBox}>
            <TextInput value={fromText} onChangeText = {setFromText}placeholder="Current Location" style={styles.inputText}></TextInput>
            <View style ={styles.Timebar}>
            <AntDesign name ={'arrowright'} size ={16} color={'red'}></AntDesign> 
            
            </View>

            </View>
            <ModuleButton text = 'Current Location '/>
            
            <OurButton text='Custom Hospital' onPress={pressHandler}/>
            <OurButton text='Nearest Hospital' onPress={pressHandler}/>
            
        </View>
       
    
        </View>
        

    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:40,
        marginLeft:10,
        marginRight:10,
        height:'100%'
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