// import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen"
import FiltersScreen from "../screens/FiltersScreen"
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const defaultStackNavOptions = {
  headerStyle: { backgroundColor: Colors.primary },
  headerTitleStyle: { color: "white" }
}

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions,
})

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="restaurant" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.primary,
    },
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="heart" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.secondary,
    },
  },
  Filters: {
    screen: FiltersNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="filter" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.secondary,
    },
  },
};

// const MealsFavTabNavigator = Platform.OS === "android" ? AndroidBottomTabNavigator : AppleBottomTabNavigator
const AndroidBottomTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
  activeTintColor: "white",
  shifting: true
})

export default createAppContainer(AndroidBottomTabNavigator);