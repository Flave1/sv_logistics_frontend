import React,{useState, useReducer} from 'react';
import {Link} from 'react-router-dom';
import {Accordion, Dropdown} from 'react-bootstrap';

//images
import review1 from './../../../../images/resturent-review/pic-1.jpg';
import popreview from './../../../../images/popular-img/review-img/pic-1.jpg';
import popre1 from './../../../../images/popular-img/pic-1.jpg';
import order2 from './../../../../images/deliver-order/pic-2.jpg';
import order3 from './../../../../images/deliver-order/pic-3.jpg';
import order4 from './../../../../images/deliver-order/pic-4.jpg';

const accordData = [
    {image:review1,order:'1', btntheme:'btn-outline-success bgl-success', status:'Completed'},
    {image:order2,order:'2', btntheme:'btn-outline-danger bgl-danger', status:'Canceled'},
    {image:order3,order:'3', btntheme:'btn-outline-primary bgl-primary', status:'Delivering'},
    {image:order4,order:'4', btntheme:'btn-outline-success bgl-success', status:'Completed'},
];

const reducer = (state, action) =>{   
    switch(action.type) {
        case 'option1' : 
            return  state = 'All Rating';
            //break;
        case 'option2' : 
            return state = 'Low Rating';          
            //break;
        case 'option3' : 
            return  state = 'High Rating';   
            //break;
        default :
            return state;    
    }
}

