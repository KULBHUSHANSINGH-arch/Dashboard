import React from 'react'
import './Header.css'
import Navbar from './Navbar'
import logo from '../../assets/logo/logo.png';
import link from '../../assets/icons/link.png';
import profile from '../../assets/logo/profile.png';

const Header = () => {
    return (
        <header className="headerWrapper">
            {/* Top bar */}
            <div className="topBar">
                <div className="topBar-left">
                    <div className='logoContainer'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header-divider"></div>
                    <span className="module-title">Employee Self Service</span>
                </div>
                <div className="topBar-right">
                    <span className="welcome-text">Welcome Employee</span>
                    <img src={link} alt="link" />
                    <img src={profile} alt="profile" className="profile-img" />
                </div>
            </div>

            {/* Navbar */}
            <Navbar />
        </header>
    )
}

export default Header