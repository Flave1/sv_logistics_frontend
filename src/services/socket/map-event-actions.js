import { getAllDrivers, getAllCustomers, getAllStaff } from "../../store/actions";
import { getAllCountryAction } from "../../store/actions/CountryActions";
import { getMenuCategoriesAction, getMenuByCategoryIdAction, getAllMenuAction } from "../../store/actions/MenuActions";
import { getAllRestaurantsAction } from "../../store/actions/RestaurantAction";

export const eventActions = [
  {
    action: onConnect,
    event: "connect",
    dispatchAble: false,
  },
  {
    action: onDisconnect,
    event: "disconnect",
    dispatchAble: false,
  },
  {
    action: getAllStaff,
    event: "get_all_staff_event",
    dispatchAble: true,
  },
  {
    action: getAllDrivers,
    event: "get_all_drivers_event",
    dispatchAble: true,
  },
  {
    action: getAllCustomers,
    event: "get_all_customers_event",
    dispatchAble: true,
  },
  
  ///Menu Management
  {
    action: getMenuCategoriesAction,
    event: "get_restaurant_menu_categories_event",
    dispatchAble: true,
  },
  {
    action: getAllMenuAction,
    event: "get_restaurant_menu_event",
    dispatchAble: true,
  },
  // {
  //   action: getMenuByCategoryIdAction(),
  //   event: "get_restaurant_menu_by_category_event",
  //   dispatchAble: true,
  // },


  ///Country
  {
    action: getAllCountryAction,
    event: "get_countries_event",
    dispatchAble: true,
  },

///Restaurant
  {
    action: getAllRestaurantsAction,
    event: "get_restaurants_event",
    dispatchAble: true,
  }
];


function onConnect() {
  console.log("Socket is connected");
}

function onDisconnect() {
  console.log("Socket is disconnected");
}
