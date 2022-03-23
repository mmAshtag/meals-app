import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import DefaultText from "../components/DefaultText";
import { useSelector } from "react-redux"
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
  const { navigation } = props
  const catId = navigation.getParam("categoryId");
  const meals = useSelector(state => state.meals.filteredMeals)
  const displayedMeal = meals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

  if (!displayedMeal || displayedMeal.length === 0) {
    return (
      <View style={styles.contentContainer}>
        <DefaultText style={{ fontSize: 17 }}>No meals found, maybe check your filters</DefaultText>
      </View>
    )
  }

  return (
    <MealList listData={displayedMeal} navigation={navigation} />
  )
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return { headerTitle: selectedCategory.title }
}

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
