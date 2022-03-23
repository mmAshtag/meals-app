import React from "react";
import * as Font from "expo-font"

export const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require("./OpenSans-Regular.ttf"),
        "open-sans-bold": require("./OpenSans-Bold.ttf")
    })
}