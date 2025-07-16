import './button.css'
import React from 'react'

function Button({
    name = 'View More',
    type = 'default',
    size = 'large',
    onClick = () => { },
}) {

    const className = `btn btn-size-${size} btn-${type}`;

    return (
        <button onClick={onClick} className={className}>{name}</button>
    )
}

export default Button