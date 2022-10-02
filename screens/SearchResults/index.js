import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image,TextInput,Button,Pressable} from 'react-native';
import HomeLogo from '../../components/homeLogo';
import Types from '../../components/DiffrentTypes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';
import MapViewDirections from 'react-native-maps-directions';
import { useRoute } from '@react-navigation/native'; 
const SearchResults = ({navigation}) => {
  const [fromText, setFromText] = useState()
  const [destinationText,setDestinationText] = useState();
  const [originPlace,setOriginPlace]= useState()
  const [Desitnation,setDesitnation]= useState()

  console.log(navigation.props())
  console.log('hello world')
  const pressHandler =() =>{
  navigation.navigate('EnRoute');
}
const getImage=(type) => {
  if (type === 'UberX') {
    return require('../../assets/helicopter.png');
  }
  if (type === 'Comfort') {
    return require('../../assets/helicopter.png');
  }
  return require('../../assets/helicopter.png');
}
const origin ={
  latitude: 37.78825,
  longitude: -122.4324,
}
const destination ={
  latitude: 38.78825,
  longitude: -122.4324,
}
    return(
        <View>
            
               <MapView style={styles.Image}
                provider={PROVIDER_GOOGLE}
               initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }} 
              >
              <Marker 
              coordinate={{latitude:37.78825,longitude: -122.4324}}
            >
              <Image source={require('../../assets/helicopter.png')} style={{width:60,height:60,resizeMode:'contain'}}/>
              </Marker>

              <MapViewDirections
              origin={origin}
              destination={destination}
              strokeWidth={ 5 }
              strokeColor= 'red'
              apikey={'AIzaSyAeRdORzU5z5rUedWcqGLZxRwE_6w9isRc'}
              />
              <Marker 
         
              coordinate={origin}
              title={'origin'}

              />
              <Marker 
              coordinate={destination}
              title={'destination'}
              />
              </MapView>
            
          <Types />  
          <Pressable onPress={pressHandler} style={styles.confirm}> 
              <Text style={styles.text}>
                Confirm Requests
              </Text>
             
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    confirm:{
        padding: 10,
        margin:10,
        marginRight:10,
        backgroundColor:'red',
        alignItems:'center',
        
      },
      text:{
        color:'white',
        fontWeight:'bold',
      },
       
   
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