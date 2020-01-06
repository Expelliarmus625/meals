import React from 'react';
import { Button, View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground } from 'react-native';


const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableNativeFeedback onPress = {props.onSelectMeal}>
                <View >
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source = {{uri : props.imageUrl}} style = {styles.bgImage}>
                        <Text style={styles.mealTitle} numberOfLines = {1}>{props.title}</Text>
                    </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text style = {{fontFamily : 'open-sans-bold'}}>{props.duration}m</Text>
                        <Text style = {{fontFamily : 'open-sans-bold'}}>{props.complexity.toUpperCase()}</Text>
                        <Text style = {{fontFamily : 'open-sans-bold'}}>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection : "row"
    },
    bgImage : {
        width : '100%',
        height : '100%',
        justifyContent : 'flex-end',
    },
    mealItem: {
        height : 200,
        width : '100%',
        backgroundColor : 'white',
        borderRadius : 10,
        overflow : 'hidden',
        marginTop : 10,
    },
    mealHeader : {
        height : '85%'
    },
    mealDetail : {
        paddingHorizontal : 10,
        justifyContent : 'space-between',
        alignItems : 'center',
        height : '15%'
    },
    mealTitle : {
        fontFamily : 'open-sans-bold',
        fontSize : 20,
        color : 'white',
        backgroundColor : 'rgba(0,0,0,0.3)',
        paddingVertical : 5,
        paddingHorizontal : 12

    }
});

export default MealItem;