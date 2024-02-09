import { useNavigate, useParams } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useDispatch, connect, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  createMenuAction,
  getSingleMenuAction,
  updateMenuAction,
  deleteMenuAction,
  getAllMenuAction,
  getMenuCategoriesAction2,
  getMenuByCategoryIdAction,
} from '../../../../../store/actions/MenuActions';
import { Dropdown } from 'react-bootstrap';
import FoodieAlert from '../../../../utils/alert';
import MenuCategorySlider from '../MenuCategory/menu-category-slider';
import { formatDate, formatNumberWithSeparator } from '../../../../utils/common';
import swal from 'sweetalert';
import { spinner } from '../../../../../store/actions';
import { socket } from '../../../../../services/socket/SocketService';

let selectedItemIds = [];
let discountedPrice = 0;
const AllRestaurantMenu = (props) => {
  const menuCategory = useParams();
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [categoryList, setCategoryList] = useState(null);
  const {
    auth: { restaurantId },
  } = useSelector((state) => state.auth);

  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get('categoryId') || null;

  const editItem = async (row) => {
    dispatch(spinner(true));
    const itemInfo = await getSingleMenuAction(row.id);
    dispatch(spinner(false));
    if (itemInfo) {
      setSelectedItem(itemInfo);
      setShowForm(true);
    }
  };

  useEffect(() => {
    const getCategories = async (item) => {
      dispatch(spinner(true));
      const categories = await getMenuCategoriesAction2();
      dispatch(spinner(false));
      if (categories) {
        setCategoryList(categories);
      }
    };

    getCategories();
  }, []);

  const [fetch, setFetch] = useState(null);
  socket.on(`get_restaurant_menu_event_${restaurantId}`, (response) => {
    setFetch(response);
  });
  useEffect(() => {
    if (categoryId) {
      getMenuByCategoryIdAction(categoryId)(dispatch);
    } else {
      props.get_all_restaurant_menu();
    }
  }, [fetch, categoryId]);

  useEffect(() => {
    const joinRoom = () => {
      if (socket) {
        socket.emit('join_room', { roomName: `get_restaurant_menu_event_${restaurantId}` });
      }
    };
    joinRoom();
    return () => {
      if (socket) {
        socket.emit('leave_room', { roomName: `get_restaurant_menu_event_${restaurantId}` }, (response) => {
          console.log(`left ${response}`);
        });
        socket.off(`get_restaurant_menu_event_${restaurantId}`);
      }
    };
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-xl-9 col-xxl-8">
          <Tab.Container defaultActiveKey="Grid">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="input-group search-area2  col-md-6">
                <span className="input-group-text p-0">
                  <Link to={'#'}>
                    <svg className="me-1" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http:www.w3.org/2000/svg">
                      <path
                        d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
                        fill="#FC8019"
                      />
                    </svg>
                  </Link>
                </span>
                <input type="text" className="form-control p-0 " placeholder="What do you want eat today..." />
              </div>
              <Nav as="ul" className="grid-tab nav nav-pills" id="list-tab" role="tablist">
                <button type="button" className="me-2 btn" id="deleteBtn" style={{ display: 'none' }} onClick={() => deleteSelected(dispatch)}>
                  <span className="btn-icon-start text-info">
                    <i className="fa fa-trash"></i>
                  </span>
                </button>
                <button
                  type="button"
                  className="btn btn-primary mt-3 mt-sm-0"
                  data-target="#menuModal"
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
                &nbsp; &nbsp;
                <Nav.Item as="li" className="nav-item" role="presentation">
                  <Nav.Link as="button" className="nav-link me-3" id="pills-home-tab" eventKey="List">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http:www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_730_817)">
                        <path
                          d="M8.03058 8.4253C7.38743 8.4253 6.74428 8.4253 6.10319 8.4253C5.08573 8.4253 4.07034 8.4253 3.05287 8.4253C2.80471 8.4253 2.54621 8.44598 2.29805 8.41909C2.37043 8.42943 2.44488 8.43977 2.51726 8.44805C2.45108 8.43771 2.39111 8.42323 2.32907 8.39841C2.39525 8.4253 2.46142 8.45425 2.5276 8.48113C2.46969 8.45425 2.41593 8.42323 2.36422 8.38394C2.42006 8.42737 2.4759 8.47079 2.53173 8.51422C2.49037 8.47907 2.45315 8.44184 2.41799 8.40048C2.46142 8.45632 2.50485 8.51215 2.54828 8.56799C2.50899 8.51629 2.47797 8.46459 2.45108 8.40462C2.47797 8.47079 2.50692 8.53697 2.5338 8.60315C2.50899 8.54111 2.49244 8.48113 2.48417 8.41496C2.49451 8.48734 2.50485 8.56179 2.51312 8.63417C2.49244 8.42943 2.50692 8.2185 2.50692 8.01376C2.50692 7.5588 2.50692 7.10384 2.50692 6.65094C2.50692 5.62521 2.50692 4.5974 2.50692 3.57167C2.50692 3.32351 2.48624 3.065 2.51312 2.81684C2.50278 2.88922 2.49244 2.96367 2.48417 3.03605C2.49451 2.96987 2.50899 2.9099 2.5338 2.84786C2.50692 2.91404 2.47797 2.98021 2.45108 3.04639C2.47797 2.98849 2.50899 2.93472 2.54828 2.88302C2.50485 2.93885 2.46142 2.99469 2.41799 3.05053C2.45315 3.00917 2.49037 2.97194 2.53173 2.93679C2.4759 2.98021 2.42006 3.02364 2.36422 3.06707C2.41593 3.02778 2.46763 2.99676 2.5276 2.96987C2.46142 2.99676 2.39525 3.02571 2.32907 3.0526C2.39111 3.02778 2.45108 3.01124 2.51726 3.00296C2.44488 3.0133 2.37043 3.02364 2.29805 3.03192C2.50278 3.01123 2.71372 3.02571 2.91845 3.02571C3.37342 3.02571 3.82838 3.02571 4.28127 3.02571C5.30701 3.02571 6.33481 3.02571 7.36055 3.02571C7.60871 3.02571 7.86721 3.00503 8.11537 3.03192C8.04299 3.02158 7.96854 3.01124 7.89616 3.00296C7.96234 3.0133 8.02231 3.02778 8.08435 3.0526C8.01818 3.02571 7.952 2.99676 7.88582 2.96987C7.94373 2.99676 7.9975 3.02778 8.0492 3.06707C7.99336 3.02364 7.93752 2.98021 7.88169 2.93679C7.92305 2.97194 7.96027 3.00917 7.99543 3.05053C7.952 2.99469 7.90857 2.93885 7.86514 2.88302C7.90444 2.93472 7.93546 2.98642 7.96234 3.04639C7.93546 2.98021 7.9065 2.91404 7.87962 2.84786C7.90444 2.9099 7.92098 2.96987 7.92925 3.03605C7.91891 2.96367 7.90857 2.88922 7.9003 2.81684C7.92098 3.02158 7.9065 3.23251 7.9065 3.43725C7.9065 3.89221 7.9065 4.34717 7.9065 4.80007C7.9065 5.8258 7.9065 6.85361 7.9065 7.87934C7.9065 8.1275 7.92718 8.38601 7.9003 8.63417C7.91064 8.56179 7.92098 8.48734 7.92925 8.41496C7.91891 8.48113 7.90444 8.54111 7.87962 8.60315C7.9065 8.53697 7.93546 8.47079 7.96234 8.40462C7.93546 8.46252 7.90444 8.51629 7.86514 8.56799C7.90857 8.51215 7.952 8.45632 7.99543 8.40048C7.96027 8.44184 7.92305 8.47907 7.88169 8.51422C7.93752 8.47079 7.99336 8.42737 8.0492 8.38394C7.9975 8.42323 7.9458 8.45425 7.88582 8.48113C7.952 8.45425 8.01818 8.4253 8.08435 8.39841C8.02231 8.42323 7.96234 8.43977 7.89616 8.44805C7.96854 8.43771 8.04299 8.42737 8.11537 8.41909C8.08849 8.42323 8.05954 8.4253 8.03058 8.4253C7.81551 8.42943 7.59837 8.51422 7.44534 8.66726C7.30264 8.80995 7.19304 9.0457 7.20338 9.2525C7.22406 9.69299 7.56735 10.09 8.03058 10.0797C8.43592 10.0714 8.8247 9.92047 9.11216 9.63095C9.39341 9.3497 9.5423 8.97332 9.55885 8.57833C9.56092 8.51009 9.55885 8.44391 9.55885 8.37567C9.55885 7.97447 9.55885 7.57121 9.55885 7.17001C9.55885 6.0264 9.55885 4.88279 9.55885 3.73918C9.55885 3.46413 9.56298 3.18908 9.55885 2.91404C9.55058 2.35154 9.24244 1.78283 8.71923 1.54088C8.48762 1.43334 8.27875 1.37544 8.01818 1.37337C7.98716 1.37337 7.9582 1.37337 7.92718 1.37337C6.9821 1.37337 6.03702 1.37337 5.09194 1.37337C4.20269 1.37337 3.31344 1.37337 2.42627 1.37337C2.00853 1.37337 1.59906 1.52226 1.30127 1.82213C1.0014 2.12199 0.852506 2.52939 0.852506 2.95126C0.852506 3.27387 0.852506 3.59855 0.852506 3.92116C0.852506 5.06891 0.852506 6.21666 0.852506 7.36441C0.852506 7.72631 0.852506 8.08821 0.852506 8.45218C0.852506 8.48113 0.852506 8.51009 0.852506 8.54111C0.854574 8.79961 0.914547 9.01261 1.02002 9.24216C1.26197 9.76537 1.83068 10.0735 2.39318 10.0818C3.22038 10.0921 4.04759 10.0818 4.87479 10.0818C5.86744 10.0818 6.86216 10.0818 7.8548 10.0818C7.91271 10.0818 7.97061 10.0818 8.02852 10.0818C8.46073 10.0818 8.8764 9.70126 8.85572 9.25457C8.83918 8.80374 8.49589 8.4253 8.03058 8.4253ZM8.03058 11.9202C7.27369 11.9202 6.51887 11.9202 5.76197 11.9202C4.72383 11.9202 3.68569 11.9202 2.64754 11.9202C2.56275 11.9202 2.47797 11.9182 2.39318 11.9202C1.72314 11.9306 1.16064 12.3442 0.935227 12.9708C0.821486 13.2851 0.854574 13.6615 0.854574 13.9924C0.854574 15.1008 0.854574 16.2072 0.854574 17.3157C0.854574 17.7872 0.854574 18.2566 0.854574 18.7281C0.854574 18.8378 0.854574 18.9494 0.854574 19.059C0.854574 19.4892 1.01588 19.9255 1.34263 20.2171C1.65076 20.4922 2.02507 20.6287 2.43661 20.6287C2.55862 20.6287 2.67856 20.6287 2.80058 20.6287C3.27829 20.6287 3.75807 20.6287 4.23578 20.6287C5.33596 20.6287 6.43408 20.6287 7.53426 20.6287C7.66868 20.6287 7.80517 20.6287 7.93959 20.6287C8.23325 20.6287 8.5083 20.5749 8.773 20.4363C9.26726 20.1799 9.55885 19.6298 9.56298 19.0838C9.56298 18.9887 9.56298 18.8957 9.56298 18.8005C9.56298 17.7541 9.56298 16.7056 9.56298 15.6592C9.56298 15.136 9.56298 14.6149 9.56298 14.0917C9.56298 13.8518 9.57953 13.6036 9.55678 13.3637C9.52369 12.9832 9.381 12.613 9.09354 12.3483C8.79989 12.0774 8.43385 11.9285 8.03058 11.9202C7.59837 11.912 7.1827 12.307 7.20338 12.7474C7.22406 13.2024 7.56735 13.5643 8.03058 13.5747C8.05954 13.5747 8.08849 13.5767 8.11744 13.5809C8.04506 13.5705 7.97061 13.5602 7.89823 13.5519C7.96441 13.5622 8.02438 13.5767 8.08642 13.6015C8.02025 13.5747 7.95407 13.5457 7.88789 13.5188C7.9458 13.5457 7.99956 13.5767 8.05127 13.616C7.99543 13.5726 7.93959 13.5292 7.88376 13.4857C7.92512 13.5209 7.96234 13.5581 7.9975 13.5995C7.95407 13.5436 7.91064 13.4878 7.86721 13.432C7.9065 13.4837 7.93752 13.5354 7.96441 13.5953C7.93752 13.5292 7.90857 13.463 7.88169 13.3968C7.9065 13.4588 7.92305 13.5188 7.93132 13.585C7.92098 13.5126 7.91064 13.4382 7.90237 13.3658C7.92305 13.5705 7.90857 13.7815 7.90857 13.9862C7.90857 14.4412 7.90857 14.8961 7.90857 15.349C7.90857 16.3747 7.90857 17.4026 7.90857 18.4283C7.90857 18.6764 7.92925 18.9349 7.90237 19.1831C7.91271 19.1107 7.92305 19.0363 7.93132 18.9639C7.92098 19.0301 7.9065 19.0901 7.88169 19.1521C7.90857 19.0859 7.93752 19.0197 7.96441 18.9536C7.93752 19.0115 7.9065 19.0652 7.86721 19.1169C7.91064 19.0611 7.95407 19.0053 7.9975 18.9494C7.96234 18.9908 7.92512 19.028 7.88376 19.0632C7.93959 19.0197 7.99543 18.9763 8.05127 18.9329C7.99956 18.9722 7.94786 19.0032 7.88789 19.0301C7.95407 19.0032 8.02025 18.9742 8.08642 18.9474C8.02438 18.9722 7.96441 18.9887 7.89823 18.997C7.97061 18.9866 8.04506 18.9763 8.11744 18.968C7.91271 18.9887 7.70177 18.9742 7.49704 18.9742C7.04207 18.9742 6.58711 18.9742 6.13422 18.9742C5.10848 18.9742 4.08068 18.9742 3.05494 18.9742C2.80678 18.9742 2.54828 18.9949 2.30012 18.968C2.3725 18.9784 2.44695 18.9887 2.51933 18.997C2.45315 18.9866 2.39318 18.9722 2.33114 18.9474C2.39731 18.9742 2.46349 19.0032 2.52967 19.0301C2.47176 19.0032 2.41799 18.9722 2.36629 18.9329C2.42213 18.9763 2.47797 19.0197 2.5338 19.0632C2.49244 19.028 2.45522 18.9908 2.42006 18.9494C2.46349 19.0053 2.50692 19.0611 2.55035 19.1169C2.51105 19.0652 2.48003 19.0135 2.45315 18.9536C2.48003 19.0197 2.50899 19.0859 2.53587 19.1521C2.51105 19.0901 2.49451 19.0301 2.48624 18.9639C2.49658 19.0363 2.50692 19.1107 2.51519 19.1831C2.49451 18.9784 2.50899 18.7674 2.50899 18.5627C2.50899 18.1077 2.50899 17.6528 2.50899 17.1999C2.50899 16.1741 2.50899 15.1463 2.50899 14.1206C2.50899 13.8724 2.48831 13.6139 2.51519 13.3658C2.50485 13.4382 2.49451 13.5126 2.48624 13.585C2.49658 13.5188 2.51105 13.4588 2.53587 13.3968C2.50899 13.463 2.48003 13.5292 2.45315 13.5953C2.48003 13.5374 2.51105 13.4837 2.55035 13.432C2.50692 13.4878 2.46349 13.5436 2.42006 13.5995C2.45522 13.5581 2.49244 13.5209 2.5338 13.4857C2.47797 13.5292 2.42213 13.5726 2.36629 13.616C2.41799 13.5767 2.46969 13.5457 2.52967 13.5188C2.46349 13.5457 2.39731 13.5747 2.33114 13.6015C2.39318 13.5767 2.45315 13.5602 2.51933 13.5519C2.44695 13.5622 2.3725 13.5726 2.30012 13.5809C2.50485 13.5602 2.71579 13.5747 2.92052 13.5747C3.36514 13.5747 3.80977 13.5747 4.25439 13.5747C5.27599 13.5747 6.29759 13.5747 7.32126 13.5747C7.55908 13.5747 7.79483 13.5747 8.03265 13.5747C8.46487 13.5747 8.88054 13.1941 8.85986 12.7474C8.83918 12.2987 8.49589 11.9202 8.03058 11.9202ZM11.7406 4.64703C12.026 4.64703 12.3093 4.64703 12.5947 4.64703C13.2771 4.64703 13.9617 4.64703 14.6441 4.64703C15.4672 4.64703 16.2902 4.64703 17.1133 4.64703C17.8288 4.64703 18.5423 4.64703 19.2578 4.64703C19.6053 4.64703 19.9527 4.65324 20.3001 4.64703C20.3043 4.64703 20.3105 4.64703 20.3146 4.64703C20.7468 4.64703 21.1625 4.26652 21.1418 3.81983C21.1211 3.37107 20.7778 2.99262 20.3146 2.99262C20.0292 2.99262 19.7459 2.99262 19.4605 2.99262C18.7781 2.99262 18.0935 2.99262 17.4111 2.99262C16.588 2.99262 15.765 2.99262 14.9419 2.99262C14.2264 2.99262 13.5129 2.99262 12.7974 2.99262C12.4499 2.99262 12.1025 2.98642 11.7551 2.99262C11.7509 2.99262 11.7447 2.99262 11.7406 2.99262C11.3084 2.99262 10.8927 3.37314 10.9134 3.81983C10.932 4.26652 11.2774 4.64703 11.7406 4.64703ZM17.0678 6.80604C16.4681 6.80604 15.8684 6.80604 15.2666 6.80604C14.3091 6.80604 13.3537 6.80604 12.3962 6.80604C12.177 6.80604 11.9577 6.80604 11.7385 6.80604C11.3063 6.80604 10.8906 7.18656 10.9113 7.63325C10.932 8.08201 11.2753 8.46045 11.7385 8.46045C12.3383 8.46045 12.938 8.46045 13.5398 8.46045C14.4973 8.46045 15.4527 8.46045 16.4102 8.46045C16.6294 8.46045 16.8486 8.46045 17.0678 8.46045C17.5 8.46045 17.9157 8.07994 17.895 7.63325C17.8764 7.18449 17.5331 6.80604 17.0678 6.80604ZM11.7406 15.1939C12.026 15.1939 12.3093 15.1939 12.5947 15.1939C13.2771 15.1939 13.9617 15.1939 14.6441 15.1939C15.4672 15.1939 16.2902 15.1939 17.1133 15.1939C17.8288 15.1939 18.5423 15.1939 19.2578 15.1939C19.6053 15.1939 19.9527 15.2001 20.3001 15.1939C20.3043 15.1939 20.3105 15.1939 20.3146 15.1939C20.7468 15.1939 21.1625 14.8134 21.1418 14.3667C21.1211 13.9179 20.7778 13.5395 20.3146 13.5395C20.0292 13.5395 19.7459 13.5395 19.4605 13.5395C18.7781 13.5395 18.0935 13.5395 17.4111 13.5395C16.588 13.5395 15.765 13.5395 14.9419 13.5395C14.2264 13.5395 13.5129 13.5395 12.7974 13.5395C12.4499 13.5395 12.1025 13.5333 11.7551 13.5395C11.7509 13.5395 11.7447 13.5395 11.7406 13.5395C11.3084 13.5395 10.8927 13.92 10.9134 14.3667C10.932 14.8155 11.2774 15.1939 11.7406 15.1939ZM17.0678 17.3529C16.4681 17.3529 15.8684 17.3529 15.2666 17.3529C14.3091 17.3529 13.3537 17.3529 12.3962 17.3529C12.177 17.3529 11.9577 17.3529 11.7385 17.3529C11.3063 17.3529 10.8906 17.7334 10.9113 18.1801C10.932 18.6289 11.2753 19.0073 11.7385 19.0073C12.3383 19.0073 12.938 19.0073 13.5398 19.0073C14.4973 19.0073 15.4527 19.0073 16.4102 19.0073C16.6294 19.0073 16.8486 19.0073 17.0678 19.0073C17.5 19.0073 17.9157 18.6268 17.895 18.1801C17.8764 17.7334 17.5331 17.3529 17.0678 17.3529Z"
                          fill="#7E808C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_730_817">
                          <rect x="0.410156" y="0.411743" width="21.1765" height="21.1765" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="nav-item " role="presentation">
                  <Nav.Link as="button" className="nav-link" id="pills-grid-tab" eventKey="Grid">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http:www.w3.org/2000/svg">
                      <path
                        d="M12 4H6.66667C5.95942 4 5.28115 4.28095 4.78105 4.78105C4.28095 5.28115 4 5.95942 4 6.66667V12C4 12.7072 4.28095 13.3855 4.78105 13.8856C5.28115 14.3857 5.95942 14.6667 6.66667 14.6667H12C12.7072 14.6667 13.3855 14.3857 13.8856 13.8856C14.3857 13.3855 14.6667 12.7072 14.6667 12V6.66667C14.6667 5.95942 14.3857 5.28115 13.8856 4.78105C13.3855 4.28095 12.7072 4 12 4ZM6.66667 12V6.66667H12V12H6.66667ZM25.3333 4H20C19.2928 4 18.6145 4.28095 18.1144 4.78105C17.6143 5.28115 17.3333 5.95942 17.3333 6.66667V12C17.3333 12.7072 17.6143 13.3855 18.1144 13.8856C18.6145 14.3857 19.2928 14.6667 20 14.6667H25.3333C26.0406 14.6667 26.7189 14.3857 27.219 13.8856C27.719 13.3855 28 12.7072 28 12V6.66667C28 5.95942 27.719 5.28115 27.219 4.78105C26.7189 4.28095 26.0406 4 25.3333 4ZM20 12V6.66667H25.3333V12H20ZM12 17.3333H6.66667C5.95942 17.3333 5.28115 17.6143 4.78105 18.1144C4.28095 18.6145 4 19.2928 4 20V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H12C12.7072 28 13.3855 27.719 13.8856 27.219C14.3857 26.7189 14.6667 26.0406 14.6667 25.3333V20C14.6667 19.2928 14.3857 18.6145 13.8856 18.1144C13.3855 17.6143 12.7072 17.3333 12 17.3333ZM6.66667 25.3333V20H12V25.3333H6.66667ZM25.3333 17.3333H20C19.2928 17.3333 18.6145 17.6143 18.1144 18.1144C17.6143 18.6145 17.3333 19.2928 17.3333 20V25.3333C17.3333 26.0406 17.6143 26.7189 18.1144 27.219C18.6145 27.719 19.2928 28 20 28H25.3333C26.0406 28 26.7189 27.719 27.219 27.219C27.719 26.7189 28 26.0406 28 25.3333V20C28 19.2928 27.719 18.6145 27.219 18.1144C26.7189 17.6143 26.0406 17.3333 25.3333 17.3333ZM20 25.3333V20H25.3333V25.3333H20Z"
                        fill="#FC8019"
                      />
                    </svg>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="List">
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
                                <th>Price</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Date Created</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody id="customers">
                              {props?.menu &&
                                props.menu.map((row, idx) => {
                                  return <TR dispatch={dispatch} row={row} key={idx} editItem={editItem} />;
                                })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Grid">
                <div className="row">
                  {props?.menu &&
                    props?.menu.map((item, ind) => (
                      <div className="col-xl-4 col-xxl-4 col-sm-6" key={ind}>
                        <div className="card dishe-bx b-hover style-1">
                          {/* <i className={`fa-solid fa-heart ms-auto c-heart c-pointer ${item.heart ? "active" : ""}`}
                                                        onClick={()=>handleClick('heart', item.id)}
                                                    ></i> */}
                          <div className="card-body pb-0 pt-3">
                            <Link onClick={() => editItem(item)}>
                              <div className="text-center mb-2">
                                <img
                                  src={item.image}
                                  className="card-img-top"
                                  alt={`Image for ${item.name}`}
                                  width="100"
                                  height="100"
                                  viewBox="0 0 50 50"
                                  fill="none"
                                />
                              </div>
                            </Link>
                            <div className="border-bottom pb-3">
                              <Link onClick={() => editItem(item)}>
                                <h4 className="font-w500 mb-1">{item.menuCategory.name}</h4>
                              </Link>
                              <div className="d-flex align-items-center">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M8 0.500031L9.79611 6.02789H15.6085L10.9062 9.4443L12.7023 14.9722L8 11.5558L3.29772 14.9722L5.09383 9.4443L0.391548 6.02789H6.20389L8 0.500031Z"
                                    fill="#FC8019"
                                  />
                                </svg>
                                <p className="font-w500 mb-0 px-2">5.0</p>
                                <svg className="me-2" width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="2" cy="2.50003" r="2" fill="#C4C4C4" />
                                </svg>
                                <p className=" font-w500 mb-0">1k+ Reviews</p>
                                {/*<svg className="mx-2" width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle cx="2" cy="2.5" r="2" fill="#C4C4C4"/>
                                                                </svg>
                                                                <p className="font-w500 mb-0">2.97km</p> */}
                              </div>
                            </div>
                          </div>
                          <div className="card-footer border-0 pt-2">
                            <div className="common d-flex align-items-center justify-content-between">
                              <div>
                                <Link onClick={() => editItem(item)}>
                                  <h4>{item.name}</h4>
                                </Link>
                                <h3 className=" mb-0 text-primary">
                                  {item.restaurant.country.currencyCode}
                                  {formatNumberWithSeparator(Number(item.price))}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <CategorySidebar categoryList={categoryList} categoryId={categoryId} />
      </div>
      <MenuCategorySlider />
      <Form
        show={showForm}
        setShowForm={setShowForm}
        dispatch={dispatch}
        categoryId={menuCategory.categoryId}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        categoryList={categoryList}
      />
    </>
  );
};

function Form({ show, setShowForm, dispatch, categoryId, selectedItem, setSelectedItem, categoryList }) {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    selectedItem?.image && setImage(selectedItem.image);

    if (selectedItem) {
      setTitle('Edit Menu');
    } else {
      setTitle('Add Menu');
    }

    if (show == false) {
      setImage(null);
    }
  }, [selectedItem?.image]);

  const validation = Yup.object().shape({
    name: Yup.string().required().min(2, 'Menu Is Too Short!').max(50, 'Menu Is Too Long!'),
    description: Yup.string().required('Description Is Required').min(4, 'Description must be a minimum of 4 characters'),
    category: Yup.string().required('Category Is Required'),
    description: Yup.string().required('Description Is Required').min(4, 'Description must be a minimum of 4 characters'),
    price: Yup.number().required('Price Is Required'),
  });

  const { handleChange, handleSubmit, values, setFieldValue, handleBlur, errors, touched } = useFormik({
    initialValues: {
      name: selectedItem ? selectedItem.name : '',
      category: selectedItem ? selectedItem.menuCategory.id : '',
      description: selectedItem ? selectedItem.description : '',
      price: selectedItem ? selectedItem.price : '',
      availability: selectedItem ? selectedItem.availability : 'false',
      status: selectedItem ? selectedItem.status : 'true',
      discount: selectedItem ? selectedItem.discount : 0,
      dietaryInfo: selectedItem ? selectedItem.dietaryInformation : '',
      file: null,
      id: selectedItem ? selectedItem.id : '',
    },
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      const formData = new FormData();
      formData.append('id', values.id);
      formData.append('name', values.name);
      formData.append('menuCategoryId', values.category);
      formData.append('description', values.description);
      formData.append('price', values.price);
      formData.append('availability', values.availability);
      formData.append('status', values.status);
      formData.append('discount', values.discount);
      formData.append('dietaryInformation', values.dietaryInfo);

      if (values.file) {
        formData.append('file', values.file);
      } else if (!selectedItem && !values.file) {
        swal('Oops', 'Select image for this category', 'error');
        return;
      }

      if (selectedItem) {
        updateMenuAction(formData, setShowForm, resetForm, setSelectedItem)(dispatch);
      } else {
        createMenuAction(formData, setShowForm, resetForm)(dispatch);
      }
    },
  });

  return (
    <Modal className="modal fade" size="lg" show={show} id="menuModal">
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
              <label htmlFor="val-category" className="form-label">
                Category <span className="text-danger">*</span>
              </label>
              <select
                type="text"
                className="form-control"
                id="val-category"
                name="val-category"
                value={values.category}
                onChange={(e) => {
                  handleChange('category');
                  setFieldValue('category', e.target.value);
                }}
              >
                <option value="">Select...</option>
                {categoryList?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
              {errors.category && touched.category && <div className="text-danger fs-12">{errors.category}</div>}
            </div>
            <div className="col-6">
              <label htmlFor="val-name" className="form-label">
                Menu <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="val-name"
                name="val-name"
                placeholder="Enter menu"
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
              <label htmlFor="val-name" className="form-label">
                Price <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="val-price"
                name="val-price"
                placeholder="Enter price"
                value={values.price}
                onChange={(e) => {
                  values.discount = 0;
                  discountedPrice = 0;
                  handleChange('price');
                  setFieldValue('price', e.target.value);
                }}
              />
              {errors.price && touched.price && <div className="text-danger fs-12">{errors.price}</div>}
            </div>
            <div className="col-6">
              <label htmlFor="val-description" className="form-label">
                Description <span className="text-danger">*</span>
              </label>
              <textarea
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
                name="val-availability"
                id="val-availability"
                checked={values.availability}
                value={values.availability}
                onChange={(e) => {
                  handleChange('availability');
                  setFieldValue('availability', e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="val-status">
                Availability
              </label>
              {errors.availability && touched.availability && <div className="text-danger fs-12">{errors.availability}</div>}
            </div>
          </div>

          <div className="row modal-inside">
            <div className="col-6">
              <label htmlFor="val-discountpercent" className="form-label">
                Discount (Discount in %) eg. 0.4%
              </label>
              <input
                type="number"
                className="form-control"
                id="val-discountpercent"
                name="val-discountpercent"
                placeholder="Enter discount"
                // value={values.discount}
                onChange={(e) => {
                  discountedPrice = handleDiscount(values.price, e.target.value);
                  handleChange('discount');
                  setFieldValue('discount', discountedPrice);
                }}
              />
              {errors.discount && touched.discount && <div className="text-danger fs-12">{errors.discount}</div>}
            </div>
            <div className="col-6">
              <label htmlFor="val-name" className="form-label">
                Discounted price
              </label>
              <input
                readOnly={true}
                type="number"
                className="form-control text-center"
                id="val-discount"
                name="val-discount"
                placeholder="Enter discount"
                value={values.discount}
              />
            </div>
          </div>
          <div className="modal-inside">
            <label htmlFor="val-description" className="form-label">
              Dietary Information
            </label>
            <textarea
              className="form-control"
              id="val-dietaryInfo"
              name="val-dietaryInfo"
              // rows="5"
              placeholder="Enter dietary information"
              value={values.dietaryInfo}
              onChange={(e) => {
                handleChange('dietaryInfo');
                setFieldValue('dietaryInfo', e.target.value);
              }}
            ></textarea>
            {errors.dietaryInfo && touched.dietaryInfo && <div className="text-danger fs-12">{errors.dietaryInfo}</div>}
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

/////////////

const DropdownItem = ({ row, dispatch, editItem }) => {
  return (
    <>
      <Dropdown className="">
        <Dropdown.Toggle as="div" className="btn-link i-false" style={{ cursor: 'pointer' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
              stroke="#262626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z"
              stroke="#262626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z"
              stroke="#262626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => editItem(row)}>Edit</Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              const id = row.id;
              deleteItem([id.toString()], dispatch);
            }}
          >
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

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
      <td className="py-2">{formatNumberWithSeparator(Number(row.price))}</td>
      <td className="py-2">{row.menuCategory.name}</td>
      <td className="py-2">{row.status ? 'Active' : 'InActive'}</td>
      <td className="py-2">{formatDate(row.createdAt)}</td>
      <td className="py-2 text-right">
        {/* <DropMenu row={row} dispatch={dispatch} editItem={editItem} /> */}
        <DropdownItem row={row} dispatch={dispatch} editItem={editItem} />
      </td>
    </tr>
  );
}

const deleteItem = (ids, dispatch) => {
  const payload = {
    id: ids,
  };
  FoodieAlert.confirmAction('Are you sure you want to delete this menu ?').then((isYes) => {
    if (isYes) {
      deleteMenuAction(payload)(dispatch);
    }
  });
};

const deleteSelected = (dispatch) => {
  const payload = {
    id: selectedItemIds,
  };
  FoodieAlert.confirmAction('Are you sure you want to delete selected menu ?').then((isYes) => {
    if (isYes) {
      deleteMenuAction(payload)(dispatch);
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

const mapStateToProps = (state) => {
  return {
    menu: state.menu.allmenu,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    get_all_restaurant_menu: () => getAllMenuAction()(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllRestaurantMenu);

const CategorySidebar = ({ categoryList }) => {
  const [selectedCat, setSelectedCat] = useState('all');
  const navigation = useNavigate();
  return (
    <div className="col-xl-3 col-lg-4">
      <div className="email-left-box">
        <div className="p-0">
          <Link to="/menu-category" className="btn btn-primary btn-block">
            Manage Category
          </Link>
        </div>
        <div className="mail-list rounded overflow-hidden mt-4">
          <div className="intro-title d-flex justify-content-between my-0">
            <h5>Categories</h5>
          </div>
          <a className="list-group-item" href="#" key={0}>
            <span className="icon-warning">
              <input
                type="radio"
                checked={selectedCat == 'all'}
                value={'all'}
                name="categoryGroup"
                className="form-check-input"
                onChange={() => {
                  navigation(`/restaurant-menu`);
                  setSelectedCat('all');
                }}
              />
              {/* <i className="fa fa-circle" aria-hidden="true"></i> */}
            </span>
            &nbsp; &nbsp;
            <span>{'Show All Menu'}</span>
          </a>
          {categoryList?.map((item) => (
            <a className="list-group-item" href="#" key={item.id}>
              <span className="icon-warning">
                <input
                  type="radio"
                  value={item}
                  checked={selectedCat == item.id.toString()}
                  name="categoryGroup"
                  className="form-check-input"
                  onChange={() => {
                    navigation(`/restaurant-menu?categoryId=${item.id}`);
                    setSelectedCat(item.id);
                  }}
                />
                {/* <i className="fa fa-circle" aria-hidden="true"></i> */}
              </span>
              &nbsp; &nbsp;
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

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

const handleDiscount = (price, discount) => {
  if (price < 1) {
    swal('Error!', 'Price should not be less than 1');
    return 0;
  }
  if (discount < 0) {
    swal('Error!', 'Discount should not be less than 1');
    return 0;
  }
  if (discount > 100) {
    swal('Error!', 'Discount should not be greater than 100');
    return 0;
  }

  const percentageAmount = (price * discount) / 100;
  const discountedPrice = price - percentageAmount;
  return discountedPrice;
};
