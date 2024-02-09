// FoodDeliverySpinner.js

import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './util.css';
import { useSelector } from 'react-redux';
const FoodDeliverySpinner = () => {
  const { showLoading } = useSelector((state) => state.auth);

  const [show, setShow] = useState(false);

  useEffect(() => {
    showLoading ? setShow(true) : setShow(false);
  }, [showLoading]);


  return show ? (
    <div className="overlay">
      <Spinner animation="grow" role="status" className="spinner">
        <span className="visually-hidden">Loading...</span>
        {/* You can replace the following div with your preferred food delivery icon */}
        {/* <div style={{ backgroundImage: '../../images/vector/spinnerlogo.png' }} className="food-delivery-icon"></div> */}
      </Spinner>
    </div>
  ) : null;
};

export default FoodDeliverySpinner;
