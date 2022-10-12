import React from "react";
import "./Button.css";

function Button(props) {
    const { children: text, className, onClick } = props;

    let cssClass = "btn";
    className && (cssClass += " " + className);

    return (
        <button className={cssClass} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
