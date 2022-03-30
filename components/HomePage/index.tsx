import React from 'react';
import { View } from '../Themed';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './Header/Header';
import MainCategory from './MainCategory/MainCategory';
import RestaurantList from './RestaurantList';


const HomePage = () => {

    let [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Black': require('../../assets/fonts/Roboto-Black.ttf'),
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View>
            <Header />
            <MainCategory />
            <RestaurantList />
        </View>
    )
}

export default HomePage;