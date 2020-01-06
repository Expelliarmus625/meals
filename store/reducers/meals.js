import { MEALS } from "../../data/dummy_data";

const initialState = {
    meals : MEALS,
    filteredMeals : MEALS,
    favouriteMeals : []
}

const mealsReducer = (state = initialState, action) => {
    return state;
}

export default mealsReducer;
