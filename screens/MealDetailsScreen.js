import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { useSelector } from "react-redux";
import HeaderBtn from "../components/HeaderBtn"
import DefaultText from '../components/DefaultText';
import { toggleFavourites } from '../store/actions/meals';
import { useDispatch } from "react-redux"

const MealDetailsScreen = props => {
  const { navigation } = props
  const allMeals = useSelector(state => state.meals.allMeals)
  const mealId = navigation.getParam("mealId");

  const selectedMeal = allMeals.find(meal => meal.id === mealId);
  const mealIsFav = useSelector(state => state.meals.favourites.some(meal => meal.id === mealId))

  const dispatch = useDispatch()

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavourites(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    navigation.setParams({ toggleFavs: toggleFavHandler });
  }, [toggleFavHandler]);

  useEffect(() => {
    navigation.setParams({ mealIsFav });
  }, [mealIsFav]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText style={styles.details}>{selectedMeal.duration}mins</DefaultText>
        <DefaultText style={styles.details}>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText style={styles.details}>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => (
          <View key={ingredient}>
            <Text style={styles.ingredients}> {ingredient}</Text>
          </View>
          ))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(step => (
          <View key={step}>
            <Text style={styles.steps}>{step}</Text>
          </View>
          ))}
        <Text>list of steps</Text>
      </View>
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = navData => {
  const mealTitle = navData.navigation.getParam("mealTitle");
  const toggleFavs = navData.navigation.getParam("toggleFavs");
  const isFav = navData.navigation.getParam("mealIsFav");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item title="Favourite" iconName={isFav ? "heart" : "heart-outline"} onPress={toggleFavs}/>
      </HeaderButtons>
      ),
  }
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  steps: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    shadowRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1
  },
  ingredients: {
    marginLeft: 10,
  },
});
