import React from "react";
import { Button, Text, TouchableOpacity, View } from 'react-native';
import AppButton from '../components/Button';
import { useNavigation } from "@react-navigation/native";

const Count = () => {
    const navigation = useNavigation();

    state = {
        value : 0,
        total_taps : 0
    }

    incrementValue = () => {
        this.setState({
            value: this.state.value + 1,
            total_taps: this.state.total_taps + 1
        })
        console.log("Value:" + (this.state.value + 1))
    }

    deccrementValue = () => {
        this.setState({
            value: this.state.value - 1,
            total_taps: this.state.total_taps - 1
        })
        console.log("Value:" + (this.state.value - 1))
    }

    return (
        <View>
            <Text >{this.state.value}</Text>
            <Text>{this.state.total_taps}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10,}}>
                <Button title="Increment" onPress={this.incrementValue}/>
                <Button title="Decrement" onPress={this.decrementValue}/>
            </View>
            <AppButton title="Reset Count" style={{ height: 40, width: 60, backgroundColor: "blue", color : "white"}}/>
            <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
                <Text>Message box </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Count;