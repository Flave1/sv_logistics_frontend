import {
  SET_CUSTOMER_DETAILS,
  SET_POPULAR_RESTAURANTS,
  SET_MENU,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_LIST,
  CLEAR_CART,
  SET_SHOP_PATH,
  SET_CUSTOMER_SEARCH,
} from '../../actions/CustomerActions';

const initialState = {
  allRestaurants: [],
  menuList: [],
  errorMessage: '',
  successMessage: '',
  showLoading: false,
  menuCart: [],
  restaurantPath: '',
  customerSearch: [],
};

export function CustomerReducer(state = initialState, action) {
  if (action.type === SET_CUSTOMER_DETAILS) {
    return {
      ...state,
      customerDetails: action.payload,
      errorMessage: '',
      successMessage: 'Success',
      showLoading: false,
    };
  }
  if (action.type === SET_POPULAR_RESTAURANTS) {
    return {
      ...state,
      allRestaurants: action.payload,
      showLoading: false,
    };
  }
  if (action.type === SET_MENU) {
    return {
      ...state,
      menuList: action.payload,
      showLoading: false,
    };
  }

  if (action.type === ADD_TO_CART) {
    const existingMenu = state.menuCart.find((cart) => cart.menuId === action.payload.menuId);

    if (!existingMenu) {
      // If the menu does not exist in the cart, add it with quantity 1
      return {
        ...state,
        menuCart: [action.payload, ...state.menuCart],
      };
    } else {
      // If the menu already exists, update its quantity
      const updatedCart = state.menuCart.map((cart) => (cart.menuId === action.payload.menuId ? { ...cart, quantity: cart.quantity + 1 } : cart));

      return {
        ...state,
        menuCart: updatedCart,
      };
    }
  }

  if (action.type === REMOVE_FROM_CART) {
    let menu = state.menuCart.find((cart) => cart.menuId === action.payload.menuId);

    if (menu) {
      if (menu.quantity > 1) {
        menu.quantity = menu.quantity - 1;
        const updatedCart = state.menuCart.map((cart) => (cart.menuId === action.payload.menuId ? menu : cart));

        return {
          ...state,
          menuCart: updatedCart,
        };
      } else {
        const updatedCart = state.menuCart.filter((cart) => cart.menuId !== action.payload.menuId);

        return {
          ...state,
          menuCart: updatedCart,
        };
      }
    }

    // If menu is not found, you might want to handle this case accordingly.
    // For example, you can return the current state without any modifications.
    return state;
  }

  if (action.type == UPDATE_CART_LIST) {
    return {
      ...state,
      menuCart: action.payload,
    };
  }

  if (action.type == CLEAR_CART) {
    return {
      ...state,
      menuCart: [],
    };
  }

  if (action.type == SET_SHOP_PATH) {
    return {
      ...state,
      restaurantPath: action.payload,
    };
  }

  if (action.type == SET_CUSTOMER_SEARCH) {
    return {
      customerSearch: action.payload
    };
  }

  return state;
}
