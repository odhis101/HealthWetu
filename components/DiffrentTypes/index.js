import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable} from 'react-native';
import RowTypes from '../VehicleTypesRow';
import types from '../../assets/data/types';
const Types = (props) => {
const confirm = () => {
  console.warm('confirm')
}
    return(
        <View>
          {types.map(type => <RowTypes  type ={type}/>)}
           

          <Pressable onPress={confirm} style={styles.confirm}> 
              <Text style={styles.text}>
                Confirm Request 
              </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
  confirm:{
    width: '100%',
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
   
   

  });
export default Types;