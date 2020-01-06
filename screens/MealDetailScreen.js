import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image} from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderFavBtn from '../components/HeaderFavBtn';
import { useSafeArea } from 'react-native-safe-area-context';
const ListItem = props => {
    return <View style = {styles.ListItem}>
        <Text style={{ fontFamily: 'open-sans-bold' , color : "#777"}}>{props.children}</Text>
    </View>;
}

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId');
    const [isFav, setIsFav] = useState(false);
    const onFavHandler = () => {
        setIsFav(true);
    }
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <ScrollView>
            <Image source = {{uri : selectedMeal.imageUrl}} style = {styles.image}/>
            <View style={styles.details}>
                <Text style={{ fontFamily: 'open-sans-bold' }}>{selectedMeal.duration}m</Text>
                <Text style={{ fontFamily: 'open-sans-bold' }}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={{ fontFamily: 'open-sans-bold' }}>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style = {styles.title}> Ingredients </Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key = {ingredient}>{ingredient}</ListItem>)}
            <Text style = {styles.title}> Steps </Text>
            {selectedMeal.steps.map(step => <ListItem key = {step}>{step}</ListItem>)}
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = navData => {
    const mealId = navData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);


    return {
        headerTitle: selectedMeal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderFavBtn}>
            <Item title="Fav" iconName={navData.isFav ? 'ios-star' : 'ios-star-outline'} onPress={() => { navData.setIsFav }} />
        </HeaderButtons>
    }
}
const styles = StyleSheet.create({
    title : {
        fontFamily : 'open-sans-bold',
        fontSize : 22,
        textAlign : 'center'
    },
    image : {
        width : '100%' ,
        height : 200
    },
    details : {
        flexDirection : 'row',
        padding : 15,
        justifyContent : 'space-around',
        backgroundColor : '#ddd'
    },
    ListItem : {
        marginVertical : 10,
        marginHorizontal : 20,
        borderColor : '#ccc',
        borderWidth : 1,
        padding : 10
    }
});

export default MealDetailScreen;
