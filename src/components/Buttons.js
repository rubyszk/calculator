import React from 'react';
import '../index.css'

const borderRadius = sym => {
    return !isNaN(sym) 
};

const Button = props => (
    <div className={`button ${borderRadius(props.children) ? false : "sym"}`} onClick={ () => props.handleClick(props.children)}>
        {props.children}
    </div>
)

export default Button;