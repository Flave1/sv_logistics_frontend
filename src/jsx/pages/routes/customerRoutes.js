import React from 'react';
import CustomerCart from '../../components/Customers/CustomerCart';
import CustomerHome from '../../components/Customers/CustomerHome';
import RestaurantMenu from '../../components/Customers/RestaurantMenu';

export const customerRoutes = [
  { url: '/', component: <CustomerHome /> },
  { url: '/shops', component: <CustomerHome /> },
  { url: '/:restaurant/:id/menu/:table', component: <RestaurantMenu /> },
  // { url: '/{restaurant}/menu-detail', component: <MenuDetail /> },
  { url: '/:restaurant/:id/menu/:table/cart', component: <CustomerCart /> },
];
