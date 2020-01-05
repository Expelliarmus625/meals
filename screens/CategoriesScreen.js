import React from 'react';
import { FlatList, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderFavBtn from '../components/HeaderFavBtn';
const CategoriesScreen = props => {
    

    const renderGridItem = (itemData) => {    
        return <CategoryGridTile 
            title = {itemData.item.title} 
            color = {itemData.item.color}
            onSelect = {() => {
                props.navigation.navigate('CategoryMeals', {
                categoryId: itemData.item.id
                });
            }}
            />;
    }

    return (
        <FlatList 
            keyExtractor = {(item, index) => item.id}
            data = {CATEGORIES} 
            renderItem = {renderGridItem} 
            numColumns = {2}
        />
    );
};


const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    
});

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle : 'Categories',
        headerLeft :() =>  <HeaderButtons HeaderButtonComponent = {HeaderFavBtn}>
                <Item Title = "Menu" iconName = "ios-menu" onPress= {()=> {navData.navigation.toggleDrawer();}}></Item>
            </HeaderButtons>
    };
};
export default CategoriesScreen;
