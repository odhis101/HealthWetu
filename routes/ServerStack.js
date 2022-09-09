import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Homesearch from '../screens/HomeSearch';
import LoginLanding from '../screens/LoginLanding';
import Destination from '../screens/HomeScreen/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import EnRoute from '../screens/EnRoute';
import Logininput from '../screens/Logininput';
import RegisterInput from '../screens/RegisterInput';
import ServerHome from '../screens/ServerHome';
import ServerStartScreen from '../screens/ServerStartScreen';
import NewRequest from '../screens/NewRequest';

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
        screen:ServerHome
    },
    ServerStartScreen:{
        screen:ServerStartScreen
    },
    NewRequest:{
        screen:NewRequest
    },
    EnRoute:{
        screen:EnRoute
    }


}


const ServerStack = createStackNavigator(screens);

export default createAppContainer(ServerStack)