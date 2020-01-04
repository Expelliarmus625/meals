import React from 'react';
import { View, Button, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';


const CategoryGridTile = props => {
    return (
        <View style={styles.gridItem}>
        <TouchableNativeFeedback
        style = {{flex : 1}}
        onPress={props.onSelect}>
            <View style = {{ ...styles.tileContainer ,...{backgroundColor : props.color}}}>
                <Text style = {styles.titleStyle}>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
    );

};

const styles = StyleSheet.create({
    gridItem : {
        flex : 1,
        marginTop : 10,
        marginHorizontal: 5,
        height : 150,
        overflow : "hidden",
        elevation : 10,
        borderRadius : 10 
    },
    tileContainer : {
        flex : 1,
        borderRadius : 10,
        padding : 15,
        justifyContent : 'flex-end',
        alignItems : 'flex-start',
    },
    titleStyle : {
        fontSize : 22,
        fontFamily : 'open-sans-bold',
    }
});

export default CategoryGridTile;
