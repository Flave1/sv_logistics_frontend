import { GET_ALL_RESTAURANT } from "../../actions/RestaurantAction";

const initialState = {
    allrestaurant: [],
    errorMessage: '',
    successMessage: '',
    showLoading: false,
};

export function RestaurantReducer(state = initialState, action) {
    if (action.type === GET_ALL_RESTAURANT) {
        return {
            ...state,
            allrestaurant: action.payload,
            errorMessage: '',
            successMessage: 'Success',
            showLoading: false,
        };
    }

    return state;
}