import { MEALS } from "../../data/dummy-data"
import { TOGGLE_FAVOURITES, SET_FILTERS } from "../actions/meals"

const initialState = {
    allMeals: MEALS,
    filteredMeals: MEALS,
    favourites: []
}

const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITES:
            const existingIndex = state.favourites.findIndex(meal => meal.id === action.mealId)
            if (existingIndex >= 0) {
                const updatedFavs = [...state.favourites]
                updatedFavs.splice(existingIndex, 1)
                return { ...state, favourites: updatedFavs }
            } else {
                const newMeal = state.allMeals.find(meal => meal.id === action.mealId)
                return { ...state, favourites: state.favourites.concat(newMeal) }
            }
        case SET_FILTERS:
            const filteredMeals = state.allMeals.filter(meal => {
                if (action.filters.glutenFree && !meal.isGlutenFree) return false
                else if (action.filters.lactoseFree && !meal.isLactoseFree) return false
                else if (action.filters.vegan && !meal.isVegan) return false
                else if (action.filters.vegetarian && !meal.isVegetarian) return false
                else return true
            })
            return { ...state, filteredMeals: filteredMeals }
        default:
            return state;
    }
}

export default mealReducer