import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <header className="navbar">
                <Link to='/' className="nav-logo">
                    LYEND
                </Link>
                <ul className="nav-list">
                    <li className="nav-item"><Link to='/artboards' className='nav-link'>Artboards</Link></li>
                    <li className="nav-item"><Link to='/gradients' className='nav-link'>Gradients</Link></li>
                    <li className="nav-item"><Link to='/armony' className='nav-link'>Armony</Link></li>
                </ul>
                <div className="nav-tools">
                    <Link to='/login' className='btn btn-great'>Login</Link>
                </div>
            </header>
        </>
    )
}

export default Navbar