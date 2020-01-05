import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderFavBtn from '../components/HeaderFavBtn';
const FavouritesScreen = props => {

    const favList = MEALS.filter( meal => meal.id === 'm1' || meal.id === 'm2')
    return <MealList dispList = {favList} navigation = {props.navigation}/>;
};
FavouritesScreen.navigationOptions = navData => {
    return {
        headerTitle : 'Favourites',
        headerLeft :() =>  <HeaderButtons HeaderButtonComponent = {HeaderFavBtn}>
                <Item Title = "Menu" iconName = "ios-menu" onPress= {()=> {navData.navigation.toggleDrawer();}}></Item>
            </HeaderButtons>
    };
};

export default FavouritesScreen;
