import React, { useContext } from "react";

/// React router dom
import {  Routes, Route, Outlet  } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
//import Main from './layouts/Main';

import ScrollToTop from "./layouts/ScrollToTop";
/// Dashboard
import Home from "./components/Dashboard/Home";
import DashboardDark from "./components/Dashboard/DashboardDark";
import FoodOrder from "./components/Dashboard/FoodOrder";
import FavoriteMenu from "./components/Dashboard/FavoriteMenu";
import Message from "./components/Dashboard/Message";
import OrderHistory from "./components/Dashboard/OrderHistory";
import Notification from "./components/Dashboard/Notification";
import Bill from "./components/Dashboard/Bill";
import HomeSetting from "./components/Dashboard/Setting";
import CheckoutPage from "./components/Dashboard/CheckoutPage";

//Restaurant
import Restaurant from './components/Dashboard/Restaurant/Restaurant';
import Withdrow from './components/Dashboard/Restaurant/Withdrow';
import Menu from './components/Dashboard/Restaurant/Menu';
import Orders from './components/Dashboard/Restaurant/Orders';
import CustomerReviews from './components/Dashboard/Restaurant/CustomerReviews';

//Drivers
import DeliverMain from './components/Dashboard/Drivers/DeliverMain';
import DeliverOrder from './components/Dashboard/Drivers/DeliverOrder';
import Feedback from './components/Dashboard/Drivers/Feedback';

/////Demo
import Theme1 from "./components/Dashboard/Demo/Theme1";
import Theme2 from "./components/Dashboard/Demo/Theme2";
import Theme3 from "./components/Dashboard/Demo/Theme3";
import Theme4 from "./components/Dashboard/Demo/Theme4";
import Theme5 from "./components/Dashboard/Demo/Theme5";
import Theme6 from "./components/Dashboard/Demo/Theme6";
import Theme7 from "./components/Dashboard/Demo/Theme7";


/// App
import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
import Compose from "./components/AppsMenu/Email/Compose/Compose";
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
import Read from "./components/AppsMenu/Email/Read/Read";
import Calendar from "./components/AppsMenu/Calendar/Calendar";
import PostDetails from "./components/AppsMenu/AppProfile/PostDetails";

/// Product List
import ProductGrid from "./components/AppsMenu/Shop/ProductGrid/ProductGrid";
import ProductList from "./components/AppsMenu/Shop/ProductList/ProductList";
import ProductDetail from "./components/AppsMenu/Shop/ProductGrid/ProductDetail";
import Checkout from "./components/AppsMenu/Shop/Checkout/Checkout";
import Invoice from "./components/AppsMenu/Shop/Invoice/Invoice";
import ProductOrder from "./components/AppsMenu/Shop/ProductOrder";
import Customers from "./components/AppsMenu/Shop/Customers/Customers";

/// Charts
import SparklineChart from "./components/charts/Sparkline";
import ChartJs from "./components/charts/Chartjs";
import RechartJs from "./components/charts/rechart";
import ApexChart from "./components/charts/apexcharts";

/// Bootstrap
import UiAlert from "./components/bootstrap/Alert";
import UiAccordion from "./components/bootstrap/Accordion";
import UiBadge from "./components/bootstrap/Badge";
import UiButton from "./components/bootstrap/Button";
import UiModal from "./components/bootstrap/Modal";
import UiButtonGroup from "./components/bootstrap/ButtonGroup";
import UiListGroup from "./components/bootstrap/ListGroup";
import UiCards from "./components/bootstrap/Cards";
import UiCarousel from "./components/bootstrap/Carousel";
import UiDropDown from "./components/bootstrap/DropDown";
import UiPopOver from "./components/bootstrap/PopOver";
import UiProgressBar from "./components/bootstrap/ProgressBar";
import UiTab from "./components/bootstrap/Tab";
import UiPagination from "./components/bootstrap/Pagination";
import UiGrid from "./components/bootstrap/Grid";
import UiTypography from "./components/bootstrap/Typography";

