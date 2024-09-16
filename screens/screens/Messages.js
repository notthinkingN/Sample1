import React from "react";
import {View, Text, FlatList, StyleSheet} from  'react-native';

const Message = [
    {
        id: '1',
        userName: 'John',
        userImg: '',
        messageTime: '4  minute back',
        messageText: "Hi",
    },
    {
        id: "2",
        userName: 'Mickle',
        userImg: "",
        messageTime: "1 minute ago",
        messageText: "Where are you",
    },
];
const Messages = () => {
    return(
        <View style={style.container}>
            
            <FlatList
                data={Message}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.userName}</Text>
                        <Text>{item.messageText}</Text>
                        <Text style={style.messagetime}>{item.messageTime}</Text>
                        <Text>{item.userImg}</Text>
                    </View>
                )}
            />
        </View>
    )
}
export default Messages;
const style = StyleSheet.create({
    container:{
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
    },
    messagetime: {
        flexDirection: "column",
    },
});