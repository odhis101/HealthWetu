import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,ScrollView,Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Calling from '../../components/calling';
import OurData from '../../components/ourdata';
import OurButton from '../../components/GoToButton';
import ModuleButton from '../../components/moduleButton';
import Loginbtn from '../../components/loginbtn';
import EndBTN from '../../components/EndBTNServer';
//import styles from './styles.js';
const ServerStartScreen = ({navigation}) => {
   
    const pressHandler =() =>{
        navigation.navigate('NewRequest');
        
    }
    return(
        <ScrollView>
        <View>
             <Image 
            style= {styles.Image}
            source={require( '../../assets/HealthWetu.png' )}
            />
           < Loginbtn text={'42 requests on-going'} onPress ={pressHandler}/>
             <Image 
             style= {styles.Image}
            source={require( '../../assets/mapsIMG.png' )}
            />
            <View style= {styles.container}>
           <EndBTN text={'END'} />
        <View  style={styles.statusContainer}>
        <Text style={styles.status}> You Are Offline</Text>
        </View>
        </View>

      

   </View>
   </ScrollView>
    )
}
const styles = StyleSheet.create({
    statusContainer:{
        height:40,
    },
    ready:{
        color:'red',
    },
    status:{
        fontSize:20,
    },
    inputText:{
        fontSize:20,
        fontWeight:'600',
        color:'#6e6e6e',
    },
    container:{
        alignItems:'center',
    },
    Image:{
        
        paddingTop:20,
        height:300,
        width:'auto',
    },
    button:{
        backgroundColor:'green',
        margin:10,
        width:160,
        height:50,
        padding:10,
        flexDirection:'row',
        justifyContent: 'center',
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
buttonText:{
    fontSize:14,
    color:'white',
    fontWeight:'600',
    
    
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

export default ServerStartScreen;

