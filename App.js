import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeScreen from './screens/HomeScreen';
import Homesearch from './components/HomeSearch';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView>
      <StatusBar style="auto" />

      <HomeScreen/>
      <Homesearch/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

});
