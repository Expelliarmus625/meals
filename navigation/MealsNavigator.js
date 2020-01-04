import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories : {
        screen : CategoriesScreen
    },
    CategoryMeals : {
        screen : CategoryMealsScreen
    },
    MealDetailsScreen : MealDetailsScreen
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

export default createAppContainer(MealsNavigator);