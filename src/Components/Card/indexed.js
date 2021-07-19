import React from 'react'
import './styles.css';
import AI from '../../Assets/AI.png';

function CardTwo(props) {
    return (
        <div className="card-two">
            <img src={AI} className="adjust-img-two" alt="Not Found" />
            <div className="content-two">
                <h1 className="heading-two">{props.headerText}</h1>
                <p className="text-two">{props.bodyText}</p>
            </div>
            <div className="img-cont-two">
                <img src={props.ImageSrc} alt="Not Found" className="img6" />
            </div>
        </div>
    )
}

export default CardTwo
