import React from 'react'
import './styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImgThree from '../../Assets/Image3.png';
import ImgSeventeen from '../../Assets/Image17.png';
import ImgFive from '../../Assets/Image5@2x.png';
import { Avatar } from '@material-ui/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import { Swiper, SwiperSlide } from "swiper/react";


function Intro() {
    return (
        <section id="Intro">
            <h1 className="header">Who Are We</h1>
            <p className="intro">We are a Team From IITs, IMT India, English is a Big Issue in India.</p>
            <Swiper slidesPerView={4.3} spaceBetween={100} loop={true} centeredSlides={true} centeredSlidesBounds={true} speed={1000}  className="mySwiper">
                <SwiperSlide>
                    <p className="txt">"Very helpful for me who was confused and knew what business was."</p>
                    <Avatar src={ImgFive} className="img-Two" />
                    <h1 className="name">Tom Mikel</h1>
                    <p className="desig">Executive Manager</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="txt">"Very helpful for me who was confused and knew what business was."</p>
                    <Avatar src={ImgFive} className="img-Two" />
                    <h1 className="name">Tom Mikel</h1>
                    <p className="desig">Executive Manager</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="txt-two">"This is my amazing experience after using the services of this website. I am very happy with the facilities and time management that is served on this website."</p>
                    <Avatar src={ImgThree} className="img-Two" />
                    <h1 className="name">Ben Parker</h1>
                    <p className="desig">CEO & Founder</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="txt">"Very good experience here when I found out about this business site I was very entusiastic and thank you"</p>
                    <Avatar src={ImgSeventeen} className="img-Two" />
                    <h1 className="name">Angelina Max</h1>
                    <p className="desig">Executive Manager</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="txt">"Very good experience here when I found out about this business site I was very entusiastic and thank you"</p>
                    <Avatar src={ImgSeventeen} className="img-Two" />
                    <h1 className="name">Angelina Max</h1>
                    <p className="desig">Executive Manager</p>
                </SwiperSlide>
            </Swiper>
        </section >
    )
}

export default Intro