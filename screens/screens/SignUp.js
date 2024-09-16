import React, { useState } from 'react';
import { Text, StyleSheet, View, Platform, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';



const SignUp = () => {
    const navigation = useNavigation();


    const [data, setData] = useState({
        email: '',
        password: "",
        confirm_password: "",
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    })

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlepassword = (val) => {
        setData({
            ...data,
            password: val,
        });
    }

    const handleconfirmpassword = (val) => {
        setData({
            ...data,
            confirm_password: val,
        });
    }
    const updatesecuretext = (val) => {
        setData({
            ...data,
            password: val,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateconfirmsecuretext = (val) => {
        setData({
            ...data,
            password: val,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }
    return (
        <View style={style.container}>
            <StatusBar />
            <View style={style.header}>
                <Text style={style.text_header}>Register Now</Text>
            </View>
            <View style={style.footer}>
                <Text style={style.text_footer}>Email</Text>
                <View style={style.action}>
                    <FontAwesome
                        name='user-o'
                        color='#05375a'
                        size={25}
                    />
                    <TextInput
                        placeholder='Enter Email'
                        style={style.textinput}
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View animation='bounceIn'>
                            <Feather
                                name="check-circle"
                                color="blue"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                </View>
                <Text style={[style.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={style.action}>
                    <FontAwesome
                        name='lock'
                        color='#05375a'
                        size={25}
                    />
                    <TextInput
                        placeholder='Enter your Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={style.textinput}
                        onChangeText={(val) => handlepassword(val)}
                    />
                    <TouchableOpacity onPress={updatesecuretext}>
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="black"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="black"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                <Text style={[style.text_footer, { marginTop: 35 }]}>Confirm Password</Text>
                <View style={style.action}>
                    <FontAwesome
                        name='lock'
                        color='#05375a'
                        size={25}
                    />
                    <TextInput
                        placeholder='Confirm Password'
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={style.textinput}
                        onChangeText={(val) => handleconfirmpassword(val)}
                    />
                    <TouchableOpacity onPress={updateconfirmsecuretext}>
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="black"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="black"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                <View style={style.button}>
                    <LinearGradient colors={['#08d4c4', '#01ab9d']} style={style.signIn}>
                        <Text style={[style.textSign]}>Sign In</Text>
                    </LinearGradient>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[style.signIn, {
                            bordercolor: "#009387",
                            borderWidth: 2,
                            marginTop: 15,
                        }]}
                    >
                        <MaterialIcons />
                        <Text style={[style.textSign, {
                            color: '#009387'
                        }]}>Sign Up</Text>

                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate("Syncdata")}>
                    <Text style={{fontSize:20}}>Go to</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    header: {
        flex: 2,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
    },
    text_footer: {
        color: "#05375a",
        fontSize: 18,
    },
    logo: {
        width: height_logo,
        height: height_logo,
        marginTop: 30,
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontFamily: 'bold',
    },
    action: {
        flexDirection: "row",
        marginTop: 10,

        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textinput: {
        flex: 1,
        padding: 4,
        color: '#05375a',
    },
    text: {
        color: "gray",
        marginTop: 5,
    },
    button: {
        alignItems: "flex-end",
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    },
});


export default SignUp;