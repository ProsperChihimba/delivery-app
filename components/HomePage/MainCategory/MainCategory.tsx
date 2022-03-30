import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { icons, COLORS, FONTS, SIZES } from '../../../constants';
import data from "../data";

const MainCategory = () => {

    const [categories, setCategories] = React.useState(data.categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(data.restaurantData)
    

    // const onSelectCategory = ({ category }: { category: any }) => {
        
    //     let restaurantList = data.restaurantData.filter(a => a.categories.includes(category.))

    //     setRestaurants(restaurantList)
    //     setSelectedCategory(category)
    // }

    const renderItem = ({ item }: { item: any }) => {

        return (
            <TouchableOpacity
                style={{
                    padding: SIZES.padding,
                    paddingBottom: SIZES.padding * 2,
                    backgroundColor: COLORS.primary,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: SIZES.padding,
                    ...styles.shadow
                }}
                // onPress={() => onSelectCategory(item)}
            >
                <View
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.white
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </View>
                <Text
                    style={{
                        marginTop: SIZES.padding,
                        color: COLORS.white,
                        ...FONTS.body5
                    }}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{padding: SIZES.padding * 2}}>
            <Text style={{ ...FONTS.h1 }}>Main</Text>
            <Text style={{ ...FONTS.h1 }}>Category</Text>

            <FlatList
                data={data.categoryData}
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
            />
        </View>
    )
}

export default MainCategory;

const styles = StyleSheet.create({
    shadow: {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})