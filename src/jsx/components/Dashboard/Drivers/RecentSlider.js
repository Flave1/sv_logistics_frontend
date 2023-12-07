import React from 'react';
import { Swiper, SwiperSlide,  } from "swiper/react";
import { Link } from "react-router-dom";
import {Dropdown} from 'react-bootstrap';
import { Autoplay } from "swiper";
import "swiper/css";

import Pic1 from './../../../../images/resturent-review/pic-1.jpg';
import Pic2 from './../../../../images/resturent-review/restro-feedback/pic-1.jpg';
import Pic4 from './../../../../images/resturent-review/restro-feedback/pic-2.jpg';

const sliderData = [
    {image:Pic1, title:'Ruby Roben'},
    {image:Pic2, title:'Jack Jone'},
    {image:Pic4, title:'Danny Ahmad'},
    {image:Pic2, title:'Clara Hope'},
    {image:Pic4, title:'Masala Burger'},
];
const RecentSlider = () =>{
    return(
        <>
            <Swiper className="mySwiper-1"						
				//speed= {1200}
				slidesPerView= {4}
				spaceBetween= {30}
				//loop={true}
				autoplay= {{
				   delay: 1000,
				}}
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
                    
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1600: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1920: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
				}}
			>	
				{sliderData.map((item, ind)=>(
                    <SwiperSlide key={ind}>
                        <div className="card">
                            <div className="card-body">
                                <div className="feedback-bx">
                                    <ul className="d-flex align-items-center mb-3">
                                        <li><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FC8019"/>
                                        </svg>
                                        </li>
                                        <li><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FC8019"/>
                                        </svg>
                                        </li>
                                        <li><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FC8019"/>
                                        </svg>
                                        </li>
                                        <li><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FC8019"/>
                                        </svg>
                                        </li>
                                        <li><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FC8019"/>
                                        </svg>
                                        </li>
                                    </ul>
                                    <div className="border-bottom">
                                        <h6>Lorem ipsum dolor sit amet.</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="restro-review d-flex align-items-center mt-4">
                                        <img src={item.image} alt="" />
                                        <div>
                                            <h4 className="font-w500">{item.title}</h4>
                                            <span>User since 2020</span>
                                        </div>
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
export default RecentSlider;