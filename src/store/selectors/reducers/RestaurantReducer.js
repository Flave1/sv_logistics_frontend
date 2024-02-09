import { GET_ALL_RESTAURANT, GET_CSUTOMER_ORDERS, GET_ORDERS_IN_KITCHEN, SET_DASHBOARD_STATS } from '../../actions/RestaurantAction';

const initialState = {
  allrestaurant: [],
  errorMessage: '',
  successMessage: '',
  showLoading: false,
  customerOrders: [],
  ordersInKitchen: [],
  dasboardStats: null,
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

  if (action.type === GET_ORDERS_IN_KITCHEN) {
    return {
      ...state,
      ordersInKitchen: action.payload,
      showLoading: false,
    };
  }

  if (action.type === SET_DASHBOARD_STATS) {
    return {
      ...state, 
      dasboardStats: action.payload,
    };
  }

  return state;
}
