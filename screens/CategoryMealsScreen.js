import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat=> cat.id === catId);
    return (
        <View style = {styles.screen}>
            <Text>This is the Category Meals Screen</Text>
            <Text>{selectedCategory.title}</Text>

            <Button title = "Details" onPress = {() => {
                props.navigation.navigate({routeName : 'MealDetailsScreen'});
            }}/>
            <Button title = "Back" onPress = {() => {
                props.navigation.goBack();
            }}/>
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
        alignItems : 'center'
    }
});

export default CategoryMealsScreen;
