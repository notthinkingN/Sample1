import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("LoginScreen");
    }, 2000);
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Animatable.Image source={require('../assests/images/shopping.jpg')}
          style={style.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={style.footer} animation="fadeInUpBig">
        <Text style={style.title}>Stay Connected</Text>
        <Text style={style.text}>Sign in with account</Text>
        <View style={style.button}>
          <TouchableOpacity onPress={handleButtonClick}>
            <LinearGradient style={style.signIn}
              colors={['#08d4c4', '#01ab9d']}
            >
              <Text style={style.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff"/>
            </LinearGradient>
          </TouchableOpacity>
          {isLoading && (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text>Loading...</Text>
            </View>
          )}
        </View>
      </Animatable.View>
    </View>
  )
}
export default HomeScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 2,
    justifyContent: "Center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
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