// import Lightgallery from "lightgallery";
import React from "react";
import Feedback from "react-bootstrap/esm/Feedback";
import AppProfile from "../../components/AppsMenu/AppProfile/AppProfile";
import PostDetails from "../../components/AppsMenu/AppProfile/PostDetails";
import Calendar from "../../components/AppsMenu/Calendar/Calendar";
import Compose from "../../components/AppsMenu/Email/Compose/Compose";
import Inbox from "../../components/AppsMenu/Email/Inbox/Inbox";
import Read from "../../components/AppsMenu/Email/Read/Read";
// import Checkout from "../../components/AppsMenu/Shop/Checkout/Checkout";
// import Customers from "../../components/AppsMenu/Shop/Customers/Customers";
// import Invoice from "../../components/AppsMenu/Shop/Invoice/Invoice";
// import ProductDetail from "../../components/Customers/components/ProductDetail";
// import ProductGrid from "../../components/Customers/components/ProductGrid";
// import ProductList from "../../components/AppsMenu/Shop/ProductList/ProductList";
// import ProductOrder from "../../components/AppsMenu/Shop/ProductOrder";
import Bill from "../../components/Dashboard/Bill";
import CheckoutPage from "../../components/Dashboard/CheckoutPage";
import DashboardDark from "../../components/Dashboard/DashboardDark";
import Theme1 from "../../components/Dashboard/Demo/Theme1";
import Theme2 from "../../components/Dashboard/Demo/Theme2";
import Theme3 from "../../components/Dashboard/Demo/Theme3";
import Theme4 from "../../components/Dashboard/Demo/Theme4";
import Theme5 from "../../components/Dashboard/Demo/Theme5";
import Theme6 from "../../components/Dashboard/Demo/Theme6";
import Theme7 from "../../components/Dashboard/Demo/Theme7";
import DeliverMain from "../../components/Dashboard/Drivers/DeliverMain";
import DeliverOrder from "../../components/Dashboard/Drivers/DeliverOrder";
import FavoriteMenu from "../../components/Dashboard/FavoriteMenu";
import FoodOrder from "../../components/Dashboard/FoodOrder";
import Home from "../../components/Dashboard/Home";
import Message from "../../components/Dashboard/Message";
import OrderHistory from "../../components/Dashboard/OrderHistory";
import CustomerReviews from "../../components/Dashboard/Restaurant/CustomerReviews";
import Orders from "../../components/Dashboard/Restaurant/Orders";
import Restaurant from "../../components/Dashboard/Restaurant/Restaurant";
import Withdrow from "../../components/Dashboard/Restaurant/Withdrow";
import CkEditor from "../../components/Forms/CkEditor/CkEditor";
import FormValidation from "../../components/Forms/FormValidation/FormValidation";
import Pickers from "../../components/Forms/Pickers/Pickers";
import Wizard from "../../components/Forms/Wizard/Wizard";
import JqvMap from "../../components/PluginsMenu/JqvMap/JqvMap";
import Select2 from "../../components/PluginsMenu/Select2/Select2";
import MainSweetAlert from "../../components/PluginsMenu/SweetAlert/SweetAlert";
import Toastr from "../../components/PluginsMenu/Toastr/Toastr";
import CountryList from "../../components/SideMenu/Settings/Country/country-list";
import RestaurantList from "../../components/SideMenu/Settings/Restaurant/restaurant-list";
import CustomerList from "../../components/SideMenu/UserManagment/Customers/customer-list";
import DriverList from "../../components/SideMenu/UserManagment/Drivers/driver-list";
import StaffList from "../../components/SideMenu/UserManagment/Staff/staff-list";
import UiAccordion from "../../components/bootstrap/Accordion";
import UiAlert from "../../components/bootstrap/Alert";
import UiBadge from "../../components/bootstrap/Badge";
import UiButton from "../../components/bootstrap/Button";
import UiButtonGroup from "../../components/bootstrap/ButtonGroup";
import UiCards from "../../components/bootstrap/Cards";
import UiCarousel from "../../components/bootstrap/Carousel";
import UiDropDown from "../../components/bootstrap/DropDown";
import UiGrid from "../../components/bootstrap/Grid";
import UiListGroup from "../../components/bootstrap/ListGroup";
import UiModal from "../../components/bootstrap/Modal";
import UiPagination from "../../components/bootstrap/Pagination";
import UiPopOver from "../../components/bootstrap/PopOver";
import UiProgressBar from "../../components/bootstrap/ProgressBar";
import UiTab from "../../components/bootstrap/Tab";
import UiTypography from "../../components/bootstrap/Typography";
import ApexChart from "../../components/charts/apexcharts";
import RechartJs from "../../components/charts/rechart";
import BootstrapTable from "../../components/table/BootstrapTable";
import FilteringTable from "../../components/table/FilteringTable/FilteringTable";
import SortingTable from "../../components/table/SortingTable/SortingTable";
import Widget from "../Widget";
import MainDashboard from "../dashboard/main-dashboard";
import MenuCategoryList from "../../components/SideMenu/MenuManagement/MenuCategory/menu-category";
import AllRestaurantMenu from "../../components/SideMenu/MenuManagement/Menu/all-menu";

