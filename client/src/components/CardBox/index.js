import React from "react";
import "./cardbox.css";

const cardbox = (props) => {
    return (
        <div className="card">
            <div className={props.className}>
                <img src={props.img} alt={props.imgalt} />
                <h1>{props.title}</h1>
                <p>{props.details}</p>
            </div>
        </div>
    )
}

export default cardbox;