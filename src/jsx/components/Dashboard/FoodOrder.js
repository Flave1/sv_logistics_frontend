import React from 'react';
import {Link} from 'react-router-dom';


import review1 from './../../../images/popular-img/review-img/pic-1.jpg';
import review2 from './../../../images/popular-img/pic-1.jpg';
import review3 from './../../../images/popular-img/review-img/pic-2.jpg';
import review4 from './../../../images/popular-img/pic-2.jpg';
import review5 from './../../../images/popular-img/review-img/pic-3.jpg';
import review6 from './../../../images/popular-img/pic-3.jpg';
import review7 from './../../../images/popular-img/review-img/pic-4.jpg';
import review8 from './../../../images/popular-img/pic-4.jpg';

const OrderCard = [
    {orderno: '1', image1: review1, image2: review2, total:'11.18',title1:'Pepperoni Pizza', title2:'Fish Burger', btnstatus:'Completed', btnTheme:'success bgl-success'},
    {orderno: '2', image1: review3, image2: review4, total:'11.18',title1:'Japan Ramen', title2:'Beef Burger', btnstatus:'Delivering to you', btnTheme:'primary bgl-primary'},
    {orderno: '3', image1: review5, image2: review6, total:'11.18',title1:'Fried Rice', title2:'Cheese Burger', btnstatus:'Order being prepared', btnTheme:'info bgl-info'},
    {orderno: '4', image1: review7, image2: review8, total:'11.18',title1:'Vegan Pizza', title2:'Double Burger', btnstatus:'Completed', btnTheme:'success bgl-success'},
    {orderno: '5', image1: review1, image2: review2, total:'11.18',title1:'Japan Ramen', title2:'Veg Burger', btnstatus:'Delivering to you', btnTheme:'primary bgl-primary'},
    {orderno: '6', image1: review3, image2: review6, total:'11.18',title1:'Fried Rice', title2:'Panner Burger', btnstatus:'Order being prepared', btnTheme:'info bgl-info'}
   
];

const MenuCard = [
    {image: review1, title:'Pepperoni Pizza'}, 
    {image: review3, title:'Japan Ramen'}, 
    {image: review7, title:'Mix Pizza'}, 
    {image: review5, title:'Fried Rice'}, 
];

