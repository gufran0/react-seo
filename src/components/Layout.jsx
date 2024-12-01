import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
       <header>
        <Navbar></Navbar>
       </header>
        <Outlet/>
        <Footer></Footer>
    </>
  )
}

export default Layout