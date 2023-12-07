import React from 'react';
import { Swiper, SwiperSlide,  } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import "swiper/css";

import Pic1 from './../../../../images/popular-img/pic-1.jpg';
import Pic2 from './../../../../images/popular-img/pic-2.jpg';
import Pic4 from './../../../../images/popular-img/pic-4.jpg';

const sliderData = [
    {image:Pic1, title:'Double Burger'},
    {image:Pic2, title:'Beef Burger'},
    {image:Pic4, title:'Cheese Burger'},
    {image:Pic2, title:'Fish Burger'},
    {image:Pic4, title:'Masala Burger'},
];
const PromoSlider = () =>{
    return(
        <>
            <Swiper className="mySwiper-5"						
				//speed= {1200}
				slidesPerView= {3}
				spaceBetween= {20}
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
                    
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1480: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1600: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1920: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
				}}
			>	
				{sliderData.map((item, ind)=>(
                    <SwiperSlide key={ind}>
                        <div className="card">
                            <div className="card-body py-3">
                                <div className="promo-bx pt-4">
                                    <div>
                                        <span className="badge badge-lg badge-danger side-badge style-1">15% Off</span>
                                        <Link to={"#"}><h4 className="font-w500 mb-1">{item.title}</h4></Link>
                                        <div className="d-flex align-items-center">
                                            <h4 className="text-primary">$5.59</h4>
                                            <h4 className="mb-0 ps-3"><del className="del-color font-w400">$5.59</del></h4>
                                        </div>
                                        <div className="d-flex align-items-center mb-3 text-nowrap">
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0.500031L9.79611 6.02789H15.6085L10.9062 9.4443L12.7023 14.9722L8 11.5558L3.29772 14.9722L5.09383 9.4443L0.391548 6.02789H6.20389L8 0.500031Z" fill="#FC8019"/>
                                            </svg>
                                            <p className="mb-0 px-lg-2 px-md-1">5.0</p>
                                            <svg className="me-2" width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2.50003" r="2" fill="#C4C4C4"/>
                                            </svg>
                                            <p className="mb-0">1k+ User Reviews</p>
                                        </div>
                                    </div>
                                    <div className="dlab-media-1">
                                        <img src={item.image} alt="" />
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
export default PromoSlider;