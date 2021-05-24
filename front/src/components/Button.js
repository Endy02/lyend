import React from 'react'
import { Link } from 'react-router-dom'

const STYLES = ['btn-current','btn-great','btn-cream','btn-sand','btn-beaut']

const SIZES = ['btn-small','btn-medium','btn-large']

const Button = ({children, type, onClick, buttonStyle, buttonSize, link}) => {

    const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    
    const checkSize = SIZES.includes(buttonSize)

    return (
        <Link to={link} className="btn-mobile">
            <button className={`btn ${checkStyle} ${checkSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}

export default Button
