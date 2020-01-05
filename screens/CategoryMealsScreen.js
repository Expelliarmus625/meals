import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';
const CategoryMealsScreen = props => {
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
    const catId = props.navigation.getParam('categoryId');

    const dispList = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    return (
        <View style = {styles.screen}>
            <FlatList 
                data ={dispList}
                renderItem = {renderMealItem}
                style = {{width : '100%'}}
            />
        </View>
    );

};

CategoryMealsScreen.navigationOptions = navData => {
    const catId = navData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle : selectedCategory.title
    };
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 10,
        backgroundColor : '#aaa'
    }
});

export default CategoryMealsScreen;
