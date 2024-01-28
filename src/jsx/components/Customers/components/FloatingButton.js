import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import './customer.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FloatingButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();
  const { menuCart, restaurantPath } = useSelector((state) => state.customer);
  const [position, setPosition] = useState({ position: 'fixed', top: '100px', left: '90%', transform: 'translateX(-50%)', zIndex: 1000 });

  useEffect(() => {
    if (isMobile) {
      setPosition({ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 });
    } else {
      setPosition({ position: 'fixed', top: '100px', left: '90%', transform: 'translateX(-50%)', zIndex: 1000 });
    }
  }, [window.innerWidth]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button
      onClick={() => {
        navigate(restaurantPath + '/cart');
      }}
      className={`buttonTab btn floating-button${isScrolled ? ' bounce' : ''}`}
      style={position}
    >
      <i className="bi bi-handbag" style={{ position: 'relative', bottom: '10px', right: '5px' }}></i>
      <span className="cartValue"> +{menuCart.length}</span>
      <span className="text-primary" style={{ position: 'relative', right: '28px' }}>
        ${menuCart.reduce((sum, menu) => sum + menu.price * menu.quantity, 0)}
      </span>
    </Button>

    // <Button className={`buttonTab floating-button${isScrolled ? ' bounce' : ''}`}
    // style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}
    // >
    // <i className="bi bi-handbag"></i>
    // <span className='cartValue'>53</span>
    // </Button>
  );
};

export default FloatingButton;
