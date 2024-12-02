import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
       <header>
        <Navbar/>
       </header>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout