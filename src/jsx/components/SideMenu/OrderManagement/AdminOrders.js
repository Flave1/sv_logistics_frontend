import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Badge, Dropdown } from 'react-bootstrap';

import {
  GET_CSUTOMER_ORDERS,
  acceptOrderAction,
  cancelOrderAction,
  getCustomerordersAction,
  reinstateOrderAction,
  rejectOrderAction,
} from '../../../../store/actions/RestaurantAction';
import { useDispatch, useSelector } from 'react-redux';
import { formatDateTime } from '../../../utils/common';
import { socket } from '../../../../services/socket/SocketService';
import { convertObjectToArray, OrderStatus } from '../../../utils/constants';

const AdminOrders = () => {
  const [searchByStatus, setSearchByStatus] = useState(-1);
  const dispatch = useDispatch();
  const { customerOrders } = useSelector((state) => state.restaurant);
  const {
    auth: { restaurantId },
    sessionId,
  } = useSelector((state) => state.auth);
  const [acceptOrderbtn, setAcceptOrderBtn] = useState('ACCEPT ORDER');
  const [rejectOrderbtn, setRejectOrderBtn] = useState('REJECT');
  const [cancelOrderbtn, setCancelOrderBtn] = useState('CANCEL ORDER');
  const [reinstateOrderbtn, setReinstateOrderBtn] = useState('REINSTATE ORDER');

  function acceptOrder(id) {
    acceptOrderAction(id, setAcceptOrderBtn)(dispatch);
  }
  function rejectOrder(id) {
    rejectOrderAction(id, setRejectOrderBtn)(dispatch);
  }

  function cancelOrder(id) {
    cancelOrderAction(id, setCancelOrderBtn)(dispatch);
  }

  function reinstateOrder(id) {
    reinstateOrderAction(id, setReinstateOrderBtn)(dispatch);
  }

  socket.on(`get_orders_${restaurantId}`, (response) => {
    setFetch(response);
  });

  socket.on(`search_event_responder`, (response) => {
    if (response.status == 200) {
      dispatch({
        type: GET_CSUTOMER_ORDERS,
        payload: response.result,
      });
    }
  });

  function onSearch(value) {
    socket.emit('search_event_receiver', { sessionId, searchString: value, restaurantId });
  }

  console.log('searchByStatus', searchByStatus);

  const [fetch, setFetch] = useState(null);
  useEffect(() => {
    getCustomerordersAction(searchByStatus)(dispatch);
  }, [fetch, searchByStatus]);

  useEffect(() => {
    const joinRoom = () => {
      if (socket) {
        socket.emit('join_room', { roomName: `get_orders_${restaurantId}` });
      }
    };

    joinRoom();

    return () => {
      if (socket) {
        socket.emit('leave_room', { roomName: `get_orders_${restaurantId}` }, (response) => {
          console.log(`left ${response}`);
        });
        socket.off(`get_orders_${restaurantId}`);
      }
    };
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="input-group search-area2">
              <span className="input-group-text p-0">
                <Link to={'#'}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
                      fill="#FC8019"
                    />
                  </svg>
                </Link>
              </span>
              <input type="text" className="form-control p-0" placeholder="Search Customer Orders" onChange={(e) => onSearch(e.target.value)} />
            </div>
            {/* <select className="form-control default-select border w-auto">
                            <option>Recently</option>
                            <option>Oldest</option>
                            <option>Newest</option>
                        </select> */}
            <Dropdown className="order-drop">
              <Dropdown.Toggle as="div" className="form-control default-select border w-auto i-false">
                {convertObjectToArray(OrderStatus).find((d) => d.value == searchByStatus)?.name}{' '}
                <i className="fas fa-chevron-down order-drop-select"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {convertObjectToArray(OrderStatus).map((item, idx) => {
                  return (
                    <>
                      <Dropdown.Item defaultValue={-1} onClick={() => setSearchByStatus(item.value)}>
                        {item.name}
                      </Dropdown.Item>
                    </>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="card h-auto biil-bx">
            <div className="card-header flex-wrap d-none d-sm-flex">
              <div className="d-flex align-items-center">
                <div className="form-check style-3 me-3">
                  <input className="form-check-input" type="checkbox" value="" id="checkAll" />
                </div>
                <h4 className="font-w600 mb-0">Menu</h4>
              </div>
              <h4 className="font-w600 mb-0">Status</h4>
              <h4 className="font-w600 mb-0">Date</h4>
              <h4 className="font-w600 mb-0">Address</h4>
              <h4 className="font-w600 mb-0">Total</h4>
              <h4 className="font-w600 mb-0">Payment Method</h4>
            </div>
            <div className="card-body p-0  overflow-hidden">
              <Accordion id="accordion-one" className="style-1" defaultActiveKey="0">
                {customerOrders &&
                  customerOrders.map((data, i) => (
                    <Accordion.Item eventKey={`${i}`} key={i}>
                      <Accordion.Header>
                        <div className="d-flex align-items-center">
                          <div className="form-check style-3 me-3">
                            <input className="form-check-input" type="checkbox" value="" />
                          </div>
                          <h5 className="font-w500 mb-0">Order #{data.orderId}</h5>
                        </div>
                        <Link to={'#'} className={`btn  btn-sm ${data.btnColor}`}>
                          {data.statusLabel}
                        </Link>
                        <p className="">{formatDateTime(data.orderDate)}</p>
                        <div className="d-flex align-tems-center">
                          <svg className="me-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M20.4604 10.13C20.32 8.66891 19.8036 7.26908 18.9616 6.06681C18.1195 4.86455 16.9805 3.90083 15.6554 3.26949C14.3303 2.63815 12.8642 2.36072 11.4001 2.4642C9.93592 2.56768 8.5235 3.04856 7.30037 3.86C6.24957 4.56264 5.36742 5.48929 4.71731 6.57339C4.0672 7.65748 3.66526 8.8721 3.54037 10.13C3.41785 11.3797 3.57504 12.6409 4.00054 13.8223C4.42604 15.0036 5.10917 16.0755 6.00037 16.96L11.3004 22.27C11.3933 22.3637 11.5039 22.4381 11.6258 22.4889C11.7477 22.5397 11.8784 22.5658 12.0104 22.5658C12.1424 22.5658 12.2731 22.5397 12.3949 22.4889C12.5168 22.4381 12.6274 22.3637 12.7204 22.27L18.0004 16.96C18.8916 16.0755 19.5747 15.0036 20.0002 13.8223C20.4257 12.6409 20.5829 11.3797 20.4604 10.13ZM16.6004 15.55L12.0004 20.15L7.40037 15.55C6.72246 14.872 6.20317 14.0523 5.87984 13.1498C5.5565 12.2472 5.43715 11.2842 5.53037 10.33C5.62419 9.3611 5.93213 8.42516 6.43194 7.58984C6.93175 6.75452 7.61093 6.0407 8.42037 5.5C9.48131 4.79523 10.7267 4.41929 12.0004 4.41929C13.2741 4.41929 14.5194 4.79523 15.5804 5.5C16.3874 6.03861 17.065 6.74928 17.5647 7.58093C18.0644 8.41259 18.3737 9.3446 18.4704 10.31C18.5666 11.2674 18.4488 12.2343 18.1254 13.1405C17.8019 14.0468 17.281 14.8698 16.6004 15.55ZM12.0004 6.5C11.1104 6.5 10.2403 6.76392 9.5003 7.25838C8.76028 7.75285 8.18351 8.45565 7.84291 9.27792C7.50232 10.1002 7.4132 11.005 7.58684 11.8779C7.76047 12.7508 8.18905 13.5526 8.81839 14.182C9.44773 14.8113 10.2495 15.2399 11.1225 15.4135C11.9954 15.5872 12.9002 15.498 13.7224 15.1575C14.5447 14.8169 15.2475 14.2401 15.742 13.5001C16.2364 12.76 16.5004 11.89 16.5004 11C16.4977 9.80733 16.0228 8.66428 15.1794 7.82093C14.3361 6.97759 13.193 6.50264 12.0004 6.5ZM12.0004 13.5C11.5059 13.5 11.0226 13.3534 10.6114 13.0787C10.2003 12.804 9.87989 12.4135 9.69067 11.9567C9.50145 11.4999 9.45194 10.9972 9.54841 10.5123C9.64487 10.0273 9.88297 9.58186 10.2326 9.23223C10.5822 8.8826 11.0277 8.6445 11.5126 8.54803C11.9976 8.45157 12.5003 8.50108 12.9571 8.6903C13.4139 8.87952 13.8043 9.19995 14.079 9.61107C14.3537 10.0222 14.5004 10.5055 14.5004 11C14.5004 11.663 14.237 12.2989 13.7681 12.7678C13.2993 13.2366 12.6634 13.5 12.0004 13.5Z"
                              fill="var(--primary)"
                            />
                          </svg>
                          <h5 className="mb-0">{data.address}</h5>
                        </div>
                        <h4 className="price">$ {data.totalPrice}</h4>
                        <h5 className=" cash font-w500 ">{data.paymentMethod}</h5>
                        {/* <span className="accordion-header-indicator style-1"></span> */}
                      </Accordion.Header>
                      <Accordion.Body eventKey={`${i}`}>
                        <div className="row">
                          <div className="col-xl-3 col-xxl-6 col-sm-6 my-4 border-right">
                            <div className="order-menu dlab-space">
                              <h4 className="">Order Menu</h4>
                              {data.orderItems &&
                                data.orderItems.map((item, idx) => {
                                  return (
                                    <div className="d-flex align-items-center justify-content-xl-center justify-content-lg-start  mb-2" key={idx}>
                                      <img className="me-2" src={item.image} alt="" />
                                      <div>
                                        <h6 className="font-w600 text-nowrap mb-0">{item.name}</h6>
                                        <p className="mb-0">{item.menuName}</p>
                                        <p className="mb-0">
                                          ${item.price} ({item.quantity})
                                        </p>
                                      </div>
                                      <h6 className="text-primary mb-0 ps-3 ms-auto">${Number(item.price * item.quantity)}</h6>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                          <div className="col-xl-3 col-xxl-6 col-sm-6 my-4 border-right">
                            <div className="dlab-space">
                              <div>
                                <h4 className="mb-2">Location</h4>
                              </div>
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <span>Address </span>
                                <h6 className="mb-0">{data.address}</h6>
                              </div>
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <span>Delivery Time </span>
                                <h6 className="mb-0">{data.deliveryTime}</h6>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <span>Distance</span>
                                <h6 className="mb-0">{data.kilometer}</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-xxl-6 col-sm-6 my-4 border-right">
                            <div className="dlab-space">
                              <div className="d-flex align-items-center justify-content-between mb-1">
                                <p className="mb-0">Status</p>
                                <p className="mb-0">Requested on</p>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="badge bg-info">{data.statusLabel}</span>
                                <h6>{formatDateTime(data.orderDate)}</h6>
                              </div>
                              <div className="d-flex align-items-center justify-content-between mb-1">
                                <p className="mb-0">Payment</p>
                                <p className="mb-0">Updated on</p>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="badge bg-primary">{data.paymentStatus}</span>
                                <h6>{formatDateTime(data.updatedDate)}</h6>
                              </div>
                              <div className="d-flex align-items-center justify-content-between mb-1">
                                <p className="mb-0">Bills</p>
                                <p className="mb-0">Date Paid</p>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <h6>Order #{data.orderId}</h6>
                                <h6>June 1, 2020</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-xxl-6 col-sm-6 mt-4 ms-sm-0 ms-3">
                            <p className="fs-18 font-w500">Total</p>
                            <h4 className="cate-title text-primary">${data.totalPrice}</h4>
                            <div className="d-flex align-items-center p-3 justify-content-between">
                              {data.status == 1 && (
                                <>
                                  <button className="btn btn-sm btn-danger" onClick={() => rejectOrder(data.id)}>
                                    {rejectOrderbtn}
                                  </button>
                                  <button className="btn btn-sm btn-success" onClick={() => acceptOrder(data.id)}>
                                    {acceptOrderbtn}
                                  </button>
                                </>
                              )}
                              {data.status == 2 && (
                                <>
                                  <button className="btn btn-sm btn-danger" onClick={() => cancelOrder(data.id)}>
                                    {cancelOrderbtn}
                                  </button>
                                </>
                              )}

                              {data.status == 5 && (
                                <>
                                  <button className="btn btn-sm btn-info" onClick={() => reinstateOrder(data.id)}>
                                    {reinstateOrderbtn}
                                  </button>
                                </>
                              )}
                              {data.status == 6 && (
                                <>
                                  <button className="btn btn-sm btn-info" onClick={() => reinstateOrder(data.id)}>
                                    {reinstateOrderbtn}
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
              </Accordion>
            </div>
          </div>
        </div>
        {/* <div className="d-flex align-items-center justify-content-sm-between justify-content-center flex-wrap pagination-bx">
                    <div className="mb-sm-0 mb-3 pagination-title">
                        <p className="mb-0"><span>Showing 1-5</span> from <span>40</span> data</p>
                    </div>
                    <nav>
                        <ul className="pagination pagination-gutter">
                            <li className="page-item page-indicator">
                                <Link to={"#"} className="page-link">
                                    <i className="la la-angle-left"></i>
                                </Link>
                            </li>
                            <li className="page-item active"><Link to={"#"} className="page-link">1</Link></li>
                            <li className="page-item"><Link to={"#"} className="page-link">2</Link></li>                            
                            <li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
                            <li className="page-item page-indicator">
                                <Link to={"#"} className="page-link">
                                    <i className="la la-angle-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div> */}
      </div>
    </>
  );
};
export default AdminOrders;
