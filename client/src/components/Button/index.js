import React from "react";
import "./button.css";

const button = (props) => {
    return (
        <button className={props.className} type={props.type} href={props.href} onClick={props.clicked}>
            <p>{props.name}</p>
        </button>
    )
}

export default button;