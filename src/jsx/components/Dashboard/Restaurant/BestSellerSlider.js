import React from 'react';
import { Swiper, SwiperSlide,  } from "swiper/react";
import { Link } from "react-router-dom";
import {Dropdown} from 'react-bootstrap';
import { Autoplay } from "swiper";
import "swiper/css";

import Pic1 from './../../../../images/popular-img/review-img/pic-1.jpg';
import Pic2 from './../../../../images/popular-img/review-img/pic-2.jpg';
import Pic3 from './../../../../images/popular-img/review-img/pic-3.jpg';
import Pic4 from './../../../../images/popular-img/review-img/pic-4.jpg';


const sliderData = [
    {image:Pic1, title:'Pepperoni Pizza'},
    {image:Pic3, title:'Japanese Ramen'},
    {image:Pic4, title:'Fried Rice'},
    {image:Pic2, title:'Vegan Pizza'},
    {image:Pic3, title:'Pepperoni Pizza'},
    {image:Pic4, title:'Fried Rice'},
];
const BestSellerSlider = () =>{
    return(
        <>
            <Swiper className="mySwiper-6"						
				//speed= {1200}
				slidesPerView= {5}
				spaceBetween= {30}
				//loop={true}
				// autoplay= {{
				//    delay: 1200,
				// }}
				modules={[ Autoplay ]}
				breakpoints = {{
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1480: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
            
                    1600: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1920: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
				}}
			>	
				{sliderData.map((item, ind)=>(
                    <SwiperSlide key={ind}>
                        <div className="card dishe-bx b-hover review menu-bx">
                            <div className="card-body text-center py-3">
                                <img src={item.image} alt="" />
                                <Dropdown className=" c-heart">
                                    <Dropdown.Toggle as="div" className="btn-link i-false" >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                        <Dropdown.Item>Edit</Dropdown.Item>
                                        <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="card-footer pt-0 border-0 text-center">
                                <div>
                                    <Link to={"#"}><h4 className="mb-0">{item.title}</h4></Link>
                                    <h3 className="font-w700 text-primary mb-4">$5.59</h3>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="mb-0 pe-2 border-right">Sold 1k</p>
                                        <p className="mb-0 ps-2 text-success font-w600">+ 15%</p>
                                        <svg  className="ms-2" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.25 11.5C23.25 5.275 18.225 0.25 12 0.25C5.775 0.249999 0.75 5.275 0.75 11.5C0.749999 17.725 5.775 22.75 12 22.75C18.225 22.75 23.25 17.725 23.25 11.5ZM11.25 16.075L11.25 9.175L9.3 10.9C8.85 11.275 8.25 11.2 7.875 10.825C7.725 10.6 7.65 10.375 7.65 10.15C7.65 9.85 7.8 9.55 8.025 9.4L11.625 6.25C11.7 6.175 11.775 6.175 11.85 6.1C11.925 6.1 11.925 6.1 12 6.025C12.075 6.025 12.075 6.025 12.15 6.025L12.225 6.025C12.3 6.025 12.3 6.025 12.375 6.025L12.45 6.025C12.525 6.025 12.525 6.025 12.6 6.1C12.6 6.1 12.675 6.1 12.675 6.175L12.75 6.25C12.75 6.25 12.75 6.25 12.825 6.325L15.975 9.55C16.35 9.925 16.35 10.6 15.975 10.975C15.6 11.35 14.925 11.35 14.55 10.975L13.125 9.475L13.125 16.15C13.125 16.675 12.675 17.2 12.075 17.2C11.7 17.05 11.25 16.6 11.25 16.075Z" fill="#1FBF75"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>       
                ))}
			</Swiper>
        </>
    )
}
export default BestSellerSlider;