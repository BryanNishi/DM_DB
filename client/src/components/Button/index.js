import React from "react";
import "./button.css";

const button = (props) => {
    return (
        <button className={props.className} type={props.type} href={props.href} onClick={props.onClick}>
            {props.name}
        </button>
    )
}

export default button;