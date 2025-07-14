import './button.css'
import React from 'react'

function Button({
    name = 'View More',
    type = 'default'
}) {
    return (
        <button className={`btn btn-${type}`}>{name}</button>
    )
}

export default Button