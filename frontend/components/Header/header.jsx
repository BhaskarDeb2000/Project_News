import React from 'react';
import './header.css';
import logo from './logo.png';


const Header = ({ onClickCategory }) => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>

            <nav className="navbar">
                <ul>
                    <li><button onClick={() => onClickCategory('technology')}>Information Technology</button></li>
                    <li><button onClick={() => onClickCategory('business')}>Business</button></li>
                    <li><button onClick={() => onClickCategory('education')}>Education</button></li>
                </ul>
            </nav>

            <div className="login">
                <i className="fas fa-user-circle"></i> <span>Login</span>
            </div>
        </header>
    );
};


export default Header;
