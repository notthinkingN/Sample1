import React, { useState } from "react";
import {Text, View, Stylesheet, TextInput} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../components/Button";

const DashboardScreen = () => {
    const navigation = useNavigation();
    const [text,setText] = useState("");
    return(
        <View>
            <SafeAreaView/>
            <Text>DashboardScreen</Text>
            <TextInput
                value={text}
                keyboardType="default"
                placeholder="Enter Number"
                style={style.input}
                onChangeText={value => {
                    setText(value)
                }}
            />
            <AppButton title="Go Back" onPress={() => navigation.navigate("HomeScreen")}/>
        </View>
    )
}

export default DashboardScreen;