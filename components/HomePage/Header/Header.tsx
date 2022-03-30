import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { icons, COLORS, FONTS, SIZES } from '../../../constants';
import data from './../data';


const Header = () => {
    return (
        <View style={{ flexDirection: 'row', height: 50, }}>

            <TouchableOpacity
            style={{
                width: 50,
                paddingLeft: SIZES.padding * 2,
                justifyContent: 'center',
            }}
            >
            <Image
                source={icons.nearby}
                resizeMode='contain'
                style={{
                width: 25,
                height: 25,
                }}
            />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        width: '60%',
                        height: '70%',
                        backgroundColor: COLORS.lightGray3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius,
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>{ data.initialCurrentLocation.streetName }</Text>
                </View>
            </View>

            <TouchableOpacity
            style={{
                width: 50,
                paddingRight: SIZES.padding * 2,
                justifyContent: 'center',
            }}
            >
            <Image
                source={icons.basket}
                resizeMode='contain'
                style={{
                width: 25,
                height: 25,
                }}
            />
            </TouchableOpacity>
            
        </View>
    )
}

export default Header;