function DeliverOrder (){
    const [deliverOption, setDeliverOption] = useState('Lastest');
    const [state , dispatch] = useReducer(reducer, 'Low Rating');
    return(
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card h-auto deliver-order">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h4 className="cate-title mb-0">Ongoing Order</h4>
                                <Dropdown>
                                    <Dropdown.Toggle as="div" className="btn-link i-false">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item>Edit</Dropdown.Item>
                                        <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-xxl-6 col-sm-6  border-right">                                    
                                    <div className="mb-md-2">
                                        <h4 className="mb-0">Order #1</h4>
                                        <p className="mb-0">June 1, 2022, 08:22 AM</p>
                                    </div>
                                    <div className="dliver-order-bx d-flex align-items-center">
                                        <img src={review1} className="me-2" alt="" />
                                        <div>
                                            <h6 className="font-w500 text-nowrap">Ruby Roben</h6>
                                            <span>User since 2022</span>
                                        </div>
                                    </div>                                    
                                    <div className="address-bx mt-3">
                                        <span className="d-block mb-2 font-w500">Delivery Address</span>
                                        <div className="d-flex align-items-center mb-2">
                                            <svg className="me-2" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.4599 8.63006C17.3195 7.16898 16.8031 5.76915 15.9611 4.56688C15.119 3.36462 13.98 2.4009 12.6549 1.76956C11.3298 1.13822 9.86376 0.860785 8.3996 0.964268C6.93543 1.06775 5.52301 1.54863 4.29988 2.36006C3.24908 3.06271 2.36693 3.98936 1.71682 5.07346C1.06672 6.15755 0.664776 7.37217 0.539881 8.63006C0.417363 9.87972 0.574555 11.141 1.00005 12.3223C1.42555 13.5037 2.10868 14.5755 2.99988 15.4601L8.29988 20.7701C8.39284 20.8638 8.50344 20.9382 8.6253 20.989C8.74716 21.0397 8.87787 21.0659 9.00988 21.0659C9.14189 21.0659 9.2726 21.0397 9.39446 20.989C9.51632 20.9382 9.62692 20.8638 9.71988 20.7701L14.9999 15.4601C15.8911 14.5755 16.5742 13.5037 16.9997 12.3223C17.4252 11.141 17.5824 9.87972 17.4599 8.63006ZM13.5999 14.0501L8.99988 18.6501L4.39988 14.0501C3.72197 13.3721 3.20268 12.5524 2.87935 11.6498C2.55601 10.7473 2.43667 9.78426 2.52988 8.83006C2.6237 7.86117 2.93164 6.92522 3.43145 6.08991C3.93126 5.25459 4.61044 4.54077 5.41988 4.00006C6.48083 3.2953 7.72619 2.91936 8.99988 2.91936C10.2736 2.91936 11.5189 3.2953 12.5799 4.00006C13.3869 4.53868 14.0646 5.24935 14.5642 6.081C15.0639 6.91266 15.3732 7.84467 15.4699 8.81007C15.5661 9.76749 15.4483 10.7343 15.1249 11.6406C14.8014 12.5469 14.2805 13.3699 13.5999 14.0501ZM8.99988 5.00006C8.10986 5.00006 7.23984 5.26399 6.49982 5.75845C5.75979 6.25292 5.18302 6.95572 4.84242 7.77799C4.50183 8.60026 4.41271 9.50506 4.58635 10.378C4.75998 11.2509 5.18856 12.0527 5.8179 12.682C6.44724 13.3114 7.24906 13.74 8.12197 13.9136C8.99489 14.0872 9.89969 13.9981 10.722 13.6575C11.5442 13.3169 12.247 12.7402 12.7415 12.0001C13.236 11.2601 13.4999 10.3901 13.4999 9.50006C13.4972 8.3074 13.0223 7.16434 12.1789 6.321C11.3356 5.47766 10.1925 5.00271 8.99988 5.00006ZM8.99988 12.0001C8.50543 12.0001 8.02208 11.8534 7.61096 11.5787C7.19983 11.304 6.8794 10.9136 6.69018 10.4568C6.50096 9.99996 6.45145 9.49729 6.54792 9.01234C6.64438 8.52739 6.88248 8.08193 7.23211 7.7323C7.58175 7.38267 8.0272 7.14456 8.51215 7.0481C8.99711 6.95164 9.49977 7.00115 9.95659 7.19037C10.4134 7.37958 10.8039 7.70002 11.0786 8.11114C11.3533 8.52226 11.4999 9.00561 11.4999 9.50006C11.4999 10.1631 11.2365 10.799 10.7676 11.2678C10.2988 11.7367 9.66292 12.0001 8.99988 12.0001Z" fill="#FC8019"/>
                                            </svg>
                                            <h5 className="mb-0">Elm Street, 23</h5>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-xxl-6 col-sm-6 b-right">
                                    <div className="order-menu">
                                        <h4 className=" ms-0">Order Menu</h4>
                                        <div className="d-flex align-items-center mb-3 justify-content-xl-center justify-content-start">
                                            <img className="me-2" src={popreview} alt="" />
                                            <div>
                                                <h6 className="font-w600 text-nowrap mb-0">Pepperoni Pizza</h6>
                                                <p className="mb-0">x1</p>
                                            </div>
                                            <h6 className="text-primary mb-0 ms-auto">+$5.59</h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-xl-center justify-content-start mb-3">
                                            <img className="me-2" src={popre1} alt="" />
                                            <div>
                                                <h6 className="font-w600 text-nowrap mb-0">Pepperoni Pizza</h6>
                                                <p className="mb-0">x1</p>
                                            </div>
                                            <h6 className="text-primary mb-0 ms-auto">+$5.59</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-xxl-6 col-sm-6 border-right">
                                    <div className="px- xl-3 px-0 mb-sm-0 mb-3">
                                        <h4 className="mb-0">Fast Food Resto</h4>
                                        <div className="d-flex align-items-center mb-3">
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0.500031L9.79611 6.02789H15.6085L10.9062 9.4443L12.7023 14.9722L8 11.5558L3.29772 14.9722L5.09383 9.4443L0.391548 6.02789H6.20389L8 0.500031Z" fill="#FC8019"/>
                                            </svg>
                                            <p className="mb-0 px-2">5.0</p>
                                            <svg className="me-2" width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2.50003" r="2" fill="#C4C4C4"/>
                                            </svg>
                                            <p className="mb-0">1k+ Reviews</p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="font-w500">Delivery Time </span>
                                            <h6 className="mb-0 font-w500">10 Min</h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="font-w500">Distance</span>
                                            <h6 className="mb-0 font-w500">2.5 Km</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3  col-xxl-6 col-sm-6">
                                    <div className="px-sm-0 px-0">
                                        <div className="mb-sm-5 mb-3">
                                            <h4 className="font-w500 del-color">Payment Method</h4>
                                            <h4 className="cate-title">Cash</h4>
                                        </div>
                                        <div>
                                            <h4 className="font-w500 del-color">Total</h4>
                                            <h4 className="cate-title text-primary">$202.00</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <h4 className="cate-title">Order History</h4>
                                <div className="d-flex align-items-center">                                    
                                    <Dropdown className="me-3 deliver-drop">
                                        <Dropdown.Toggle as="div" className="form-control default-select ms-0 mb-4 border i-false deliver-drop-toggle">
                                            {deliverOption} <i className="fas fa-chevron-down drop-toggle-icon"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={()=>setDeliverOption('Lastest')}>Lastest</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>setDeliverOption('Oldest')}>Oldest</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>setDeliverOption('Newest')}>Newest</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    
                                    <Dropdown className="deliver-drop">
                                        <Dropdown.Toggle as="div" className="form-control ms-0 default-select mb-4 border deliver-drop-toggle style2 i-false">
                                            {state} <i className="fas fa-chevron-down drop-toggle-icon" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={()=>dispatch({type : 'option1'})}>All Rating</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>dispatch({type : 'option2'})}>Low Rating</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>dispatch({type : 'option3'})}>High Rating</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>  
                            <div className="card h-auto">
                                <div className="card-body p-2">
                                    <Accordion id="accordion-one" className="style-1 order-accord">
                                        {accordData.map((data, i)=>(
                                            <Accordion.Item eventKey={`${i}`}>
                                                <Accordion.Header>
                                                    <div>
                                                        <h4 className="font-w500 mb-0">Order #{data.order}</h4>
                                                        <span>June 1, 2022, 08:22 AM</span>
                                                    </div>
                                                    <div className="dliver-order-bx d-flex align-items-center">
                                                        <img  className="me-2" src={data.image} alt="" />
                                                        <div>
                                                            <h6 className="font-w500">Ruby Roben</h6>
                                                            <span>User since 2022</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">Total</p>
                                                        <h4 className="font-w600">$202.00</h4>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">Restaurant</p>
                                                        <h5 className="font-w600">Fast Food Restaurant</h5>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">Address</p>
                                                        <div className="d-flex align-tems-center">
                                                            <svg className="me-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M20.4604 10.13C20.32 8.66891 19.8036 7.26908 18.9616 6.06681C18.1195 4.86455 16.9805 3.90083 15.6554 3.26949C14.3303 2.63815 12.8642 2.36072 11.4001 2.4642C9.93592 2.56768 8.5235 3.04856 7.30037 3.86C6.24957 4.56264 5.36742 5.48929 4.71731 6.57339C4.0672 7.65748 3.66526 8.8721 3.54037 10.13C3.41785 11.3797 3.57504 12.6409 4.00054 13.8223C4.42604 15.0036 5.10917 16.0755 6.00037 16.96L11.3004 22.27C11.3933 22.3637 11.5039 22.4381 11.6258 22.4889C11.7477 22.5397 11.8784 22.5658 12.0104 22.5658C12.1424 22.5658 12.2731 22.5397 12.3949 22.4889C12.5168 22.4381 12.6274 22.3637 12.7204 22.27L18.0004 16.96C18.8916 16.0755 19.5747 15.0036 20.0002 13.8223C20.4257 12.6409 20.5829 11.3797 20.4604 10.13ZM16.6004 15.55L12.0004 20.15L7.40037 15.55C6.72246 14.872 6.20317 14.0523 5.87984 13.1498C5.5565 12.2472 5.43715 11.2842 5.53037 10.33C5.62419 9.3611 5.93213 8.42516 6.43194 7.58984C6.93175 6.75452 7.61093 6.0407 8.42037 5.5C9.48131 4.79523 10.7267 4.41929 12.0004 4.41929C13.2741 4.41929 14.5194 4.79523 15.5804 5.5C16.3874 6.03861 17.065 6.74928 17.5647 7.58093C18.0644 8.41259 18.3737 9.3446 18.4704 10.31C18.5666 11.2674 18.4488 12.2343 18.1254 13.1405C17.8019 14.0468 17.281 14.8698 16.6004 15.55ZM12.0004 6.5C11.1104 6.5 10.2403 6.76392 9.5003 7.25838C8.76028 7.75285 8.18351 8.45565 7.84291 9.27792C7.50232 10.1002 7.4132 11.005 7.58684 11.8779C7.76047 12.7508 8.18905 13.5526 8.81839 14.182C9.44773 14.8113 10.2495 15.2399 11.1225 15.4135C11.9954 15.5872 12.9002 15.498 13.7224 15.1575C14.5447 14.8169 15.2475 14.2401 15.742 13.5001C16.2364 12.76 16.5004 11.89 16.5004 11C16.4977 9.80733 16.0228 8.66428 15.1794 7.82093C14.3361 6.97759 13.193 6.50264 12.0004 6.5ZM12.0004 13.5C11.5059 13.5 11.0226 13.3534 10.6114 13.0787C10.2003 12.804 9.87989 12.4135 9.69067 11.9567C9.50145 11.4999 9.45194 10.9972 9.54841 10.5123C9.64487 10.0273 9.88297 9.58186 10.2326 9.23223C10.5822 8.8826 11.0277 8.6445 11.5126 8.54803C11.9976 8.45157 12.5003 8.50108 12.9571 8.6903C13.4139 8.87952 13.8043 9.19995 14.079 9.61107C14.3537 10.0222 14.5004 10.5055 14.5004 11C14.5004 11.663 14.237 12.2989 13.7681 12.7678C13.2993 13.2366 12.6634 13.5 12.0004 13.5Z" fill="#FC8019"/>
                                                            </svg>
                                                            <h5 className="mb-0">Elm Street, 23 Yogyakarta</h5>
                                                        </div>
                                                    </div>
                                                    <button className={`btn me-5 ${data.btntheme}`}>{data.status}</button>
                                                </Accordion.Header>
                                                <Accordion.Body eventKey={`${i}`}>
                                                    <div className="row">
                                                        <div className="col-xl-3 col-xxl-6 col-sm-6 b-right style-1">
                                                            <div className="order-menu my-4 dlab-space">
                                                                <h4 className="">Order Menu</h4>
                                                                <div className="d-flex align-items-center justify-content-xl-center justify-content-lg-start  mb-2">
                                                                    <img className="me-2" src={popreview} alt="" />
                                                                    <div>
                                                                        <h6 className="font-w600 text-nowrap mb-0">Pepperoni Pizza</h6>
                                                                        <p className="mb-0">x1</p>
                                                                    </div>
                                                                    <h6 className="text-primary mb-0 ps-3 ms-auto">+$5.59</h6>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-xl-center justify-content-lg-start">
                                                                    <img className="me-2" src={popre1} alt="" />
                                                                    <div>
                                                                        <h6 className="font-w600 text-nowrap mb-0">Pepperoni Pizza</h6>
                                                                        <p className="mb-0">x1</p>
                                                                    </div>
                                                                    <h6 className="text-primary mb-0 ps-3 ms-auto">+$5.59</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-xxl-6 col-sm-6 my-4 b-right">
                                                            <div className="dlab-space">
                                                                <div>
                                                                    <h4 className="mb-2">Fast Food Resto</h4>
                                                                    <div className="d-flex align-items-center mb-4">
                                                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8 0.500031L9.79611 6.02789H15.6085L10.9062 9.4443L12.7023 14.9722L8 11.5558L3.29772 14.9722L5.09383 9.4443L0.391548 6.02789H6.20389L8 0.500031Z" fill="#FC8019"/>
                                                                        </svg>
                                                                        <p className="mb-0 px-2">5.0</p>
                                                                        <svg className="me-2" width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="2" cy="2.50003" r="2" fill="#C4C4C4"/>
                                                                        </svg>
                                                                        <p className="mb-0">1k+ Reviews</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span>Delivery Time </span>
                                                                    <h6 className="mb-0">10 Min</h6>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <span>Distance</span>
                                                                    <h6 className="mb-0">2.5 Km</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-xxl-6 col-sm-6 my-4 b-right style-1">
                                                            <div className="dlab-space">
                                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                                    <p className="mb-0">Status</p>
                                                                    <p className="mb-0">Date</p>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-between mb-4">
                                                                    <h6 className="font-w500">Completed</h6>	
                                                                    <h6 className="font-w500">June 1, 2022</h6>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                                    <p className="mb-0">Bills</p>
                                                                    <p className="mb-0">Date Paid</p>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="font-w500">Order #1</h6>	
                                                                    <h6 className="font-w500">June 1, 2022</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-sm-6 mt-4 ms-sm-0 ms-3">
                                                            <p className="fs-18 font-w500">Total</p>
                                                            <h4 className="cate-title text-primary">$202.00</h4>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))} 
                                    </Accordion>    
                                </div>
                            </div>        
                        </div> 
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-sm-between justify-content-center flex-wrap pagination-bx">
                    <div className="mb-sm-0 mb-3 pagination-title">
                        <p className="mb-0"><span>Showing 1-5</span> from <span>100</span> data</p>
                    </div>
                    <nav>
                        <ul className="pagination pagination-gutter">
                            <li className="page-item page-indicator">
                                <Link to={"#"} className="page-link" >
                                    <i className="la la-angle-left"></i>
                                </Link>
                            </li>
                            <li className="page-item active"><Link to={"#"} className="page-link" >1</Link></li>
                            <li className="page-item"><Link to={"#"} className="page-link" >2</Link></li>
                            <li className="page-item"><Link to={"#"} className="page-link" >3</Link></li>
                            <li className="page-item page-indicator">
                                <Link to={"#"} className="page-link" >
                                    <i className="la la-angle-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>        
        </>
    )
}
export default DeliverOrder;