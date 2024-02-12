import React, { useContext, useState } from 'react';
/// React router dom
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
import logo from '../../../images/logo-full.png';

export function NavMenuToggle() {
  setTimeout(() => {
    let mainwrapper = document.querySelector('#main-wrapper');
    if (mainwrapper.classList.contains('menu-toggle')) {
      mainwrapper.classList.remove('menu-toggle');
    } else {
      mainwrapper.classList.add('menu-toggle');
    }
  }, 200);
}

const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { navigationHader, background } = useContext(ThemeContext);
  return (
    <div className="nav-header">
      <Link to="#" className="brand-logo">
        {background.value === 'dark' || navigationHader !== 'color_1' ? (
          <>
            <img src={logo} alt="Logo" width={50} />
            <h3 style={{ color: 'white' }}>CAFAY</h3>
          </>
        ) : (
          <>
            <img src={logo} alt="Logo" width={50} />
            <h3 style={{ color: 'white' }}>CAFAY</h3>
          </>
        )}
      </Link>

      <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle);
          //openMenuToggle();
          NavMenuToggle();
        }}
      >
        <div className={`hamburger ${toggle ? 'is-active' : ''}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
