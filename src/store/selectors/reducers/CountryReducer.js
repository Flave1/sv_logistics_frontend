import { GET_ALL_COUNTRY } from "../../actions/CountryActions";


const initialState = {
    allcountry: [],
    errorMessage: '',
    successMessage: '',
    showLoading: false,
};

export function CountryReducer(state = initialState, action) {
    if (action.type === GET_ALL_COUNTRY) {
        return {
            ...state,
            allcountry: action.payload,
            errorMessage: '',
            successMessage: 'Success',
            showLoading: false,
        };
    }

    return state;
}