import { GET_ALL_STAFF } from "../../actions/UserActions";

const initialState = {
    staffs: [],
    errorMessage: '',
    successMessage: '',
    showLoading: false,
};

export function UserReducer(state = initialState, action) {
    if (action.type === GET_ALL_STAFF) {
        return {
            ...state,
            staffs: action.payload,
            errorMessage: '',
            successMessage: 'Success',
            showLoading: false,
        };
    }
    
    return state;
}

    
