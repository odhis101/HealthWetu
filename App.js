import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeScreen from './screens/HomeScreen';
import Homesearch from './components/HomeSearch';
import Destination from './screens/HomeScreen/DestinationSearch';
import SearchResults from './screens/SearchResults';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Home"
          component={Homesearch}
          
        />
        <Stack.Screen name="Destination" component={Homesearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;