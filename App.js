import React, { useState } from 'react';
import { fetchFonts } from './assets/fonts/fetchFonts';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import mealReducer from "./store/reducers/meals"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

enableScreens();
const rootReducer = combineReducers({
  meals: mealReducer
})
const store = createStore(rootReducer)

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setFontLoaded(true)}
          onError={(err) => console.log(err)}
      />
    )
  }
  
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });