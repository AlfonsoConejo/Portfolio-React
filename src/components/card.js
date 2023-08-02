import React from "react";
import '../stylesheets/card.css';

function Card(props) {
    return(
        <div className="card">
            <div className="logo">
                <div className="card-image">
                    <img draggable="false" alt="personal" src={require(`../images/${props.image}.png`)}/>
                </div>
            </div>
            <div className="description">
                <h2>{props.title}</h2>
                <p className="job-description">{props.description}</p>
                <p className="period"> {props.period}</p>
            </div>
        </div>
    );
}

export default Card;