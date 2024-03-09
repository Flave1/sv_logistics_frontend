import React, { Fragment, useEffect, useState } from 'react';
import PageTitle from '../../../../layouts/PageTitle';
import { Dropdown } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
/// images
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import FoodieAlert from '../../../../utils/alert';
import { formatDate } from '../../../../utils/common';
import swal from 'sweetalert';
import { getAllCountryAction2 } from '../../../../../store/actions/CountryActions';
import { getAllClientsAction } from '../../../../../store/actions/ClientActions';
import {
  createRestaurantAction,
  deleteRestaurantAction,
  getAllRestaurantsAction,
  getSingleRestaurantAction,
  updateRestaurantAction,
} from '../../../../../store/actions/RestaurantAction';
import { spinner } from '../../../../../store/actions';
import { socket } from '../../../../../services/socket/SocketService';

let selectedItemIds = [];
const RestaurantList = (props) => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);

  const editItem = async (row) => {
    dispatch(spinner(true));
    const itemInfo = await getSingleRestaurantAction(row.id);
    dispatch(spinner(false));
    if (itemInfo) {
      setSelectedItem(itemInfo);
      setShowForm(true);
    }
  };

  const [fetch, setFetch] = useState(null);
  socket.on(`get_restaurants_event`, (response) => {
    setFetch(response);
  });
  useEffect(() => {
    getAllRestaurantsAction()(dispatch);
  }, [fetch, dispatch]);

  useEffect(() => {
    const joinRoom = () => {
      if (socket) {
        socket.emit('join_room', { roomName: `get_restaurants_event` });
      }
    };

    joinRoom();

    return () => {
      if (socket) {
        socket.emit('leave_room', { roomName: `get_restaurants_event` }, (response) => {
          console.log(`left ${response}`);
        });
        socket.off(`get_restaurants_event`);
      }
    };
  }, [dispatch]);

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between">
        <PageTitle activeMenu="Restaurant List" motherMenu="Restaurant Management" pageContent={undefined} />
        <button type="button" className="me-2 btn" id="deleteBtn" style={{ display: 'none' }} onClick={() => deleteSelected(dispatch)}>
          <span className="btn-icon-start text-info">
            <i className="fa fa-trash"></i>
          </span>
        </button>
        <button
          type="button"
          className="me-2 btn btn-primary"
          data-target="#restaurantModal"
          onClick={() => {
            setSelectedItem(null);
            setShowForm(!showForm);
          }}
        >
          <span className="btn-icon-start text-info">
            <i className="fa fa-plus color-info"></i>
          </span>
          Add
        </button>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table mb-0 table-striped">
                  <thead>
                    <tr>
                      <th className="customer_shop">
                        <div className="form-check custom-checkbox mx-2">
                          <input type="checkbox" className="form-check-input" id="checkAll" onClick={() => checkboxFun('all')} />
                          <label className="form-check-label" htmlFor="checkAll"></label>
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Status</th>
                      <th>Date Created</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody id="customers">
                    {props.allrestaurant &&
                      props.allrestaurant.map((row, idx) => {
                        console.log('row sd', row);
                        
                        return <TR row={row} dispatch={dispatch} editItem={editItem} key={idx} />;
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Form
        show={showForm}
        setShowForm={setShowForm}
        dispatch={dispatch}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    allrestaurant: state.restaurant.allrestaurant,
  };
};

export default connect(mapStateToProps)(RestaurantList);

function TR({ row, dispatch, editItem }) {
  return (
    <tr className="btn-reveal-trigger">
      <td className="customer_shop_single">
        <Check i={1} row={row} />
      </td>
      <td className="">
        <Link onClick={() => editItem(row)} to={''}>
          {row.restaurant?.name}
        </Link>
      </td>
      <td className="py-2">{row.restaurant?.email}</td>
      <td className="py-2">{row.restaurant?.phoneNumber}</td>
      {row.restaurant?.status == true ? <td className="py-2">Active</td> : <td className="py-2">InActive</td>}
      <td className="py-2">{formatDate(row.restaurant?.createdAt)}</td>
      <td className="py-2 text-right">
        <DropMenu row={row} dispatch={dispatch} editItem={editItem} />
      </td>
    </tr>
  );
}

function Form({ show, setShowForm, dispatch, selectedItem, setSelectedItem }) {
  const [image, setImage] = useState(null);
  const [clientsList, setClients] = useState(null);
  const [countryList, setCountries] = useState(null);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getClients = async () => {
      const clients = await getAllClientsAction();
      if (clients) {
        setClients(clients);
      }
    };
    getClients();

    const getCountries = async () => {
      const countries = await getAllCountryAction2();
      if (countries) {
        setCountries(countries);
      }
    };
    getCountries();
  }, []);

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

  const validation = Yup.object().shape({
    name: Yup.string().required('Restaurant Name Is Required').min(2, 'Restaurant Name Is Too Short!').max(50, 'Restaurant Name Is Too Long!'),
    client: Yup.string().required('Client Is Required'),
    email: Yup.string().required('Email Is Required').email('Invalid email address'),
    description: Yup.string().required('Description Is Required'),
    phone: Yup.string().required('Phone Is Required'),
    staffFirstname: Yup.string().required('Manager Firstname Is Required'),
    staffLastname: Yup.string().required('Manager Lastname Is Required'),
    address: Yup.string().required('Address Is Required'),
    openingTime: Yup.string().required('Opening Time Is Required'),
    closingTime: Yup.string().required('Closing Time Is Required'),
    country: Yup.string().required('Country Time Is Required'),
  });

  useEffect(() => {
    selectedItem?.image && setImage(selectedItem.image);

    if (selectedItem) {
      setTitle('Edit Restaurant');
    } else {
      setTitle('Add Restaurant');
    }

    if (show == false) {
      setImage(null);
    }
  }, [selectedItem?.image]);

  const { handleChange, handleSubmit, values, setFieldValue, handleBlur, errors, touched } = useFormik({
    initialValues: {
      name: selectedItem ? selectedItem.restaurant.name : '',
      client: selectedItem ? selectedItem.restaurant.clientId : '',
      email: selectedItem ? selectedItem.restaurant.email : '',
      staffFirstname: selectedItem ? selectedItem.firstName : '',
      staffLastname: selectedItem ? selectedItem.lastName : '',
      description: selectedItem ? selectedItem.restaurant.description : '',
      phone: selectedItem ? selectedItem.restaurant.phoneNumber : '',
      address: selectedItem ? selectedItem.restaurant.address : '',
      openingTime: selectedItem ? selectedItem.restaurant.openingTime : '',
      closingTime: selectedItem ? selectedItem.restaurant.closingTime : '',
      status: selectedItem ? selectedItem.restaurant.status : true,
      hasFreeDelivery: selectedItem ? selectedItem.restaurant.hasFreeDelivery : true,
      freeDeliveryAmount: selectedItem ? selectedItem.restaurant.freeDeliveryAmount : '',
      country: selectedItem ? selectedItem.restaurant.countryId : '',
      file: null,
      id: selectedItem ? selectedItem.restaurant.id : '',
    },
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      const formData = new FormData();
      formData.append('id', values.id);
      formData.append('name', values.name);
      formData.append('clientId', values.client);
      formData.append('email', values.email);
      formData.append('description', values.description);
      formData.append('phoneNumber', values.phone);
      formData.append('address', values.address);
      formData.append('openingTime', values.openingTime);
      formData.append('closingTime', values.closingTime);
      formData.append('status', values.status);
      formData.append('hasFreeDelivery', values.hasFreeDelivery);
      formData.append('freeDeliveryAmount', values.freeDeliveryAmount);
      formData.append('countryId', values.country);
      formData.append('latitude', location?.latitude);
      formData.append('longitude', location?.longitude);
      formData.append('staffFirstname', values?.staffFirstname);
      formData.append('staffLastname', values?.staffLastname);
      if (values.file) {
        formData.append('file', values.file);
      } else if (!selectedItem && !values.file) {
        swal('Oops', 'Select image for this restaurant', 'error');
        return;
      }

      if (selectedItem) {
        updateRestaurantAction(formData, setShowForm, resetForm, setSelectedItem)(dispatch);
      } else {
        createRestaurantAction(formData, setShowForm, resetForm)(dispatch);
      }
    },
  });

  return (
    <Modal className="modal fade" size="lg" show={show} id="restaurantModal">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          {title}
        </h5>
        <button type="button" className="btn-close" onClick={() => setShowForm(!show)}></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="row modal-inside">
            <div className="col-6">
              <label htmlFor="val-client" className="form-label">
                Client <span className="text-danger">*</span>
              </label>
              <select
                type="text"
                className="form-control"
                id="val-client"
                name="val-client"
                value={values.client}
                onChange={(e) => {
                  handleChange('client');
                  setFieldValue('client', e.target.value);
                }}
              >
                <option value="">Select...</option>
                {clientsList?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.firstName} {option.lastName}
                  </option>
                ))}
              </select>
              {errors.client && touched.client && <div className="text-danger fs-12">{errors.client}</div>}
            </div>
            <div className="col-6">
              <label htmlFor="val-name" className="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="val-name"
                name="val-name"
                placeholder="Enter restaurant name"
                value={values.name}
                onChange={(e) => {
                  handleChange('name');
                  setFieldValue('name', e.target.value);
                }}
              />
              {errors.name && touched.name && <div className="text-danger fs-12">{errors.name}</div>}
            </div>
          </div>
          <div className="modal-inside row">
            <div className="col-6">
              <label htmlFor="val-email" className="form-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="val-email"
                name="val-email"
                placeholder="Enter email address"
                value={values.email}
                onChange={(e) => {
                  handleChange('email');
                  setFieldValue('email', e.target.value);
                }}
              />
              {errors.email && touched.email && <div className="text-danger fs-12">{errors.email}</div>}
              <label htmlFor="val-staffFirstname" className="form-label">
                Manager Firstname <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="val-staffFirstname"
                name="val-staffFirstname"
                placeholder="Enter Firstname "
                value={values.staffFirstname}
                onChange={(e) => {
                  handleChange('staffFirstname');
                  setFieldValue('staffFirstname', e.target.value);
                }}
              />
              {errors.staffFirstname && touched.staffFirstname && <div className="text-danger fs-12">{errors.staffFirstname}</div>}
              <label htmlFor="val-staffLastname" className="form-label">
                Manager Lastname <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="val-staffLastname"
                name="val-staffLastname"
                placeholder="Enter Lastname"
                value={values.staffLastname}
                onChange={(e) => {
                  handleChange('staffLastname');
                  setFieldValue('staffLastname', e.target.value);
                }}
              />
              {errors.staffLastname && touched.staffLastname && <div className="text-danger fs-12">{errors.staffLastname}</div>}
            </div>
            <div className="col-6">
              <label htmlFor="val-description" className="form-label">
                Description <span className="text-danger">*</span>
              </label>
              <textarea
                style={{ height: '204px' }}
                className="form-control"
                id="val-description"
                name="val-description"
                rows="6"
                placeholder="Enter description"
                value={values.description}
                onChange={(e) => {
                  handleChange('description');
                  setFieldValue('description', e.target.value);
                }}
              ></textarea>
              {errors.description && touched.description && <div className="text-danger fs-12">{errors.description}</div>}
            </div>
          </div>

          <div className="modal-inside row">
            <div className="col-6">
              <label htmlFor="val-phone" className="form-label">
                Phone Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="val-phone"
                name="val-phone"
                placeholder="Enter phone number"
                value={values.phone}
                onChange={(e) => {
                  handleChange('phone');
                  setFieldValue('phone', e.target.value);
                }}
              />
              {errors.phone && touched.phone && <div className="text-danger fs-12">{errors.phone}</div>}
            </div>

            <div className="col-6">
              <label htmlFor="val-address" className="form-label">
                Address <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="val-address"
                name="val-address"
                rows="6"
                placeholder="Enter address"
                value={values.address}
                onChange={(e) => {
                  handleChange('address');
                  setFieldValue('address', e.target.value);
                }}
              ></textarea>
              {errors.address && touched.address && <div className="text-danger fs-12">{errors.address}</div>}
            </div>
          </div>

          <div className="modal-inside row">
            <div className="col-6">
              <label htmlFor="val-openingTime" className="form-label">
                Opening Time <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="val-openingTime"
                name="val-openingTime"
                placeholder="Enter opening time"
                value={values.openingTime}
                onChange={(e) => {
                  handleChange('openingTime');
                  setFieldValue('openingTime', e.target.value);
                }}
              />
              {errors.openingTime && touched.openingTime && <div className="text-danger fs-12">{errors.openingTime}</div>}
            </div>
            <div className="col-6">
              <label htmlFor="val-closingTime" className="form-label">
                closing Time <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="val-closingTime"
                name="val-closingTime"
                placeholder="Enter closing time"
                value={values.closingTime}
                onChange={(e) => {
                  handleChange('closingTime');
                  setFieldValue('closingTime', e.target.value);
                }}
              />
              {errors.closingTime && touched.closingTime && <div className="text-danger fs-12">{errors.closingTime}</div>}
            </div>
          </div>

          <div className="modal-inside row">
            <div className="col-4">
              <input
                className="form-check-input"
                type="checkbox"
                name="val-status"
                id="val-status"
                checked={values.status}
                value={values.status}
                onChange={(e) => {
                  handleChange('status');
                  setFieldValue('status', e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="val-status">
                Status
              </label>
              {errors.status && touched.status && <div className="text-danger fs-12">{errors.status}</div>}
            </div>
            <div className="col-4">
              <input
                className="form-check-input"
                type="checkbox"
                name="val-hasFreeDelivery"
                id="val-hasFreeDelivery"
                checked={values.hasFreeDelivery}
                value={values.hasFreeDelivery}
                onChange={(e) => {
                  // console.log('e.target.value', !e.target.value);

                  handleChange('hasFreeDelivery');
                  setFieldValue('hasFreeDelivery', e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="val-status">
                Has FreeDelivery
              </label>
              {errors.hasFreeDelivery && touched.hasFreeDelivery && <div className="text-danger fs-12">{errors.hasFreeDelivery}</div>}
            </div>
          </div>

          <div className="modal-inside row">
            <div className="col-6">
              <label htmlFor="val-country" className="form-label">
                Country <span className="text-danger">*</span>
              </label>
              <select
                type="text"
                className="form-control"
                id="val-country"
                name="val-country"
                value={values.country}
                onChange={(e) => {
                  handleChange('country');
                  setFieldValue('country', e.target.value);
                }}
              >
                <option value="">Select...</option>
                {countryList?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.countryName}
                  </option>
                ))}
              </select>
              {errors.country && touched.country && <div className="text-danger fs-12">{errors.country}</div>}
            </div>
            <div className="col-6">
              <label htmlFor="val-freeDeliveryAmount" className="form-label">
                Free Delivery Amount
              </label>
              <input
                type="text"
                className="form-control"
                id="val-freeDeliveryAmount"
                name="val-freeDeliveryAmount"
                placeholder="Enter free delivery amount"
                value={values.freeDeliveryAmount}
                onChange={(e) => {
                  handleChange('freeDeliveryAmount');
                  setFieldValue('freeDeliveryAmount', e.target.value);
                }}
              />
              {errors.freeDeliveryAmount && touched.freeDeliveryAmount && <div className="text-danger fs-12">{errors.freeDeliveryAmount}</div>}
            </div>
          </div>
          <div className="modal-inside row">
            <div className="col-md-6">
              <label htmlFor="val-file" className="form-label">
                Image <span className="text-danger">*</span>
              </label>
              <input
                type="file"
                className="form-control"
                name="val-file"
                id="val-file"
                placeholder=""
                value={undefined}
                onChange={(e) => {
                  handleChange('file');
                  setFieldValue('file', e.currentTarget.files[0]);
                  if (e.currentTarget.files[0]) {
                    const imageUrl = URL.createObjectURL(e.currentTarget.files[0]);
                    setImage(imageUrl);
                  }
                }}
              />
            </div>
            <div className="col-md-6">
              {image && <img src={image} alt={`Image `} className="img-thumbnail mb-2 " style={{ maxWidth: '150px' }} />}
            </div>
            {errors.file && touched.file && <div className="text-danger fs-12">{errors.file}</div>}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={() => setShowForm(!show)}>
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

const DropMenu = ({ row, dispatch, editItem }) => (
  <Dropdown>
    <Dropdown.Toggle variant="" className="btn btn-primary tp-btn-light sharp i-false">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect x="0" y="0" width="24" height="24"></rect>
          <circle fill="#000000" cx="5" cy="12" r="2"></circle>
          <circle fill="#000000" cx="12" cy="12" r="2"></circle>
          <circle fill="#000000" cx="19" cy="12" r="2"></circle>
        </g>
      </svg>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="#" onClick={() => editItem(row)}>
        Edit
      </Dropdown.Item>
      <Dropdown.Item
        href="#"
        className="text-danger"
        onClick={() => {
          const id = row.id;
          deleteItem([id.toString()], dispatch);
        }}
      >
        Delete
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

const deleteItem = (ids, dispatch) => {
  const payload = {
    id: ids,
  };
  FoodieAlert.confirmAction('Are you sure you want to delete this restaurant ?').then((isYes) => {
    if (isYes) {
      deleteRestaurantAction(payload)(dispatch);
    }
  });
};

const deleteSelected = (dispatch) => {
  const payload = {
    id: selectedItemIds,
  };
  FoodieAlert.confirmAction('Are you sure you want to delete selected restaurant ?').then((isYes) => {
    if (isYes) {
      deleteRestaurantAction(payload)(dispatch);
    }
  });
};

const checkboxFun = (type) => {
  const deleteBtn = document.querySelector('#deleteBtn');
  setTimeout(() => {
    const chackbox = document.querySelectorAll('.customer_shop_single input');
    const motherChackBox = document.querySelector('.customer_shop input');

    for (let i = 0; i < chackbox.length; i++) {
      const element = chackbox[i];
      if (type === 'all') {
        if (motherChackBox.checked) {
          element.checked = true;
          pushItemId(element.value, element.checked);
        } else {
          element.checked = false;
          pushItemId(element.value, element.checked);
        }
      } else {
        if (!element.checked) {
          motherChackBox.checked = false;
          pushItemId(element.value, element.checked);
          break;
        } else {
          motherChackBox.checked = true;
          pushItemId(element.value, element.checked);
        }
      }
    }
  }, 100);

  if (selectedItemIds.length > 0) {
    deleteBtn.style.display = 'block';
  } else {
    deleteBtn.style.display = 'none';
  }
};

const Check = ({ i, row }) => (
  <div className={`form-check custom-checkbox ms-2`}>
    <input type="checkbox" className="form-check-input " value={row.id} id={`checkAll${i}`} onClick={() => checkboxFun(null)} />
    <label className="form-check-label" htmlFor={`checkAll${i}`}></label>
  </div>
);

const pushItemId = (id, checked = false) => {
  if (!selectedItemIds.includes(id) && checked == true) {
    selectedItemIds.push(id);
  }

  if (selectedItemIds.includes(id) && checked == false) {
    const index = selectedItemIds.indexOf(id);
    if (index !== -1) {
      selectedItemIds.splice(index, 1);
    }
  }

  const uniqueIdsArray = [...new Set(selectedItemIds)];
  return uniqueIdsArray;
};
