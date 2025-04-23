import React from 'react'
import Navbar from '../pages/shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/shared/Footer'
import ThemeProvider from '../context/ThemeContext/ThemeProvider'

const MainLayout = () => {
  return (
 <ThemeProvider>
       <div className='max-w-7xl mx-auto mb-6'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
 </ThemeProvider>
  )
}

export default MainLayout
