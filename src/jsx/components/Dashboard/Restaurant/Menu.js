import React, {useReducer} from 'react';
import { Link } from "react-router-dom";
import {Modal} from 'react-bootstrap';
//import { actions } from 'react-table';
import MenuCategorySlider from './MenuCategorySlider';
import MenuPopularSlider from './MenuPopularSlider';
import BestSellerSlider from './BestSellerSlider';
import PromoSlider from './PromoSlider';

//const init =  false;
function reducer (state, action){   
    if(action.type==="addMenu"){
        return {...state, addMenu: !state.addMenu};
    }
}

const Menu = () =>{
    const [state , dispatch] = useReducer(reducer, false);
    return(
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap">
                        <div className="input-group search-area2">
                            <span className="input-group-text p-0">
                                <Link to={"#"}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z" fill="#FC8019"/>
                                    </svg>
                                </Link>
                            </span>
                            <input type="text" className="form-control p-0" placeholder="Search here" />
                        </div>
                        
                        <button type="button" className="btn btn-primary mt-3 mt-sm-0" onClick={() => dispatch({type:'addMenu'})}>Add New Menu</button>                                  
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <h4 className="mb-0 cate-title">Category</h4>
                        <Link to={"/favorite-menu"} className="text-primary">View all <i className="fa-solid fa-angle-right ms-2"></i></Link>
                    </div>
                    <MenuCategorySlider />
                </div>
                <div className="col-xl-12">
                    <div className="d-flex align-items-center justify-content-between mb-2 mt-sm-0 mt-3">
                        <h4 className=" mb-0 cate-title">Popular This Week</h4>
                        <Link to={"/favorite-menu"} className="text-primary">View all <i className="fa-solid fa-angle-right ms-2"></i></Link>
                    </div>
                    <MenuPopularSlider /> 
                </div>    
                <div className="col-xl-12">
                    <div className="d-flex align-items-center justify-content-between mb-2 mt-sm-0 mt-3">
                        <h4 className=" mb-0 cate-title">Best Seller</h4>
                        <Link to={"/favorite-menu"} className="text-primary">View all <i className="fa-solid fa-angle-right ms-2"></i></Link>
                    </div>
                    <BestSellerSlider />
                </div>
                <div className="col-xl-12">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <h4 className=" mb-0 cate-title">Promo</h4>
                        <Link to={"/favorite-menu"} className="text-primary">View all <i className="fa-solid fa-angle-right ms-2"></i></Link>
                    </div>
                    <PromoSlider />
                </div>
            </div>
            
            <Modal className="modal fade" show={state.addMenu} onHide={()=>dispatch({type:'addMenu'})}>                
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel" >Add Menu</h5>
                    <button type="button" className="btn-close" onClick={() => dispatch({type:'addMenu'})}></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="d-flex align-items-center veg justify-content-center">
                            <div className="form-check me-3 ">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">Non veg</label>
                            </div>   
                            <div className="form-check style-1">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">Veg</label>
                            </div>
                        </div>
                        <div className="modal-inside">
                            <label for="exampleInputText" className="form-label">Item Title</label>
                            <input type="text" className="form-control" id="exampleInputText" placeholder="" />                                    
                        </div>
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="modal-inside">
                                    <label for="exampleInputnumber" className="form-label mb-2">Item Pricing</label>
                                    <input type="number" className="form-control" id="exampleInputnumber" />
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="modal-inside">
                                    <label for="exampleInputnumber-1" className="form-label mb-2">Delivery Charge</label>
                                    <input type="number" className="form-control" id="exampleInputnumber-1" />
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="modal-inside">
                                    <label for="exampleInputnumber-2" className="form-label mb-2">GST</label>
                                    <input type="number" className="form-control" id="exampleInputnumber-2" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-inside">
                            <label for="exampleInputnumber-3" className="form-label mb-2">Phone Number</label>
                            <input type="number" className="form-control" id="exampleInputnumber-3" />
                        </div>
                        <div className="modal-inside">
                            <label for="exampleInputEmail1" className="form-label mb-2">Email Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => dispatch({type:'addMenu'})}>Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                    
            </Modal>    

        </>
    )
}
export default Menu; 