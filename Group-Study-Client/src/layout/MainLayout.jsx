import React from 'react'
import Navbar from '../pages/shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/shared/Footer'

const MainLayout = () => {
  return (
    <div className='max-w-7xl mx-auto mb-6'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
