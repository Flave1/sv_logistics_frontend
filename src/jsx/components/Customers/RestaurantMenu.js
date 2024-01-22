import React, { Fragment, useEffect, useState } from 'react';
import MenuGrid from './components/MenuGrid';
import CategorySlider from '../Dashboard/Dashboard/CategorySlider';
import { Modal } from 'react-bootstrap';
import avatar1 from '../../../images/avatar/1.jpg';
import { useLocation } from 'react-router-dom';
import { getRestaurantsMenuAction } from '../../../store/actions/CustomerActions';
import { useDispatch, useSelector } from 'react-redux';

function RestaurantMenu() {
  const [reviewModal, setReviewModal] = useState(false);
  const dispatch = useDispatch();
  const [restaurantParam, setRestaurantParam] = useState({ name: '', id: '', table: '' });
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.split('/');
    setRestaurantParam({ name: pathName[1], id: pathName[2], table: pathName[4] });
  }, [location.pathname]);

  const { menuList } = useSelector((state) => state.customer);

  useEffect(() => {
    async function fetchData() {
      await getRestaurantsMenuAction(restaurantParam.id)(dispatch);
    }
    restaurantParam.id && fetchData();
  }, [restaurantParam.id]);

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
  function renaderMenu() {
    return (
      <Fragment>
        <div className="row">
          {menuList.map((menu, index) => (
            <MenuGrid key={index} menu={menu} setReviewModal={setReviewModal} />
          ))}
          <Modal show={reviewModal} onHide={setReviewModal} className="modal fade" id="reviewModal">
            <>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Review</h5>
                  <button type="button" className="btn-close" data-dismiss="modal" onClick={() => setReviewModal(false)}></button>
                </div>
                <div className="modal-body">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setReviewModal(false);
                    }}
                  >
                    <div className="text-center mb-4">
                      <img className="img-fluid rounded" width={78} src={avatar1} alt="DexignZone" />
                    </div>
                    <div className="form-group">
                      <div className="rating-widget mb-4 text-center">
                        {/* Rating Stars Box */}
                        <div className="rating-stars">
                          <ul id="stars" className="d-flex justify-content-center align-items-center">
                            <li>
                              <i className="fa fa-star me-1" />
                            </li>{' '}
                            <li>
                              <i className="fa fa-star me-1" />
                            </li>{' '}
                            <li>
                              <i className="fa fa-star me-1" />
                            </li>{' '}
                            <li>
                              <i className="fa fa-star me-1" />
                            </li>{' '}
                            <li>
                              <i className="fa fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <textarea className="form-control" placeholder="Comment" rows={5} defaultValue={''} />
                    </div>
                    <button className="btn btn-success btn-block">RATE</button>
                  </form>
                </div>
              </div>
            </>
          </Modal>
        </div>
      </Fragment>
    );
  }
  return (
    <>
      {renderCategories()}
      {renaderMenu()}
    </>
  );
}
export default RestaurantMenu;
