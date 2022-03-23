import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

const GridItem = props => {
    const { itemData, onSelect } = props
    let TouchableComp = TouchableOpacity
    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback
    }
    
    return (
        <View style={styles.gridItem}>
            <TouchableComp style={{ flex: 1 }} onPress={onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: itemData.item.color } }}>
                    <Text style={styles.title} numberOfLines={2}>{itemData.item.title}</Text>
                </View>
            </TouchableComp>
        </View>
    );
};

export default GridItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
    elevation: 4,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 19,
    textAlign: "right"
  }
});