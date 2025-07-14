import './button.css'
import React from 'react'

function Button({
    name = 'View More',
    type = 'default',
    size = 'large'
}) {

    const className = `btn btn-size-${size} btn-${type}`;

    return (
        <button className={className}>{name}</button>
    )
}

export default Button