import React from 'react'
import { RiHome4Line } from "react-icons/ri";
import { MdChevronRight } from "react-icons/md";
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <ul>
        <li><RiHome4Line style={{fontSize:"15px"}}/>Admin</li>
        <MdChevronRight />
        <li>Manage Units</li>
      </ul>

      <h2 style={{marginTop:"18px",fontWeight:"400",color:"#00054b"}}>Manage Units</h2>
    </div>
  )
}

export default Header