const FoodOrder = () =>{
    return(
        <>
            <div className="row">
                <div className="col-xl-8 col-xxl-12">
                    <div className="row">
                        {OrderCard.map((item, index)=>(
                            <div className="col-xl-4 col-sm-6 sp15" key={index}>
                                <div className="card h-auto b-hover">
                                    <div className="card-body px-3">
                                        <div className="text-center">
                                            <h4>Order #{item.orderno}</h4>
                                            <p>Nov 11, 2022 , 18:38 PM</p>
                                        </div>
                                        <hr />
                                        <div>
                                            <h4>Fast Food Resto</h4>
                                            <div className="d-flex align-items-center">
                                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 0.500031L9.79611 6.02789H15.6085L10.9062 9.4443L12.7023 14.9722L8 11.5558L3.29772 14.9722L5.09383 9.4443L0.391548 6.02789H6.20389L8 0.500031Z" fill="#FC8019"/>
                                                </svg>
                                                <p className="mb-0 px-2">5.0</p>
                                                <svg className="me-2" width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2" cy="2.50003" r="2" fill="#C4C4C4"/>
                                                </svg>
                                                <p className="mb-0">1k+ Reviews</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span>Delivery Time </span>
                                            <h6 className="mb-0">10 Min</h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span>Distance</span>
                                            <h6 className="mb-0">2.5 Km</h6>
                                        </div>
                                        <hr />
                                        <div className="order-menu">
                                            <h6 className="font-w600">Order Menu</h6>
                                            <div className="d-flex align-items-center mb-2">
                                                <img className="me-2" src={item.image1} alt="" />
                                                <div className="order-items">
                                                    <h6 className="font-w500 text-nowrap mb-0"><Link to={"#"}>{item.title1}</Link></h6>
                                                    <p className="mb-0">x1</p>
                                                </div>
                                                <h6 className="text-primary mb-0 ms-auto">+$5.59</h6>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <img className="me-2" src={item.image2} alt="" />
                                                <div className="order-items">
                                                    <h6 className="font-w500 text-nowrap mb-0"><Link to={"#"}>{item.title2}</Link></h6>
                                                    <p className="mb-0">x1</p>
                                                </div>
                                                <h6 className="text-primary mb-0 ms-auto">+$5.59</h6>
                                            </div>
                                            <hr />
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <h4 className="mb-0">Total</h4>
                                                <h4 className="mb-0 text-primary">${item.total}</h4>
                                            </div>
                                            <Link to={"#"} className={`btn btn-block btn-outline-${item.btnTheme}`}>{item.btnstatus}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        ))}
                    </div> 
                </div> 
                <div className="col-xl-4 col-xxl-12 sp30">
                    <div className="card  dlab-position h-auto">
                        <div className="card-body px-3">
                            <div className="tracker-bx">
                                <h4 className="cate-title mb-4">Order Tracker</h4>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14448.885880295826!2d75.81852004999999!3d25.128202299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1658125804979!5m2!1sen!2sin" 
                                    width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <div>
                                    <p className="fs-18">Your Address</p>
                                    <div className="d-flex align-items-center mb-2">
                                        <svg  className="me-2" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.4599 8.63C17.3195 7.16892 16.8031 5.76909 15.9611 4.56682C15.119 3.36456 13.98 2.40083 12.6549 1.7695C11.3298 1.13816 9.86376 0.860724 8.3996 0.964207C6.93543 1.06769 5.52301 1.54856 4.29988 2.36C3.24908 3.06265 2.36693 3.9893 1.71682 5.07339C1.06672 6.15749 0.664776 7.37211 0.539881 8.63C0.417363 9.87966 0.574555 11.1409 1.00005 12.3223C1.42555 13.5036 2.10868 14.5755 2.99988 15.46L8.29988 20.77C8.39284 20.8637 8.50344 20.9381 8.6253 20.9889C8.74716 21.0397 8.87787 21.0658 9.00988 21.0658C9.14189 21.0658 9.2726 21.0397 9.39446 20.9889C9.51632 20.9381 9.62692 20.8637 9.71988 20.77L14.9999 15.46C15.8911 14.5755 16.5742 13.5036 16.9997 12.3223C17.4252 11.1409 17.5824 9.87966 17.4599 8.63ZM13.5999 14.05L8.99988 18.65L4.39988 14.05C3.72197 13.3721 3.20268 12.5523 2.87935 11.6498C2.55601 10.7472 2.43667 9.7842 2.52988 8.83C2.6237 7.86111 2.93164 6.92516 3.43145 6.08985C3.93126 5.25453 4.61044 4.54071 5.41988 4C6.48083 3.29524 7.72619 2.9193 8.99988 2.9193C10.2736 2.9193 11.5189 3.29524 12.5799 4C13.3869 4.53862 14.0646 5.24928 14.5642 6.08094C15.0639 6.9126 15.3732 7.84461 15.4699 8.81C15.5661 9.76743 15.4483 10.7343 15.1249 11.6406C14.8014 12.5468 14.2805 13.3698 13.5999 14.05ZM8.99988 5C8.10986 5 7.23984 5.26392 6.49982 5.75839C5.75979 6.25286 5.18302 6.95566 4.84242 7.77793C4.50183 8.6002 4.41271 9.505 4.58635 10.3779C4.75998 11.2508 5.18856 12.0526 5.8179 12.682C6.44724 13.3113 7.24906 13.7399 8.12197 13.9135C8.99489 14.0872 9.89969 13.9981 10.722 13.6575C11.5442 13.3169 12.247 12.7401 12.7415 12.0001C13.236 11.26 13.4999 10.39 13.4999 9.5C13.4972 8.30734 13.0223 7.16428 12.1789 6.32094C11.3356 5.4776 10.1925 5.00265 8.99988 5ZM8.99988 12C8.50543 12 8.02208 11.8534 7.61096 11.5787C7.19983 11.304 6.8794 10.9135 6.69018 10.4567C6.50096 9.9999 6.45145 9.49723 6.54792 9.01228C6.64438 8.52733 6.88248 8.08187 7.23211 7.73224C7.58175 7.38261 8.0272 7.1445 8.51215 7.04804C8.99711 6.95158 9.49977 7.00109 9.95659 7.1903C10.4134 7.37952 10.8039 7.69996 11.0786 8.11108C11.3533 8.5222 11.4999 9.00555 11.4999 9.5C11.4999 10.163 11.2365 10.7989 10.7676 11.2678C10.2988 11.7366 9.66292 12 8.99988 12Z" fill="#FC8019"/>
                                        </svg>
                                        <h4 className="mb-0 font-w700">Elm Street, 23</h4>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                                </div>
                            </div>
                            <div className="order-menu style-3">
                                <h4 className="my-4">Order Menu</h4>
                                {MenuCard.map((item, ind)=>(
                                    <div className="d-flex align-items-center mb-3" key={ind}>
                                        <img className="me-3" src={item.image} alt="" />
                                        <div>
                                            <h4 className="font-w600 text-nowrap mb-0"><Link to={"#"}>{item.title}</Link></h4>
                                            <p className="mb-0">x1</p>
                                        </div>
                                        <h4 className="text-primary mb-0 ms-auto">+$5.59</h4>
                                    </div>
                                ))}
                                <hr />
                            </div>
                            <div className="d-flex align-items-center justify-content-between  mb-3 mt-3">
                                <h4 className="font-w500">Total</h4>
                                <h3 className="text-primary">$22.36</h3>
                            </div>
                            <Link to={"#"} className="btn btn-outline-primary bgl-primary btn-block">Delivering to you</Link>
                        </div>
                    </div>
                </div>
            </div>      
        </>
    )
}
export default FoodOrder;