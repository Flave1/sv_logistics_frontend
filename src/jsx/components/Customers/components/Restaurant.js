import React from 'react';
import { Link } from 'react-router-dom';
import { starOne } from '../../AppsMenu/Shop/productData/ProductStar';
const dynamicurl = 'theplace';
const Restaurant = ({ restaurant, navigation }) => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
      <div className="card">
        <div className="card-body">
          <div className="new-arrival-product">
            <div className="new-arrivals-img-contnent">
              <Link to={`/${restaurant.name.replace(/\s+/g, '-')}/${restaurant.id}/menu/${-1}`}>
                <span className="text-primary small text-lowercase">
                  {restaurant.openingTime}
                  {' - '}
                  {restaurant.closingTime}
                </span>
                <img className="img-fluid" src={restaurant.image} alt="" />
              </Link>
            </div>
            <div className="new-arrival-content text-center mt-3 ">
              <h4>
                <Link to={`/${restaurant.name.toLowerCase().replace(/\s+/g, '-')}/${restaurant.id}/menu/${-1}`}>{restaurant.name}</Link>
              </h4>
              {starOne}
              <span className="">{restaurant.address}</span>
              <div className="d-flex align-items-center justify-content-between mb-1 gap">
                <Link to={`/${restaurant.name.toLowerCase().replace(/\s+/g, '-')}/${restaurant.id}/menu/${-1}`} className="text-primary">
                  <i className="bi bi-truck"></i> FREE
                </Link>
                <span className="mb-0 text-sm"> 2mins - 5mins</span>
                {/* <strong className="mb-0 cate-title " ></strong> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
