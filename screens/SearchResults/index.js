import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image,TextInput,Button} from 'react-native';
import HomeLogo from '../../components/homeLogo';
import Types from '../../components/DiffrentTypes';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SearchResults = ({navigation}) => {
  const [fromText, setFromText] = useState()
  const [destinationText,setDestinationText] = useState();
  const [originPlace,setOriginPlace]= useState()
  const [Desitnation,setDesitnation]= useState()
  const pressHandler =() =>{
    navigation.navigate('EnRoute');
    
}
    return(
        <View>
          <View style ={styles.container}>
           
            <View style={styles.inputBox}>
            <TextInput value={fromText} onChangeText = {setFromText}placeholder="Hospital" style={styles.inputText}></TextInput>
            <View style ={styles.Timebar}>
            <AntDesign name ={'arrowright'} size ={16} color={'red'}></AntDesign> 
            
            </View>

            </View>
            </View>

            
             <Image 
            style= {styles.Image}
            source={require( '../../assets/mapsIMG.png' )}
            />
          <Types />  
          <Button title ='click me ' onPress={pressHandler} />
        </View>
    )
}
const styles = StyleSheet.create({
  
   
    Image:{   
        paddingTop:40,
        height:250,
        width:'auto',
    },
    container:{
   
      backgroundColor:'white',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4.84,

      elevation: 5,
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
      margin:5,
      padding:5,
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
export default SearchResults;