import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="container p-5">
        {' '}
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-5">
            <div className="form-input-content text-center error-page">
              {/* <h1 className="error-text font-weight-bold">400</h1> */}
              <h4>
                <i className="fa fa-thumbs-up text-success" /> Success
              </h4>
              <p>Your meal is currently being prepared with care</p>
              <div>
                <Link className="btn btn-success" to="#">
                  CLICK HERE TO SEE ORDER STATUS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default OrderSuccess;
