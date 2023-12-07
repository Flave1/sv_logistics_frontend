import React,{useReducer} from 'react';
import {Link} from 'react-router-dom';
import {Sparklines, SparklinesLine} from 'react-sparklines';

import RestActiveUser from './RestActiveUser';
import PerformanceChart from './PerformanceChart';
import ApexBarChart from './ApexBarChart';
import OrderAreaChart from './OrderAreaChart';
import PopularPieChart from './PopularPieChart';
import { Dropdown } from 'react-bootstrap';

const sparklinedata = [4,7,4,9,5,6,8,3,1,3,5,6];

const reducer = (state, action) =>{   
    switch(action.type) {
        case 'option1' : 
            return  state = 'Year';
            //break;
        case 'option2' : 
            return state = 'Month';          
            //break;
        case 'option3' : 
            return  state = 'Week';   
            //break;
        default :
            return state;    
    }
}

function Restaurant(){
    const [state , dispatch] = useReducer(reducer, 'Year');
    return(
        <>
            <div className="row">
                <div className="col-xl-8">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card income-bx">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-6">
                                            <div className="line position-relative">
                                                <p className="font-w500 mb-0">Total Income</p>
                                                <h2 className="mb-0 text-primary">$12,890,00</h2>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-6">
                                            <p className="font-w500 text-success mb-0">Income</p>
                                            <h4 className="cate-title data">$4345,00</h4>
                                            <ul className="d-flex align-items-center">
                                                <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_1055_214)">
                                                    <path d="M17.4375 9C17.4375 4.33125 13.6688 0.5625 9 0.5625C4.33125 0.562499 0.5625 4.33125 0.5625 9C0.562499 13.6687 4.33125 17.4375 9 17.4375C13.6687 17.4375 17.4375 13.6687 17.4375 9ZM8.4375 12.4313L8.4375 7.25625L6.975 8.55C6.6375 8.83125 6.1875 8.775 5.90625 8.49375C5.79375 8.325 5.7375 8.15625 5.7375 7.9875C5.7375 7.7625 5.85 7.5375 6.01875 7.425L8.71875 5.0625C8.775 5.00625 8.83125 5.00625 8.8875 4.95C8.94375 4.95 8.94375 4.95 9 4.89375C9.05625 4.89375 9.05625 4.89375 9.1125 4.89375L9.16875 4.89375C9.225 4.89375 9.225 4.89375 9.28125 4.89375L9.3375 4.89375C9.39375 4.89375 9.39375 4.89375 9.45 4.95C9.45 4.95 9.50625 4.95 9.50625 5.00625L9.5625 5.0625C9.5625 5.0625 9.5625 5.0625 9.61875 5.11875L11.9812 7.5375C12.2625 7.81875 12.2625 8.325 11.9812 8.60625C11.7 8.8875 11.1937 8.8875 10.9125 8.60625L9.84375 7.48125L9.84375 12.4875C9.84375 12.8813 9.50625 13.275 9.05625 13.275C8.775 13.1625 8.4375 12.825 8.4375 12.4313Z" fill="#1FBF75"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_1055_214">
                                                    <rect width="18" height="18" fill="white" transform="translate(18) rotate(90)"/>
                                                    </clipPath>
                                                    </defs>
                                                    </svg>
                                                </li>
                                                <li className="font-w600 text-success ms-2">+15%</li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-6">
                                            <p className="font-w500 text-danger mb-0">Expense</p>
                                            <h4 className="cate-title data">$2890,00</h4>
                                            <ul className="d-flex align-items-center">
                                                <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_1055_221)">
                                                    <path d="M0.5625 9C0.5625 13.6688 4.33125 17.4375 9 17.4375C13.6687 17.4375 17.4375 13.6688 17.4375 9C17.4375 4.33125 13.6688 0.5625 9 0.5625C4.33125 0.5625 0.5625 4.33125 0.5625 9ZM9.5625 5.56875L9.5625 10.7438L11.025 9.45C11.3625 9.16875 11.8125 9.225 12.0938 9.50625C12.2063 9.675 12.2625 9.84375 12.2625 10.0125C12.2625 10.2375 12.15 10.4625 11.9812 10.575L9.28125 12.9375C9.225 12.9938 9.16875 12.9938 9.1125 13.05C9.05625 13.05 9.05625 13.05 9 13.1063C8.94375 13.1063 8.94375 13.1063 8.8875 13.1063L8.83125 13.1063C8.775 13.1063 8.775 13.1063 8.71875 13.1063L8.6625 13.1063C8.60625 13.1063 8.60625 13.1062 8.55 13.05C8.55 13.05 8.49375 13.05 8.49375 12.9938L8.4375 12.9375C8.4375 12.9375 8.4375 12.9375 8.38125 12.8812L6.01875 10.4625C5.7375 10.1813 5.7375 9.675 6.01875 9.39375C6.3 9.1125 6.80625 9.1125 7.0875 9.39375L8.15625 10.5187L8.15625 5.5125C8.15625 5.11875 8.49375 4.725 8.94375 4.725C9.225 4.8375 9.5625 5.175 9.5625 5.56875Z" fill="#EB5757"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_1055_221">
                                                    <rect width="18" height="18" fill="white" transform="translate(0 18) rotate(-90)"/>
                                                    </clipPath>
                                                    </defs>
                                                    </svg>
                                                </li>
                                                <li className="font-w600 text-danger ms-2">-10%</li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-3 align-self-center col-lg-3 col-3">
                                            <div className="text-end text-sm-start text-xl-end text-nowrap">
                                                <Link to={"withdrow"} className="btn btn-primary">Withdraw <svg className="ms-2" width="10" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.8 7.9C3.53 7.31 2.8 6.7 2.8 5.75C2.8 4.66 3.81 3.9 5.5 3.9C6.92 3.9 7.63 4.44 7.89 5.3C8.01 5.7 8.34 6 8.76 6H9.06C9.72 6 10.19 5.35 9.96 4.73C9.54 3.55 8.56 2.57 7 2.19V1.5C7 0.67 6.33 0 5.5 0C4.67 0 4 0.67 4 1.5V2.16C2.06 2.58 0.5 3.84 0.5 5.77C0.5 8.08 2.41 9.23 5.2 9.9C7.7 10.5 8.2 11.38 8.2 12.31C8.2 13 7.71 14.1 5.5 14.1C3.85 14.1 3 13.51 2.67 12.67C2.52 12.28 2.18 12 1.77 12H1.49C0.82 12 0.35 12.68 0.6 13.3C1.17 14.69 2.5 15.51 4 15.83V16.5C4 17.33 4.67 18 5.5 18C6.33 18 7 17.33 7 16.5V15.85C8.95 15.48 10.5 14.35 10.5 12.3C10.5 9.46 8.07 8.49 5.8 7.9Z" fill="white"/>
                                                </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-6">
                            <div className="card style-4">
                                <div className="card-body py-0 px-0">
                                    {/* <canvas id="activeUser" className="h-80"></canvas> */}
                                    <RestActiveUser />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-6">
                            <div className="card income style-2">
                                <div className="card-body">
                                    <div className="d-flex align-itens-center flex-xl-nowrap flex-wrap">
                                        <div>
                                            <h4 className="cate-title data">Performance</h4>
                                            <span>Lorem ipsum dolor sit amet, adipiscing elit..</span>
                                        </div>
                                        <div>
                                            <PerformanceChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <h4 className="cate-title mb-0">Order Rate</h4>
                                        {/* <select className="form-control default-select style-1 w-auto border" >
                                            <option>Month</option>
                                            <option>This Month</option>
                                            <option>Last Month</option>
                                        </select> */}
                                        <Dropdown className="deliver-drop">
                                            <Dropdown.Toggle as="div" className="form-control ms-0 default-select border deliver-drop-toggle style2 i-false">
                                                {state} <i className="fas fa-chevron-down drop-toggle-icon" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={()=>dispatch({type : 'option1'})}>Year</Dropdown.Item>
                                                <Dropdown.Item onClick={()=>dispatch({type : 'option2'})}>Month</Dropdown.Item>
                                                <Dropdown.Item onClick={()=>dispatch({type : 'option3'})}>Week</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <div className="d-flex align-items-center flex md-nowrap flex-wrap mb-3 mb-md-0">
                                            <div className="icon-bx bg-primary d-inline-block text-center me-3">
                                                <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 8.5C20 4.09 16.41 0.5 12 0.5C7.58998 0.5 3.99998 4.09 3.99998 8.5C3.99998 12.91 7.58998 16.5 12 16.5C16.41 16.5 20 12.91 20 8.5ZM6.99998 8.5C6.99998 5.74 9.23997 3.5 12 3.5C14.76 3.5 17 5.74 17 8.5C17 11.26 14.76 13.5 12 13.5C9.23997 13.5 6.99998 11.26 6.99998 8.5ZM14.4 18.5H9.59998C4.35998 18.5 0.0999756 22.76 0.0999756 28C0.0999756 28.83 0.769976 29.5 1.59998 29.5H22.4C23.23 29.5 23.9 28.83 23.9 28C23.9 22.76 19.64 18.5 14.4 18.5ZM3.26998 26.5C3.94998 23.64 6.52998 21.5 9.59998 21.5H14.4C17.47 21.5 20.05 23.64 20.73 26.5H3.26998Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <div className="me-3">
                                                <p className="mb-0">Order Total</p>
                                                <h4 className="font-w600 mb-0">25.307</h4>
                                            </div>
                                            <div className="card style-3 m-0  mt-sm-0  mt-3 mt-sm-0 ms-md-0 ms-lg-3">
                                                <div className="card-body p-3">
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <span>Target</span>
                                                        <h6 className="font-w500 mb-0 data">3.982</h6>
                                                    </div>
                                                    <div className="progress default-progress">
                                                        <div className="progress-bar bg-gradient1 progress-animated" style={{width: '40%', height:'10px' }} role="progressbar">
                                                            <span className="sr-only">45% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="me-4">
                                                <ul className="d-flex"> 
                                                    <li className="text-nowrap"><svg className="me-2" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="6" cy="6.5" r="4.5" fill="white" stroke="#FC8019" strokeWidth="3"/>
                                                    </svg>This Month
                                                    </li>
                                                </ul>
                                                <h4 className="font-w600 mb-0">1324</h4>
                                            </div>
                                            <div>
                                                <ul className="d-flex"> 
                                                    <li className="text-nowrap"><svg className="me-2" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="6" cy="6.5" r="4.5" fill="white" stroke="#EB5757" strokeWidth="3"/>
                                                    </svg>Last Month
                                                    </li>
                                                </ul>
                                                <h4 className="mb-0 font-w600">1324</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <OrderAreaChart />                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <h4 className="cate-title">Activity</h4>
                                    <ApexBarChart />                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="row">
                        <div className="col-xl-12 col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-bx style-3 me-3">
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.26295 22.2499C7.87445 22.2499 7.49046 22.1006 7.19946 21.8096L2.68971 17.2999C2.10246 16.7134 2.10246 15.7609 2.68971 15.1744C3.27696 14.5871 4.22796 14.5871 4.81521 15.1744L8.44145 18.8006L19.3952 11.2819C20.0792 10.8124 21.0152 10.9864 21.4847 11.6704C21.955 12.3551 21.781 13.2904 21.0962 13.7606L9.11346 21.9859C8.85471 22.1629 8.55845 22.2499 8.26295 22.2499Z" fill="#FC8019"/>
                                            <path d="M8.26295 13.982C7.87445 13.982 7.49046 13.8328 7.19946 13.5418L2.68971 9.03203C2.10246 8.44479 2.10246 7.49304 2.68971 6.90654C3.27696 6.31929 4.22796 6.31929 4.81521 6.90654L8.44145 10.5328L19.3952 3.01404C20.0792 2.54454 21.0152 2.71854 21.4847 3.40254C21.955 4.08729 21.781 5.02254 21.0962 5.49279L9.11346 13.7188C8.85471 13.8958 8.55845 13.982 8.26295 13.982Z" fill="#FC8019"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-w500 mb-0">Total Order Complete</p>
                                            <h4 className="cate-title mb-0">2.678</h4>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-bx style-3 me-3">
                                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18.5C4.05 18.5 0 14.45 0 9.5C0 4.55 4.05 0.5 9 0.5C13.95 0.5 18 4.55 18 9.5C18 14.45 13.95 18.5 9 18.5ZM9 2.375C5.1 2.375 1.875 5.6 1.875 9.5C1.875 13.4 5.1 16.625 9 16.625C12.9 16.625 16.125 13.4 16.125 9.5C16.125 5.6 12.9 2.375 9 2.375Z" fill="#FC8019"/>
                                            <path d="M7.57496 13.0251C7.34996 13.0251 7.04996 12.9501 6.89996 12.7251L5.02496 10.8501C4.64996 10.4751 4.64996 9.87515 5.02496 9.50015C5.39996 9.12515 5.99996 9.12515 6.37496 9.50015L7.57496 10.7001L11.625 6.65015C12 6.27515 12.6 6.27515 12.975 6.65015C13.35 7.02515 13.35 7.62515 12.975 8.00015L8.24996 12.7251C8.02496 12.9501 7.79996 13.0251 7.57496 13.0251Z" fill="#FC8019"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-w500 mb-0">Total Order Delivered</p>
                                            <h4 className="cate-title mb-0">1.234</h4>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-bx style-3 me-3">
                                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.00002 0.5C7.21998 0.5 5.47992 1.02784 3.99988 2.01678C2.51983 3.00571 1.36628 4.41132 0.685089 6.05586C0.00389956 7.7004 -0.174331 9.51 0.172937 11.2558C0.520204 13.0017 1.37737 14.6053 2.63605 15.864C3.89472 17.1227 5.49837 17.9798 7.2442 18.3271C8.99004 18.6744 10.7996 18.4961 12.4442 17.8149C14.0887 17.1338 15.4943 15.9802 16.4833 14.5002C17.4722 13.0201 18 11.2801 18 9.50002C18 8.31812 17.7672 7.14779 17.3149 6.05586C16.8627 4.96393 16.1997 3.97177 15.364 3.13604C14.5283 2.30032 13.5361 1.63738 12.4442 1.18509C11.3522 0.732792 10.1819 0.5 9.00002 0.5ZM9.00002 16.7C7.57599 16.7 6.18394 16.2778 4.99991 15.4866C3.81587 14.6955 2.89303 13.571 2.34808 12.2553C1.80312 10.9397 1.66054 9.49203 1.93835 8.09536C2.21617 6.6987 2.9019 5.41578 3.90884 4.40884C4.91578 3.4019 6.1987 2.71616 7.59537 2.43835C8.99203 2.16054 10.4397 2.30312 11.7553 2.84807C13.071 3.39302 14.1955 4.31587 14.9866 5.4999C15.7778 6.68394 16.2 8.07599 16.2 9.50002C16.2 11.4096 15.4415 13.2409 14.0912 14.5912C12.7409 15.9415 10.9096 16.7 9.00002 16.7Z" fill="#FC8019"/>
                                            <path d="M9.0002 5C8.7615 5 8.53259 5.09482 8.3638 5.2636C8.19502 5.43239 8.1002 5.66131 8.1002 5.9V10.4C8.1002 10.6387 8.19502 10.8676 8.3638 11.0364C8.53259 11.2052 8.7615 11.3 9.0002 11.3C9.2389 11.3 9.46781 11.2052 9.6366 11.0364C9.80538 10.8676 9.9002 10.6387 9.9002 10.4V5.9C9.9002 5.66131 9.80538 5.43239 9.6366 5.2636C9.46781 5.09482 9.2389 5 9.0002 5ZM9.6392 12.479L9.5042 12.362L9.3422 12.281L9.1712 12.2C9.02587 12.1722 8.87593 12.1806 8.73465 12.2246C8.59336 12.2685 8.46509 12.3467 8.3612 12.452C8.28024 12.5349 8.21607 12.6327 8.1722 12.74C8.12033 12.8527 8.09567 12.976 8.1002 13.1C8.10119 13.3361 8.19493 13.5624 8.3612 13.73C8.44843 13.8122 8.54882 13.8791 8.6582 13.928C8.76593 13.9756 8.88242 14.0002 9.0002 14.0002C9.11798 14.0002 9.23447 13.9756 9.3422 13.928C9.45158 13.8791 9.55197 13.8122 9.6392 13.73C9.80547 13.5624 9.89921 13.3361 9.9002 13.1C9.89997 12.9794 9.87548 12.86 9.8282 12.749C9.78236 12.6481 9.71828 12.5566 9.6392 12.479Z" fill="#FC8019"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-w500 mb-0">Total Order Canceled</p>
                                            <h4 className="cate-title mb-0">123</h4>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-0">
                                        <div className="icon-bx style-3 me-3">
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.1156 12.8117C19.1156 13.1545 19.0927 13.4973 19.047 13.8383C19.0576 13.7609 19.0681 13.6818 19.0787 13.6045C18.9873 14.2795 18.808 14.9404 18.5425 15.568C18.5724 15.4977 18.6023 15.4274 18.6304 15.3588C18.3738 15.9652 18.0398 16.5348 17.639 17.0568C17.6847 16.9971 17.7304 16.9391 17.7761 16.8793C17.3718 17.4031 16.9007 17.8725 16.3787 18.2768C16.4384 18.2311 16.4964 18.1854 16.5562 18.1397C16.0341 18.5404 15.4646 18.8744 14.8582 19.1311C14.9285 19.1012 14.9988 19.0713 15.0673 19.0432C14.4398 19.3068 13.7789 19.4879 13.1039 19.5793C13.1812 19.5688 13.2603 19.5582 13.3377 19.5477C12.6574 19.6373 11.9666 19.6373 11.2845 19.5477C11.3619 19.5582 11.441 19.5688 11.5183 19.5793C10.8433 19.4879 10.1824 19.3086 9.55484 19.0432C9.62516 19.0731 9.69547 19.1029 9.76402 19.1311C9.15758 18.8744 8.58805 18.5404 8.06598 18.1397C8.12574 18.1854 8.18375 18.2311 8.24351 18.2768C7.71969 17.8725 7.25035 17.4014 6.84605 16.8793C6.89176 16.9391 6.93746 16.9971 6.98316 17.0568C6.58238 16.5348 6.2484 15.9652 5.99176 15.3588C6.02164 15.4291 6.05152 15.4994 6.07965 15.568C5.81597 14.9404 5.63492 14.2795 5.54351 13.6045C5.55406 13.6818 5.56461 13.7609 5.57515 13.8383C5.48551 13.158 5.48551 12.4672 5.57515 11.7852C5.56461 11.8625 5.55406 11.9416 5.54351 12.019C5.63492 11.344 5.81422 10.683 6.07965 10.0555C6.04976 10.1258 6.01988 10.1961 5.99176 10.2647C6.2484 9.65821 6.58238 9.08868 6.98316 8.56661C6.93746 8.62637 6.89176 8.68438 6.84605 8.74415C7.25035 8.22032 7.72144 7.75098 8.24351 7.34669C8.18375 7.39239 8.12574 7.43809 8.06598 7.48379C8.58805 7.08301 9.15758 6.74903 9.76402 6.49239C9.69371 6.52227 9.6234 6.55215 9.55484 6.58028C10.1824 6.31661 10.8433 6.13555 11.5183 6.04415C11.441 6.05469 11.3619 6.06524 11.2845 6.07579C11.9648 5.98614 12.6556 5.98614 13.3377 6.07579C13.2603 6.06524 13.1812 6.05469 13.1039 6.04415C13.7789 6.13555 14.4398 6.31485 15.0673 6.58028C14.997 6.5504 14.9267 6.52051 14.8582 6.49239C15.4646 6.74903 16.0341 7.08301 16.5562 7.48379C16.4964 7.43809 16.4384 7.39239 16.3787 7.34669C16.9025 7.75098 17.3718 8.22208 17.7761 8.74415C17.7304 8.68438 17.6847 8.62637 17.639 8.56661C18.0398 9.08868 18.3738 9.65821 18.6304 10.2647C18.6005 10.1943 18.5707 10.124 18.5425 10.0555C18.8062 10.683 18.9873 11.344 19.0787 12.019C19.0681 11.9416 19.0576 11.8625 19.047 11.7852C19.0927 12.1262 19.1156 12.469 19.1156 12.8117C19.1156 13.0367 19.214 13.274 19.3722 13.434C19.5252 13.5869 19.7748 13.7012 19.9945 13.6906C20.2212 13.6801 20.4568 13.6063 20.6168 13.434C20.775 13.2617 20.8752 13.0508 20.8734 12.8117C20.8716 11.9328 20.7398 11.0398 20.4673 10.2031C20.2037 9.39102 19.8257 8.60704 19.3283 7.91094C19.0646 7.54004 18.7781 7.18321 18.4617 6.85626C18.1435 6.52754 17.7972 6.23751 17.4334 5.95977C16.7548 5.43946 15.9972 5.04747 15.1974 4.75215C14.3748 4.44981 13.4941 4.29161 12.6205 4.25645C11.7345 4.22129 10.8275 4.33028 9.97496 4.57286C9.15758 4.80489 8.35953 5.16348 7.64937 5.63106C6.94625 6.09336 6.29762 6.65411 5.76148 7.30274C5.46969 7.65782 5.19371 8.02872 4.95816 8.42247C4.72086 8.81797 4.52926 9.23458 4.35347 9.66172C4.02125 10.4721 3.84019 11.3352 3.7734 12.207C3.70484 13.0912 3.78922 13.9982 3.99664 14.8596C4.19879 15.691 4.53629 16.5049 4.98101 17.2361C5.41695 17.9533 5.96363 18.6213 6.59117 19.1785C7.22398 19.7393 7.93238 20.2227 8.70406 20.5707C9.12594 20.7623 9.56012 20.9311 10.0066 21.0559C10.4636 21.1842 10.9312 21.2615 11.4023 21.316C12.2935 21.4215 13.2005 21.3617 14.0777 21.1842C14.9162 21.0137 15.7371 20.699 16.4841 20.2824C17.2171 19.8729 17.9009 19.3455 18.481 18.7373C19.0664 18.1256 19.5726 17.4225 19.9488 16.6649C20.3337 15.8914 20.6168 15.0652 20.7468 14.2109C20.8171 13.7451 20.8664 13.2793 20.8664 12.8082C20.8664 12.5832 20.7679 12.3459 20.6097 12.1859C20.4568 12.033 20.2072 11.9188 19.9875 11.9293C19.7607 11.9398 19.5252 12.0137 19.3652 12.1859C19.2158 12.3617 19.1156 12.5727 19.1156 12.8117Z" fill="#FC8019"/>
                                            <path d="M12.3128 18.2328C12.5378 18.2328 12.7751 18.1344 12.935 17.9762C13.0879 17.8233 13.2022 17.5737 13.1917 17.3539C13.1811 17.1272 13.1073 16.8916 12.935 16.7317C12.7628 16.5735 12.5518 16.475 12.3128 16.475C12.0878 16.475 11.8505 16.5735 11.6905 16.7317C11.5376 16.8846 11.4233 17.1342 11.4339 17.3539C11.4444 17.5807 11.5182 17.8162 11.6905 17.9762C11.8628 18.1344 12.0755 18.2328 12.3128 18.2328ZM10.6077 10.8518C10.6077 10.7375 10.6147 10.625 10.6305 10.5108C10.62 10.5881 10.6094 10.6672 10.5989 10.7446C10.6305 10.5178 10.6903 10.2963 10.7782 10.0854C10.7483 10.1557 10.7184 10.226 10.6903 10.2946C10.7782 10.0889 10.8907 9.89554 11.026 9.718C10.9803 9.77776 10.9346 9.83577 10.8889 9.89554C11.026 9.71975 11.1825 9.56331 11.3583 9.4262C11.2985 9.4719 11.2405 9.51761 11.1807 9.56331C11.3583 9.42796 11.5516 9.31546 11.7573 9.22757C11.687 9.25745 11.6167 9.28733 11.5481 9.31546C11.759 9.22757 11.9805 9.1678 12.2073 9.13616C12.1299 9.14671 12.0508 9.15725 11.9735 9.1678C12.2003 9.13968 12.4288 9.13968 12.6555 9.1678C12.5782 9.15725 12.4991 9.14671 12.4217 9.13616C12.6485 9.1678 12.87 9.22581 13.0827 9.3137C13.0124 9.28382 12.9421 9.25393 12.8735 9.22581C13.0792 9.3137 13.2725 9.4262 13.4501 9.56155C13.3903 9.51585 13.3323 9.47014 13.2725 9.42444C13.4483 9.56155 13.6047 9.718 13.7419 9.89378C13.6961 9.83401 13.6504 9.776 13.6047 9.71624C13.7401 9.89378 13.8526 10.0871 13.9405 10.2928C13.9106 10.2225 13.8807 10.1522 13.8526 10.0836C13.9405 10.2963 14.0002 10.516 14.0301 10.7446C14.0196 10.6672 14.009 10.5881 13.9985 10.5108C14.0266 10.7375 14.0266 10.966 13.9985 11.191C14.009 11.1137 14.0196 11.0346 14.0301 10.9573C13.9985 11.184 13.9387 11.4055 13.8508 11.6182C13.8807 11.5479 13.9106 11.4776 13.9387 11.409C13.8508 11.6147 13.7383 11.808 13.6012 11.9873C13.6469 11.9276 13.6926 11.8696 13.7383 11.8098C13.6012 11.9856 13.4448 12.142 13.269 12.2791C13.3288 12.2334 13.3868 12.1877 13.4465 12.142C13.2708 12.2756 13.0809 12.3846 12.8805 12.4742C12.6239 12.5885 12.3831 12.7678 12.1844 12.9647C11.7239 13.4235 11.4673 14.0405 11.4374 14.6873C11.4321 14.8157 11.4356 14.944 11.4356 15.0723C11.4356 15.2973 11.534 15.5346 11.6923 15.6946C11.8452 15.8475 12.0948 15.9617 12.3145 15.9512C12.5413 15.9407 12.7768 15.8668 12.9368 15.6946C13.095 15.5223 13.1934 15.3114 13.1934 15.0723C13.1934 14.893 13.1864 14.7137 13.2092 14.5362C13.1987 14.6135 13.1881 14.6926 13.1776 14.77C13.1987 14.6293 13.2356 14.494 13.2901 14.3621C13.2602 14.4325 13.2303 14.5028 13.2022 14.5713C13.2602 14.4342 13.3358 14.3076 13.4272 14.1881C13.3815 14.2479 13.3358 14.3059 13.2901 14.3657C13.378 14.2549 13.4782 14.1565 13.5889 14.0686C13.5292 14.1143 13.4711 14.16 13.4114 14.2057C13.5819 14.0756 13.7735 14 13.9616 13.9016C14.1954 13.7785 14.4098 13.6168 14.6102 13.4463C14.9635 13.1457 15.2624 12.7467 15.4487 12.3213C15.5577 12.0717 15.6561 11.8239 15.7053 11.5549C15.7545 11.2842 15.7897 11.0065 15.7756 10.7305C15.751 10.1961 15.6157 9.69339 15.3696 9.22054C14.9319 8.3803 14.1057 7.73694 13.1917 7.50139C12.6626 7.36604 12.1299 7.36429 11.5956 7.46624C11.3407 7.5137 11.1069 7.60862 10.8678 7.71057C10.6903 7.78616 10.5216 7.87932 10.3651 7.99182C9.91862 8.31175 9.53015 8.70901 9.26999 9.19944C8.99929 9.70921 8.85163 10.2735 8.84988 10.8535C8.84812 11.0785 8.94831 11.3158 9.10652 11.4758C9.25945 11.6287 9.50905 11.743 9.72878 11.7325C10.2069 11.7096 10.6059 11.3457 10.6077 10.8518Z" fill="#FC8019"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-w500 mb-0">Order Pending</p>
                                            <h4 className="cate-title mb-0">432</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-sm-6">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h4 className="cate-title">Popular Food</h4>
                                        <Dropdown>
                                            <Dropdown.Toggle as="div" className="btn-link i-false">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu" align="end">
                                                <Dropdown.Item >Edit</Dropdown.Item>
                                                <Dropdown.Item >Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    {/* pie chart */}
                                        <PopularPieChart />
                                    {/* pie chart */}
                                    <h6 className="font-w700 mb-3">Legend</h6>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>
                                            <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="16" height="16" rx="4" fill="var(--primary)"/>
                                            </svg>
                                            Asian Food (27%)
                                        </span>
                                        <h6>763</h6>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span><svg  className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="16" rx="4" fill="#EB5757"/>
                                        </svg>
                                        Fast Food (50%)</span>
                                        <h6>763</h6>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span><svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="16" rx="4" fill="#1FBF75"/>
                                        </svg>
                                        Western Food (23%)</span>
                                        <h6>69</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card bg-primary food-grap">
                                <div className="card-body pb-0">
                                    <div className="data-info">
                                        <p className="font-w500 mb-0">Order Delivered</p>
                                        <h3>932</h3>
                                        <div className=" data-content d-flex justify-content-between align-items-center  pb-2">
                                            <span>Asian Food (27%)</span>
                                            <h6 className="mb-0">763</h6>
                                        </div>
                                        <div className=" data-content d-flex justify-content-between align-items-center py-2">
                                            <span>Fast Food (50%)</span>
                                            <h6 className="mb-0">321</h6>
                                        </div>
                                        <div className="data-content d-flex border-0 align-items-center justify-content-between pt-2">
                                            <span>Western Food (23%)</span>
                                            <h6 className="mb-0">69</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer p-0 border-0">
                                    <div className="pt-line mt-3">
                                        <Sparklines data={sparklinedata} height={90}>
                                            <SparklinesLine color="#fff" 
                                                style={{
                                                    //stroke: "#ff6a59",
                                                    strokeWidth: 2,
                                                    //fill: "white",
                                                }}
                                            />
                                        </Sparklines>
                                        {/* <span className="peity-line" data-width="100%" style={{display: 'none'}}>4,7,4,9,5,6,8,3,1,3,5,6</span> */}
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
export default Restaurant;