import React, { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide,  } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { connect, useDispatch } from 'react-redux';

import "swiper/css";
import { getMenuCategories } from '../../../../../store/actions/MenuActions';

const MenuCategorySlider = (props) =>{

const dispatch = useDispatch();
useEffect(() => {
    props.get_restaurant_menu_categories();
    
    console.log("Categories", props.menucategories)
    }, []);

    return(
        <>
            <Swiper className="mySwiper-2"						
				speed= {1200}
				slidesPerView= {5}
				spaceBetween= {20}
				//loop={true}
				autoplay= {{
				   delay: 1200,
				}}
				modules={[ Autoplay ]}
				breakpoints = {{
					360: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1920: {
                       
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
				}}
			>	
				{props.menucategories.map((item, idx) => (
                    <SwiperSlide key={idx}>
					<div className="cate-bx text-center">
						<div className="card">
							<div className="card-body">
                            <img
                                src={`data:image/jpeg;base64, ${item.image}`}
                                className="card-img-top"
                                alt={`Image for ${item.name}`}
                                width="100" height="100" viewBox="0 0 50 50" fill="none"
                            />
							<Link to={"#"}><h6 className="mb-0 font-w500">{item.name}</h6></Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
                ))}				
				<div className="swiper-pagination"></div>			
			</Swiper>
        </>
    )
}

const mapStateToProps = (state) => {
return {
    menucategories: state.menu.categories,
};
};
const mapDispatchToProps = (dispatch) => {
return {
    get_restaurant_menu_categories: () => getMenuCategories()(dispatch),
};
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuCategorySlider);