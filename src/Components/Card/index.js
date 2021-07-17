import React from 'react'
import './styles.css';
import AI from '../../Assets/AI.png';

function CardOne(props){
    return(
        <div className="card">
            <img src={AI} className="adjust-img" alt="Not Found"/>
            <div className="img-cont">
                <img src={props.ImageSrc} alt="Not Found" className="img6"/>
            </div>
            <div className="content">
                <h1 className="heading">{props.headerText}</h1>
                <p className="text">{props.bodyText}</p>
            </div>
        </div>
    )
}

export default CardOne