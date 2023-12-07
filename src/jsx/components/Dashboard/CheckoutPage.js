import React, {useReducer} from 'react';
import {Link} from 'react-router-dom';
import swal from "sweetalert";
import Select from 'react-select';

const Country = [
    {value:'coun', label:'Country'},
    {value:'ind', label:'India'},
    {value:'usa', label:'Usa'},
    {value:'fra', label:'France'},
    {value:'brazil', label:'Brazil'},
    {value:'dubai', label:'Dubai'}
];

const options = [
    {value:'0', label:'Month'},
    {value:'1', label:'Jan'},
    {value:'2', label:'Feb'},
    {value:'3', label:'Mar'},
    {value:'4', label:'Apr'},
    {value:'5', label:'May'},
    {value:'6', label:'June'},
    {value:'7', label:'July'},
    {value:'8', label:'Aug'},
    {value:'9', label:'Sep'},
    {value:'10', label:'Oct'},
    {value:'11', label:'Nov'},
    {value:'12', label:'Dec'},
];
const options2 = [
    {value:'1', label:'1997'},
    {value:'2', label:'1998'},
    {value:'3', label:'1999'},
    {value:'4', label:'2000'},
    {value:'5', label:'2001'},
    {value:'6', label:'2002'},
    {value:'7', label:'2003'},
    {value:'8', label:'2004'},
    {value:'9', label:'2005'},
    {value:'10', label:'2006'},
    {value:'11', label:'2007'},
    {value:'12', label:'2008'},
    {value:'13', label:'2009'},
];

const CheckoutPage = () =>{   
    return(
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-8">
                                    <h4>Chosse a plan</h4>
                                    <div className="d-flex align-items-center veg mb-3">
                                        <div className="form-check me-3">
                                            <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">Non-veg</label>
                                        </div>
                                        <div className="form-check style-1">
                                            <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label" for="flexRadioDefault2">Veg</label>
                                        </div>
                                    </div>
                                    <div className="basci-bx mb-3">
                                        <div className="basci-title">
                                            <h4>Your basic information</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <form>
                                                    <div className="mb-3">
                                                        <input type="Text" className="form-control" placeholder="First Name" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-xl-6">
                                                <form>
                                                    <div className="mb-3">
                                                        <input type="Text" className="form-control" placeholder="Last Name" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="mb-3">
                                                    <input type="email" className="form-control" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder="Company Name" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Billing-bx mb-3">
                                        <div className="billing-title">
                                            <h4>Billing address</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="mb-3">
                                                    <input type="email" className="form-control" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="mb-3">
                                                    <input type="Text" className="form-control" placeholder="City" />  
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <Select 
                                                    className="custom-react-select mb-xl-0 mb-3" 
                                                    options={Country}
                                                    defaultValue={Country[0]}
                                                    isSearchable={false}
                                                />
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="mb-3">
                                                    <input type="number" className="form-control" placeholder="Enter a pin no." />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="mb-3">
                                                    <input type="number" className="form-control" placeholder="Enter a phone no." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment-bx mb-3">
                                        <div className="payment-title">
                                            <h4>Your payment information</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="mb-3">
                                                    <input type="number" className="form-control" placeholder="Enter a card no." />
                                                </div>
                                            </div>
                                            <div className="col-xl-4">                                           
                                                <Select 
                                                    className="custom-react-select mb-xl-0 mb-3" 
                                                    options={options} 
                                                    defaultValue = {options[0]}
                                                    isSearchable={false}
                                                
                                                />
                                            </div>
                                            <div className="col-xl-4">
                                                <Select 
                                                    className="custom-react-select mb-xl-0 mb-3" 
                                                    options={options2} 
                                                    defaultValue = {options2[0]}
                                                    isSearchable={false}
                                                
                                                />
                                                
                                            </div>
                                            <div className="col-xl-4">
                                                <div className="input-group mb-3">
                                                    <input type="number" className="form-control" placeholder="cvv" />
                                                    <span className="input-group-text" id="basic-addon2"><i className="fa-solid fa-credit-card"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <span>By clicking Checkout Now you agree to the <Link to={"#"} className="text-primary fw-bold">Term of Service</Link>  and <Link to={"#"} className="text-primary fw-bold">privacy policey</Link></span>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="card">
                                        <div className="card-header py-3">
                                            <h4 className="mb-0">Your Cart</h4>
                                        </div>
                                        <div className="card-body pt-3">
                                            <div className="checkout-right">
                                                <span className="checkout-title">ADD A TIP FOR YOUR RIDER</span>
                                                <p>The entire amount will be transfered to the rider.valid only if you pay online</p>
                                                <div className="">
                                                    <span className="badge badge-primary me-2 c-pointer"><i className="fa-solid fa-dollar-sign"></i>+5</span>
                                                    <span className="badge badge-primary me-2 c-pointer"><i className="fa-solid fa-dollar-sign"></i>+5</span>
                                                    <span className="badge badge-primary me-2 c-pointer"><i className="fa-solid fa-dollar-sign"></i>+5</span>
                                                </div>
                                                <div className="bill-details mt-4 border-bottom">
                                                    <h6>Bill Details</h6>
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <span>item Total</span>
                                                        <span><i className="fa-solid fa-dollar-sign">585</i></span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <span>Deliver Fee | 4.7kms</span>
                                                        <span className="text-primary"><del className="me-3 del-color"><i className="fa-solid fa-dollar-sign"></i>24.00</del>FREE</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between mt-3 border-bottom">
                                                    <span className="mb-3">item Discount <i className="fa-solid fa-circle-exclamation"></i></span>
                                                    <span className="text-primary mb-3">-<i className="fa-solid fa-dollar-sign"></i>79.99</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between my-3">
                                                    <span className="mb-3">To pay</span>
                                                    <span className="text-primary mb-3">-<i className="fa-solid fa-dollar-sign"></i>23.99</span>
                                                </div>
                                                <button className="btn btn-primary btn-block" id="b3"
                                                    onClick={()=>swal("Good job!", "Your order is delivered", "success")} 
                                                >
                                                    PLACE ORDER
                                                </button> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default CheckoutPage;