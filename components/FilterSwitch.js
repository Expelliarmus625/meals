import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style = {styles.filterContainer}>
                <Text>{props.filterText}</Text>
                <Switch 
                    trackColor = {{true : Colors.primary_tint}}
                    thumbColor = {Colors.primary}
                    value = {props.value} 
                    onValueChange =  {props.onChange}
                />
            </View>
    );
};

const styles = StyleSheet.create({
    filterContainer : {
        borderTopColor : '#ccc',
        borderTopWidth : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '80%',
        padding : 10

    }
});

export default FilterSwitch;