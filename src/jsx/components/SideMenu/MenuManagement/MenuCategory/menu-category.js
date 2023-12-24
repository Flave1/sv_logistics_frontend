import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
//import { actions } from 'react-table';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  createCategoryAction,
  getMenuCategoriesAction,
  getSingleMenuCategoryAction,
  updateCategoryMenuAction,
  deleteMenuCategoryAction,
} from '../../../../../store/actions/MenuActions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { connect } from 'react-redux';
import FoodieAlert from '../../../../utils/alert';

let modalTitle = '';
const MenuCategorySlider = (props) => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);

  const editItem = async (item) => {
    modalTitle = 'Update Category';
    const itemInfo = await getSingleMenuCategoryAction(item.id);
    if (itemInfo) {
      setSelectedItem(itemInfo.data);
      setShowForm(true);
    }
  };

  useEffect(() => {
    modalTitle = 'Add New Category';
    props.get_restaurant_menu_categories();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="d-flex align-items-center justify-content-between mb-2 flex-wrap">
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
              <input type="text" className="form-control p-0" placeholder="Search here" />
            </div>

            <button type="button" className="btn btn-primary mt-3 mt-sm-0" data-target="#categoryModal" onClick={() => setShowForm(!showForm)}>
              Add Category
            </button>
          </div>
        
          <Swiper
            className="mySwiper-2"
            speed={1200}
            slidesPerView={5}
            spaceBetween={20}
            //loop={true}
            autoplay={{
              delay: 1200,
            }}
            modules={[Autoplay]}
            breakpoints={{
              360: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1920: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            {props.menucategories.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="cate-bx text-center" >
                  <div className="card">
                    <div className="card-body">
                      <Link to={'/restaurant-menu/' + item.id}>
                        <img
                          src={`data:image/jpeg;base64, ${item.image}`}
                          className="card-img-top"
                          alt={`Image for ${item.name}`}
                          width="100"
                          height="100"
                          viewBox="0 0 50 50"
                          fill="none"
                        />
                        <h6 className="mb-0 font-w500">{item.name}</h6>
                      </Link>
                      {/* <div className="row">
                        <div className="col-md-6 text-left">
                          <button
                            type="button"
                            className="me-2 btn"
                            id="deleteBtn"
                            onClick={() => {
                              const id = item.id;
                              deleteItem([id.toString()], dispatch);
                            }}
                          >
                            <span className="text-info">
                              <i className="fa fa-trash"></i>
                            </span>
                          </button>
                        </div>
                        <div className="col-md-6 text-right">
                          <button type="button" className="me-2 btn" id="editBtn" onClick={() => editItem(item)}>
                            <span className=" text-info">
                              <i className="fa fa-edit"></i>
                            </span>
                          </button>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>

      <Form show={showForm} setShowForm={setShowForm} dispatch={dispatch} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    menucategories: state.menu.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    get_restaurant_menu_categories: () => getMenuCategoriesAction()(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuCategorySlider);

function Form({ show, setShowForm, dispatch, selectedItem, setSelectedItem }) {
  const validation = Yup.object().shape({
    name: Yup.string().required().min(2, 'Category Name Is Too Short!').max(50, 'Category Name Is Too Long!'),
    description: Yup.string().required('Description Is Required').min(4, 'Description must be a minimum of 4 characters'),
    // file: Yup.mixed().test('fileType', 'Unsupported file type', (value) => {
    //     if(!value) return true;
    //     const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/PNG'];
    //     return supportedTypes.includes(value.type);
    // }),
  });

  const { handleChange, handleSubmit, values, setFieldValue, handleBlur, errors, touched } = useFormik({
    initialValues: {
      name: selectedItem ? selectedItem.name : '',
      description: selectedItem ? selectedItem.description : '',
      status: selectedItem ? selectedItem.status : true,
      file: selectedItem ? selectedItem.file : null,
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
      formData.append('file', values.file);

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
          {modalTitle}
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
          <div className="modal-inside">
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
              }}
            />
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
