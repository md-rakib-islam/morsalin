import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
        
            <h1>I am building a team of scientists to create a pharmaceutical company </h1>
            <h1>Total Budget : <span>100 Million</span></h1>

            <nav className="menu">
                <a href="/home">Home</a>
                <a href="/gallary">Gallary</a>
                <a href="/scientists">About Scientists</a>
            </nav>
        </div>
    );
};

export default Header;