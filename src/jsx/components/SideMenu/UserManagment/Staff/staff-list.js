import React, { Fragment, useEffect, useReducer, useState } from "react";
import PageTitle from "../../../../layouts/PageTitle";
import { Dropdown } from "react-bootstrap";
import { Button, Modal} from "react-bootstrap";
/// images
import avartar5 from "../../../../../images/avatar/5.png";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getAllStaff } from "../../../../../store/actions/UserActions";
import { loadingToggleAction } from "../../../../../store/actions/CommonActions";
import { createStaffAction } from "../../../../../store/actions/AuthActions";
import { useNavigate } from 'react-router-dom'

const StaffList = (props) => {
  const navigate = useNavigate();
  const initialState = false;
  const reducer = (state, action) =>{
    switch (action.type){
      case 'addStaff':
        return { ...state, staff: !state.staff }
      default:
        return state	
    }	
  }
  const drop = (
    <Dropdown>
      <Dropdown.Toggle
        variant=""
        className="btn btn-primary tp-btn-light sharp i-false"
      >
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
        <Dropdown.Item href="#">Edit</Dropdown.Item>
        <Dropdown.Item href="#" className="text-danger">
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
  const chackboxFun = (type) => {
    setTimeout(() => {
      const chackbox = document.querySelectorAll(".customer_shop_single input");
      const motherChackBox = document.querySelector(".customer_shop input");

      for (let i = 0; i < chackbox.length; i++) {
        const element = chackbox[i];
        if (type === "all") {
          if (motherChackBox.checked) {
            element.checked = true;
          } else {
            element.checked = false;
          }
        } else {
          if (!element.checked) {
            motherChackBox.checked = false;
            break;
          } else {
            motherChackBox.checked = true;
          }
        }
      }
    }, 100);
  };
  const chack = (i) => (
    <div className={`form-check custom-checkbox ms-2`}>
      <input
        type="checkbox"
        className="form-check-input "
        id={`checkAll${i}`}
        required=""
        onClick={() => chackboxFun()}
      />
      <label className="form-check-label" htmlFor={`checkAll${i}`}></label>
    </div>
  );
  
  useEffect(() => {
    props.get_staff();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const [email, setEmail] = useState('');
  let errorsObj = { email: '', firstName: '', lastName: '', phoneNumber: '', address: '' };
  const [errors, setErrors] = useState(errorsObj);
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const dispatch2 = useDispatch();

  function onSave(e) {
      e.preventDefault();
      let error = false;
      const errorObj = { ...errorsObj };
      if (email === '') {
          errorObj.email = 'Email is Required';
          error = true;
      }
      if (firstName === '') {
          errorObj.firstName = 'Firstname is Required';
          error = true;
      }
      if (lastName === '') {
        errorObj.lastName = 'Lastname is Required';
        error = true;
      }
      if (phoneNumber === '') {
        errorObj.phoneNumber = 'Phone Number is Required';
        error = true;
      }
      if (address === '') {
        errorObj.address = 'Address is Required';
        error = true;
      }
      setErrors(errorObj);
      if (error) {
        return ;
      }

      dispatch2(loadingToggleAction(true));

  const createStaff = {
    email,
    firstName,
    lastName,
    phoneNumber,
    address,
    password: "Password123",
    restaurantId: 1,
    userType: 2,
    courierType: 1

  };
  dispatch2(createStaffAction(createStaff, navigate));
}
  return (
    <Fragment>
      <PageTitle activeMenu="Staff List" motherMenu="User Management" />
      <Link to={"#"} className="btn btn-primary ms-1 text-right" data-target="#staffModal" onClick={() => dispatch({type:'addStaff'})}>Add</Link>
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
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkAll"
                            onClick={() => chackboxFun("all")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkAll"
                          ></label>
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th className="ps-5 width200">Address</th>
                      <th>Joined</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody id="customers">
                    {props.staffs &&
                      props.staffs.map((row, idx) => {
                        return <TR row={row} chack={chack} drop={drop} key={idx}/>;
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Staff Modal */}
			  <Modal show={state.staff} className="modal fade" id="staffModal" onHide={() => dispatch({type:'addStaff'})}>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Add Staff</h5>
						<Button variant=""  type="button" className="close" data-dismiss="modal" onClick={() => dispatch({type:'addStaff'})} >
							<span>×</span>
						</Button>
						
					</div>
					<div className="modal-body">
          <form onSubmit={onSave}>
						{/* <textarea name="textarea" id="textarea" cols={30} rows={5} className="form-control mb-2 bg-transparent" placeholder="Please type what you want...." defaultValue={""}/> */}
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group mb-3 row">
                        <label
                          className="col-lg-12 col-form-label"
                          htmlFor="val-email"
                        >
                          Email <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-12">
                          <input
                            type="text"
                            className="form-control"
                            id="val-email"
                            name="val-email"
                            placeholder="Your valid email.." 
                            value={email} onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && <div className="text-danger fs-12">{errors.email}</div>}
                        </div>
                  </div>
                  <div className="form-group mb-3 row">
                              <label
                                className="col-lg-12 col-form-label"
                                htmlFor="val-firstName"
                              >
                                First Name
                                <span className="text-danger">*</span>
                              </label>
                              <div className="col-lg-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="val-firstName"
                                  name="val-firstName"
                                  placeholder="Enter first name.." 
                                  value={firstName} onChange={(e) => setFirstname(e.target.value)}
                                />
                                {errors.firstName && <div className="text-danger fs-12">{errors.firstName}</div>}
                              </div>
                  </div>
                  <div className="form-group mb-3 row">
                              <label
                                className="col-lg-12 col-form-label"
                                htmlFor="val-lastName"
                              >
                                Last Name
                                <span className="text-danger">*</span>
                              </label>
                              <div className="col-lg-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="val-lastName"
                                  name="val-lastName"
                                  placeholder="Enter last name.."
                                  value={lastName} onChange={(e) => setLastname(e.target.value)}
                                />
                                {errors.lastName && <div className="text-danger fs-12">{errors.lastName}</div>}
                              </div>
                  </div>
                  <div className="form-group mb-3 row">
                              <label
                                className="col-lg-12 col-form-label"
                                htmlFor="val-phoneNumber"
                              >
                                Phone Number
                                <span className="text-danger">*</span>
                              </label>
                              <div className="col-lg-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="val-phoneNumber"
                                  name="val-phoneNumber"
                                  placeholder="Enter phone number.." 
                                  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                {errors.phoneNumber && <div className="text-danger fs-12">{errors.phoneNumber}</div>}
                              </div>
                  </div>
                  <div className="form-group mb-3 row">
                              <label
                                className="col-lg-12 col-form-label"
                                htmlFor="val-address"
                              >
                                Address
                                <span className="text-danger">*</span>
                              </label>
                              <div className="col-lg-12">
                              <textarea
                              className="form-control"
                              id="val-address"
                              name="val-address"
                              rows="5"
                              placeholder="Enter contact address" 
                              value={address} onChange={(e) => setAddress(e.target.value)}
                            ></textarea>
                            {errors.address && <div className="text-danger fs-12">{errors.address}</div>}
                              </div>
                  </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-rounded mt-1">Submit</button>
            </form>
					</div>
				</div>
			</Modal>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    staffs: state.user.staffs,
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    get_staff: () => getAllStaff()(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StaffList);

function TR({ row, chack, drop }) {
  return (
    <tr className="btn-reveal-trigger">
      <td className="customer_shop_single">{chack(1)}</td>
      <td className="py-3">
        <Link to="/ecom-customers">
          <div className="media d-flex align-items-center">
            <div className="avatar avatar-xl me-2">
              <div className="">
                <img
                  className="rounded-circle img-fluid"
                  src={avartar5}
                  width="30"
                  alt=""
                />
              </div>
            </div>
            <div className="media-body">
              <h5 className="mb-0 fs--1">
                {row.firstName + " " + row.lastName}
              </h5>
            </div>
          </div>
        </Link>
      </td>
      <td className="py-2">
        <a href="mailto:${row.email}">{row.email}</a>
      </td>
      <td className="py-2">
        {" "}
        <a href="tel:2012001851">{row.phoneNumber}</a>
      </td>
      <td className="py-2 ps-5 wspace-no">{row.address}</td>
      <td className="py-2">{row.createdAt}</td>
      <td className="py-2 text-right">{drop}</td>
    </tr>
  );
}
