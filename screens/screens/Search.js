import React, { useEffect } from "react";
import { View, Text, ScrollView, Pressable } from 'react-native';
import MenuItem from '../screens/MenuItem';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ProductReducer";

const Search = () => {
    const products = useSelector((state) => state.product.product);
    const dispatch = useDispatch();
    const images = [
        {
            id: "0",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgg_OBzcVDnKHv1d3hyVk_WlCo43pzit4CJQ&usqp=CAU",
            name: "Icecream",
            quantity: 0,

        },
        {
            id: "1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgg_OBzcVDnKHv1d3hyVk_WlCo43pzit4CJQ&usqp=CAU",
            name: "Icecream",
            quantity: 0,

        },
        {
            id: "2",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgg_OBzcVDnKHv1d3hyVk_WlCo43pzit4CJQ&usqp=CAU",
            name: "Icecream",
            quantity: 0,

        },
    ];
    useEffect(() => {
        if (products.length > 0) return;

        const fetchProducts = () => {
            images.map((image) => dispatch(getProducts(image)))
        }
        fetchProducts();
    }, []);
    const cart = useSelector((state) => state.cart.cart);
    return (
        <ScrollView>
            <Text style={{ fontSize: 16, textAlign: "center", marginTop: 60 }}>Prodducts Page</Text>
            {products.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
            <Text>Cart Page</Text>
            {cart.map((item, index) => (
                <Pressable
                    style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginHorizontal: 10,
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 20 }}>{item.name}</Text>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 80, height: 80, borderRadius: 10 }}
                        />
                    </View>
                    <Pressable
                        style={{
                            flexDirection: 'row',
                            alignItems: "center",
                            borderRadius: 5,
                            width: 120,
                        }}
                    >
                        <Pressable>
                            <Text
                                style={{
                                    fontSize: 20,
                                    paddingHorizontal: 10
                                }}
                            >
                                +
                            </Text>
                        </Pressable>
                        <Pressable>
                            <Text
                                style={{
                                    fontSize: 20,
                                    paddingHorizontal: 10
                                }}
                            >
                                {item.quantity}
                            </Text>
                        </Pressable>
                        <Pressable>
                            <Text
                                style={{
                                    fontSize: 20,
                                    paddingHorizontal: 10
                                }}
                            >
                                +
                            </Text>
                        </Pressable>

                    </Pressable>
                </Pressable>
            ))}
        </ScrollView>
    )
}
export default Search;
