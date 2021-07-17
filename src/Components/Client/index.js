import React from 'react'
import './styles.css';
import { Avatar } from '@material-ui/core';
import ImgOne from '../../Assets/Image1.png';
import ImgTwo from '../../Assets/Image2.png';
import ImgFour from '../../Assets/Image4.png';
import ImgSeven from '../../Assets/Image7.png';
import ImgEight from '../../Assets/Image8.png';
import ImgNine from '../../Assets/Image9.png';
import ImgTen from '../../Assets/Image10.png';
import ImgEleven from '../../Assets/Image11.png';
import ImgTwelve from '../../Assets/Image12.png';
import ImgThirteen from '../../Assets/Image13.png';
import ImgFourteen from '../../Assets/Image14.png';
import ImgFifteen from '../../Assets/Image15.png';
import ImgSixteen from '../../Assets/Image16.png';
function Client() {
    console.log(window.screen.height, window.screen.width)
    return (
        <section id="Client">
            <h1 className="header">Our Client Says</h1>
            <div className="map"></div>
            <div className="img">
                <Avatar alt="Remy Sharp" src={ImgOne} id="img-one" />
                <Avatar alt="Remy Sharp" src={ImgTwo} id="img-two" />
                <Avatar alt="Remy Sharp" src={ImgFour} id="img-four" />
                <Avatar alt="Remy Sharp" src={ImgSeven} id="img-seven" />
                <Avatar alt="Remy Sharp" src={ImgEight} id="img-eight" />
                <Avatar alt="Remy Sharp" src={ImgNine} id="img-nine" />
                <Avatar alt="Remy Sharp" src={ImgTen} id="img-ten" />
                <Avatar alt="Remy Sharp" src={ImgEleven} id="img-eleven" />
                <Avatar alt="Remy Sharp" src={ImgTwelve} id="img-twelve" />
                <Avatar alt="Remy Sharp" src={ImgThirteen} id="img-thirteen" />
                <Avatar alt="Remy Sharp" src={ImgFourteen} id="img-fourteen" />
                <Avatar alt="Remy Sharp" src={ImgFifteen} id="img-fifteen" />
                <Avatar alt="Remy Sharp" src={ImgSixteen} id="img-sixteen" />
            </div>
            <div id="box">
                <h4 id="head">Amazing Service</h4>
                <p id="content">This app has completely transformed my spoken English. thanks to you, I can now talk with confidence</p>
                <div id="des">
                    <p id="eliz">- Elizabeth Bernadette</p>
                    <p>MD, Company Name</p>
                </div>
            </div>
        </section>
    )
}

export default Client
