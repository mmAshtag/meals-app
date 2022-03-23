import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux"

const MealList = props => {
    const { listData, navigation } = props 
    const favMeals = useSelector(state => state.meals.favourites)
    
    return (
      <View style={styles.list}>
          <FlatList
              data={listData}
              keyExtractor={(item) => item.id}
              renderItem={(itemData) => (
                  <MealItem
                  itemData={itemData.item}
                  onSelectMeal={() => {
                    const isFav = favMeals.some(meal => meal.id === itemData.item.id)
                      navigation.navigate("MealDetails", {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFav
                      });
                  }}
                  />
              )}
              style={{ width: "95%" }}
              />
      </View>
    );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
