import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const navigation = useNavigation();

  const handleResetPassword = () => {
    // Call your backend API to send a password reset code to the email
    // Example:
    fetch('https://your-api-endpoint/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle success or error response 
      })
      .catch(error => {
        //     // Handle network error
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assests/images/reset.jpg")} style={styles.imgb} />
      <Text style={styles.title}>Reset Password</Text>
      <View style={styles.cont}>
        <TextInput
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.input1}
          placeholder="Enter Password"
          placeholderTextColor="#aaa"
          maxLength={10}
        />
        <MaterialCommunityIcons
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color="#aaa"
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </View>
      <View style={styles.cont}>
        <TextInput
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.input1}
          placeholder="Re-Enter Password"
          placeholderTextColor="#aaa"
          maxLength={10}
        />
        <MaterialCommunityIcons
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color="#aaa"
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </View>
      <AppButton title="Reset Password" onPress={handleResetPassword} />
      <Button title='Back' onPress={()=>navigation.navigate("ForgotPassword")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  imgb: {
    width: 80,
    height: 70,
  },
  title: {
    fontSize: 25,
  },
  input: {
    width: 360,
    height: 60,
    borderRadius: 2,
    borderWidth: 2,
    marginBottom: 20,
  },
  cont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    borderWidth: 2,
    paddingHorizontal: 14,
    width: 390,
    marginBottom: 10,
    marginLeft: 9,
  },
  input1: {
    flex: 1,
    color: '#333',
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
});

export default ResetPassword;