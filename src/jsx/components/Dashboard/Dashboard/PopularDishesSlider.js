import React,  { useEffect, useState } from 'react';
import { Swiper, SwiperSlide,  } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import "swiper/css";

//images

import pic1 from './../../../../images/popular-img/pic-1.jpg';
import pic2 from './../../../../images/popular-img/pic-2.jpg';
import pic3 from './../../../../images/popular-img/pic-3.jpg';


const sliderData = [
    {id:'1', image:pic1, title:'Fish burger', offer:'15% Off', badge:'badge-danger', heart:false, check:false },
    {id:'2', image:pic2, title:'Beef burger', offer:'Exclusive', changeClass:"exclusive", badge:"badge-warning", heart:true, check:false},
    {id:'3', image:pic3, title:'Cheese burger', offer:'15% Off', badge:'badge-danger', heart:false, check:false},
    {id:'4', image:pic1, title:'Panner burger',offer:'15% Off', badge:'badge-danger', heart:false, check:false},
    {id:'5', image:pic2, title:'Tandoori burger', offer:'Exclusive', changeClass:"exclusive", badge:"badge-warning", heart:true, check:false },
    {id:'6', image:pic3, title:'Cheese burger',offer:'15% Off', badge:'badge-danger', heart:false, check:false} ,
];

const PopularDishesSlider = () =>{
    const [dataheart, setDataheart] = useState(sliderData);   
    function hendleleClick(type,id){
        let temp = dataheart.map((data) => {
            if (id === data.id) {
               if(type=="heart"){
                    return  { ...data, heart: !data.heart };
               }else if(type=="check"){
                    return  { ...data, check: !data.check };
               }
            }
            return data;
        });
        setDataheart(temp);
    }
    
    return(
        <>
            <Swiper className="mySwiper-3"		
				speed= {1500}
				slidesPerView= {3}
				spaceBetween= {30}
				//loop={true}
				autoplay= {{
				   delay: 2000,
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
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      1200: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1400: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
				}}
			>	
				{dataheart.map((data, index)=>(
                    <SwiperSlide key={index}>
                        <div className={`card dishe-bx ${data.changeClass}`} key={index}>
                            <div className="card-header border-0 pb-0 pt-0 pe-3">
                                <span className={`badge badge-lg badge-danger side-badge ${data.badge}`}>{data.offer}</span>
                                <i className={ `fa-solid fa-heart ms-auto c-heart c-pointer ${data.heart ? "active" : ""}`}                                    
                                    onClick={()=>hendleleClick('heart',data.id)}
                                ></i>
                            </div>
                            <div className="card-body p-0 text-center">
                                <img src={data.image} alt="" />
                            </div>
                            <div className="card-footer border-0 px-3">
                                <ul className="d-flex align-items-center mb-2">
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#FC8019"/>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#DBDBDB"/>
                                        </svg>
                                    </li>
                                </ul>
                                <div className="common d-flex align-items-end justify-content-between" >
                                    <div>
                                        <Link to={"#"}><h4>{data.title}</h4></Link>
                                        <h3 className="font-w700 mb-0 text-primary">$5.59</h3>
                                    </div>
                                    <div className={`plus c-pointer ${data.check ? "active" : ""}`}                                        
                                        onClick={()=>hendleleClick('check',data.id)}
                                    >
                                        <div className="sub-bx">
                                            <Link to={"#"}></Link>
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
export default PopularDishesSlider;