import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Button from "../components/Button";


const ProductList = () => {
    const [list, setList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        Products();
    }, [list]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            headerSearchBarOptions: {
                placeholder: "search",
            },
        });
    }, [navigation]);

    const Products = () => {
        const URL = "https://fruitstoreapi.com/products";

        fetch(URL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setList(data);
            });
    };

    return (
        <View style={style.container}>
            <Text>Product</Text>
            <FlatList data={list}
                renderItem={({ item }) => <View>
                    <Image source={{ uri: item.image }} style={style.image} />
                    <Text>Shirts</Text>
                    <Button />
                </View>}
            />
            <View style={style.img}>
                
                <Image
                    style={style.tinyLogo}
                    source={require('../assests/images/Bananas.jpg')}
                />
                <Image
                    style={style.tinyLogo}
                    source={require('../assests/images/Apple.jpg')}
                />
                <Image
                    style={style.tinyLogo}
                    source={require('../assests/images/Grapes.jpg')}
                />
                <Image
                    style={style.tinyLogo}
                    source={require('../assests/images/Oranges.jpg')}
                />
            </View>
        </View>
    );
};
export default ProductList;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    image: {
        flex: 2,
        flexDirection: "row",
        height: 200,
        width: 150,
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    
})