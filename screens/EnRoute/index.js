import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable,Button} from 'react-native';
import Types from '../../components/DiffrentTypes';
import Ionicons from "react-native-vector-icons/Ionicons"
import {TextInput} from 'react-native-gesture-handler';
const EnRoute = (props) => {
const confirm = () => {
  console.warn('confirm')
}
    return(
        <View>
            <View style ={styles.Status}>
              <Text style= {styles.Title}>Ambulance En-route</Text> 
            </View>

            <Image 
            style= {styles.Image}
            source={require( '../../assets/mapsIMG.png' )}
            />
             <View style={styles.Container}>
             <Image style={styles.image} source='../../assets/ambulance.png'></Image>
          <View style={styles.middleContainer}>
            <Text style= {styles.type}>
               Amref Ambulance
            </Text>
            <Text style={styles.time}>
                8:03 pm drop off
            </Text>


          </View>
       
          <View style={styles.rightContainer}>
            <Ionicons name={'pricetag'} size ={18} color={'green'} />
            <Text style={styles.price}> 
                ksh {7000}
            </Text>
            


          </View>
<View>
 
</View>
            
        </View>
       
        <Button title ='call Now ' style={styles.call} />
        
      </View>




     
    )
}
const styles = StyleSheet.create({

call :{
  color:'red',
},
  Image:{   
    paddingTop:40,
    height:350,
    width:'auto',
},
Status:{
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
Title:{
  textAlign:'center',
  fontSize:20,
  fontWeight:'600',
  margin:10,

},
Container:{
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems:'center',
  padding: 20,
  

},
image:{
  height:60,
  width:60,
  resizeMode:'contain',
},
middleContainer:{
marginHorizontal:10,
flex:1,
marginBottom:5,
},

type:{
fontWeight:'bold',
fontSize:15,

},
rightContainer:{
alignItems:'center',
width:100,
justifyContent:'flex-end',
flexDirection:'row',


},
time :{
color:'#5d5d5d',
},
price:{
fontWeight:'bold',
fontSize:14,
marginLeft:5,
},
   

  });
export default EnRoute;