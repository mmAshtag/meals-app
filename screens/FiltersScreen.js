import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderBtn from '../components/HeaderBtn';
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import FilterSwitch from '../components/FilterSwitch';
import { useDispatch } from "react-redux"
import { setFilters } from '../store/actions/meals';

const FiltersScreen = props => {
  const { navigation } = props
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };

    dispatch(setFilters(appliedFilters))
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    navigation.setParams({ save: saveFilters })
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newVal) => setIsGlutenFree(newVal)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newVal) => setIsLactoseFree(newVal)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newVal) => setIsVegan(newVal)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newVal) => setIsVegetarian(newVal)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item title="Drawer" iconName="ios-menu" /*  onPress={} */ />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item title="Drawer" iconName="ios-save" onPress={navData.navigation.getParam("save")} />
      </HeaderButtons>
    )
  }
}

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    margin: 15,
    textAlign: "center"
  },
});
