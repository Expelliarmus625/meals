import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
    
    const catId = props.navigation.getParam('categoryId');

    const dispList = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    return <MealList navigation = {props.navigation} dispList = {dispList}/>

};

CategoryMealsScreen.navigationOptions = navData => {
    const catId = navData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle : selectedCategory.title
    };
};


export default CategoryMealsScreen;
