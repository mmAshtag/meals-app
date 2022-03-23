import React from 'react';
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText"
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import HeaderBtn from '../components/HeaderBtn';
import { HeaderButtons, Item } from "react-navigation-header-buttons"

const FavouritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favourites);

  if (!favMeals || favMeals.length === 0) {
    return (
      <View style={styles.noFavsContainer}>
        <DefaultText style={{ fontSize: 18 }}>You currently have no favourites</DefaultText>
      </View>
    )
  }
  return <MealList navigation={props.navigation} listData={favMeals} />;
};

FavouritesScreen.navigationOptions = {
  headerTitle: "Your Favourites",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderBtn}>
      <Item title="Drawer" iconName="ios-menu"/*  onPress={} */ />
    </HeaderButtons>
  )
}

const styles = StyleSheet.create({
  noFavsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});


export default FavouritesScreen;