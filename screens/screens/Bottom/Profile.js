import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, useWindowDimensions, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { photos } from '../../data';



const PhotosRoute = () => {
    <View style={{
        flex: 1,
    }}>
        <FlatList
            data={photos}
            numColumns={3}
            renderItem={({ item, index }) => (
                <View style={{
                    flex: 1,
                    aspectRatio: 1,
                    margin: 3
                }}>
                    <Image
                        key={index}
                        source={item}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 12
                        }}
                    />
                </View>
            )}
        />

    </View>
};

const LikesRoute = () => {
    <View style={{
        flex: 1,
    }}>

    </View>
}

const renderScene = SceneMap({
    first: PhotosRoute,
    second: LikesRoute
});

const Profile = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const routes = useState([
        { key: "first", title: "Photos" },
        { key: "second", title: "Likes" }
    ]);
    const renderTabBar = (props) => {
        <TabBar
            {...props}
            indicatorStyle={{
                backgroundColor: "gray"
            }}
            style={{
                height: 44,
            }}
            renderLabel={({ focused, route }) => (
                <Text>
                    {routes.title}
                </Text>
            )}
        />
    }
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={{ width: "100%" }}>
                <Image
                    source={require('../../assests/images/sofa.jpg')}
                    style={{
                        height: 228,
                        width: "100%"
                    }}
                />
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                    source={require('../../assests/images/profile.jpg')}
                    resizeMode='contain'
                    style={{
                        height: 155,
                        width: 155,
                        borderRadius: 999,
                        borderWidth: 2,
                        marginTop: -90
                    }}
                />
                <Text style={{ marginVertical: 8 }}> Sathish </Text>
                <Text>Front-End Developer</Text>
                <View style={{
                    flexDirection: "row",
                    marginVertical: 6,
                    alignItems: "center"
                }}>
                    <MaterialIcons
                        name='location-on'
                        size={24}
                        color="black"
                    />
                    <Text style={{ marginLeft: 4 }}>India</Text>
                </View>
                <View style={{

                    paddingVertical: 8,
                    flexDirection: "row",

                }}>
                    <View style={{
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <Text>150</Text>
                        <Text>Followers</Text>
                    </View>
                    <View style={{
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <Text>130</Text>
                        <Text>Following</Text>
                    </View>
                    <View style={{
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <Text>67</Text>
                        <Text>Likes</Text>
                    </View>

                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <TouchableOpacity
                        style={{
                            width: 124,
                            height: 36,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 10,
                            borderWidth: 4,
                            backgroundColor: "blue",
                            color: "white"
                        }}
                        onPress={() => navigation.navigate("EditProfile")}
                    >
                        <Text style={{ color: "white" }}>Edit Profile</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 124,
                            height: 36,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 10,
                            borderWidth: 4,
                            backgroundColor: "blue",
                            color: "white"
                        }}
                        onPress={() => navigation.navigate("EditProfile")}
                    >
                        <Text style={{ color: "white" }}>Add Friend</Text>

                    </TouchableOpacity>
                </View>
                {/* <View
                    style={{
                        marginHorizontal: 22,
                        flex: 1,
                        marginTop: 20,
                    }}
                >
                    <TabView
                        navigationState={{index, routes}}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{width: layout.width}}
                        renderTabBar={renderTabBar}
                    />
                </View> */}
            </View>
        </SafeAreaView>
    )
}
export default Profile;