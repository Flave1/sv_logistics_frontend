export const MenuList = [
  //Dashboard
  {
    title: "Dashboard",
    classsChange: "mm-collapse",
    iconStyle: "bi bi-grid",
    to: "main-dashboard",
  },
  //Menu Management
  {
    title: "Menu Management",
    classsChange: "mm-collapse",
    iconStyle: "bi bi-shop-window",
    to: "restaurant-menu",
  },
  //Order
  {
    title: "Order",
    classsChange: "mm-collapse",
    iconStyle: "bi bi-cart2",
    content: [
      {
        title: "Customer orders",
        to: "customer-orders",
      },
      {
        title: "Kitchen",
        to: "orders-in-kitchen",
      },
      {
        title: "Order Tracking",
        to: "maintenance",
      }
    ],
  },
  //Payment
  {
    title: "Payment",
    classsChange: "mm-collapse",
    iconStyle: "bi bi-credit-card-fill",
    content: [
      {
        title: "Gateways",
        to: "maintenance",
      },
      {
        title: "Refunds and dispute",
        to: "maintenance",
      },
      {
        title: "Inventory",
        to: "maintenance",
      },
    ],
  },
  //Delivery
  {
    title: "Delivery",
    classsChange: "mm-collapse",
    iconStyle: "bi bi-bicycle",
    content: [
      {
        title: "Delivery Orders",
        to: "maintenance",
      },
      {
        title: "Delivery Services",
        to: "maintenance",
      },
    ],
  },
  //Reporting
  {
    title: "Reporting",
    classsChange: "mm-collapse",
    iconStyle: "bi bi-bar-chart",
    content: [
      {
        title: "Sales Report",
        to: "maintenance",
      },
      {
        title: "Revenue Report",
        to: "maintenance",
      },
    ],
  },
  //Promotions
  {
    title: "Promotions",
    classsChange: "mm-collapse",
    iconStyle: "bi bi-credit-card-fill",
    content: [
      {
        title: "Promotional Campaigns",
        to: "maintenance",
      },
    ],
  },
  //User Management
  {
    title: "User Management",
    classsChange: "mm-collapse",
    iconStyle: "bi bi-people",
    content: [
      {
        title: "Staff",
        to: "staff-users",
      },
      {
        title: "Drivers",
        to: "driver-users",
      },
      {
        title: "Customers",
        to: "customer-users",
      },
    ],
  },
  //Setting Management
  {
    title: "Setting",
    classsChange: "mm-collapse",
    iconStyle: "bi bi-gear",
    content: [
      {
        title: "Restaurant",
        to: "restaurant-list",
      },
      {
        title: "Country",
        to: "country-list",
      },
      {
        title: "QR Code",
        to: "generate-qrcode",
      },
    ],
  },

  
];
