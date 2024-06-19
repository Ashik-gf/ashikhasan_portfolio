import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const HomeLayOut = () => {
  return (
    <div className=' lg:max-w-7xl mx-auto h-full'>
        <Header  />
        <Outlet />
        <Footer />
    </div>
  )
}

export default HomeLayOut