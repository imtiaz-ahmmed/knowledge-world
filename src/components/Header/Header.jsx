import React from 'react';
import './Header.css';
import user from '../../images/user.png'

const Header = () => {
    return (
        <nav className='headerContainer'>
            <h2>Knowledge World</h2>
            <div className='header-inner'>
                <a href="/blog">Blog</a>
                <a href="/about-us">About Us</a>
                <a href="/User">Account</a>
                <a href=""><img src={user} alt="" /></a>
            </div>
        </nav>
    );
};

export default Header;