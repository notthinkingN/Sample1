import React, { useState } from "react";
import { Text, TextInput, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store';


export default function Syncdata() {
    const navigation = useNavigation();
    const [key, onChangeKey] = useState('');
    const [value, onChangeValue] = useState('');
    const [result, onChangeResult] = useState('(result)');

    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
    }

    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            onChangeResult(result);
        } else {
            alert('Invalid');
        }
    }

    return (
        <View style={style.container}>
            <TextInput placeholder={'Enter a Key'}
                style={style.textInput}
                onChangeText={text => onChangeKey(text)}
                value={key}
            />
            <TextInput placeholder={'Enter a Value'}
                style={style.textInput}
                onChangeText={text => onChangeValue(text)}
                value={value}
            />
            <Button title="Save"
                style={style.btn}
                onPress={() => {
                    save(key, value)
                    onChangeKey('')
                    onChangeValue('')
                }}
            />
            <TextInput
                style={style.textInput}
                onSubmitEditing={event => { getValueFor(event.nativeEvent.text); }}
                placeholder="Enter a Key"
            />
            <Text style={style.maintext}>{result}</Text>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                    <Text>Count</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        marginTop: 15,
    },
    maintext: {
        marginTop: 34,
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    textInput: {
        height: 55,
        
        borderColor: 'gray',
        borderWidth: 3,
        padding: 10,
        margin: 4,
        borderRadius: 20,
    },
    btn:{
        height:40,
        width: 80,
    },
});