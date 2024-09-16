import React from "react";
import { TextInput } from "react-native";

const Input = ({label, iconName, password, onFocus = () => {}, ...props}) => {
    return(
        <View style={style.container}>
            <TextInput/>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex: 1,
    },
})
export default Input;