
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginLanding from './screens/loginLanding';
import Logininput from './screens/Logininput';
import RegisterInput from './screens/RegisterInput';
import Stack from './routes/Stack';
import ServerStack from './routes/ServerStack';




const App = () => {
  return (
    <Stack/>
 
  );
};
export default App;