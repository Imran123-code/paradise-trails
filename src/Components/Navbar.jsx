import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Navbar.css";
import logo from '../assets/logo.png'
function Navbar() {
    return (
        <div className='Navbar'>
            <div className="Navbar-logo">
                <img src={logo}></img>
            </div>
            <div className="Navbar-links">
                <ul>
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Favorites</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <button><i className="fa-solid fa-user"></i>Login</button>
            </div>
        </div>
    )
}

export default Navbar
