import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import FloatingSocialBar from '../components/shared/FloatingSocialBar'

function RootLayout() {
  return (
    <div>
      <Header/>
       <FloatingSocialBar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default RootLayout
