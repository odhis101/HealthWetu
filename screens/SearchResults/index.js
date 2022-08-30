import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import HomeLogo from '../../components/homeLogo';
import Types from '../../components/DiffrentTypes';
const SearchResults = (props) => {

    return(
        <View>
             <Image 
            style= {styles.Image}
            source={require( '../../assets/mapsIMG.png' )}
            />
          <Types />  
        </View>
    )
}
const styles = StyleSheet.create({
  
   
    Image:{   
        paddingTop:40,
        height:350,
        width:'auto',
    },

  });
export default SearchResults;