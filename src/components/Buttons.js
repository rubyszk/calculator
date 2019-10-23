import React from 'react';
import '../App.css'

const colorChange = (sym) => {
    return !isNaN(sym) 
};

const Button = props => (
    <div className={`button ${colorChange(props.children) ? false : "sym"}`} onClick={ () => props.handleClick(props.children)}>
        {props.children}
    </div>
)

export default Button;