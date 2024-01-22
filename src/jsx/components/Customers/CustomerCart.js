import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { AddToCartAction, ClearCartAction, GetCartListAction, RemoveFromCartAction } from '../../../store/actions/CustomerActions';
import CartList from './components/CartList';
import PaymentOption from './components/PaymentOption';
import OrderSuccess from './components/OrderSuccess';

const orderTab = [
  { order: '1', title: 'Prepared', title2: 'Delivered' },
  { order: '2', title: 'Prepared', title2: 'Delivered' },
  { order: '3', title: 'Prepared', title2: 'Delivered' },
  { order: '4', title: 'Prepared', title2: 'Delivered' },
  { order: '5', title: 'Prepared', title2: 'Delivered' },
  { order: '6', title: 'Prepared', title2: 'Delivered' },
];

const CustomerCart = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const { allRestaurants, menuCart } = useSelector((state: any) => state.customer);
  const { auth: user, sessionId } = useSelector((state: any) => state.auth);
  const [shop, setShop] = useState({});
  const dispatch = useDispatch();
  const [menu, setMenu] = useState([{ id: -1, image: '', name: '_______________', price: '____', restaurantId: -1 }]);
  const [slider, setSlider] = useState('cart');

  //   console.log('user.id', user.id);
  //   console.log('sessionId', sessionId);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:' + error.message);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  }, []);

  function calculateTotal(subTotal, deleiveryFee, discount) {
    return subTotal + deleiveryFee + discount;
  }

  useEffect(() => {
    allRestaurants &&
      allRestaurants.length > 0 &&
      menuCart &&
      setShop(allRestaurants.filter((d) => Array.from(new Set(menuCart.map((menu) => menu.restaurantId))).includes(d.id))[0]);
  }, [allRestaurants]);

  useEffect(() => {
    async function fetchData() {
      await GetCartListAction({ customerId: user.id, temporalId: sessionId })(dispatch);
    }
    sessionId && fetchData(); //user.id ||
  }, [user.id, sessionId]);

  //   useEffect(() => {
  //     const payload = {
  //       restaurantIds: Array.from(new Set(menuCart.map((menu) => menu.restaurantId))),
  //       menuIds: menuCart.map((menu) => menu.menuId),
  //     };
  //     async function fetchData() {
  //       const res = (await getCheckoutMenuList(payload)).data;
  //       setMenu(res);
  //     }

  //     fetchData();
  //   }, [menuCart]);

  function addToCart(item) {
    AddToCartAction({
      customerId: user.id,
      restaurantId: item.restaurantId,
      menuId: item.menuId,
      quantity: 1,
      price: item.price,
      temporalId: sessionId,
    })(dispatch);
  }
  function removeFromCart(item) {
    RemoveFromCartAction(item.menuId, user.id, sessionId)(dispatch);
  }
  function renderdeliveryAddress() {
    return (
      <div className="col-xl-6">
        <div className="address-bx mt-3">
          <span className="d-block mb-2">Delivery Address</span>
          <div className="d-flex align-items-center mb-2">
            <svg className="me-2" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.4599 8.63006C17.3195 7.16898 16.8031 5.76915 15.9611 4.56688C15.119 3.36462 13.98 2.4009 12.6549 1.76956C11.3298 1.13822 9.86376 0.860785 8.3996 0.964268C6.93543 1.06775 5.52301 1.54863 4.29988 2.36006C3.24908 3.06271 2.36693 3.98936 1.71682 5.07346C1.06672 6.15755 0.664776 7.37217 0.539881 8.63006C0.417363 9.87972 0.574555 11.141 1.00005 12.3223C1.42555 13.5037 2.10868 14.5755 2.99988 15.4601L8.29988 20.7701C8.39284 20.8638 8.50344 20.9382 8.6253 20.989C8.74716 21.0397 8.87787 21.0659 9.00988 21.0659C9.14189 21.0659 9.2726 21.0397 9.39446 20.989C9.51632 20.9382 9.62692 20.8638 9.71988 20.7701L14.9999 15.4601C15.8911 14.5755 16.5742 13.5037 16.9997 12.3223C17.4252 11.141 17.5824 9.87972 17.4599 8.63006ZM13.5999 14.0501L8.99988 18.6501L4.39988 14.0501C3.72197 13.3721 3.20268 12.5524 2.87935 11.6498C2.55601 10.7473 2.43667 9.78426 2.52988 8.83006C2.6237 7.86117 2.93164 6.92522 3.43145 6.08991C3.93126 5.25459 4.61044 4.54077 5.41988 4.00006C6.48083 3.2953 7.72619 2.91936 8.99988 2.91936C10.2736 2.91936 11.5189 3.2953 12.5799 4.00006C13.3869 4.53868 14.0646 5.24935 14.5642 6.081C15.0639 6.91266 15.3732 7.84467 15.4699 8.81007C15.5661 9.76749 15.4483 10.7343 15.1249 11.6406C14.8014 12.5469 14.2805 13.3699 13.5999 14.0501ZM8.99988 5.00006C8.10986 5.00006 7.23984 5.26399 6.49982 5.75845C5.75979 6.25292 5.18302 6.95572 4.84242 7.77799C4.50183 8.60026 4.41271 9.50506 4.58635 10.378C4.75998 11.2509 5.18856 12.0527 5.8179 12.682C6.44724 13.3114 7.24906 13.74 8.12197 13.9136C8.99489 14.0872 9.89969 13.9981 10.722 13.6575C11.5442 13.3169 12.247 12.7402 12.7415 12.0001C13.236 11.2601 13.4999 10.3901 13.4999 9.50006C13.4972 8.3074 13.0223 7.16434 12.1789 6.321C11.3356 5.47766 10.1925 5.00271 8.99988 5.00006ZM8.99988 12.0001C8.50543 12.0001 8.02208 11.8534 7.61096 11.5787C7.19983 11.304 6.8794 10.9136 6.69018 10.4568C6.50096 9.99996 6.45145 9.49729 6.54792 9.01234C6.64438 8.52739 6.88248 8.08193 7.23211 7.7323C7.58175 7.38267 8.0272 7.14456 8.51215 7.0481C8.99711 6.95164 9.49977 7.00115 9.95659 7.19037C10.4134 7.37958 10.8039 7.70002 11.0786 8.11114C11.3533 8.52226 11.4999 9.00561 11.4999 9.50006C11.4999 10.1631 11.2365 10.799 10.7676 11.2678C10.2988 11.7367 9.66292 12.0001 8.99988 12.0001Z"
                fill="var(--primary)"
              />
            </svg>
            <h4 className="mb-0 font-w700">
              {location.latitude} - {location.longitude}
            </h4>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
        </div>
      </div>
    );
  }
  function renderDistance() {
    return (
      <div className="col-xl-4">
        <div className="d-flex align-items-center justify-content-between mt-3">
          <span>Estimation Time </span>
          <span>Payment</span>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="mb-0">10 Min </h6>
          <h6 className="mb-0">10 Min </h6>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span>Estimation Time </span>
          <span>Payment</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="mb-0">10 Min </h6>
          <h6 className="mb-0">10 Min </h6>
        </div>
      </div>
    );
  }
  function renderMenuCart() {
    return (
      <div className="order-menu style-1 mt-3">
        <h4>Order Menu</h4>
        {menuCart &&
          menuCart.length > 0 &&
          menuCart.map((item, index) => {
            return (
              <CartList
                menu={item}
                key={index}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                quantity={menuCart.find((mn) => mn.menuId == item.menuId)?.quantity ?? 0}
              />
            );
          })}
      </div>
    );
  }
  function renderTotal() {
    return (
      <>
        <hr style={{ opacity: '0.7' }} />
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="font-w500 mb-0">Total</h4>
          <h4 className="cate-title text-primary"> ${menuCart.reduce((sum, menu) => sum + menu.price * menu.quantity, 0)}</h4>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="row">
        <div className="col-xl-8">
          <div className="card border-0">
            {slider == 'cart' && <h4 className="cate-title mb-sm-3 mb-2 mt-xl-0 mt-3">Order Details</h4>}
            {slider == 'paymentoption' && <h4 className="cate-title mb-sm-3 mb-2 mt-xl-0 mt-3">Payment Option</h4>}
            {slider == 'ordersuccess' && <h4 className="cate-title mb-sm-3 mb-2 mt-xl-0 mt-3">Order Sucess</h4>}
            <div className="card h-auto">
              {slider == 'cart' && (
                <div className="card-body">
                  <div className="row border-bottom pb-2">
                    {renderdeliveryAddress()}
                    {renderDistance()}
                    <div className="col-xl-2"></div>
                  </div>
                  {renderMenuCart()}
                  {renderTotal()}
                </div>
              )}
              {slider == 'paymentoption' && <PaymentOption />}

              {slider == 'ordersuccess' && <OrderSuccess />}
            </div>
            <div className="text-end">
              {slider == 'cart' && (
                <Link
                  onClick={() => {
                    setTimeout(() => {
                      setSlider('paymentoption');
                    }, 400);
                  }}
                  to={'#'}
                  className="btn btn-primary"
                >
                  Checkout
                </Link>
              )}{' '}
              {slider == 'paymentoption' && (
                <Link
                  onClick={() => {
                    setTimeout(() => {
                      setSlider('cart');
                    }, 400);
                  }}
                  to={'#'}
                  className="btn btn-outline-primary"
                >
                  Back
                </Link>
              )}{' '}
              {slider == 'paymentoption' && (
                <Link
                  onClick={() => {
                    setTimeout(() => {
                      setSlider('ordersuccess');
                    }, 400);
                  }}
                  to={'#'}
                  className="btn btn-primary"
                >
                  Continue
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
            <Tab.Container defaultActiveKey="Order">
              <div className="card-body">
                <nav className="order-tab">
                  <Nav className="nav-tabs">
                    <Nav.Link eventKey="Order" id="nav-order-tab">
                      Order in
                    </Nav.Link>
                    <Nav.Link eventKey="Prepared" id="nav-prepared-tab">
                      Prepared
                    </Nav.Link>
                    <Nav.Link eventKey="Delivered" id="nav-delivered-tab">
                      Delivered
                    </Nav.Link>
                  </Nav>
                </nav>
                <Tab.Content>
                  <Tab.Pane eventKey="Order">
                    {orderTab.map((item, ind) => (
                      <div className="orderin-bx d-flex align-items-center justify-content-between" key={ind}>
                        <div>
                          <h4>Order #{item.order}</h4>
                          <span>June 1, 2020, 08:22 AM</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <h4 className="text-primary mb-0">$202.00</h4>
                          <Link to={'#'} className="icon-bx">
                            <i className="fa-solid fa-angle-right"></i>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </Tab.Pane>
                  <Tab.Pane eventKey="Prepared">
                    {orderTab.map((item, ind) => (
                      <div className="orderin-bx d-flex align-items-center justify-content-between" key={ind}>
                        <div>
                          <h4>{item.title}</h4>
                          <span>June 1, 2020, 08:22 AM</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <h4 className="text-primary mb-0">$202.00</h4>
                          <Link to={'#'} className="icon-bx">
                            <i className="fa-solid fa-angle-right"></i>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </Tab.Pane>
                  <Tab.Pane eventKey="Delivered">
                    {orderTab.map((item, ind) => (
                      <div className="orderin-bx d-flex align-items-center justify-content-between" key={ind}>
                        <div>
                          <h4>{item.title2}</h4>
                          <span>June 1, 2020, 08:22 AM</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <h4 className="text-primary mb-0">$202.00</h4>
                          <Link to={'#'} className="icon-bx">
                            <i className="fa-solid fa-angle-right"></i>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomerCart;
