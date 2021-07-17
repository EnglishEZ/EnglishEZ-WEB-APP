import React from 'react';
import './styles.css';
import Logo from '../../Assets/Logo.png';
import Head from '../../Assets/Header.jpg';
import Play from '../../Assets/playstore.png';
import App from '../../Assets/App Store.png';
import { Avatar } from '@material-ui/core';
function Header() {
    return (
        <nav id="navbar">
            <div className="navbar">
                <div className="left-container">
                    <img src={Logo} alt="Not found" className="img10" />
                </div>
                <div className="right-container">
                    <ul className="menu">
                        <li ><a href="#navbar" id="home">Home</a></li>
                        <li ><a href="#Intro">Who Are We?</a></li>
                        <li><a href="#Functions">Why EnglishEZ?</a></li>
                        <li><a href="#Client">Career</a></li>
                    </ul>
                </div>
            </div>
            <div className="img-handle">
                <img src={Head} alt="Not Found" className="img11"/>
            </div>
            <div className="stores">
                <Avatar src={Play} alt="Not Found" className="Avatar"/>
                <Avatar src={App} alt="Not Found" className="Avatar-Two"/>
            </div>
        </nav>

    )
}

export default Header