/// Plugins
import Select2 from "./components/PluginsMenu/Select2/Select2";
import MainSweetAlert from "./components/PluginsMenu/SweetAlert/SweetAlert";
import Toastr from "./components/PluginsMenu/Toastr/Toastr";
import JqvMap from "./components/PluginsMenu/JqvMap/JqvMap";
import Lightgallery from "./components/PluginsMenu/Lightgallery/Lightgallery";


// Widget
import Widget from "./pages/Widget";

/// Table
import SortingTable from "./components/table/SortingTable/SortingTable";
import FilteringTable from "./components/table/FilteringTable/FilteringTable";
import BootstrapTable from "./components/table/BootstrapTable";

/// Form
import Element from "./components/Forms/Element/Element";
import Wizard from "./components/Forms/Wizard/Wizard";
import CkEditor from "./components/Forms/CkEditor/CkEditor";
import Pickers from "./components/Forms/Pickers/Pickers";
import FormValidation from "./components/Forms/FormValidation/FormValidation";

/// Pages

import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
import { ThemeContext } from "../context/ThemeContext";
import MainDashboard from "./pages/dashboard/main-dashboard";
import StaffList from "./components/SideMenu/UserManagment/Staff/staff-list";
import DriverList from "./components/SideMenu/UserManagment/Drivers/driver-list";
import CustomerList from "./components/SideMenu/UserManagment/Customers/customer-list";
import MenuCategory from "./components/SideMenu/MenuManagement/MenuCategory/menu-category";
import RestaurantMenu from "./components/SideMenu/MenuManagement/Menu/menu";
import AllRestaurantMenu from "./components/SideMenu/MenuManagement/Menu/all-menu";

