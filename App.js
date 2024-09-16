import React, { useMemo, useState } from "react";
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/screens/LoginScreen";
import HomeScreen from "./screens/screens/HomeScreen";
import ProfileScreen from "./screens/screens/ProfileScreen";
import ProductList from "./screens/screens/ProductList";
import ForgotPassword from "./screens/screens/ForgotPassword";
import ResetPassword from './screens/screens/ResetPassword';
import SignUp from "./screens/screens/SignUp";
import Settings from './screens/screens/Settings';
import DashboardScreen from './screens/screens/DashboardScreen';
import Icon from 'react-native-vector-icons/Entypo';
import Search from './screens/screens/Search';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Addcart from "./screens/screens/Top/Addcart";
import Mycontent from "./screens/screens/Top/Mycontent";
import DarkTheme from './screens/theme/DarkTheme';
import LightTheme from './screens/theme/LightTheme';
import { AppContext } from './screens/theme/AppContext';
import Syncdata from "./screens/screens/Syncdata";
import Count1 from "./screens/screens/Count1";
import Messages from "./screens/screens/Messages";
import BottomTab from './screens/navigation/BottomTab';
import { AuthProvider } from "./screens/navigation/AuthNavigator";
import EditProfile from "./screens/screens/Bottom/EditProfile";

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => {
          return (
            <Icon
              name="menu"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              size={30}
              color="blue"
            />
          );
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        name="Syncdata"
        component={Syncdata}
      />
      <Stack.Screen
        name="Search"
        component={Search}
      />
      <Stack.Screen
        name="Count"
        component={Count1}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
      />
    </Stack.Navigator>
  )
}


const DrawNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false
    }}
    style={{
      backgroundColor: "blue"
    }}
    >
      <Drawer.Screen name="HomeScreen" component={StackNav} />
      <Drawer.Screen name="Ho" component={TabNav} />
      <Drawer.Screen name="User" component={BottomTab}/>
      <Drawer.Screen name="Notification" component={DashboardScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  )
}

const TabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray"
      }}
    >
      <Tab.Screen name="Home" component={ProfileScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="home" size={25} />
        )
      }} />
      <Tab.Screen name="search" component={Search} options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="menu" size={25} />
        )
      }}
      />
    </Tab.Navigator>
  )
}

const Toptab = () => {
  const Tab1 = createMaterialTopTabNavigator();
  return (
    <Tab1.Navigator>
      <Tab1.Screen name="Add cart" component={Addcart} />
      <Tab1.Screen name="Mycontent" component={Mycontent} />
    </Tab1.Navigator>
  )
}


export default function Screen() {
  const [isDark, setIsDark] = useState(false);

  const appContext = useMemo(() => {
    return { isDark, setIsDark };
  });

  return (
    <NavigationContainer theme={isDark ? DarkTheme : LightTheme}>
      <AppContext.Provider value={appContext}>
        <DrawNav />
      </AppContext.Provider>
    </NavigationContainer>
  )
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
})