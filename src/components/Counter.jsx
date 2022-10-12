import React from "react";
import "./Counter.css";

function Counter(props) {
    const { className, number = 0 } = props;

    let cssClass = "counter";
    className && (cssClass += " " + className);
    !number && (cssClass += " is-zero");

    return <div className={cssClass}>{number}</div>;
}

export default Counter;
