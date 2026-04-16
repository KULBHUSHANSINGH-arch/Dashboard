import React, { useState } from 'react'
import './Sidebar.css'

const navItems = [
    {
        icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
        ),
        label: 'Dashboard',
        active: true,
    },
    {
        icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
            </svg>
        ),
        label: 'Employees',
    },
    {
        icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        label: 'Reports',
    },
    {
        icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
        ),
        label: 'Tasks',
    },
    {
        icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
        ),
        label: 'Edit',
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="sidebarContainer">
            <div className="sidebar-logo">
                <div className="logo-icon">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="9" height="9" rx="2" fill="#fff" opacity="0.9" />
                        <rect x="13" y="2" width="9" height="9" rx="2" fill="#fff" opacity="0.6" />
                        <rect x="2" y="13" width="9" height="9" rx="2" fill="#fff" opacity="0.6" />
                        <rect x="13" y="13" width="9" height="9" rx="2" fill="#fff" opacity="0.3" />
                    </svg>
                </div>
            </div>

            <nav className="sidebar-nav">
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        className={`sidebar-nav-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                        title={item.label}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-tooltip">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="sidebar-bottom">
                <button className="sidebar-nav-item logout-btn" title="Logout">
                    <span className="nav-icon">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                    </span>
                    <span className="nav-tooltip">Logout</span>
                </button>
            </div>
        </div>
    )
}

export default Sidebar