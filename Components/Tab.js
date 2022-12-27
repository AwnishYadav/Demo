import { View, Text,Dimensions } from 'react-native'
import {React,useEffect,useContext} from 'react'
import SearchHistory from './SearchHistory';
import Insights from './Insights';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import { NewsContext } from './Context';

const Stack = createStackNavigator()
export default function Tab() {
  const {loading} = useContext(NewsContext)
  
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchHistory}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile"
        component={Insights}
        options={{headerShown: false}} />
      </Stack.Navigator>
  )
}