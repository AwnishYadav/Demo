import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Components/Home';
import Tab1 from './Components/Tab';
import SearchHistory from './Components/SearchHistory';
import Context from './Components/Context';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <Context>
    <View style={{height:30,backgroundColor:'#673456'}}></View>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Home} options={{headerShown: false}} />
        <Tab.Screen name="Search History" component={Tab1} options={{headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </Context>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
