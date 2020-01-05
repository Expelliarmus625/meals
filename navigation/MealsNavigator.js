import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories : {
        screen : CategoriesScreen
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

const MealsTabNavigator = createBottomTabNavigator({
    Meals : MealsNavigator,
    Favourites : FavouritesScreen
});

export default createAppContainer(MealsTabNavigator);