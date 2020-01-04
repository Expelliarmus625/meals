import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailsScreen = props => {
    return (
        <View style = {styles.screen}>
            <Text>This is the Meal Details Screen</Text>
            <Button title = "Home" onPress = {() => {
                props.navigation.popToTop();
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
});

export default MealDetailsScreen;
