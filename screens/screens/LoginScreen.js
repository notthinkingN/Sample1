import React, { useState } from 'react';
import { Text, Alert, StyleSheet, View, Dimensions, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please Enter your email'),
  password: Yup.string()
    .min(8)
    .required('Enter your Password')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain minimum 8 characters,at least one uppercase letter, one lowercase letter, one number and one special character',
    ),
});

const LoginScreen = () => {
  const navigation = useNavigation();


  const [data, setData] = useState({
    email: '',
    password: "",
    check_textInputChange: false,
    secureTextEntry: true
  });

  const validate = () => {
    Keyboard.dismiss();
    if (!data.email) {

    }
  };

  const handleOnChange = (text, input) => {
    setData((prevState) => ({ ...prevState, [input]: text }))
  }

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

  const updatesecuretext = (val) => {
    setData({
      ...data,
      password: val,
      secureTextEntry: !data.secureTextEntry
    })
  }
  return (
    <View style={style.container}>
      <StatusBar />
      <View style={style.header}>
        <Text style={style.text_header}>User Log In</Text>
      </View>
      <Formik initialValues={{
        email: '',
        password: '',
      }}
        validationSchema={SignupSchema}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
      >
        {({ values, errors, handleChange, setFieldTouched, isValid, handlesubmit }) => (


          <Animatable.View style={style.footer} animation="fadeInUpBig">
            <Text style={style.text_footer}>Email</Text>
            <View style={style.action}>
              <FontAwesome
                name='user-o'
                color='#05375a'
                size={30}
              />
              <TextInput
                placeholder='Enter Email'
                style={style.textinput}

                values={values.email}
                onChangeText={handleChange('email')}
                onChange={(val) => textInputChange(val)}
                onBlur={() => setFieldTouched('email')}
              />
              {errors.email && (
                <Text style={style.errortxt}>{errors.email}</Text>
              )}
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
                size={30}
              />
              <TextInput
                placeholder='Enter your Password'
                secureTextEntry={data.secureTextEntry ? true : false}
                style={style.textinput}

                values={values.password}
                onChangeText={handleChange('password')}
                onChange={(val) => handlepassword(val)}
              />
              {errors.password && (
                <Text style={style.errortxt}>{errors.password}</Text>
              )}
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
            <View style={style.button}>
              <LinearGradient colors={['#08d4c4', '#01ab9d']} style={style.signIn}>
                <TouchableOpacity
                  onPress={handlesubmit}
                  disabled={!isValid}
                  style={{ backgroundColor: isValid ? '#01ab9d' : '#08d4c4' }}
                >
                  <Text style={[style.textSign]}>Sign In</Text>
                </TouchableOpacity>
              </LinearGradient>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUp")}
                style={[style.signIn, {
                  bordercolor: "#009387",
                  borderWidth: 2,
                  marginTop: 15,
                }]}
              >
                <Text style={[style.textSign, {
                  color: '#009387'
                }]}>Sign Up</Text>
                <MaterialIcons name="navigate-next" color="black" />
              </TouchableOpacity>
            </View>
          </Animatable.View>
        )}
      </Formik>
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
    padding: 5,
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
  errortxt: {
    fontSize: 12,
    color: '#FF0D10',
    marginBottom: 15,
  },
});
export default LoginScreen;