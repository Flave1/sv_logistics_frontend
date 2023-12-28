import { GET_ALL_RESTAURANT_MENU_CATEGORIES, GET_ALL_RESTAURANT_MENU } from "../../actions/MenuActions";


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

export function MenuReducer(state = initialState, action) {
    if (action.type === GET_ALL_RESTAURANT_MENU) {
        return {
            ...state,
            allmenu: action.payload,
            errorMessage: '',
            successMessage: 'Success',
            showLoading: false,
        };
    }

    return state;
}