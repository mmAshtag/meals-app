import { StyleSheet, Text, View, Switch, Platform } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primary, false: "#ccc" }}
        thumbColor={Platform.OS === "android" ? Colors.primary : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  )
}

export default FilterSwitch;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});
