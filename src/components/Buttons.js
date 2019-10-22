import React from 'react';
import '../index.css'

const Button = props => (
    <div className="button" onClick={ () => props.handleClick(props.children)}>
        {props.children}
    </div>
)

export default Button;