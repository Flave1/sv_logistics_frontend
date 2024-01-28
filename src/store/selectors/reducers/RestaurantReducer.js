import { GET_ALL_RESTAURANT, GET_CSUTOMER_ORDERS } from '../../actions/RestaurantAction';

const initialState = {
  allrestaurant: [],
  errorMessage: '',
  successMessage: '',
  showLoading: false,
  customerOrders: [],
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

  if (action.type === GET_CSUTOMER_ORDERS) {
    return {
      ...state,
      customerOrders: action.payload,
      showLoading: false,
    };
  }

  return state;
}
