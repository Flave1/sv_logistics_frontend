import React,{useState} from 'react';
import { Dropdown, Modal } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PerfectScrollbar from "react-perfect-scrollbar";

import pic1 from './../../../images/chat-img/pic-1.jpg';
import pic2 from './../../../images/chat-img/pic-2.jpg';
import pic3 from './../../../images/chat-img/pic-3.jpg';
import pic4 from './../../../images/chat-img/pic-4.jpg';
import pic5 from './../../../images/chat-img/pic-5.jpg';

function MessageBox1({order, image}){
    return(
        <>
            <li className="chat-bx">
                <div className="chat-img">
                    <img src={image} alt="" />
                </div>
                <div className="mid-info">
                    <h4 className="name mb-2">Driver #{order}</h4>
                    <span>Lorem ipsum dolor sit amet...</span>
                </div>
                <div className="right-info">
                    <p className="mb-2">12:45 PM</p>
                    <span className="badge badge-primary">2</span>
                </div>                                    
            </li>
        </>
    )
}

function MessageBox2({order, image}){
    return(
        <>
            <li className="chat-bx">
                <div className="chat-img">
                    <img src={image} alt="" />
                </div>
                <div className="mid-info">
                    <h4 className="name mb-2">Driver #{order}</h4>
                    <span>Lorem ipsum dolor sit amet...</span>
                </div>
                <div className="right-info">
                    <p className="mb-2">12:45 PM</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.2632 21.7501C7.8747 21.7501 7.4907 21.6008 7.1997 21.3098L2.68995 16.8001C2.1027 16.2136 2.1027 15.2611 2.68995 14.6746C3.2772 14.0873 4.2282 14.0873 4.81545 14.6746L8.4417 18.3008L19.3954 10.7821C20.0794 10.3126 21.0154 10.4866 21.4849 11.1706C21.9552 11.8553 21.7812 12.7906 21.0964 13.2608L9.1137 21.4861C8.85495 21.6631 8.5587 21.7501 8.2632 21.7501Z" fill="#2D9CDB"/>
                        <path d="M8.2632 13.4821C7.8747 13.4821 7.4907 13.3328 7.1997 13.0418L2.68995 8.53207C2.1027 7.94482 2.1027 6.99307 2.68995 6.40657C3.2772 5.81932 4.2282 5.81932 4.81545 6.40657L8.4417 10.0328L19.3954 2.51407C20.0794 2.04457 21.0154 2.21857 21.4849 2.90257C21.9552 3.58732 21.7812 4.52257 21.0964 4.99282L9.1137 13.2188C8.85495 13.3958 8.5587 13.4821 8.2632 13.4821Z" fill="#2D9CDB"/>
                    </svg>
                </div>
            </li>
        </>
    )
}

