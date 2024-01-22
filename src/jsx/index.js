import React, { useContext } from 'react';

/// React router dom
import { Routes, Route, Outlet } from 'react-router-dom';

/// Css
import './index.css';
import './chart.css';
import './step.css';

/// Layout
import Nav from './layouts/nav';
import Footer from './layouts/Footer';
//import Main from './layouts/Main';

import ScrollToTop from './layouts/ScrollToTop';

import LockScreen from './pages/LockScreen';
import Error400 from './pages/Error400';
import Error403 from './pages/Error403';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';
import Error503 from './pages/Error503';
import { ThemeContext } from '../context/ThemeContext';
import CustomerNav from './layouts/nav/CustomerNav';
import { useSelector } from 'react-redux';
import { UserType } from './utils/constants';
import { customerRoutes } from './pages/routes/customerRoutes';
import { staffRoutes } from './pages/routes/staffRoutes';

const Markup = () => {
  const { auth } = useSelector((state) => state.auth);
  console.log('auth', auth);

  return (
    <>
      <Routes>
        <Route path="page-lock-screen" element={<LockScreen history={undefined} />} />
        <Route path="page-error-400" element={<Error400 />} />
        <Route path="page-error-403" element={<Error403 />} />
        <Route path="page-error-404" element={<Error404 />} />
        <Route path="page-error-500" element={<Error500 />} />
        <Route path="page-error-503" element={<Error503 />} />

        {auth.userTypeId == UserType.Staff ? (
          <Route element={<MainLayout />}>
            {staffRoutes.map((data, i) => (
              <Route key={i} exact path={`${data.url}`} element={data.component} />
            ))}
          </Route>
        ) : (
          <Route element={<CustomerLayout />}>
            {customerRoutes.map((data, i) => (
              <Route key={i} exact path={`${data.url}`} element={data.component} />
            ))}
          </Route>
        )}
      </Routes>
      <ScrollToTop />
    </>
  );
};

function MainLayout() {
  const { menuToggle } = useContext(ThemeContext);
  return (
    <div id="main-wrapper" className={`show ${menuToggle ? 'menu-toggle' : ''}`}>
      <Nav />
      <div className="content-body" style={{ minHeight: window.screen.height - 45 }}>
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function CustomerLayout() {
  const { menuToggle } = useContext(ThemeContext);
  return (
    <div id="main-wrapper" className={`show ${menuToggle ? 'menu-toggle' : ''}`}>
      <CustomerNav />
      <div className="content-body" style={{ minHeight: window.screen.height - 45 }}>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Markup;
