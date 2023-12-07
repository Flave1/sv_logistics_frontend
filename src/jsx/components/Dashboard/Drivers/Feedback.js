import React,{useState, useReducer} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

import ApexChartStatistic from './ApexChartStatistic';
import RecentSlider from './RecentSlider';

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

function Feedback (){
    const [deliverOption, setDeliverOption] = useState('Lastest');
    const [state , dispatch] = useReducer(reducer, 'Low Rating');
    return(
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card h-auto">
                        <div className="card-body pb-0">
                            <div className="row">
                                <div className="col-xl-9 col-lg-12">
                                    <h3 className="font-w700">Statistic</h3>
                                    {/* <div id="chartBar"></div> */}
                                    <ApexChartStatistic />
                                </div>
                                <div className="col-xl-3 col-lg-12">
                                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                                        <div>
                                            <select className="form-control default-select  me-3 ms-0  border" >
                                                <option>This Month</option>
                                                <option>This Week</option>
                                                <option>Last Week</option>
                                            </select>
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Toggle as="div" className="btn-link i-false" >
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
                                    <div className="feedback-right mb-4">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="d-flex align-items-center">
                                                <svg  className="me-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="1.5" y="1.5" width="9" height="9" rx="4.5" fill="white" stroke="#FC8019" strokeWidth="3"/>
                                                </svg>
                                                <span>Positive</span>
                                            </div>
                                            <div className="d-flex align-items-center ms-4">
                                                <svg  className="me-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="1.5" width="9" height="9" rx="4.5" fill="white" stroke="#EB5757" strokeWidth="3"/>
                                                </svg>
                                                <span>Bad</span>
                                            </div>
                                        </div>
                                        <h4 className="font-w400 text-nowrap">Positive Feedback</h4>
                                        <h3 className="font-w700">3.456</h3>
                                    
                                        <div className="d-flex align-items-center flex-wrap">
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1001_21)">
                                                <path d="M23.25 12.5C23.25 6.275 18.225 1.25 12 1.25C5.775 1.25 0.75 6.275 0.75 12.5C0.749999 18.725 5.775 23.75 12 23.75C18.225 23.75 23.25 18.725 23.25 12.5ZM11.25 17.075L11.25 10.175L9.3 11.9C8.85 12.275 8.25 12.2 7.875 11.825C7.725 11.6 7.65 11.375 7.65 11.15C7.65 10.85 7.8 10.55 8.025 10.4L11.625 7.25C11.7 7.175 11.775 7.175 11.85 7.1C11.925 7.1 11.925 7.1 12 7.025C12.075 7.025 12.075 7.025 12.15 7.025L12.225 7.025C12.3 7.025 12.3 7.025 12.375 7.025L12.45 7.025C12.525 7.025 12.525 7.025 12.6 7.1C12.6 7.1 12.675 7.1 12.675 7.175L12.75 7.25C12.75 7.25 12.75 7.25 12.825 7.325L15.975 10.55C16.35 10.925 16.35 11.6 15.975 11.975C15.6 12.35 14.925 12.35 14.55 11.975L13.125 10.475L13.125 17.15C13.125 17.675 12.675 18.2 12.075 18.2C11.7 18.05 11.25 17.6 11.25 17.075Z" fill="#FC8019"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_1001_21">
                                            <rect width="24" height="24" fill="white" transform="translate(24 0.5) rotate(90)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                            <h4 className="text-primary mb-0 mx-2">+15%</h4>
                                            <span>From last month</span>
                                        </div>
                                    </div>
                                    <div className="feedback-right mb-3 mb-md-0">
                                        <h4 className="font-w400">Bad Feedback</h4>
                                        <h3 className="font-w700">3.456</h3>
                                    
                                        <div className="d-flex align-items-center flex-wrap mb-xl-0 mb-3">
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1001_28)">
                                                    <path d="M0.75 12.5C0.75 18.725 5.775 23.75 12 23.75C18.225 23.75 23.25 18.725 23.25 12.5C23.25 6.275 18.225 1.25 12 1.25C5.775 1.25 0.75 6.275 0.75 12.5ZM12.75 7.925L12.75 14.825L14.7 13.1C15.15 12.725 15.75 12.8 16.125 13.175C16.275 13.4 16.35 13.625 16.35 13.85C16.35 14.15 16.2 14.45 15.975 14.6L12.375 17.75C12.3 17.825 12.225 17.825 12.15 17.9C12.075 17.9 12.075 17.9 12 17.975C11.925 17.975 11.925 17.975 11.85 17.975L11.775 17.975C11.7 17.975 11.7 17.975 11.625 17.975L11.55 17.975C11.475 17.975 11.475 17.975 11.4 17.9C11.4 17.9 11.325 17.9 11.325 17.825L11.25 17.75C11.25 17.75 11.25 17.75 11.175 17.675L8.025 14.45C7.65 14.075 7.65 13.4 8.025 13.025C8.4 12.65 9.075 12.65 9.45 13.025L10.875 14.525L10.875 7.85C10.875 7.325 11.325 6.8 11.925 6.8C12.3 6.95 12.75 7.4 12.75 7.925Z" fill="#EB5757"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1001_28">
                                                <rect width="24" height="24" fill="white" transform="translate(0 24.5) rotate(-90)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                            <h4 className="text-danger mb-0 mx-2">+15%</h4>
                                            <span>From last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <h4 className="cate-title">Recent Feedback</h4>
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
                            <RecentSlider />                                       
                        </div>
                    </div>    

                </div>
                <div className="d-flex align-items-center justify-content-sm-between justify-content-center flex-wrap pagination-bx mb-0">
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
export default Feedback;