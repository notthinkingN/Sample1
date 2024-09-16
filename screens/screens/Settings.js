import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Switch } from 'react-native';
import AppButton from "../components/Button";
import { AppContext } from "../theme/AppContext";

const Settings = () => {
    const navigation = useNavigation();
    const { isDark, setIsDark } = useContext(AppContext);
    return (
        <View>
            <Text>Settings</Text>
            <View>
                <Switch value={isDark} onChange={() => { setIsDark(prev => !prev); }} />
            </View>
            <AppButton title="Go back" onPress={() => navigation.navigate("HomeScreen")} />
        </View>
    )
}
export default Settings;