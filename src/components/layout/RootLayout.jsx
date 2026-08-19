import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer'
import Header from './Header'
import FloatingSocialBar from '../shared/FloatingSocialBar'

function RootLayout() {
  const location = useLocation();

  return (
    <div>
      <Header/>
      <FloatingSocialBar/>
      <main className="overflow-x-hidden">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <React.Suspense fallback={<div className="flex items-center justify-center min-h-[50vh] text-navy font-medium">Loading...</div>}>
            <Outlet/>
          </React.Suspense>
        </motion.div>
      </main>
      <Footer/>
    </div>
  )
}

export default RootLayout
