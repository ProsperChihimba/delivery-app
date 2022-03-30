import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { icons, COLORS, FONTS, SIZES } from '../../../constants';
import data from "../data";

const RestaurantList = () => { 

    const renderItem = ({item}: {item: any}) => {
        return (
            <TouchableOpacity
                style={{marginBottom: SIZES.padding * 2}}
            >
                <View>
                    <Image
                        source={item.photo}
                        resizeMode='cover'
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: SIZES.radius,
                        }}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={data.restaurantData}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{
                paddingHorizontal: SIZES.padding * 2,
                paddingBottom: 30,
            }}
        />
    )
}

export default RestaurantList;