import React from 'react'
import './leftsiebar.css'
import { TiHome } from "react-icons/ti";
import { FiBarChart2 } from "react-icons/fi";

const LeftSideBar = () => {
    return (
        <div className='leftsidebar'>
            <div className="home-icons">
                <TiHome className='homeicon' />
                <h4 >Admin</h4>
            </div>

            <div className="report">
                <FiBarChart2 className='report-icon' />
                <h4 >Reporting</h4>
            </div>
        </div>

    )
}

export default LeftSideBar
