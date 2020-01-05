import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderFavBtn from '../components/HeaderFavBtn';
const FilterScreen = props => {
    return (
        <View>
            <Text>This is the Filters Screen</Text>
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

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle : 'Filters',
        headerLeft :() =>  <HeaderButtons HeaderButtonComponent = {HeaderFavBtn}>
                <Item Title = "Menu" iconName = "ios-menu" onPress= {()=> {navData.navigation.toggleDrawer();}}></Item>
            </HeaderButtons>
    };
};
export default FilterScreen;
