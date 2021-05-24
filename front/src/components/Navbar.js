import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton)

    return (
        <>
            <header className="navbar">
                <Link to='/' className="nav-logo">
                    LYEND
                </Link>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times fa-lg' : 'fas fa-bars fa-lg'} />
                </div>
                <ul className={click ? "nav-list active" : "nav-list"}>
                    <li className="nav-item"><Link to='/artboards' className='nav-link' onClick={closeMobileMenu}>Artboards</Link></li>
                    <li className="nav-item"><Link to='/gradients' className='nav-link' onClick={closeMobileMenu}>Gradients</Link></li>
                    <li className="nav-item"><Link to='/armony' className='nav-link' onClick={closeMobileMenu}>Armony</Link></li>
                    <li className="nav-item"><Link to='/sign-up' className='nav-link-mobile' onClick={closeMobileMenu}>Sign Up</Link></li>
                </ul>
                {button && <Button buttonStyle='btn-current' link='/sign-up'>Sign up</Button>}
            </header>
        </>
    )
}

export default Navbar