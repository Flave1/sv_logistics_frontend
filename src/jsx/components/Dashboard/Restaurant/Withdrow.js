import React from 'react';
//import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import swal from "sweetalert";



function Withdrow(){
    // useEffect(()=>{
    //     var mess = document.getElementById('alertMessg')
    //     function Message(){        
    //         swal("Good job!", "Your payment is successful", "success");
    //     }
    //     mess.addEventListener("click", Message);
    // })
    return(
        <>
            <div className="row">
                <div className="col-xl-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="withdrow-bx">
                                <h3>Request a Withdrawal</h3>
                                <select className="form-select" aria-label="Default select example mb-3">
                                    <option selected>Axis Bank Ltd</option>
                                    <option value="1">Bandhan Bank Ltd.</option>
                                    <option value="2">CSB Bank Ltd.</option>
                                    <option value="3">HDFC Bank Ltd.</option>
                                    <option value="3">Dhanlaxmi Bank Ltd.</option>
                                    <option value="3">Federal Bank Ltd.</option>
                                </select>                                
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Account Number</label>
                                        <input type="number" className="form-control" placeholder="123456789" />                                    
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Account Name</label>
                                        <input type="text" className="form-control" placeholder="Jordan Nico" />
                                        <div className="form-text">Account name must match the name on your bank account </div>                                    
                                    </div>
                                    <div>
                                        <Link to={"#"} className="btn btn-primary" 
                                           // id="alertMessg"
                                            onClick={()=>  swal("Good job!", "Your payment is successful", "success")}                                            
                                        >Confirm</Link>
                                        <Link to={"#"} className="ms-3">Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="card h-auto">
                        <div className="card-body">
                            <div className="widhdrow-side mt-xl-0 mt-4">
                                <div>
                                    <span>Amount to be recived</span>
                                    <h4>14983320.00</h4>
                                </div>
                                <div>
                                    <span>invoice id</span>
                                    <h6>152690258</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Withdrow;