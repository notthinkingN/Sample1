import React from "react";
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from '../screens/DashboardScreen';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const TabGroup = () => {
    return(
      <Tab.Navigator>
        <Tab.Screen name="Dash" component={DashboardScreen}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
    )
}
export default TabGroup;