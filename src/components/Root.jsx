import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'

const Root = () => {
  return (
    <main>
        <NavBar />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Root