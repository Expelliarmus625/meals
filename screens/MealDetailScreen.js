import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons , Item } from 'react-navigation-header-buttons';
import HeaderFavBtn from '../components/HeaderFavBtn';
import { useSafeArea } from 'react-native-safe-area-context';

const MealDetailScreen = props => {
    
    const mealId = props.navigation.getParam('mealId');
    const [isFav, setIsFav] = useState(false);
    const onFavHandler = ()=> {
        setIsFav(true);
    }
    const selectedMeal = MEALS.find(meal=> meal.id === mealId);
    return (
        <View style = {styles.screen}>
            <Text>{selectedMeal.title }</Text>
            <Button title = "Home" onPress = {() => {
                props.navigation.popToTop();
            }}/>
        </View>
    );
};

MealDetailScreen.navigationOptions = navData => {
    const mealId = navData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal=> meal.id === mealId);
    
    
    return {
        headerTitle : selectedMeal.title,
        headerRight : () => <HeaderButtons HeaderButtonComponent = {HeaderFavBtn}>
            <Item title = "Fav" iconName = {navData.isFav ? 'ios-star' : 'ios-star-outline'} onPress = {() => {navData.setIsFav}} />
        </HeaderButtons>    
    }
}
const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
});

export default MealDetailScreen;
