 import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,TextInput,Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Calling from '../../../components/calling';
import OurButton from '../../../components/GoToButton';
import ModuleButton from '../../../components/moduleButton';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';


   
    
   
const Destination = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('searchResults', {
        originPlace,
        destinationPlace,
      })
    }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);
    
 
    return(
        useEffect(() => {
            (async () => {
              
              let { status } = await Location.requestForegroundPermissionsAsync();
              if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
              }
        
              let location = await Location.getCurrentPositionAsync({});
              setLocation(location);
            })();
          }, []),
        <View>
            <View style ={styles.container}>
            <View style={styles.inputBox}>
            <GooglePlacesAutocomplete
      placeholder='What is your Current Location'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setOriginPlace({data, details});

        //console.log(data, details);
      }}
      enablePoweredBygoogle={false}
      fetchDetails= {true}
      currentLocation={true}
      currentLocationLabel="Current Location"
      query={{
        key: 'AIzaSyAeRdORzU5z5rUedWcqGLZxRwE_6w9isRc',
        language: 'en',
        components: 'country:ke',
      }}
    />
            <View style ={styles.Timebar}>
            <AntDesign name ={'arrowright'} size ={16} color={'red'}></AntDesign> 
            </View>
            </View>
            <ModuleButton text = 'Current Locations  '/>
            <View style={styles.inputBox}>
            <GooglePlacesAutocomplete
      placeholder='Which hospital are you going to?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setDestinationPlace({data, details});
       // console.log(data, details);
      }}
      enablePoweredBygoogle={false}
      fetchDetails= {true}
      query={{
        key: 'AIzaSyAeRdORzU5z5rUedWcqGLZxRwE_6w9isRc',
        language: 'en',
        components: 'country:ke',
      }}
    />
            <View style ={styles.Timebar}>
            <AntDesign name ={'arrowright'} size ={16} color={'red'}></AntDesign> 
            </View>
            </View>
            <OurButton text='Nearest Hospital' />
    
            
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