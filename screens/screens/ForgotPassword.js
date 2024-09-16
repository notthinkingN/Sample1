import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppButton from '../components/Button';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="green" barStyle={"light-content"} />
      <ImageBackground source={require("../assests/images/reset.jpg")} style={styles.imgb}>
        <Text style={styles.title}>Forgot Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.con}>

          <AppButton title="Back" onPress={() => navigation.navigate("LoginScreen")} />
          <AppButton title="Submit" onPress={() => navigation.navigate("ResetPassword")} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 220,
  },
  imgb: {
    width: 380,
    height: 420,
  },
  con: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

export default ForgotPassword;