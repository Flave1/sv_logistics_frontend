import React,{useContext, useEffect, useReducer,  useState} from 'react';
import {Link} from 'react-router-dom';
//import {NavLink} from 'react-router-dom';
//import loadable from "@loadable/component";
//import pMinDelay from "p-min-delay";
import {Dropdown, Modal} from 'react-bootstrap';

//Import Components
import { ThemeContext } from "../../../../context/ThemeContext";
import BannerSlider from './../Dashboard/BannerSlider';
import CategorySlider from './../Dashboard/CategorySlider';
import PopularDishesSlider from './../Dashboard/PopularDishesSlider';
import RecentOrderSlider from './../Dashboard/RecentOrderSlider';

import Pic1 from './../../../../images/popular-img/review-img/pic-1.jpg';
import Pic2 from './../../../../images/popular-img/review-img/pic-2.jpg';
import Pic3 from './../../../../images/popular-img/review-img/pic-3.jpg';
import BannerPic from './../../../../images/banner-img/pic-2.jpg';

const orderBlog = [
	{id: 1, image:Pic1, number: 1},
	{id: 2, image:Pic2, number: 1},
	{id: 3, image:Pic3, number: 1},
	{id: 4, image:Pic1, number: 1},
];

const reducer = (previousState, updatedState) => ({
	...previousState,
	...updatedState,
});

