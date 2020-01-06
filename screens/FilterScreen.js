import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderFavBtn from '../components/HeaderFavBtn';
import Colors from '../constants/Colors';
import FilterSwitch from '../components/FilterSwitch';
const FilterScreen = props => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const displayFilters = {
            glutenFree : isGlutenFree,
            lactoseFree : isLactoseFree,
            vegan : isVegan,
            vegetarian : isVegetarian 
        };
        console.log(displayFilters)
    }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan ]);


    useEffect(() => {
        navigation.setParams({save : saveFilters});
    },[saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch filterText="Gluten Free" value={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch filterText="Lactose Free" value={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch filterText="Vegan" value={isVegan} onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch filterText="Vegetarian" value={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: "center"
    },
});

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filters',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderFavBtn}>
            <Item Title="Menu" iconName="ios-menu" onPress={() => { navData.navigation.toggleDrawer(); }}></Item>
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderFavBtn}>
            <Item Title="Save" iconName="ios-save" onPress={navData.navigation.getParam ('save')}></Item>
        </HeaderButtons>
    };
};
export default FilterScreen;
