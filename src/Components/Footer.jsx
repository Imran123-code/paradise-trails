import React from 'react'
import "./Footer.css"
import "./Navbar.css"
import logo from '../assets/logo.png'

function Footer() {
    return (
        <div className='Footer'>
            <div className="f1">
                <div className="Navbar-logo">
                    <img src={logo}></img>
                </div>
                <p>Explore the Hidden beauty of kashmir and create a memory for lifetime.</p>
            </div>
            <div className="f2">
                <h3>Quick links</h3>
                <p>Home</p>
                <p>Explore</p>
                <p>Favorites</p>
                <p>About</p>
            </div>
            <div className="f3 f2">
                <h3>Top destinations</h3>
                <p>Manasbal Lake</p>
                <p>Gulmarg</p>
                <p>Pahalgam</p>
                <p>Doodhpathri</p>
            </div>
            <div className="f4 f2">
                <h3>Support</h3>
                <p>Help Center</p>
                <p>ravel Guide</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className="f5 f2">
                <h3>Follow us</h3>
                <div className='footericons'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <p>© 2026 Paradise Trails.</p>
                <p>All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
