
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import Homesearch from './components/HomeSearch';
import Destination from './screens/HomeScreen/DestinationSearch';
import SearchResults from './screens/SearchResults';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stack from './routes/Stack';




const App = () => {
  return (
    
   <Stack/>
  );
};
export default App;