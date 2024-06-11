import React from 'react'
import './navbar.css'
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import user from '../../assets/user.webp'

const Navbar = () => {
  return (

    <div className='navbar'>
      <div className="leftside">
        <div className="bar-icons">
          <HiOutlineBars3 />
        </div>
        <hr/>
        <div className="search-bar">
          <IoSearchOutline className='search-icon'/>
          <input type="text" placeholder='search...'/>
        </div>

      </div>
      <div className="rightside">
        <div className="notification">
        <IoNotifications className='notify-icon'/>
          <span></span>
        </div>
        <div className="login">
          <img src={user} alt="" />
          <h5>John Doe</h5>
          <RiArrowDropDownLine  className='drop-down'/>

        </div>
      </div>


    </div>
  )
}

export default Navbar

