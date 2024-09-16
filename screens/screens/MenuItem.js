import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../CartReducer';
import { incrementQuantity } from '../ProductReducer';

const MenuItem = ({ item }) => {
    const dispatch = useDispatch();
    const addItemToCart = (item) => {
        dispatch(addtoCart(item));
        dispatch(incrementQuantity(item))
    };
    const cart = useSelector((state) => state.cart.cart);
    return (
        <View style={{ marginTop: 40 }}>
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
                {cart.some((value) => value.id === item.id) ? (
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
                ) : (
                    <Pressable onPress={() => addItemToCart(item)}>
                        <Text
                            style={{
                                borderColor: 'gray',
                                borderWidth: 1,
                                marginVertical: 10,
                                padding: 5,
                            }}
                        >ADD TO CART</Text>
                    </Pressable>
                )}
            </Pressable>

        </View>
    );
};