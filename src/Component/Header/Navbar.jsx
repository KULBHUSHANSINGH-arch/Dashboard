import React, { useState } from 'react'
import './Header.css'
import calender from '../../assets/icons/calendar.png';

const Navbar = () => {
    const [selectedYear, setSelectedYear] = useState('2025-2026');
    const [isOpen, setIsOpen] = useState(false);

    const years = [];
    for (let y = 2025; y >= 2000; y--) {
        years.push(`${y}-${y + 1}`);
    }

    return (
        <div className="navbarWrapper">
            <div className="navbar-left">
                <h6 className="page-title">Dashboard</h6>
            </div>
            <div className="navbar-right">
                <div className="year-badge" onClick={() => setIsOpen(!isOpen)}>
                    <img src={calender} alt="calender" />
                    <span>{selectedYear}</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
                {isOpen && (
                    <div className="year-dropdown">
                        {years.map(yr => (
                            <div
                                key={yr}
                                className={`year-dropdown-item ${yr === selectedYear ? 'active' : ''}`}
                                onClick={() => { setSelectedYear(yr); setIsOpen(false); }}
                            >
                                {yr}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar