import React from 'react'
import LeftSideBar from '../home/leftSidebar/LeftSideBar'
import RightSidebar from '../home/rightSidebar/RightSidebar'

const Home = () => {
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <LeftSideBar/>
      <RightSidebar/>
    </div>
  )
}

export default Home

