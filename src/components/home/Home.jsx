import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet,Link } from 'react-router-dom'

export default function 
() {
  return (
    <>
    <Navbar></Navbar>
          <Outlet></Outlet>
    
          <Footer></Footer>
        </>
  )
}
