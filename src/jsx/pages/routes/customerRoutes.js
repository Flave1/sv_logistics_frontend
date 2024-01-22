import React from 'react';
import MenuDetail from '../../components/Customers/components/MenuDetail';
import RestaurantMenu from '../../components/Customers/RestaurantMenu';
import CustomerCart from '../../components/Customers/CustomerCart';
import CustomerHome from '../../components/Customers/CustomerHome';

export const customerRoutes = [
  { url: '', component: <CustomerHome /> },
  { url: '/shops', component: <CustomerHome /> },
  { url: '/:restaurant/:id/menu/:table', component: <RestaurantMenu /> },
  { url: '/{restaurant}/menu-detail', component: <MenuDetail /> },
  { url: '/cart', component: <CustomerCart /> },
];
