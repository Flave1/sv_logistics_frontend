import { GET_ALL_RESTAURANT_MENU_CATEGORIES } from "../../actions/MenuActions";


const initialState = {
    categories: [],
    errorMessage: '',
    successMessage: '',
    showLoading: false,
};

export function MenuCategoryReducer(state = initialState, action) {
    if (action.type === GET_ALL_RESTAURANT_MENU_CATEGORIES) {
        return {
            ...state,
            categories: action.payload,
            errorMessage: '',
            successMessage: 'Success',
            showLoading: false,
        };
    }

    return state;
}