export const staffRoutes = [
    /// Dashboard
    // { url: '', component: <Home /> },
    // { url: 'dashboard', component: <Home /> },
    // { url: 'dashboard-dark', component: <DashboardDark /> },
    // { url: 'food-order', component: <FoodOrder /> },
    // { url: 'favorite-menu', component: <FavoriteMenu /> },
    // { url: 'message', component: <Message /> },
    // { url: 'order-history', component: <OrderHistory /> },
    // { url: 'notification', component: <Notification /> },
    { url: 'bill', component: <Bill /> },
    // { url: 'setting', component: <HomeSetting /> },
    { url: 'checkout', component: <CheckoutPage /> },
    //custom
    { url: 'main-dashboard', component: <MainDashboard /> },

    //MenuManagement
    { url: 'menu-category', component: <MenuCategoryList /> },
    { url: 'restaurant-menu', component: <AllRestaurantMenu /> },
    // { url: "restaurant-menu/:categoryId", component: <RestaurantMenu /> },

    //user management
    { url: 'staff-users', component: <StaffList /> },
    { url: 'driver-users', component: <DriverList /> },
    { url: 'customer-users', component: <CustomerList /> },

    //Settings
    { url: 'country-list', component: <CountryList /> },
    { url: 'restaurant-list', component: <RestaurantList /> },

    // Restaurant
    { url: 'restaurant', component: <Restaurant /> },
    { url: 'withdrow', component: <Withdrow /> },
    // { url: 'menu', component: <Menu /> },
    { url: 'orders', component: <Orders /> },
    { url: 'customer-reviews', component: <CustomerReviews /> },

    //Drivers
    { url: 'deliver-main', component: <DeliverMain /> },
    { url: 'deliver-order', component: <DeliverOrder /> },
    { url: 'feedback', component: <Feedback /> },

    /////Demo
    { url: 'container-wide', component: <Theme1 /> },
    { url: 'horizontal-sidebar', component: <Theme2 /> },
    { url: 'nav-header', component: <Theme3 /> },
    { url: 'secondary-sidebar', component: <Theme4 /> },
    { url: 'mini-sidebar', component: <Theme5 /> },
    { url: 'sidebar-theme', component: <Theme6 /> },
    { url: 'header-theme', component: <Theme7 /> },

    /// Apps
    { url: 'app-profile', component: <AppProfile /> },
    { url: 'email-compose', component: <Compose /> },
    { url: 'email-inbox', component: <Inbox /> },
    { url: 'email-read', component: <Read /> },
    { url: 'app-calender', component: <Calendar /> },
    { url: 'post-details', component: <PostDetails /> },

    /// Shop
    // { url: 'ecom-product-grid', component: <ProductGrid /> },
    // { url: 'ecom-product-list', component: <ProductList /> },
    // { url: 'ecom-product-detail', component: <ProductDetail /> },
    // { url: 'ecom-product-order', component: <ProductOrder /> },
    // { url: 'ecom-checkout', component: <Checkout /> },
    // { url: 'ecom-invoice', component: <Invoice /> },
    // { url: 'ecom-customers', component: <Customers /> },
    //
    ///// Chart
    // { url: 'chart-sparkline', component: <SparklineChart /> },
    // { url: 'chart-chartjs', component: <ChartJs /> },
    { url: 'chart-apexchart', component: <ApexChart /> },
    { url: 'chart-rechart', component: <RechartJs /> },
    //
    ///// Bootstrap
    { url: 'ui-alert', component: <UiAlert /> },
    { url: 'ui-badge', component: <UiBadge /> },
    { url: 'ui-button', component: <UiButton /> },
    { url: 'ui-modal', component: <UiModal /> },
    { url: 'ui-button-group', component: <UiButtonGroup /> },
    { url: 'ui-accordion', component: <UiAccordion /> },
    { url: 'ui-list-group', component: <UiListGroup /> },
    { url: 'ui-card', component: <UiCards /> },
    { url: 'ui-carousel', component: <UiCarousel /> },
    { url: 'ui-dropdown', component: <UiDropDown /> },
    { url: 'ui-popover', component: <UiPopOver /> },
    { url: 'ui-progressbar', component: <UiProgressBar /> },
    { url: 'ui-tab', component: <UiTab /> },
    { url: 'ui-pagination', component: <UiPagination /> },
    { url: 'ui-typography', component: <UiTypography /> },
    { url: 'ui-grid', component: <UiGrid /> },
    ///// Plugin
    { url: 'uc-select2', component: <Select2 /> },
    { url: 'uc-sweetalert', component: <MainSweetAlert /> },
    { url: 'uc-toastr', component: <Toastr /> },
    { url: 'map-jqvmap', component: <JqvMap /> },
    // { url: 'uc-lightgallery', component: <Lightgallery /> },

    ///// Widget
    { url: 'widget-basic', component: <Widget /> },

    ///// Form
    // { url: 'form-element', component: <Element /> },
    { url: 'form-wizard', component: <Wizard /> },
    { url: 'form-ckeditor', component: <CkEditor /> },
    { url: 'form-pickers', component: <Pickers /> },
    { url: 'form-validation', component: <FormValidation /> },
    //
    ///// table
    { url: 'table-filtering', component: <FilteringTable /> },
    { url: 'table-sorting', component: <SortingTable /> },
    { url: 'table-bootstrap-basic', component: <BootstrapTable /> },
  ];