import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
/// Scroll
//import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
//import profile from "../../../images/profile/pic1.jpg";
//import avatar from "../../../images/avatar/1.jpg";
//import { Dropdown } from "react-bootstrap";
import LogoutPage from './Logout';

import HeaderSlider from './HeaderSlider';

//import avatar from "../../../images/avatar/1.jpg";
import profile from '../../../images/banner-img/pic-1.png';
import { socket } from '../../../services/socket/SocketService';
import { useDispatch, useSelector } from 'react-redux';

const countries = ['Nigeria', 'Sierra Leone', 'Guinea'];

const LocationIcon = ({ key }) => <i className="fa-solid fa-location-dot mx-2 " key={key} />;

//return BoxTab.classList.toggle("active"),SearchBlog.classList.toggle("active");

function AddSearchSlider() {
  //alert(111);
  let SearchBlog = document.getElementById('Search-Blog');
  let BoxTab = document.getElementById('close-searchbox');
  setTimeout(() => {
    if (BoxTab.classList.contains('active')) {
      return BoxTab.classList.remove('active'), SearchBlog.classList.remove('active');
    } else {
      return BoxTab.classList.add('active'), SearchBlog.classList.add('active');
    }
  }, 100);
}

const CustomerHeader = ({ onNote }) => {
  //const [rightSelect, setRightSelect] = useState('Eng');
  const [selectCountry, setSelectCountry] = useState([countries[0]]);
  const {
    sessionId,
    auth: { restaurantId },
  } = useSelector((state) => state.auth);

  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const typingInterval = 50000;
  const [typingTimer, setTypingTimer] = useState();

  //For fix header
  const [headerFix, setheaderFix] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      // Dropdown
      const dropbtn = document.getElementById('droptoggle1');
      //let dropTooglebtn = dropbtn.getAttribute("aria-expanded");
      function toggledrop() {
        return dropbtn.classList.toggle('show');
      }
      dropbtn.addEventListener('click', toggledrop);
    }, 500);

    // for header fix on scroll
    window.addEventListener('scroll', () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);

  function startListeningToSearch() {
    socket.on(`header_search_event_responder`, (response) => {

      if (response.status == 200) {
        // dispatch({
        //   type: SET_CUSTOMER_SEARCH,
        //   payload: response.result,
        // });
      }
    });
    socket.emit('header_search_event_receiver', { sessionId, searchString: searchQuery, restaurantId });
  }

  function onSearch(value) {
    setTypingTimer(typingInterval);

    setTimeout(function () {
      handleInputStop();
    }, typingTimer);
  }

  function handleInputStop() {
    if (socket) {
      console.log('stopped listening');

      socket.off(`header_search_event_responder${restaurantId}`);
    }
  }

  return (
    <div className={`header ${headerFix ? 'is-fixed' : ''}`}>
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="container d-block my-0">
            <div className="d-flex align-items-center justify-content-sm-between justify-content-end">
              <div className="header-left">
                <div className="nav-item d-flex align-items-center">
                  <div className="d-flex header-bx" id="Search-Blog">
                    <Dropdown className="bootstrap-select">
                      <Dropdown.Toggle className="header-select-toggle btn btn-light i-false" as="div">
                        {selectCountry} <i className="header-select-icon fa-solid fa-sort-down"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="">
                        {countries.map((country, idx) => {
                          return (
                            <Dropdown.Item key={idx} onClick={() => setSelectCountry([<LocationIcon key={idx} />, country])}>
                              {<LocationIcon key={idx} />} {country}
                            </Dropdown.Item>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className="input-group search-area2 ps-3" id="Serach-bar" onClick={() => AddSearchSlider()}>
                      <span className="input-group-text h-search">
                        <Link to={'#'}>
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              opacity="0.3"
                              d="M16.6751 19.4916C16.2195 19.036 16.2195 18.2973 16.6751 17.8417C17.1307 17.3861 17.8694 17.3861 18.325 17.8417L22.9917 22.5084C23.4473 22.964 23.4473 23.7027 22.9917 24.1583C22.5361 24.6139 21.7974 24.6139 21.3417 24.1583L16.6751 19.4916Z"
                              fill="var(--primary)"
                            />
                            <path
                              d="M12.8333 18.6667C16.055 18.6667 18.6666 16.055 18.6666 12.8333C18.6666 9.61168 16.055 7 12.8333 7C9.61163 7 6.99996 9.61168 6.99996 12.8333C6.99996 16.055 9.61163 18.6667 12.8333 18.6667ZM12.8333 21C8.32297 21 4.66663 17.3437 4.66663 12.8333C4.66663 8.32301 8.32297 4.66667 12.8333 4.66667C17.3436 4.66667 21 8.32301 21 12.8333C21 17.3437 17.3436 21 12.8333 21Z"
                              fill="var(--primary)"
                            />
                          </svg>
                        </Link>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        onInput={onSearch}
                        onClick={startListeningToSearch}
                        placeholder="What do you want eat today"
                      />
                    </div>
                    <div className="search-drop">
                      <div className="card tag-bx">
                        <div className="card-header d-block border-0">
                          <h4>Recently Searched</h4>
                          <ul className="d-flex align-items-center flex-wrap">
                            <li>
                              <Link to={'#'} className="btn btn-outline-light btn-rounded me-2">
                                Bakery
                              </Link>
                            </li>
                            <li>
                              <Link to={'#'} className="btn btn-outline-light btn-rounded me-2">
                                Burger
                              </Link>
                            </li>
                            <li>
                              <Link to={'#'} className="btn btn-outline-light btn-rounded me-2">
                                Beverage
                              </Link>
                            </li>
                            <li>
                              <Link to={'#'} className="btn btn-outline-light btn-rounded me-2">
                                Chicken
                              </Link>
                            </li>
                            <li>
                              <Link to={'#'} className="btn btn-outline-light btn-rounded mt-3 mt-xl-0">
                                Pizza
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body pt-0">
                          <h4>popular Cuisines</h4>
                          <div className="swiper mySwiper-4">
                            <HeaderSlider />
                          </div>
                        </div>
                      </div>
                      <div id="close-searchbox" onClick={() => AddSearchSlider()}></div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav header-right">
                <li>
                  <Dropdown className=" header-profile2 ">
                    <Dropdown.Toggle
                      as="a"
                      className={`nav-link i-false cursor-pointer `}
                      id="droptoggle1"
                      //onClick={DropBtnblog()}
                    >
                      <div className="header-info2 d-flex align-items-center">
                        <img src={profile} alt="" />
                        <div className="d-flex align-items-center sidebar-info">
                          <div>
                            <h6 className="font-w500 mb-0 ms-2">Joshua</h6>
                          </div>
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end">
                      <Link to="./app-profile" className="dropdown-item ai-icon ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span className="ms-2">Profile</span>
                      </Link>
                      <Link to="./email-inbox" className="dropdown-item ai-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span className="ms-2">Inbox</span>
                      </Link>
                      <Link to="./edit-profile" className="dropdown-item ai-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                        <span className="ms-2">Edit Profile</span>
                      </Link>
                      <Link to="./message" className="dropdown-item ai-icon ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          className="svg-main-icon"
                        >
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <rect x="0" y="0" width="24" height="24" />
                            <path
                              d="M21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L5,18 C3.34314575,18 2,16.6568542 2,15 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 Z M6.16794971,10.5547002 C7.67758127,12.8191475 9.64566871,14 12,14 C14.3543313,14 16.3224187,12.8191475 17.8320503,10.5547002 C18.1384028,10.0951715 18.0142289,9.47430216 17.5547002,9.16794971 C17.0951715,8.86159725 16.4743022,8.98577112 16.1679497,9.4452998 C15.0109146,11.1808525 13.6456687,12 12,12 C10.3543313,12 8.9890854,11.1808525 7.83205029,9.4452998 C7.52569784,8.98577112 6.90482849,8.86159725 6.4452998,9.16794971 C5.98577112,9.47430216 5.86159725,10.0951715 6.16794971,10.5547002 Z"
                              fill="var(--primary)"
                            />
                          </g>
                        </svg>
                        <span className="ms-2">Message</span>
                      </Link>
                      <Link to="./notification" className="dropdown-item ai-icon ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          className="svg-main-icon"
                        >
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <rect x="0" y="0" width="24" height="24" />
                            <path
                              d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                              fill="var(--primary)"
                            />
                            <circle fill="var(--primary)" opacity="0.3" cx="19.5" cy="17.5" r="2.5" />
                          </g>
                        </svg>
                        <span className="ms-2">Notification </span>
                      </Link>
                      <Link to="./setting" className="dropdown-item ai-icon ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          className="svg-main-icon"
                        >
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <rect x="0" y="0" width="24" height="24" />
                            <path
                              d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z"
                              fill="var(--primary)"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                            <path
                              d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                              fill="var(--primary)"
                            />
                          </g>
                        </svg>
                        <span className="ms-2">Settings </span>
                      </Link>
                      <LogoutPage />
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CustomerHeader;
