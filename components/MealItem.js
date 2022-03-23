import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native";
import React from 'react';
import DefaultText from "./DefaultText";

const MealItem = props => {
    const { itemData, onSelectMeal } = props
    let TouchableComp = TouchableOpacity
    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback
    }
    return (
        <View style={styles.mealItem}>
            <TouchableComp style={{ flex: 1 }} onPress={onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{ uri: itemData.imageUrl }} style={styles.bgImg}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{itemData.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <DefaultText style={styles.details}>{itemData.duration}mins</DefaultText>
                        <DefaultText style={styles.details}>{itemData.complexity.toUpperCase()}</DefaultText>
                        <DefaultText style={styles.details}>{itemData.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableComp>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "90%"
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%"
  },
  titleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "#fff"
  },
  bgImg: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end"
  },
  details: {color: "#fff"
  }
});
