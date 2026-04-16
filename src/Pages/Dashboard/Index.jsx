import React from 'react'
import './dashboard.css'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Header from '../../Component/Header/Header'
import HeroSection from '../../Component/HeroSection/HeroSection'

const Dashboard = () => {
    return (
        <div className="dashboardRoot">
            {/* Sidebar - fixed left */}
            <Sidebar />

            {/* Main area */}
            <div className="dashboardMain">
                <Header />
                <div className="dashboardContent">
                    <HeroSection />
                </div>
            </div>
        </div>
    )
}

export default Dashboard