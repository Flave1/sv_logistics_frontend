import React, { Fragment, useContext, useEffect, useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Import Components
import { ThemeContext } from '../../../context/ThemeContext';
import BannerSlider from '../Dashboard/Dashboard/BannerSlider';
import CategorySlider from '../Dashboard/Dashboard/CategorySlider';

import { useDispatch, useSelector } from 'react-redux';
import { getPopularRestaurantsAction } from '../../../store/actions/CustomerActions';
import Restaurant from './components/Restaurant';
import { spinner } from '../../../store/actions';
// import { getPopularRestaurantsAction } from '../../../store/actions/CustomerActions';

const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const CustomerHome = () => {
  const [dropSelect, setDropSelect] = useState('Other');
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { changeBackground } = useContext(ThemeContext);
  const { allRestaurants } = useSelector((state: any) => state.customer);
  useEffect(() => {
    changeBackground({ value: 'light', label: 'Light' });
  }, []);

  useEffect(() => {
    async function fetchData() {
      await getPopularRestaurantsAction()(dispatch);
    }
    fetchData();
  }, []);

  function renderBannerSlider() {
    return (
      <div className="col-xl-12">
        <BannerSlider />
      </div>
    );
  }

  function renderCategories() {
    return (
      <div className="col-xl-12">
        <div className="d-flex align-items-center justify-content-between mb-2 gap">
          <h4 className=" mb-0 cate-title">Category</h4>
          {/* <Link to="/favorite-menu" className="text-primary">
            View all <i className="fa-solid fa-angle-right ms-2"></i>
          </Link> */}
        </div>
        <CategorySlider />
      </div>
    );
  }

  function renderResturants() {
    return (
      <Fragment>
        <div className="d-flex align-items-center justify-content-between mb-2 gap">
          <h4 className=" mb-0 cate-title">Restaurants</h4>
          <Link to={'#'} className="text-primary">
            View all <i className="fa-solid fa-angle-right ms-2"></i>
          </Link>
        </div>
        <div className="row">
          {allRestaurants.map((restaurant, index) => (
            <Restaurant key={index} restaurant={restaurant} navigation={navigation} />
          ))}
        </div>
      </Fragment>
    );
  }
  return (
    <>
      {renderCategories()}
      {renderResturants()}
      {renderBannerSlider()}
    </>
  );
};
export default CustomerHome;
