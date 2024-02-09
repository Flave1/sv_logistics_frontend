import React, { Fragment, useEffect, useState } from 'react';
import PageTitle from '../../../../layouts/PageTitle';
import { Dropdown } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
/// images
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  createCategoryAction,
  getMenuCategoriesAction,
  updateCategoryMenuAction,
  deleteMenuCategoryAction,
} from '../../../../../store/actions/MenuActions';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import FoodieAlert from '../../../../utils/alert';
import { formatDate } from '../../../../utils/common';
import swal from 'sweetalert';
import { socket } from '../../../../../services/socket/SocketService';

let selectedItemIds = [];
const MenuCategoryList = (props) => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  
  const {
    auth: { restaurantId },
  } = useSelector((state) => state.auth);

  const [selectedItem, setSelectedItem] = useState(null);
  const editItem = async (row) => {
    if (row) {
      setSelectedItem(row);
      setShowForm(true);
    }
  };

  const [fetch, setFetch] = useState(null);
  socket.on(`get_restaurant_menu_categories_event_${restaurantId}`, (response) => {
    setFetch(response);
  });
  useEffect(() => {
    props.get_restaurant_menu_categories();
  }, [fetch]);

  useEffect(() => {
    const joinRoom = () => {
      if (socket) {
        socket.emit('join_room', { roomName: `get_restaurant_menu_categories_event_${restaurantId}` });
      }
    };
    joinRoom();
    return () => {
      if (socket) {
        socket.emit('leave_room', { roomName: `get_restaurant_menu_categories_event_${restaurantId}` }, (response) => {
          console.log(`left ${response}`);
        });
        socket.off(`get_restaurant_menu_categories_event_${restaurantId}`);
      }
    };
  }, []);

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between">
        <PageTitle activeMenu="Category List" motherMenu="Category Management" />
        <button type="button" className="me-2 btn" id="deleteBtn" style={{ display: 'none' }} onClick={() => deleteSelected(dispatch)}>
          <span className="btn-icon-start text-info">
            <i className="fa fa-trash"></i>
          </span>
        </button>
        <Link to={'/restaurant-menu'} className="me-2 btn btn-primary">
          <span className="btn-icon-start text-info">
            <i className="fa fa-arrow-left color-info"></i>
          </span>
          Back
        </Link>
        <button
          type="button"
          className="me-2 btn btn-primary"
          data-target="#staffModal"
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
                      <th>Date Created</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody id="customers">
                    {props.menucategories &&
                      props.menucategories.map((row, idx) => {
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
    menucategories: state.menuCategory.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    get_restaurant_menu_categories: () => getMenuCategoriesAction()(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuCategoryList);

function TR({ row, dispatch, editItem }) {
  return (
    <tr className="btn-reveal-trigger">
      <td className="customer_shop_single">
        <Check i={1} row={row} />
      </td>
      <td className="">
        <Link onClick={() => editItem(row)}>
          <div className="media-bx d-flex align-items-center">
            <img className="me-3 rounded-circle" src={row.image} alt={`Image for ${row.name}`} />
            <h5 className="mb-0 fs--1">{row.name}</h5>
          </div>
        </Link>
      </td>
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
    name: Yup.string().required().min(2, 'Category Name Is Too Short!').max(50, 'Category Name Is Too Long!'),
    description: Yup.string().required('Description Is Required').min(4, 'Description must be a minimum of 4 characters'),
  });

  useEffect(() => {
    selectedItem?.image && setImage(selectedItem.image);

    if (selectedItem) {
      setTitle('Edit Menu Category');
    } else {
      setTitle('Add Menu Category');
    }

    if (show == false) {
      setImage(null);
    }
  }, [selectedItem?.image]);

  console.log('show', show);

  const { handleChange, handleSubmit, values, setFieldValue, handleBlur, errors, touched } = useFormik({
    initialValues: {
      name: selectedItem ? selectedItem.name : '',
      description: selectedItem ? selectedItem.description : '',
      status: selectedItem ? selectedItem.status : true,
      file: null,
      id: selectedItem ? selectedItem.id : '',
    },
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      const formData = new FormData();
      formData.append('id', values.id);
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('status', values.status);

      if (values.file) {
        formData.append('file', values.file);
      } else if (!selectedItem && !values.file) {
        swal('Oops', 'Select image for this category', 'error');
        return;
      }

      if (selectedItem) {
        updateCategoryMenuAction(formData, setShowForm, resetForm, setSelectedItem)(dispatch);
      } else {
        createCategoryAction(formData, setShowForm, resetForm)(dispatch);
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
            <label htmlFor="val-name" className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="val-name"
              name="val-name"
              placeholder="Enter category name"
              value={values.name}
              onChange={(e) => {
                handleChange('name');
                setFieldValue('name', e.target.value);
              }}
            />
            {errors.name && touched.name && <div className="text-danger fs-12">{errors.name}</div>}
          </div>
          <div className="modal-inside">
            <label htmlFor="val-description" className="form-label">
              Description <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              id="val-description"
              name="val-description"
              // rows="5"
              placeholder="Enter description"
              value={values.description}
              onChange={(e) => {
                handleChange('description');
                setFieldValue('description', e.target.value);
              }}
            ></textarea>
            {errors.description && touched.description && <div className="text-danger fs-12">{errors.description}</div>}
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

            <div className="col-md-6">{image && <img src={image} alt={`Image`} className="img-thumbnail mb-2 " style={{ maxWidth: '150px' }} />}</div>
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
  FoodieAlert.confirmAction('Are you sure you want to delete this category ?').then((isYes) => {
    if (isYes) {
      deleteMenuCategoryAction(payload)(dispatch);
    }
  });
};

const deleteSelected = (dispatch) => {
  const payload = {
    id: selectedItemIds,
  };
  FoodieAlert.confirmAction('Are you sure you want to delete selected category ?').then((isYes) => {
    if (isYes) {
      deleteMenuCategoryAction(payload)(dispatch);
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
