import React from "react";

const Button = (props) => {

    let btnCss = `btn ${props.typeBtn} ${props.css}`;

    return (
        <button 
            className={btnCss} 
            onClick={props.click}
            style={props.isSelected ? {opacity:1} : {opacity:0.7}}
        >
            {props.children}
        </button>
    );

}

export default Button;