const Markup = () => {

  const allroutes = [
    /// Dashboard
    { url: "", component: <Home /> },
    { url: "dashboard", component: <Home /> },
    { url: "dashboard-dark", component: <DashboardDark /> },
    { url: "food-order", component: <FoodOrder /> },
    { url: "favorite-menu", component: <FavoriteMenu /> },
    { url: "message", component: <Message /> },
    { url: "order-history", component: <OrderHistory /> },
    { url: "notification", component: <Notification /> },
    { url: "bill", component: <Bill /> },
    { url: "setting", component: <HomeSetting /> },
    { url: "checkout", component: <CheckoutPage /> },
    //custom
    { url: "main-dashboard", component: <MainDashboard /> },


    //MenuManagement
    { url: "menu-category", component: <MenuCategory /> },
    { url: "all-menu", component: <AllRestaurantMenu /> },
    { url: "restaurant-menu/:categoryId", component: <RestaurantMenu /> },


    //user management
    { url: "staff-users", component: <StaffList /> },
    { url: "driver-users", component: <DriverList /> },
    { url: "customer-users", component: <CustomerList /> },

    
    // Restaurant
    { url: "restaurant", component: <Restaurant /> },
    { url: "withdrow", component: <Withdrow /> },
    { url: "menu", component: <Menu /> },
    { url: "orders", component: <Orders /> },
    { url: "customer-reviews", component: <CustomerReviews /> },
    

    //Drivers
    {url:"deliver-main", component:<DeliverMain />},
    {url:"deliver-order", component:<DeliverOrder />},
    {url:"feedback", component:<Feedback />},

	/////Demo
    { url: "container-wide", component: <Theme1 /> },
    { url: "horizontal-sidebar", component: <Theme2 /> },
    { url: "nav-header", component: <Theme3 /> },
    { url: "secondary-sidebar", component: <Theme4 /> },
    { url: "mini-sidebar", component: <Theme5/> },
    { url: "sidebar-theme", component: <Theme6/> },
    { url: "header-theme", component: <Theme7/> },
	
	/// Apps
    { url: "app-profile", component: <AppProfile /> },
    { url: "email-compose", component: <Compose /> },
    { url: "email-inbox", component: <Inbox /> },
    { url: "email-read", component: <Read /> },
    { url: "app-calender", component: <Calendar /> },
    { url: "post-details", component: <PostDetails /> },

  /// Shop
    { url: "ecom-product-grid", component: <ProductGrid /> },
    { url: "ecom-product-list", component: <ProductList /> },
    { url: "ecom-product-detail", component: <ProductDetail /> },
    { url: "ecom-product-order", component: <ProductOrder /> },
    { url: "ecom-checkout", component: <Checkout /> },
    { url: "ecom-invoice", component: <Invoice /> },
    { url: "ecom-customers", component: <Customers /> },
//
    ///// Chart
    { url: "chart-sparkline", component: <SparklineChart /> },
    { url: "chart-chartjs", component: <ChartJs /> },    
    { url: "chart-apexchart", component: <ApexChart /> },
    { url: "chart-rechart", component: <RechartJs /> },
//
    ///// Bootstrap
    { url: "ui-alert", component: <UiAlert /> },
    { url: "ui-badge", component: <UiBadge /> },
    { url: "ui-button", component: <UiButton /> },
    { url: "ui-modal", component: <UiModal /> },
    { url: "ui-button-group", component: <UiButtonGroup /> },
    { url: "ui-accordion", component: <UiAccordion /> },
    { url: "ui-list-group", component: <UiListGroup /> },
    { url: "ui-card", component: <UiCards />},
    { url: "ui-carousel", component: <UiCarousel /> },
    { url: "ui-dropdown", component: <UiDropDown /> },
    { url: "ui-popover", component: <UiPopOver /> },
    { url: "ui-progressbar", component: <UiProgressBar /> },
    { url: "ui-tab", component: <UiTab /> },
    { url: "ui-pagination", component: <UiPagination /> },
    { url: "ui-typography", component: <UiTypography /> },
    { url: "ui-grid", component: <UiGrid /> },
    ///// Plugin
    { url: "uc-select2", component: <Select2 /> },
    { url: "uc-sweetalert", component: <MainSweetAlert /> },
    { url: "uc-toastr", component: <Toastr /> },
    { url: "map-jqvmap", component: <JqvMap /> },
    { url: "uc-lightgallery", component: <Lightgallery /> },
	
	
    ///// Widget
    { url: "widget-basic", component: <Widget /> },

    ///// Form
    { url: "form-element", component: <Element /> },
    { url: "form-wizard", component: <Wizard /> },
    { url: "form-ckeditor", component: <CkEditor /> },
    { url: "form-pickers", component: <Pickers /> },
    { url: "form-validation", component: <FormValidation /> },
//
    ///// table
	  { url: 'table-filtering', component: <FilteringTable /> },
    { url: 'table-sorting', component: <SortingTable /> },
    { url: "table-bootstrap-basic", component: <BootstrapTable /> },

  ];
  

  return (
    <>
        <Routes>
            <Route path='page-lock-screen' element= {<LockScreen />} />
            <Route path='page-error-400' element={<Error400/>} />
            <Route path='page-error-403' element={<Error403/>} />
            <Route path='page-error-404' element={<Error404/>} />
            <Route path='page-error-500' element={<Error500/>} />
            <Route path='page-error-503' element={<Error503/>} />
            <Route  element={<MainLayout />} > 
                {allroutes.map((data, i) => (
                  <Route
                    key={i}
                    exact
                    path={`${data.url}`}
                    element={data.component}
                  />
                ))}
            </Route>
        </Routes>
        <ScrollToTop />
        
    </>
  );
};


function MainLayout(){
  const { menuToggle } = useContext(ThemeContext);
  return (
    <div id="main-wrapper" className={`show ${ menuToggle ? "menu-toggle" : ""}`}>  
      <Nav />
      <div className="content-body" style={{ minHeight: window.screen.height - 45 }}>
          <div className="container">
            <Outlet />                
          </div>
      </div>
      <Footer />
    </div>
  )

};

export default Markup;
