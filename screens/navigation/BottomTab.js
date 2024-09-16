import React from "react";
import {View, Platform} from 'react-native';
import { MaterialIcons,MaterialCommunityIcons, Fontisto,} from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Bottom/Home";
import Message from "../screens/Bottom/Message";
import Create from "../screens/Bottom/Create";
import Setting from "../screens/Bottom/Setting";
import Profile from "../screens/Bottom/Profile";
import EditProfile from "../screens/Bottom/EditProfile";

const Tabs = createBottomTabNavigator();

const screenOptions= {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideonKeyboard: true,
    tabBarStyle:{
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
    }
}

const BottomTab = () => {
    return(
        <Tabs.Navigator screenOptions={screenOptions}>
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <MaterialCommunityIcons
                                name="home"
                                size={24}
                            />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name="Message"
                component={Message}
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <MaterialCommunityIcons
                                name="message"
                                size={24}
                            />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name="Create"
                component={Create}
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <View style={{
                                alignItems:"center",
                                justifyContent:"center",
                                height: Platform.OS == "ios" ? 50 : 60,
                                width: Platform.OS == "ios" ? 50 : 60,
                                top: Platform.OS == "ios" ? -10 : -20,
                                borderRadius: Platform.OS == "ios" ? 25 : 30,
                                borderWidth: 2,
                            }}>
                                <Fontisto
                                    name="plus-a"
                                    size={24}
                                />
                            </View>
                        )
                    }
                }}
            />
            <Tabs.Screen
                name="settings"
                component={Setting}
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <MaterialIcons
                                name="settings"
                                size={24}
                            />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <MaterialIcons
                                name="person-outline"
                                size={24}
                            />
                        )
                    }
                }}
            />
            
        </Tabs.Navigator>
    )
}
export default BottomTab;