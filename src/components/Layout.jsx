import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
       <header>
        <Navbar></Navbar>
       </header>
        <Outlet/>
        <Footer></Footer>
    </div>
  )
}

export default Layout