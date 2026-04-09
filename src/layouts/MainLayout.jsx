import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Footer from '../components/Footer'

function MainLayout() {

  const [open, setOpen] = useState(false)

  return (
    <div className="layout">

        <Sidebar open={open} setOpen={setOpen} />

        <div className="main">

            <Header setOpen={setOpen} />

            <main className="content">
                <Outlet />
            </main>

            <Footer />

        </div>
      
    </div>
  )
}

export default MainLayout