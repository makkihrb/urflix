import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer.jpg';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">URFLIX</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/contactus">Contact us</Link>
                        <Link to="/terms">Term of services</Link>
                    </div>
                    <div >
                        
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Top IMDB</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Application</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
