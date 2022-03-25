import React from 'react';
import './Header.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='header'>
            <h1>The Meal DB</h1>
            <ul className="header-menu">
                <li><a href="/home"> <FontAwesomeIcon className='icon' icon={faHome}></FontAwesomeIcon>Home</a></li>
                <li><a href="/api">API</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/login"><FontAwesomeIcon className='icon' icon={faUser}></FontAwesomeIcon> Login</a></li>
            </ul>
        </div>
    );
};

export default Header;