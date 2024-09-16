import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Button, TouchableOpacity, Text, View, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../components/Button';

const URL = "https://randomuser.me/api/?results=50";


const data = [
  { name: "sr" },
  { name: "sed" },
];
const DropdownComponent = () => {
  const [user, setUser] = useState([]);
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerSearchBarOptions: {
        placeHolder: "Search",
      },
    });
  }, [navigation]);


  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    const respone = await fetch(URL);
    const json = await respone.json();

    setUser(json.results);
  }

  state = {
    myTextInput: '',
    users: ['john', 'james', 'Lamd']
  }

  const OnchangeInput = (event) => {
    this.setState({
      myTextInput: event
    })
  }
  return (
    <View style={styles.container}>

      <View>
        <TextInput placeholder='Search' style={styles.inputSearchStyle} />
      </View>

      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{ gap: 6, paddingHorizontal: 12 }}
        contentContainerStyle={{ gap: 4, paddingBottom: 20 }}
        keyExtractor={(item, idx) => item.name + idx}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.tch}>

            </TouchableOpacity>
          )
        }}
      />
      {
        this.state.users.map(item => (
          <Text style={styles.user} key={item}>{item}</Text>
        ))
      }
      <TextInput
        value={this.state.myTextInput}
        onChangeText={this.OnchangeInput}
      />
      <Button title="Add User" style={styles.btn} />
      <View style={styles.btns}>
        <AppButton title="Products" onPress={() => navigation.navigate("ProductList")} style={styles.btn}/>
        <AppButton title="Back" onPress={() => navigation.navigate("LoginScreen")} style={styles.btn}/>
      </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputSearchStyle: {
    width: 370,
    height: 40,
    fontSize: 16,
    borderWidth: 2,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
  tch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#6b7280",
    flex: 1,
    height: 100,
    borderRadius: 20,
  },
  user: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  btn: {
    marginBottom: 10,
  },
  btns:{
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});