import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    /* Fonction that allows to adapt the app according to screen size*/
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                   <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                       DISHOP STREAM
                       <i className='fas fa-couch'/>
                   </Link>
                   <div className='menu-icon' onClick={handleClick}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div> 
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Movies" className='nav-links' onClick={closeMobileMenu}>
                                Movies
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Series" className='nav-links' onClick={closeMobileMenu}>
                                Series
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Sign-Up" className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign-Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
               </div>
           </nav>
        </>
    )
}

export default Navbar
