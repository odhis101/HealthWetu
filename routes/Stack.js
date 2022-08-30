import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Homesearch from '../components/HomeSearch';
import Destination from '../screens/HomeScreen/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const screens = {
    Home:{
        screen:Homesearch
    },
    destination:{
        screen:Destination
    },
    searchResults:{
        screen:SearchResults
    }


}


const Stack = createStackNavigator(screens);

export default createAppContainer(Stack)