import React, { useState } from 'react';

/// Data
import { Link } from 'react-router-dom';
import { starFour } from '../../AppsMenu/Shop/productData/ProductStar';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartAction, RemoveFromCartAction } from '../../../../store/actions/CustomerActions';

const MenuGrid = ({ menu, setReviewModal, sessionId, auth, menuCart, pathname }) => {
  const [activeTab, setActiveTab] = useState('2');
  const dispatch = useDispatch();
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  function addToCart() {
    AddToCartAction({
      customerId: auth.id,
      restaurantId: menu.restaurantId,
      menuId: menu.id,
      quantity: 1,
      price: menu.price,
      temporalId: sessionId,
    })(dispatch);
  }
  function removeFromCart() {
    RemoveFromCartAction(menu.id, auth.id, sessionId)(dispatch);
  }

  const quantity = menuCart.find((mn) => mn.menuId == menu.id)?.quantity ?? 0;
  return (
    <div className="col-lg-12 col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="row m-b-30">
            <div className="col-md-5 col-xxl-12 d-flex align-items-center justify-content-center">
              <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                <div className="new-arrivals-img-contnent" style={{ overflow: 'hidden' }}>
                  <img className="img-fluid" src={menu.image} alt="" width={'100%'} style={{ borderRadius: 100 }} />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-xxl-12">
              <div className="new-arrival-content position-relative">
                <h4>
                  <Link to="#">{menu.name}</Link>
                </h4>
                <div className="comment-review star-rating">
                  {starFour}
                  <span className="review-text">(34 reviews) / </span>
                  <a className="product-review" data-toggle="modal" onClick={() => setReviewModal(true)} data-target="#reviewModal">
                    Write a review?
                  </a>
                  <p className="price">
                    {menu.currencyCode}
                    {menu.price}
                  </p>
                </div>
                <p>
                  Availability:{' '}
                  <span className="item">
                    {' '}
                    {!menu.availability ? (
                      <span>
                        <i className="fa fa-check-circle text-success" /> available
                      </span>
                    ) : (
                      <span>
                        <i className="bi bi-x-circle text-danger"> not available </i>
                      </span>
                    )}
                  </span>
                </p>
                <p>
                  <span className="item">{menu.categoryName}</span>{' '}
                </p>
                {/* <p>
                  Brand: <span className="item">Lee</span>
                </p> */}
                <p className="text-content" style={{ maxHeight: '150px', overflow: 'scroll', textOverflow: 'ellipsis' }}>
                  {menu.dietaryInformation}
                </p>
                {/* <div className="d-flex align-items-center justify-content-between">
                  <strong className="text-primary"></strong>
                </div> */}
                <div className="btn-group" data-toggle="buttons">
                  <label
                    className={classnames({ active: activeTab === '1' }) + ' btn btn-outline-primary '}
                    onClick={() => {
                      toggle('2');
                      removeFromCart();
                    }}
                  >
                    <i className="bi bi-dash"></i>
                  </label>
                  <label
                    className={classnames({ active: activeTab === '2' }) + ' btn btn-outline-primary '}
                    onClick={() => {
                      toggle('2');
                    }}
                  >
                    {quantity}
                  </label>
                  <label
                    className={classnames({ active: activeTab === '3' }) + ' btn btn-outline-primary '}
                    onClick={() => {
                      toggle('2');
                      addToCart();
                    }}
                  >
                    <i className="bi bi-plus"></i>
                  </label>
                  <label className={' btn  light'}>
                    {/* <input type="radio" className="position-absolute invisible" name="options" id="option3" />{" "}LG */}
                  </label>
                  <label
                    className={classnames({ active: activeTab === '4' }) + ' btn btn-outline-primary '}
                    onClick={() => {
                      toggle('2');
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuGrid;
