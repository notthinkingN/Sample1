import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native';
//import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { ImagesDataURl } from '../../data';
//import DatePicker, { getFormateDate } from 'react-native-date-picker';
import Profile from '../../assests/images/profile.jpg';



const EditProfile = () => {

    const [selectedImage, setSelectedImage] = useState(ImagesDataURl[0]);
    const navigation = useNavigation();

    const [name, setName] = useState("satish");
    const [email, setEmail] = useState("test123@gmail.com");
    const [password, setPassword] = useState("Hello123@");
    const [country, setCountry] = useState("India");

    // const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    // const today = new Date();
    // const startDate = getFormateDate(
    //     today.setDate(today.getDate() + 1),
    //     "YYYY/MM/DD"
    // )

    // function renderDatePicker() {
    //     return (
    //         <Modal
    //             animationType="slide"
    //             transparent={true}
    //             visible={openStartDatePicker}
    //         >
    //             <View style={{
    //                 flex: 1,
    //                 alignItems: "center",
    //                 justifyContent: "center"
    //             }}>
    //                 <View style={{
    //                     margin: 20,
    //                     alignItems: "center",
    //                     justifyContent: "center",
    //                     borderRadius: 20,
    //                     padding: 35,
    //                     width: "90%",
    //                     shadowColor: "#000",
    //                     shadowOffset: {
    //                         width: 0,
    //                         height: 2
    //                     },
    //                     shadowOpacity: 0.25,
    //                     shadowRadius: 4,
    //                     elevation: 5
    //                 }}>
    //                     <DatePicker
    //                         mode='calender'
    //                         minimumDate={startDate}
    //                         selected={startedDate}
    //                         onDateChanged={handleChangeStartDate}
    //                         onSelectedChange={(date) => setSelectedStartDate(date)}
    //                         options={{
    //                             textHeaderColor: "#469ab6",
    //                             mainColor: "#469ab6",
    //                             borderColor: "rgba(122,146,165,0.1)"
    //                         }}
    //                     />
    //                     <TouchableOpacity onPress={handleOnPressStartDate}>
    //                         <Text>{selectedStartDate}</Text>
    //                     </TouchableOpacity>
    //                 </View>

    //             </View>
    //         </Modal>
    //     )
    // }
    // const [selectedStartDate, setSelectedStartDate] = useState("01/01/1990");
    // const [startedDate, setStartedDate] = useState("12/12/2025");

    // const handleChangeStartDate = (propDate) => {
    //     setStartedDate(propDate);
    // }

    // const handleOnPressStartDate = () => {
    //     setOpenStartDatePicker(!openStartDatePicker)
    // }

    const handleImagesSelection = async () => {
        let result = await ImagePicker.launchLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        });
        console.log(result);
        if (!await result.canceled) {
            setSelectedImage(result.assests[0].uri)
        }
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 22,
                marginTop: 4,
            }}
        >
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate(Profile)}
                    style={{ position: "absolute", left: 0 }}
                >
                    <MaterialIcons
                        name='keyboard-arrow-left'
                        size={26}
                        style={{ marginTop: 15 }}
                    />
                    <Text style={{ marginLeft: 140, marginTop: 24, fontSize: 20 }}>EditProfile</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{
                    alignItems: "center",
                    marginVertical: 22
                }}>
                    <TouchableOpacity onPress={handleImagesSelection}>
                        <Image source={Profile}
                            style={{
                                height: 180,
                                width: 170,
                                boderRadius: 85,
                                borderWidth: 2,
                            }}
                        />
                        <View
                            style={{
                                position: "absolute",
                                bottom: 0,
                                right: 55,
                                zIndex: 99
                            }}
                        >
                            <MaterialIcons
                                name="photo-camera"
                                size={32}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: "column",
                    marginBottom: 6
                }}>
                    <Text style={{ fontSize: 18 }}>Name</Text>
                    <View style={{
                        height: 44,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 4,
                        marginVertical: 6,
                        justifyContent: "center",
                        paddingLeft: 8
                    }}
                    >
                        <TextInput
                            value={name}
                            onChangeText={value => setName(value)}
                            editable={true}
                        />
                    </View>
                </View>
                <View style={{
                    flexDirection: "column",
                    marginBottom: 6
                }}>
                    <Text style={{ fontSize: 18 }}>Email</Text>
                    <View style={{
                        height: 44,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 4,
                        marginVertical: 6,
                        justifyContent: "center",
                        paddingLeft: 8
                    }}
                    >
                        <TextInput
                            value={email}
                            onChangeText={value => setEmail(value)}
                            editable={true}
                        />
                    </View>
                </View>
                <View style={{
                    flexDirection: "column",
                    marginBottom: 6
                }}>
                    <Text style={{ fontSize: 18 }}>Password</Text>
                    <View style={{
                        height: 44,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 4,
                        marginVertical: 6,
                        justifyContent: "center",
                        paddingLeft: 8
                    }}
                    >
                        <TextInput
                            value={password}
                            onChangeText={value => setPassword(value)}
                            editable={true}
                        />
                    </View>
                </View>
                {/* <View style={{
                    flexDirection: "column",
                    marginBottom: 6
                }}>
                    <Text style={{ fontSize: 18 }}>Date of Birth</Text>
                    <TouchableOpacity
                        onPress={handleOnPressStartDate}
                        style={{
                            height: 44,
                            width: "100%",
                            borderWidth: 1,
                            borderRadius: 4,
                            marginVertical: 6,
                            justifyContent: "center",
                            paddingLeft: 8
                        }}
                    // >
                        <TextInput
                            value={name}
                            onChangeText={value => setName(value)}
                            editable={true}
                        />
                    </TouchableOpacity>
                </View> */}
                <View style={{
                    flexDirection: "column",
                    marginBottom: 6
                }}>
                    <Text style={{ fontSize: 18 }}>Country</Text>
                    <View style={{
                        height: 44,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 4,
                        marginVertical: 6,
                        justifyContent: "center",
                        paddingLeft: 8
                    }}
                    >
                        <TextInput
                            value={country}
                            onChangeText={value => setCountry(value)}
                            editable={true}
                        />
                    </View>
                </View>

                    <TouchableOpacity
                        style={{
                            height:44,
                            borderRadius: 6,
                            borderWidth: 3,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "orange",
                            marginTop: 15,
                        }}
                    >
                        <Text>Save Changes</Text>
                    </TouchableOpacity>

                    

                {/* {renderDatePicker( )} */}
            </ScrollView>

        </SafeAreaView>
    )
}
export default EditProfile;