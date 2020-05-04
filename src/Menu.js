import React from 'react';
import './Layout.css';
import logo from './Images/logo.png';
import home from './Images/home.png';
import search from './Images/search.png';
import chat from './Images/chat.png';
import profile from './Images/profile.png';

import { Link } from 'react-router-dom';

function Menu() {
    return (
<ul className="List">
            <Link style={{ color: "black", textDecoration: "none" }} to='/in/home'>
                <li><img src={home} className="Icon" /><header className="IconT"> Home </header></li>
            </Link>
            <Link style={{ color: "black", textDecoration: "none" }} to='/in/search'>
                <li><img src={search} className="Icon" /><header className="IconT"> Search </header></li>
            </Link>
            <Link style={{ color: "black", textDecoration: "none" }} to='/in/chat'>
                <li><img src={chat} className="Icon" /><header className="IconT"> Chat </header></li>
            </Link>
            <Link style={{ color: "black", textDecoration: "none" }} to='/in/profile'>
                <li><img src={profile} className="Icon" /><header className="IconT"> Profile </header></li>
            </Link>
        </ul>

    );
}

export default Menu;
