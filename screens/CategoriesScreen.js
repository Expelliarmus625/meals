import React from 'react';
import { FlatList, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';

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

export default CategoriesScreen;
