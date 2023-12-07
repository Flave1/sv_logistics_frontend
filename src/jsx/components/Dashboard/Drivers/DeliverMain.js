import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

import StatisticChart from './StatisticChart';
import Pic6 from './../../../../images/chat-img/pic-6.jpg';

import {DoubleRight, CircleRight, 
    CircleExclamation, EarningIcon,
    PointIcon, TimerIcon,
    MinGrapg, AvgGraph
} from './SvgIcons';


const statusBlog = [
    {icons:DoubleRight, title:'Finished', number:'932'},
    {icons:CircleRight, title:'Delivered', number:'1,032'},
    {icons:CircleExclamation, title:'Canceled', number:'102'},
];

const EarningBlog = [
    {number:'11.240', IconClass:'success'},
    {number:'10.654', IconClass:'primary'},
];

const performance = [
    {iconblog: TimerIcon, title:'Performance', percent:'50%'},
    {iconblog: MinGrapg,  title:'Min. Performance', percent:'80%'},
    {iconblog: AvgGraph,  title:'Avg. Performance', percent:'75%'}
];

const DeliverMain = () =>{
    const [dropValue, setDropValue] = useState('This Month');
    return(
        <>
            <div className="row">
                <div className="col-xl-5">
                    <div className="card">
                        <div className="card-header border-0 pb-0">
                            <h4 className="cate-title">Profile</h4>
                        </div>
                        <div className="card-body pt-2">
                            <div className="d-profile">
                                <div className="d-flex justify-content-between mb-3 mb-sm-0">
                                    <div className="d-flex">
                                        <img src={Pic6} alt="" />
                                        <div>
                                            <h3 className="font-w700">Jordan Nico</h3>
                                            <div className="d-flex align-items-center">
                                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0.500031L9.79611 6.02789H15.6085L10.9062 9.4443L12.7023 14.9722L8 11.5558L3.29772 14.9722L5.09383 9.4443L0.391548 6.02789H6.20389L8 0.500031Z" fill="#FC8019"></path>
                                                </svg>
                                                <p className="mb-0 px-2">5.0</p>
                                                <svg className="me-2" width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2.50003" r="2" fill="#C4C4C4"></circle>
                                                </svg>
                                                <p className="mb-0">1k+ Reviews</p>
                                            </div>
                                            <p>Join June 2020</p>
                                            <Link to={"edit-profile"} className="btn btn-light btn-sm">Edit Profile</Link>
                                        </div>
                                    </div>
                                    <div>
                                        <Dropdown >
                                            <Dropdown.Toggle as="div" className="btn-link i-false">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu m-0" align="end">
                                                <Dropdown.Item>Edit</Dropdown.Item>
                                                <Dropdown.Item>Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {statusBlog.map((item, ind)=>(
                                    <div className="col-xl-4 col-xxl-6 col-sm-4 sp15" key={ind}>
                                        <div className="card">
                                            <div className="card-body p-4">
                                                <div className="text-center">
                                                    {item.icons}
                                                    <h4 className="mb-0">{item.number}</h4>
                                                    <p className="mb-0">{item.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="card h-auto">
                                <div className="card-body p-3">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        {EarningBlog.map((item, index)=>(
                                            <div className="d-flex align-items-center mb-3 mb-sm-0 content-space" key={index}>
                                                <div className={`icon-bx d-inline-block text-center me-3 bg-${item.IconClass}`}>
                                                    {EarningIcon}
                                                </div>
                                                <div>
                                                    <p className="mb-0">Today Earnings</p>
                                                    <h4>$11.240</h4>
                                                </div>
                                            </div>                  
                                        ))}
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p>Total Trip</p>
                                            <h4 className="mb-0 font-w700">15 </h4>
                                        </div>
                                        <div>
                                            <p>Total Distance</p>
                                            <h4 className="mb-0 font-w700">15 Km</h4>
                                        </div>
                                        <div>
                                            <p>Total Time </p>
                                            <h4 className="mb-0 font-w700">90 Min</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card h-auto m-0">
                                <div className="card-body p-3">
                                    <div className="d-flex  align-items-center justify-content-between">
                                        <div className="d-flex">
                                            <div className="icon-bx d-inline-block text-center bg-info me-sm-4 me-2">
                                                {PointIcon}
                                            </div>
                                            <div>
                                                <p className="mb-0">My Points</p>
                                                <h4 className="cate-title">3456</h4>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p className="mb-0">See Reward</p>
                                            <div className="icon-bx style-1">
                                                <Link to={"#"}><i className="fa-solid fa-chevron-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-7">
                    <div className="row">
                        {performance.map((data, i)=>(
                            <div className="col-xl-4 col-sm-4" key={i}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <div className="icon-bx style-2 d-inline-block text-center mb-3">
                                               {data.iconblog}
                                            </div>                                        
                                            <h4>{data.percent}</h4>
                                            <p className="mb-0">{data.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                    <div className="card h-auto">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
                                <h3 className="font-w700">Performance Statistic</h3>
                                <div className="d-flex align-items-center">
                                    {/* <select className="form-control default-select  me-0 ms-0  border">
                                        <option>This Month</option>
                                        <option>This Week</option>
                                        <option>Last Week</option>
                                    </select> */}
                                    <Dropdown className="notification-select">
                                        <Dropdown.Toggle as="div" className="form-control default-select border me-3 m-0 w-auto i-false">
                                            {dropValue} <i className="fas fa-chevron-down notification-drop-select"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu >
                                            <Dropdown.Item onClick={()=>setDropValue('This Month')}>This Month</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>setDropValue('This Week')}>This Week</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>setDropValue('Last Week')}>Last Week</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
                                <ul className="d-flex mb-4 mb-sm-0">
                                    <li><svg className="me-2" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6.5" r="4.5" fill="white" stroke="var(--primary)" strokeWidth="3"/>
                                    </svg>This Week
                                    <div className="ms-4">
                                        <h4>75%</h4>
                                    </div>
                                    </li>
                                    <li className="ms-4"><svg className="me-2" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6.5" r="4.5" fill="white" stroke="#EB5757" strokeWidth="3"/>
                                        </svg>Last Week
                                            <div className="ms-4">
                                        <h4>69%</h4>
                                    </div>
                                    </li>
                                </ul>
                                <div>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span>Avg. Performance</span>
                                        <h4 className="font-w700 mb-0">77%</h4>
                                    </div>
                                    <div className="progress default-progress">
                                        <div className="progress-bar bg-gradient1 progress-animated bg-danger" style={{width: '77%', height:'10px'}} role="progressbar">
                                            <span className="sr-only">45% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <StatisticChart />
                            
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}
export default DeliverMain;