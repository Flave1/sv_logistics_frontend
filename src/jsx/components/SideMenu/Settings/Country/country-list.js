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
import { createCountryAction, deleteCountryAction, getAllCountryAction, updateCountryAction } from '../../../../../store/actions/CountryActions';

let selectedItemIds = [];
const CountryList = (props) => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);
  const editItem = async (row) => {
    if (row) {
      setSelectedItem(row);
      setShowForm(true);
    }
  };

  useEffect(() => {
    props.get_all_countries();
  }, []);

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between">
        <PageTitle activeMenu="Country List" motherMenu="Country Management" />
        <button type="button" className="me-2 btn" id="deleteBtn" style={{ display: 'none' }} onClick={() => deleteSelected(dispatch)}>
          <span className="btn-icon-start text-info">
            <i className="fa fa-trash"></i>
          </span>
        </button>
        <button
          type="button"
          className="me-2 btn btn-primary"
          data-target="#countryModal"
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
                      <th>Country Name</th>
                      <th>Country Code</th>
                      <th>Currency Name</th>
                      <th>Currency Code</th>
                      <th>Status</th>
                      <th>Date Created</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody id="customers">
                    {props.allcountry &&
                      props.allcountry.map((row, idx) => {
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
    allcountry: state.country.allcountry,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    get_all_countries: () => getAllCountryAction()(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CountryList);

function TR({ row, dispatch, editItem }) {
  return (
    <tr className="btn-reveal-trigger">
      <td className="customer_shop_single">
        <Check i={1} row={row} />
      </td>
      <td className="">
        <Link onClick={() => editItem(row)}>{row.countryName}</Link>
      </td>
      <td className="py-2">{row.countryCode}</td>
      <td className="py-2">{row.currencyName}</td>
      <td className="py-2">{row.currencyCode}</td>
      {row.status == true ? <td className="py-2">Active</td> : <td className="py-2">InActive</td>}
      <td className="py-2">{formatDate(row.createdAt)}</td>
      <td className="py-2 text-right">
        <DropMenu row={row} dispatch={dispatch} editItem={editItem} />
      </td>
    </tr>
  );
}

function Form({ show, setShowForm, dispatch, selectedItem, setSelectedItem }) {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const validation = Yup.object().shape({
    countryName: Yup.string().required('Country Name Is Required').min(2, 'Country Name Is Too Short!').max(50, 'Country Name Is Too Long!'),
    countryCode: Yup.string().required('Country Code Is Required'),
    currencyName: Yup.string().required('Currency Name Is Required'),
    currencyCode: Yup.string().required('Currency Code Is Required'),
  });

  useEffect(() => {
    selectedItem?.image && setImage(selectedItem.image);

    if (selectedItem) {
      setTitle('Edit Country');
    } else {
      setTitle('Add Country');
    }

    if (show == false) {
      setImage(null);
    }
  }, [selectedItem?.image]);

  const { handleChange, handleSubmit, values, setFieldValue, handleBlur, errors, touched } = useFormik({
    initialValues: {
      countryName: selectedItem ? selectedItem.countryName : '',
      countryCode: selectedItem ? selectedItem.countryCode : '',
      currencyName: selectedItem ? selectedItem.currencyName : '',
      currencyCode: selectedItem ? selectedItem.currencyCode : '',
      status: selectedItem ? selectedItem.status : true,
      id: selectedItem ? selectedItem.id : '',
    },
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      if (selectedItem) {
        updateCountryAction(values, setShowForm, resetForm, setSelectedItem)(dispatch);
      } else {
        createCountryAction(values, setShowForm, resetForm)(dispatch);
      }
    },
  });
  return (
    <Modal className="modal fade" show={show} id="categoryModal">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          {title}
        </h5>
        <button type="button" className="btn-close" onClick={() => setShowForm(!show)}></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="modal-inside">
            <label htmlFor="val-countryName" className="form-label">
              Country Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="val-countryName"
              name="val-countryName"
              placeholder="Enter country name"
              value={values.countryName}
              onChange={(e) => {
                handleChange('countryName');
                setFieldValue('countryName', e.target.value);
              }}
            />
            {errors.countryName && touched.countryName && <div className="text-danger fs-12">{errors.countryName}</div>}
          </div>
          <div className="modal-inside">
            <label htmlFor="val-countryCode" className="form-label">
              Country Code <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="val-countryCode"
              name="val-countryCode"
              placeholder="Enter country code"
              value={values.countryCode}
              onChange={(e) => {
                handleChange('countryCode');
                setFieldValue('countryCode', e.target.value);
              }}
            />
            {errors.countryCode && touched.countryCode && <div className="text-danger fs-12">{errors.countryCode}</div>}
          </div>

          <div className="modal-inside">
            <label htmlFor="val-currencyName" className="form-label">
              Currency Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="val-currencyName"
              name="val-currencyName"
              placeholder="Enter currency name"
              value={values.currencyName}
              onChange={(e) => {
                handleChange('currencyName');
                setFieldValue('currencyName', e.target.value);
              }}
            />
            {errors.currencyName && touched.currencyName && <div className="text-danger fs-12">{errors.currencyName}</div>}
          </div>

          <div className="modal-inside">
            <label htmlFor="val-currencyCode" className="form-label">
              Currency Code <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="val-currencyCode"
              name="val-currencyCode"
              placeholder="Enter currency code"
              value={values.currencyCode}
              onChange={(e) => {
                handleChange('currencyCode');
                setFieldValue('currencyCode', e.target.value);
              }}
            />
            {errors.currencyCode && touched.currencyCode && <div className="text-danger fs-12">{errors.currencyCode}</div>}
          </div>
          <div className="modal-inside">
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
  FoodieAlert.confirmAction('Are you sure you want to delete this country ?').then((isYes) => {
    if (isYes) {
      deleteCountryAction(payload)(dispatch);
    }
  });
};

const deleteSelected = (dispatch) => {
  const payload = {
    id: selectedItemIds,
  };
  FoodieAlert.confirmAction('Are you sure you want to delete selected country ?').then((isYes) => {
    if (isYes) {
      deleteCountryAction(payload)(dispatch);
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
