import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import GridItem from "../components/GridItem"

const CategoriesScreen = props => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={(itemData) => (
        <GridItem
          itemData={itemData}
          onSelect={() => {
            props.navigation.navigate("CategoryMeals", {
              categoryId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
