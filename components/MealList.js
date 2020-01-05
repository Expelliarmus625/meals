import React from 'react';
import { FlatList, View, Text, StyleSheet } from  'react-native';
import MealItem from './MealItem';

const MealList = props => {
    const renderMealItem = itemData => {
        return <MealItem 
            onSelectMeal = {() => {
                props.navigation.navigate('MealDetailScreen', { mealId : itemData.item.id });
            }}
            title = {itemData.item.title}
            duration = {itemData.item.duration}
            affordability = {itemData.item.affordability}
            complexity = {itemData.item.complexity}
            imageUrl = {itemData.item.imageUrl}
        />
    }
    return(
        <View style = {styles.screen}>
            <FlatList 
                data ={props.dispList}
                renderItem = {renderMealItem}
                style = {{width : '100%'}}
            />
        </View>
    ); 
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 10,
        // backgroundColor : '#aaa'
    } 
});

export default MealList;