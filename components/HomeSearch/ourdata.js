import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
const OurData = (props) => {
   
    return(
    <View>
        <View style ={styles.container}>
        <Image 
            style= {styles.Image}
            source={require( '../../assets/face.jpg' )}
            />
            <Text style= {styles.title}> Medical Id</Text>



        </View>
        
   </View>
    )
}
const styles = StyleSheet.create({
   container:{
    margin:10,
    backgroundColor:'white',
    width:370,
    height:500,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 6.84,

    elevation: 15,
   },
   Image:{
    marginTop: 10,
    marginLeft:20,
    height:150,
    width:150,
    borderRadius:150
   },
   title:{
    marginTop: 15,
    marginLeft:10,
    fontSize:30,
    fontWeight:'600',
   }

});

export default OurData