const Theme4 = () => {
	const [dropSelect, setDropSelect] = useState('Other');
	const [detailsModal, setDetailsModal] = useState(false);
	const [notesModal, setNotesModal] = useState(false);
	const { changeBackground,
        //changeSideBarLayout,
        //changeContainerPosition,
        changePrimaryColor,
        chnageSidebarColor,
        chnageHaderColor,
        changeNavigationHader
     } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
		//changeSideBarLayout({ value: "horizontal", label: "Horizontal" });
		//changeContainerPosition({ value: "wide", label: "Wide" });
		chnageSidebarColor("color_9");
		changePrimaryColor("color_9");
		chnageHaderColor("color_1");
		changeNavigationHader("color_9");
	}, []);
	
	const [state, setState] = useReducer(reducer, {orderBlog : orderBlog});	
	const handleCountAdd = (e) => {
		let temp = state.orderBlog.map((data) => {
            if (e === data.id) {
                return { ...data, number: data.number + 1 };
            }
            return data;
        });
        setState({orderBlog : temp});
	}
	const handleCountMinus = (e) => {
		let temp = state.orderBlog.map((data) => {
            if (e === data.id) {
                return { ...data, number: data.number > 0 ? data.number - 1 : data.number };
            }
            return data;
        });
        setState({orderBlog : temp});
	}

	return(
		<>
			<div className="row">
				<div className="col-xl-8 col-xxl-7">
					<div className="row">
						<div className="col-xl-12">
							<BannerSlider />
						</div>

						<div className="col-xl-12">
							<div className="d-flex align-items-center justify-content-between mb-2 gap">
								<h4 className=" mb-0 cate-title">Category</h4>
								<Link to="/favorite-menu" className="text-primary">View all <i className="fa-solid fa-angle-right ms-2"></i></Link>
							</div>
							<CategorySlider />
						</div>	
						<div className="col-xl-12">
							<div className="d-flex align-items-center justify-content-between mb-2">
								<h4 className=" mb-0 cate-title">Popular Dishes</h4>
								<Link to="/favorite-menu" className="text-primary">View all <i className="fa-solid fa-angle-right ms-2"></i></Link>
							</div>
							<PopularDishesSlider />
						</div>
						<div className="col-xl-12">
							<div className="d-flex align-items-center justify-content-between mb-2">
								<h4 className=" mb-0 cate-title">Recent Order</h4>
								<Link to="/favorite-menu" className="text-primary">View all <i className="fa-solid fa-angle-right ms-2"></i></Link>
							</div>
							<RecentOrderSlider />
						</div>
					</div>
							
				</div>
				<div className="col-xl-4 col-xxl-5">
					<div className="row">
						<div className="col-xl-12">
							<div className="card dlab-bg dlab-position">
								<div className="card-header border-0 pb-0">
									<h4 className="cate-title">Your Balance</h4>
								</div>
								<div className="card-body pt-0 pb-2">
									<div className="card bg-primary blance-card">
										<div className="card-body">
											<h4 className="mb-0">Balance</h4>
											<h2>$12.000</h2>
											<div className="change-btn d-flex">
												<Link to={"#"} className="btn me-1">
													<svg className="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path opacity="0.3" d="M2 13C2 12.5 2.5 12 3 12C3.5 12 4 12.5 4 13C4 13.3333 4 15 4 18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13C20 12.4477 20.4477 12 21 12C21.5523 12 22 12.4477 22 13V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18C2 15 2 13.3333 2 13Z" fill="#3D4152"/>
														<path d="M13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V2C11 1.44771 11.4477 1 12 1C12.5523 1 13 1.44771 13 2V14Z" fill="#3D4152"/>
														<path d="M12.0362 13.622L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L11.2929 15.7071C11.669 16.0832 12.2736 16.0991 12.669 15.7433L17.669 11.2433C18.0795 10.8738 18.1128 10.2415 17.7433 9.83103C17.3738 9.42052 16.7415 9.38725 16.331 9.7567L12.0362 13.622Z" fill="#3D4152"/>
													</svg>
													Top Up
												</Link>
												<Link to={"#"} className="btn ms-1">
													<svg className="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path opacity="0.3" d="M2 13C2 12.5 2.5 12 3 12C3.5 12 4 12.5 4 13C4 13.3333 4 15 4 18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13C20 12.4477 20.4477 12 21 12C21.5523 12 22 12.4477 22 13V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18C2 15 2 13.3333 2 13Z" fill="#3D4152"/>
														<path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V3Z" fill="#3D4152"/>
														<path d="M12.0362 3.37798L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289L11.2929 1.2929C11.669 0.916813 12.2736 0.900912 12.669 1.25671L17.669 5.75671C18.0795 6.12617 18.1128 6.75846 17.7433 7.16897C17.3738 7.57948 16.7415 7.61275 16.331 7.2433L12.0362 3.37798Z" fill="#3D4152"/>
													</svg>
													Transfer
												</Link>
											</div>
										</div>
									</div>
									<div className="bb-border">
										<p className="font-w500 text-primary fs-15 mb-2">Your Address</p>
										<div className="d-flex  align-items-center justify-content-between mb-2">
											<h4 className="mb-0">
												<svg className="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M20.46 9.63C20.3196 8.16892 19.8032 6.76909 18.9612 5.56682C18.1191 4.36456 16.9801 3.40083 15.655 2.7695C14.3299 2.13816 12.8639 1.86072 11.3997 1.96421C9.93555 2.06769 8.52314 2.54856 7.3 3.36C6.2492 4.06265 5.36706 4.9893 4.71695 6.07339C4.06684 7.15749 3.6649 8.37211 3.54 9.63C3.41749 10.8797 3.57468 12.1409 4.00017 13.3223C4.42567 14.5036 5.1088 15.5755 6 16.46L11.3 21.77C11.393 21.8637 11.5036 21.9381 11.6254 21.9889C11.7473 22.0397 11.878 22.0658 12.01 22.0658C12.142 22.0658 12.2727 22.0397 12.3946 21.9889C12.5164 21.9381 12.627 21.8637 12.72 21.77L18 16.46C18.8912 15.5755 19.5743 14.5036 19.9998 13.3223C20.4253 12.1409 20.5825 10.8797 20.46 9.63ZM16.6 15.05L12 19.65L7.4 15.05C6.72209 14.3721 6.20281 13.5523 5.87947 12.6498C5.55614 11.7472 5.43679 10.7842 5.53 9.83C5.62382 8.86111 5.93177 7.92516 6.43157 7.08985C6.93138 6.25453 7.61056 5.54071 8.42 5C9.48095 4.29524 10.7263 3.9193 12 3.9193C13.2737 3.9193 14.5191 4.29524 15.58 5C16.387 5.53862 17.0647 6.24928 17.5644 7.08094C18.064 7.9126 18.3733 8.84461 18.47 9.81C18.5663 10.7674 18.4484 11.7343 18.125 12.6406C17.8016 13.5468 17.2807 14.3698 16.6 15.05ZM12 6C11.11 6 10.24 6.26392 9.49994 6.75839C8.75992 7.25286 8.18314 7.95566 7.84255 8.77793C7.50195 9.6002 7.41284 10.505 7.58647 11.3779C7.7601 12.2508 8.18869 13.0526 8.81802 13.682C9.44736 14.3113 10.2492 14.7399 11.1221 14.9135C11.995 15.0872 12.8998 14.9981 13.7221 14.6575C14.5443 14.3169 15.2471 13.7401 15.7416 13.0001C16.2361 12.26 16.5 11.39 16.5 10.5C16.4974 9.30734 16.0224 8.16428 15.1791 7.32094C14.3357 6.4776 13.1927 6.00265 12 6ZM12 13C11.5055 13 11.0222 12.8534 10.6111 12.5787C10.2 12.304 9.87952 11.9135 9.6903 11.4567C9.50109 10.9999 9.45158 10.4972 9.54804 10.0123C9.6445 9.52733 9.88261 9.08187 10.2322 8.73224C10.5819 8.38261 11.0273 8.1445 11.5123 8.04804C11.9972 7.95158 12.4999 8.00109 12.9567 8.1903C13.4135 8.37952 13.804 8.69996 14.0787 9.11108C14.3534 9.5222 14.5 10.0056 14.5 10.5C14.5 11.163 14.2366 11.7989 13.7678 12.2678C13.2989 12.7366 12.663 13 12 13Z" fill="var(--primary)"/>
												</svg>
												Elm Street, 23
											</h4>
											<Link to={"#"} className="btn btn-outline-primary btn-sm change">Change</Link>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt. </p>
										<div className="d-flex">
											<button type="button" className="btn btn-primary" onClick={()=>setDetailsModal(true)}>
												Add Details
											</button>
											{/* <!-- Modal --> */}
											<button type="button" className="btn btn-primary ms-2" onClick={()=>setNotesModal(true)}>Add Note</button>
											{/* <!-- Modal --> */}
										</div>
									</div>
									{state.orderBlog.map((item, index)=>(
										<div className="order-check d-flex align-items-center my-3" key={index}>
											<div className="dlab-media">
												<img src={item.image} alt="" />
											</div>
											<div className="dlab-info">
												<div className="d-flex align-items-center justify-content-between">
													<h4 className="dlab-title"><Link to={"#"}>Pepperoni Pizza</Link></h4>
													<h4 className="text-primary ms-2">+$5.59</h4>
												</div>
												<div className="d-flex align-items-center justify-content-between">
													<span>x1</span>
													<div className="quntity">
														<button data-decrease onClick={()=> handleCountMinus(item.id)}>-</button>
														<input data-value type="text" value={item.number}   />
														<button data-increase onClick={()=> handleCountAdd(item.id)}>+</button>
													</div>
												</div>
											</div>
										</div>
									))}
									
									<hr className="my-2 text-primary" style={{opacity:"0.9"}} /> 
								</div>	
								<div className="card-footer  pt-0 border-0">
									<div className="d-flex align-items-center justify-content-between">
										<p>Service</p>
										<h4 className="font-w500">+$1.00</h4>
									</div>
									<div className="d-flex align-items-center justify-content-between mb-3">
										<h4 className="font-w500">Total</h4>
										<h3 className="font-w500 text-primary">$202.00</h3>
									</div>
									<Link to="/checkout" className="btn btn-primary btn-block">Checkout</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<div className="card bg-primary blance-card-1 border-primary h-100">
								<div className="card-body pe-0 p-4 pb-3">
									<div className="dlab-media d-flex justify-content-between">
										<div className="dlab-content">
											<h4 className="cate-title">Get Discount VoucherUp To 20%  </h4>
											<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
										</div>	
										<div className="dlab-img">
											<img src={BannerPic} alt="" />
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal  id="exampleModal" show={detailsModal} onHide={setDetailsModal} centered>				
				<div className="modal-header">
					<h5 className="modal-title" id="exampleModalLabel">Add Location Details</h5>
					<button type="button" className="btn-close" onClick={()=>setDetailsModal(false)}></button>
				</div>
				<div className="modal-body add-loaction">
					<div className="row">
						<div className="col-xl-12">
							<form>
								<div className="mb-3">
									<label className="form-label">Location Name</label>
									<input type="Text" className="form-control" placeholder="HOUSE/FLAT/BLOCK NO." /> 										
								</div>
							</form>
							
						</div>
						<div className="col-xl-12">
							<form>
								<div className="mb-3">
									<label className="form-label">LANDMARK</label>
									<input type="Text" className="form-control" placeholder="LANDMARK" />								
								</div>
							</form>
						</div>
						<div className="col-xl-6">
							<form>
								<div className="mb-3">
									<label className="form-label">Available For Order</label>
									<input type="Text" className="form-control" placeholder="Yes" />								
								</div>
							</form>
						</div>
						<div className="col-xl-6">
							<p className="mb-1">Address type</p>
							{/* <select className="form-control default-select ms-0 py-4 wide" >
								<option>Home</option>
								<option>Office</option>
								<option>Other</option>
							</select> */}
							<Dropdown className="drop-select-blog">
								<Dropdown.Toggle as="div" className="form-control default-select ms-0 py-4 wide i-false">
									{dropSelect} <i className="fas fa-chevron-down drop-select-icon"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item onClick={()=>setDropSelect('Home')}>Home</Dropdown.Item>
									<Dropdown.Item onClick={()=>setDropSelect('Office')}>Office</Dropdown.Item>
									<Dropdown.Item onClick={()=>setDropSelect('Other')}>Other</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-secondary" onClick={()=>setDetailsModal(false)}>Close</button>
					<button type="button" className="btn btn-primary">Save changes</button>
				</div>
			</Modal>
			<Modal className="modal fade" id="exampleModal2" show={notesModal} onHide={setNotesModal}>	
				<div className="modal-header">
					<h5 className="modal-title" id="exampleModalLabel2">Manage Route Notes</h5>
					<button type="button" className="btn-close" onClick={()=>setNotesModal(false)}></button>
				</div>
				<div className="modal-body add-note">
					<div className="row align-items-center">
						<div className="col-xl-12">
							<form className="mb-3">
								<label className="form-label">Update Type</label>
								<input type="Text" className="form-control" placeholder="Drop Off Occurred" />
							</form>
						</div>
						
						<div className="col-xl-12">
							<form className=" mb-3"> 
								<label className="form-label">Drop Off Location</label>
								<input type="Text" className="form-control" placeholder="Front Door" />
							</form>									
						</div>								
						<div className="col-xl-12">
							<div className="mb-3">
								<label className="form-label">Notes</label>
								<textarea className="form-control" placeholder="Delivery was successful." id="floatingTextarea"></textarea>								
							</div>
						</div>
						<div className="col-xl-12">
							<div className="mb-3">
								<label className="from-label">Address</label>
								<input type="Text" className="form-control" placeholder="Elm Street, 23" />
							</div>
						</div>
					</div>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-secondary" onClick={()=>setNotesModal(false)}>Close</button>
					<button type="button" className="btn btn-primary">Save changes</button>
				</div>
			</Modal>
		</>
	)
}
export default Theme4;