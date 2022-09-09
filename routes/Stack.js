import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Homesearch from '../screens/HomeSearch';

import Destination from '../screens/HomeScreen/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import EnRoute from '../screens/EnRoute';
import Logininput from '../screens/Logininput';
import RegisterInput from '../screens/RegisterInput';
import LoginLanding from '../screens/LoginLanding';

const screens = {

    login:{
        screen: LoginLanding,
    },
    Logininput:{
        screen: Logininput,
    },
    RegisterInput:{
        screen: RegisterInput,
    },
    Home:{
        screen:Homesearch
    },
    destination:{
        screen:Destination
    },
    searchResults:{
        screen:SearchResults
    },
    EnRoute:{
        screen:EnRoute
    }


}


const Stack = createStackNavigator(screens);

export default createAppContainer(Stack)