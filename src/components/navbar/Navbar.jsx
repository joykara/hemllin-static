import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../hemllinLogo.png'

const Navbar = () => {
  useEffect(() => {
    AOS.init({
        duration: 1200,
        delay: 1000,
    });
}, []
); //onscroll animation


  return (
    <div className="navbar">
      <div className="navbar__logo">
        <div className='navbar-hm__logo'>
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <Link className='navbar-hm__name' to="/">Hemllin</Link>
      </div>
      <div className="navbar__menu">
        <ul className="navbar__menu-content">
          <li className="navbar__menu-content-detail"><Link to='/contact-us'>Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
