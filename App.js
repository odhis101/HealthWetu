import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeScreen from './screens/HomeScreen';
import Homesearch from './components/HomeSearch';
import Destination from './screens/HomeScreen/DestinationSearch';
import SearchResults from './screens/SearchResults';
export default function App() {
  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
     {/*
     <ScrollView>
     
      
      <HomeScreen/>
      <Homesearch/>
  
            </ScrollView>
      */}
  
      {/*<Destination/>*/}
      
    {<SearchResults/>}

    </View>
  );
}

const styles = StyleSheet.create({

});
