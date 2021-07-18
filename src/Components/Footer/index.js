import React from 'react'
import './styles.css';
import AI from '../../Assets/AI.png';

function Footer() {
    return (
        <section id="Footer">
            <div className="blue">
                <p className="txt-foot"><a href="#navbar">Home</a><span className="space">|</span><a href="#Intro">Meet Our Team</a></p>
                <p className="txt-foot">Our Vision<span  className="space">|</span>Our Mission<span className="space">|</span>Privacy Policy</p>
                <img src={AI} className="img4" alt="Not Found"/>
                <img src={AI} className="img5" alt="Not Found"/>

            </div>

        </section>
    )
}

export default Footer