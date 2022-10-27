import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,ScrollView,Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Calling from '../../components/calling';
import OurData from '../../components/ourdata';
import OurButton from '../../components/GoToButton';
import ModuleButton from '../../components/moduleButton';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import {useEffect,useState} from "react";
//import styles from './styles.js';
const Homesearch = ({navigation}) => {

    const [users, setUsers] = useState();
  
    useEffect(()  => {
        const fetchData = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
         
            setUsers(userInfo.attributes.sub);
        
        }
        fetchData();
    },[] )
// this is a function to print the json data from auth aws 
    const onSubmit = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        console.log(userInfo.getUsername())
    }
           
      
   
    const pressHandler =() =>{
        navigation.navigate('destination');
        
    }
    return(
        <ScrollView>
        <View styles={styles.container}>
             <Image 
            style= {styles.Image}
            source={require( '../../assets/HealthWetu.png' )}
            />
        {/* input bot */}
        
        
        <OurButton text='Where are you ' onPress={pressHandler}/>
        <ModuleButton text = 'calling for a friend '/>
        <Text> {users} helos</Text>
        <OurData/>

        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
  
    container:{
        alignItems: 'center',

    },
    inputText:{
        fontSize:20,
        fontWeight:'600',
        color:'#6e6e6e',


        
    },
    Image:{
        
        paddingTop:20,
        margin: 'auto',
        height:'40%',
        width:'100%',
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

