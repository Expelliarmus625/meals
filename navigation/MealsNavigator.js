import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FilterScreen from '../screens/FilterScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text } from 'react-native'
import { TouchableNativeFeedbackComponent } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'       
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderFavBtn from '../components/HeaderFavBtn';
const MealsNavigator = createStackNavigator({
    Categories : {
        screen : CategoriesScreen,
    },
    CategoryMeals : {
        screen : CategoryMealsScreen
    },
    MealDetailScreen : {
        screen : MealDetailScreen
    }
}, 
{
    defaultNavigationOptions : {
        headerTitle : 'Meal Categories',
        headerTitleAlign : 'center',
        headerStyle : {
            backgroundColor : Colors.primary
        },
        headerTintColor : 'white'
    }
});

const FavNavigator = createStackNavigator({
    Favourites : {
        screen : FavouritesScreen
    },
    MealDetails : {
        screen : MealDetailScreen
    }
},{
    defaultNavigationOptions : {
        headerTitle : 'Your Favourites',
        headerTitleAlign : 'center',
        headerStyle : {
            backgroundColor : Colors.primary 
        },
        headerTintColor : 'white'
    }
});
const MealsTabNavigator = createMaterialBottomTabNavigator({
    Meals : {
        screen : MealsNavigator,
        navigationOptions : {
            tabBarIcon : tabInfo => {
                return <Ionicons name = "ios-restaurant" size = {25} color = 'white'/>
            },
            tabBarColor : 'pink',
            tabBarLabel : <Text style = {{fontFamily : 'open-sans-bold'}}>Meals</Text>
        },
    },
    Favourites : {
        screen : FavNavigator,
        navigationOptions : {
            tabBarIcon : tabInfo => {
                return <Ionicons name = "ios-star" size = {25} color = 'white'/>
            },
            tabBarColor : 'green',
            tabBarLabel : <Text style = {{fontFamily : 'open-sans-bold'}}>Favourites</Text>

        },
    }
    
},
{
    tabBarOptions : {
        labelStyle : {
            fontFamily : 'open-sans-bold'
        },
    },
    activeColor : 'white',
    shifting : true
});
const FilterNavigator = createStackNavigator({
    Filters : {
        screen : FilterScreen,
        navigationOptions : {
            headerTitle : 'Filters'
        }
    }
},{
    defaultNavigationOptions : {
        headerTitle : 'Your Favourites',
        headerTitleAlign : 'center',
        headerStyle : {
            backgroundColor : Colors.primary 
        },
        headerTintColor : 'white'
    }
})

const MainNavigator = createDrawerNavigator({
    Tabs : MealsTabNavigator,
    Filters : FilterNavigator
},{
    drawerType : 'back',
    contentOptions : {
        activeTintColor : Colors.primary
    }
});

export default createAppContainer(MainNavigator);