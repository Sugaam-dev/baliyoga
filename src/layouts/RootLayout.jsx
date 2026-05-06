import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import WhatsAppButton from '../Components/WhatsAppButton'
import FloatingSocialBar from '../Components/FloatingSocialBar'

function RootLayout() {
  return (
    <div>
      <Header/>
       <FloatingSocialBar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
       {/* Global floating WhatsApp button */}
      <WhatsAppButton
        phone="917483987568"
        message="Hello! I'd like to know more about your yoga programs."
      />
    </div>
  )
}

export default RootLayout
