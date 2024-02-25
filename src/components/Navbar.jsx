import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/Navbar.css"
import { faHome, faImages, faEnvelope, faInfoCircle, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
                    <div className='nav-links'>
                        <li ><FontAwesomeIcon icon={faHome} /> Home</li>
                    </div>
                    <div className='nav-links'>
                        <li><FontAwesomeIcon icon={faImages} /> Gallery</li>
                    </div>
                    <div className='nav-links'>
                        <li><FontAwesomeIcon icon={faEnvelope} /> Contact</li>
                    </div>
                    <div className='nav-links'>
                        <li><FontAwesomeIcon icon={faInfoCircle} /> About</li>
                    </div>
                </ul>
            </div>
            <div className="navbar-toggle" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
    );
}

export default Navbar;