function Message(){
    const [addContact,setAddContact] = useState(false);
    return(
        <>
            <div className="row">
                <div className="col-xl-4">
                    <div className="card chat-box h-auto">
                        <div className="card-header border-0 px-4">
                            <div className="input-group search-area2">
                                <span className="input-group-text">
                                    <Link to={"#"}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z" fill="#FC8019"/>
                                        </svg>
                                    </Link>
                                </span>
                                <input type="text" className="form-control" placeholder="Search here" />
                            </div>
                            <button className="text-white btn btn-primary ms-2" onClick={()=>setAddContact(true)}><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <PerfectScrollbar className="dlab-scroll">
                            <div className="card-body  pt-0" id="chat-sidebar">
                                <span className="font-w600 fs-18">Your Chat</span>
                                <ul>
                                    <MessageBox1 order="1" image={pic1} />
                                    <MessageBox2 order="2" image={pic2} />
                                    <MessageBox1 order="3" image={pic3} />
                                    <MessageBox1 order="4" image={pic4} />
                                    <MessageBox1 order="5" image={pic5} />
                                    <MessageBox2 order="6" image={pic1} />
                                </ul>
                            </div>
                        </PerfectScrollbar>
                        <div className="card-footer border-0">
                            <Link to={"#"} className="btn btn-outline-primary light btn-block">View More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 chat-mid-area">                    
                    <div className="card h-auto">
                        <div className="card-header d-block">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center chat-media">
                                    <img src={pic1} alt="" />
                                    <div className="chat-media-content">
                                        <h4 className="mb-0">Driver #2</h4>
                                        <ul className="d-flex align-items-center">
                                            <li>
                                                <svg className="me-2" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="16" height="16" rx="4" fill="#1FBF75"/>
                                                </svg>
                                            </li>
                                            <li><span className=" mb-0">Online</span></li>
                                        </ul>
                                        
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Link to={"#"}>
                                        <svg className="me-4 video" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.7483 8.22933C28.5679 8.10727 28.3602 8.03129 28.1436 8.00805C27.927 7.9848 27.7079 8.015 27.5057 8.096L22.6057 10.056C22.4602 9.11461 21.9836 8.25601 21.2616 7.63469C20.5396 7.01337 19.6195 6.6701 18.667 6.66666H6.66699C5.60613 6.66666 4.58871 7.08809 3.83857 7.83824C3.08842 8.58838 2.66699 9.6058 2.66699 10.6667V21.3333C2.66699 22.3942 3.08842 23.4116 3.83857 24.1618C4.58871 24.9119 5.60613 25.3333 6.66699 25.3333H18.667C19.6193 25.3299 20.5392 24.9869 21.2612 24.3658C21.9832 23.7448 22.46 22.8865 22.6057 21.9453L27.5057 23.9053C27.708 23.9862 27.9271 24.0162 28.1437 23.9928C28.3603 23.9693 28.5679 23.8932 28.7483 23.7709C28.9286 23.6487 29.0763 23.4842 29.1784 23.2916C29.2804 23.0991 29.3337 22.8846 29.3337 22.6667V9.33333C29.3337 9.1155 29.2804 8.90097 29.1783 8.70852C29.0763 8.51606 28.9287 8.35154 28.7483 8.22933ZM18.667 22.6667H6.66699C6.31337 22.6667 5.97423 22.5262 5.72418 22.2761C5.47413 22.0261 5.33366 21.687 5.33366 21.3333V10.6667C5.33366 10.313 5.47413 9.9739 5.72418 9.72386C5.97423 9.47381 6.31337 9.33333 6.66699 9.33333H18.667C19.0206 9.33333 19.3598 9.47381 19.6098 9.72386C19.8598 9.9739 20.0003 10.313 20.0003 10.6667V21.3333C20.0003 21.687 19.8598 22.0261 19.6098 22.2761C19.3598 22.5262 19.0206 22.6667 18.667 22.6667ZM26.667 20.6973L22.667 19.0973V12.9027L26.667 11.3027V20.6973Z" fill="#3D4152"/>
                                        </svg>
                                    </Link>
                                    <Dropdown className="dropdown">
                                        <Dropdown.Toggle as="div" className="btn-link i-false">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu align="end">
                                            <Dropdown.Item >Edit</Dropdown.Item>
                                            <Dropdown.Item >Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <PerfectScrollbar className="chat-box-area dlab-scroll" id="chartBox">
                                <div className="media mt-0">
                                    <div className="message-received w-auto mb-2">
                                        <h6 className="mb-3">Driver</h6>
                                        <h6 className="d-chat font-w400">Hello !</h6>
                                    </div>
                                </div>
                                <div className="media mt-0 d-block justify-content-start align-items-start">
                                    <div className="message-received d-flex justify-content-start">                                        
                                        <h6 className="d-chat font-w400">Your order according to application yes?</h6>
                                    </div>
                                    <span className=" media style-1">12:45 PM</span>
                                </div>
                                
                                <div className="media mb-2 justify-content-end align-items-end">
                                    <h6>You</h6>
                                </div>
                                <div className="media mb-3 justify-content-end align-items-end">
                                    <div className="message-sent">
                                        <h6 className="d-chat mb-0">Hello</h6>
                                    </div>
                                </div>                                    
                                <div className="media mb-4 justify-content-end align-items-end">
                                    <div className="message-sent d-flex justify-content-end">
                                        <div>
                                            <h6 className="d-chat">Yes, my order according to 
                                                application. Thank you</h6>
                                            <span className="mb-0 me-auto message-span">12:45 PM</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </PerfectScrollbar>    
                                <div className="type-massage">
                                    <div className="input-group">
                                    <textarea className="form-control" placeholder="Message..."></textarea>
                                    <div className="input-group-append d-flex align-items-center">
                                        <div className="btn share-btn">
                                            <input type="file" id="file-input" />
                                            <label for="file-input">
                                                <Link to={"#"}><i className="fa fa-paperclip fa-2x"></i></Link>
                                                <span></span>
                                            </label>
                            
                                        </div>
                                        <button type="button" className="btn btn-primary text-white"><span>Send</span>
                                            <svg className="ms-sm-2 ms-0" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 6.46222V8.88889C4.5 9.44111 4.052 9.88911 3.5 9.88911C2.948 9.88911 2.5 9.44111 2.5 8.88889V5C2.5 4.67022 2.663 4.36066 2.935 4.17478C3.208 3.98811 3.555 3.94844 3.862 4.06822L21.862 11.0682C22.247 11.2176 22.5 11.5878 22.5 12C22.5 12.4122 22.247 12.7824 21.862 12.9318L3.862 19.9318C3.555 20.0516 3.208 20.0119 2.935 19.8252C2.663 19.6393 2.5 19.3298 2.5 19C2.5 19 2.5 16.0686 2.5 13.9997C2.5 12.343 3.843 10.9998 5.5 10.9998H10.5C11.052 10.9998 11.5 11.4478 11.5 12C11.5 12.5522 11.052 13.0002 10.5 13.0002C10.5 13.0002 7.569 13.0002 5.5 13.0002C4.948 13.0002 4.5 13.4474 4.5 13.9997V17.5378L18.741 12L4.5 6.46222Z" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Modal className="modal fade" id="exampleModal" show={addContact}  onHide={setAddContact} centered>               
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" onClick={()=>setAddContact(false)}></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-xl-12 mb-3">
                            <form>
                                <label className="form-label">Driver Name</label>
                                <input type="text" className="form-control" placeholder="Jack" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={()=>setAddContact(false)}>Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>                    
            </Modal>
        </>
    )
}
export default Message;