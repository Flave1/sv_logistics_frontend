import React, { useContext } from "react";

/// React router dom
import {  Routes, Route, Outlet , useRoutes } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
/// Dashboard
import Home from "./components/Dashboard/Home";
import FoodOrder from "./components/Dashboard/FoodOrder";
import FavoriteMenu from "./components/Dashboard/FavoriteMenu";
import ForgotPassword from "./pages/ForgotPassword";
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
import { ThemeContext } from "../context/ThemeContext";



const Markup = () => {

    /// Dashboard
    //{ url: "", component: <Home /> },
    //{ url: "dashboard", component: <Home /> },
    ////{ url: "dashboard-dark", component: DashboardDark },
    //{ url: "food-order", component: <FoodOrder /> },
    //{ url: "favorite-menu", component: <FavoriteMenu /> },
    //{ url: "message", component: <Message /> },
    //{ url: "order-history", component: <OrderHistory /> },
    //{ url: "notification", component: <Notification /> },
    //{ url: "bill", component: <Bill /> },
    //{ url: "setting", component: <HomeSetting /> },
    //{ url: "checkout", component: <CheckoutPage /> },
    
    // Restaurant
    //{ url: "restaurant", component: <Restaurant /> },
    //{ url: "withdrow", component: <Withdrow /> },
    //{ url: "menu", component: <Menu /> },
    //{ url: "orders", component: <Orders /> },
    //{ url: "customer-reviews", component: <CustomerReviews /> },
    

    //Drivers
   // {url:"deliver-main", component:<DeliverMain />},
   // {url:"deliver-order", component:<DeliverOrder />},
   // {url:"feedback", component:<Feedback />},

	/////Demo
    //{ url: "secondary-sidebar", component: Theme1 },
    //{ url: "mini-primary-sidebar", component: Theme2 },
    //{ url: "nav-header", component: Theme3 },
    //{ url: "horizontal-header", component: Theme4 },
    //{ url: "header-nav", component: Theme5 },
    //{ url: "sidebar-theme", component: Theme6 },
    //{ url: "dark-sidebar", component: Theme7 },
    //{ url: "theme-dashboard", component: Theme8 },
	
	/// Apps
    //{ url: "app-profile", component: <AppProfile /> },
    //{ url: "email-compose", component: <Compose /> },
    //{ url: "email-inbox", component: <Inbox /> },
    //{ url: "email-read", component: <Read /> },
    //{ url: "app-calender", component: <Calendar /> },
    //{ url: "post-details", component: <PostDetails /> },

  /// Shop
   // { url: "ecom-product-grid", component: <ProductGrid /> },
   // { url: "ecom-product-list", component: <ProductList /> },
   // { url: "ecom-product-detail", component: <ProductDetail /> },
   // { url: "ecom-product-order", component: <ProductOrder /> },
   // { url: "ecom-checkout", component: <Checkout /> },
   // { url: "ecom-invoice", component: <Invoice /> },
   // { url: "ecom-customers", component: <Customers /> },
//
    ///// Chart
   // { url: "chart-sparkline", component: <SparklineChart /> },
   // { url: "chart-chartjs", component: <ChartJs /> },    
   // { url: "chart-apexchart", component: <ApexChart /> },
   // { url: "chart-rechart", component: <RechartJs /> },
//
    ///// Bootstrap
    //{ url: "ui-alert", component: <UiAlert /> },
    //{ url: "ui-badge", component: <UiBadge /> },
    //{ url: "ui-button", component: <UiButton /> },
    //{ url: "ui-modal", component: <UiModal /> },
    //{ url: "ui-button-group", component: <UiButtonGroup /> },
    //{ url: "ui-accordion", component: <UiAccordion /> },
    //{ url: "ui-list-group", component: <UiListGroup /> },
    //{ url: "ui-card", component: <UiCards />},
    //{ url: "ui-carousel", component: <UiCarousel /> },
    //{ url: "ui-dropdown", component: <UiDropDown /> },
    //{ url: "ui-popover", component: <UiPopOver /> },
    //{ url: "ui-progressbar", component: <UiProgressBar /> },
    //{ url: "ui-tab", component: <UiTab /> },
    //{ url: "ui-pagination", component: <UiPagination /> },
    //{ url: "ui-typography", component: <UiTypography /> },
    //{ url: "ui-grid", component: <UiGrid /> },
    //{ url: "ui-grid", component: <UiGrid /> },
	//
    ///// Plugin
    //{ url: "uc-select2", component: <Select2 /> },
    //{ url: "uc-noui-slider", component: <MainNouiSlider /> },
    //{ url: "uc-sweetalert", component: <MainSweetAlert /> },
    //{ url: "uc-toastr", component: <Toastr /> },
    //{ url: "map-jqvmap", component: <JqvMap /> },
    //{ url: "uc-lightgallery", component: <Lightgallery /> },
//
	/////Redux
	//{ url: "todo", component: Todo },	
	//
    ///// Widget
    //{ url: "widget-basic", component: <Widget /> },

    ///// Form
    //{ url: "form-element", component: <Element /> },
    //{ url: "form-wizard", component: <Wizard /> },
    //{ url: "form-ckeditor", component: <CkEditor /> },
    //{ url: "form-pickers", component: <Pickers /> },
    //{ url: "form-validation", component: <FormValidation /> },
//
    ///// table
	  //{ url: 'table-filtering', component: <FilteringTable /> },
    //{ url: 'table-sorting', component: <SortingTable /> },
    //{ url: "table-bootstrap-basic", component: <BootstrapTable /> },
//
    ///// pages
    //{ url: "page-register", component: Registration },
    //{ url: "page-lock-screen", component: <LockScreen /> },
    ////{ url: "page-login", component: Login },
    //{ url: "page-forgot-password", component: <ForgotPassword /> },
    //{ url: "page-error-400", component: <Error400 /> },
    //{ url: "page-error-403", component: <Error403 /> },
    //{ url: "page-error-404", component: <Error404 /> },
    //{ url: "page-error-500", component: <Error500 /> },
    //{ url: "page-error-503", component: <Error503 /> },
  // ];
  //let path = window.location.pathname;
  //path = path.split("/");
  //path = path[path.length - 1];

  //let pagePath = path.split("-").includes("page");
  const { menuToggle } = useContext(ThemeContext);

  // const MainLayout = () => {
   
  //   <>
  //       <div id="main-wrapper"
  //         className={`show ${ menuToggle ? "menu-toggle" : ""}`}
  //       >
  //         <Nav />
  //         <div className="content-body"
  //           style={{ minHeight: window.screen.height - 45 }}
  //         >
  //           <div className="container">
  //             <Outlet />                
  //           </div>
  //         </div>
  //         <Footer />
  //       </div>
  //   </>
  // };


  const routes = useRoutes([
   
    {
      path: '',
      element: <Nav />,
      children: [
      {
        path: 'dashboard',
        element: <Home />,
      },
      {
        path: 'food-order',
        element: <FoodOrder />,
      }],
      
    }
  ]);
  return routes;
}

 

export default Markup;
