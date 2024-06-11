import React from 'react'
import Header from './navbar/Header'
import Page from './page/Page'
// import './right.css'

const RightSidebar = () => {
  return (
    <div style={{margin:"0 20px",padding:"20px 70px"}}>
     <Header/>
     <Page/>
    </div>
  )
}

export default RightSidebar
