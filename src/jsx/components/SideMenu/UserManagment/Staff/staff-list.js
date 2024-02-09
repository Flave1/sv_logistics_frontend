import React, { Fragment, useEffect, useState } from 'react';
import PageTitle from '../../../../layouts/PageTitle';
import { Dropdown } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
/// images
import avartar5 from '../../../../../images/avatar/5.png';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { createStaffAction, deleteStaffAction, getAllStaff, getSingleStaffAction, updateStaffAction } from '../../../../../store/actions/UserActions';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import FoodieAlert from '../../../../utils/alert';
import { socket } from '../../../../../services/socket/SocketService';
import { spinner } from '../../../../../store/actions';

let selectedItemIds = [];
const StaffList = (props) => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);

  const {
    auth: { restaurantId },
  } = useSelector((state) => state.auth);

  const editItem = async (row) => {
    dispatch(spinner(true));
    const itemInfo = await getSingleStaffAction(row.id);
    dispatch(spinner(false));
    if (itemInfo) {
      setSelectedItem(itemInfo);
      setShowForm(true);
    }
  };

  const [fetch, setFetch] = useState(null);
  socket.on(`get_all_staff_event_${restaurantId}`, (response) => {
    setFetch(response);
  });
  useEffect(() => {
    props.get_staff();
  }, [fetch]);

  useEffect(() => {
    const joinRoom = () => {
      if (socket) {
        socket.emit('join_room', { roomName: `get_all_staff_event_${restaurantId}` });
      }
    };

    joinRoom();

    return () => {
      if (socket) {
        socket.emit('leave_room', { roomName: `get_all_staff_event_${restaurantId}` }, (response) => {
          console.log(`left ${response}`);
        });
        socket.off(`get_all_staff_event_${restaurantId}`);
      }
    };
  }, [restaurantId]);

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between">
        <PageTitle activeMenu="Staff List" motherMenu="User Management" />
        <button type="button" className="me-2 btn" id="deleteBtn" style={{ display: 'none' }} onClick={() => deleteSelected(dispatch)}>
          <span className="btn-icon-start text-info">
            <i className="fa fa-trash"></i>
          </span>
        </button>
        <button type="button" className="me-2 btn btn-primary" data-target="#staffModal" onClick={() => setShowForm(!showForm)}>
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
                      <th>Phone</th>
                      <th className="ps-5 width200">Address</th>
                      <th>Joined</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody id="customers">
                    {props.staffs &&
                      props.staffs.map((row, idx) => {
                        return <TR row={row} dispatch={dispatch} editItem={editItem} key={idx} />;
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Form show={showForm} setShowForm={setShowForm} dispatch={dispatch} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    staffs: state.user.staffs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    get_staff: () => getAllStaff()(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StaffList);

function TR({ row, dispatch, editItem }) {
  return (
    <tr className="btn-reveal-trigger">
      <td className="customer_shop_single">
        <Check i={1} row={row} />
      </td>
      <td className="py-3">
        <Link to="" onClick={() => editItem(row)}>
          <div className="media d-flex align-items-center">
            <div className="avatar avatar-xl me-2">
              <div className="">
                <img className="rounded-circle img-fluid" src={avartar5} width="30" alt="" />
              </div>
            </div>
            <div className="media-body">
              <h5 className="mb-0 fs--1">{row.firstName + ' ' + row.lastName}</h5>
            </div>
          </div>
        </Link>
      </td>
      <td className="py-2">
        <a href="mailto:${row.email}">{row.email}</a>
      </td>
      <td className="py-2">
        {' '}
        <a href="tel:2012001851">{row.phoneNumber}</a>
      </td>
      <td className="py-2 ps-5 wspace-no">{row.address}</td>
      <td className="py-2">{row.createdAt}</td>
      <td className="py-2 text-right">
        <DropMenu row={row} dispatch={dispatch} editItem={editItem} />
      </td>
    </tr>
  );
}

function Form({ show, setShowForm, dispatch, selectedItem, setSelectedItem }) {
  const validation = Yup.object().shape({
    email: Yup.string().required().min(2, 'Email Too Short!').max(50, 'Email Too Long!').email('Invalid email'),
    firstName: Yup.string().required('First Name Required').min(4, 'First Name must be a minimum of 4 characters'),
    lastName: Yup.string().required('Last name Required').min(4, 'Last name must be a minimum of 4 characters'),
    phoneNumber: Yup.string().required('Phone Number Required').min(4, 'Phone Number must be a minimum of 4 characters'),
    address: Yup.string().required('Address Required').min(4, 'Address must be a minimum of 4 characters'),
  });

  const { handleChange, handleSubmit, values, setFieldValue, errors, touched } = useFormik({
    initialValues: {
      email: selectedItem ? selectedItem.email : '',
      firstName: selectedItem ? selectedItem.firstName : '',
      lastName: selectedItem ? selectedItem.lastName : '',
      phoneNumber: selectedItem ? selectedItem.phoneNumber : '',
      address: selectedItem ? selectedItem.address : '',
      id: selectedItem ? selectedItem.id : '',
    },
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      if (selectedItem) {
        updateStaffAction(values, setShowForm, resetForm, setSelectedItem)(dispatch);
      } else {
        createStaffAction(values, setShowForm, resetForm)(dispatch);
      }
    },
  });

  return (
    <Modal show={show} className="modal fade" id="staffModal">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{selectedItem ? 'Edit Staff' : 'Add Staff'}</h5>
          <Button variant="" type="button" className="close" data-dismiss="modal" onClick={() => setShowForm(!show)}>
            <span>×</span>
          </Button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group mb-3 row">
                  <label className="col-lg-12 col-form-label" htmlFor="val-email">
                    Email <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      id="val-email"
                      name="val-email"
                      placeholder="Your valid email.."
                      value={values.email}
                      onChange={(e) => {
                        handleChange('email');
                        setFieldValue('email', e.target.value);
                      }}
                    />
                    {errors.email && touched.email && <div className="text-danger fs-12">{errors.email}</div>}
                  </div>
                </div>
                <div className="form-group mb-3 row">
                  <label className="col-lg-12 col-form-label" htmlFor="val-firstName">
                    First Name
                    <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      id="val-firstName"
                      name="val-firstName"
                      placeholder="Enter first name.."
                      value={values.firstName}
                      onChange={(e) => {
                        handleChange('firstName');
                        setFieldValue('firstName', e.target.value);
                      }}
                    />
                    {errors.firstName && touched.email && <div className="text-danger fs-12">{errors.firstName}</div>}
                  </div>
                </div>
                <div className="form-group mb-3 row">
                  <label className="col-lg-12 col-form-label" htmlFor="val-lastName">
                    Last Name
                    <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      id="val-lastName"
                      name="val-lastName"
                      placeholder="Enter last name.."
                      value={values.lastName}
                      onChange={(e) => {
                        handleChange('lastName');
                        setFieldValue('lastName', e.target.value);
                      }}
                    />
                    {errors.lastName && touched.email && <div className="text-danger fs-12">{errors.lastName}</div>}
                  </div>
                </div>
                <div className="form-group mb-3 row">
                  <label className="col-lg-12 col-form-label" htmlFor="val-phoneNumber">
                    Phone Number
                    <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      id="val-phoneNumber"
                      name="val-phoneNumber"
                      placeholder="Enter phone number.."
                      value={values.phoneNumber}
                      onChange={(e) => {
                        handleChange('phoneNumber');
                        setFieldValue('phoneNumber', e.target.value);
                      }}
                    />
                    {errors.phoneNumber && touched.email && <div className="text-danger fs-12">{errors.phoneNumber}</div>}
                  </div>
                </div>
                <div className="form-group mb-3 row">
                  <label className="col-lg-12 col-form-label" htmlFor="val-address">
                    Address
                    <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-12">
                    <textarea
                      className="form-control"
                      id="val-address"
                      name="val-address"
                      // rows="5"
                      placeholder="Enter contact address"
                      value={values.address}
                      onChange={(e) => {
                        handleChange('address');
                        setFieldValue('address', e.target.value);
                      }}
                    ></textarea>
                    {errors.address && touched.email && <div className="text-danger fs-12">{errors.address}</div>}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex  justify-content-end">
              <button type="submit" className="btn btn-primary  mt-1">
                Submit
              </button>
            </div>
          </form>
        </div>
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
  FoodieAlert.confirmAction('Are you sure you want to delete this staff ?').then((isYes) => {
    if (isYes) {
      deleteStaffAction(payload)(dispatch);
    }
  });
};

const deleteSelected = (dispatch) => {
  const payload = {
    id: selectedItemIds,
  };
  FoodieAlert.confirmAction('Are you sure you want to delete selected staff ?').then((isYes) => {
    if (isYes) {
      deleteStaffAction(payload)(dispatch);
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
  if (!selectedItemIds.includes(id) && checked === true) {
    selectedItemIds.push(id);
  }

  if (selectedItemIds.includes(id) && checked === false) {
    const index = selectedItemIds.indexOf(id);
    if (index !== -1) {
      selectedItemIds.splice(index, 1);
    }
  }

  const uniqueIdsArray = [...new Set(selectedItemIds)];
  return uniqueIdsArray;
};
