import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  

  return (
  <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://i.pinimg.com/1200x/ce/0a/0b/ce0a0bac2d450988d2cb5c255bed8f93.jpg"
                alt="Gayatri"
                className="w-14 h-14 md:w-20 md:h-20 rounded-md object-cover ring-1 ring-black/5"
              />
              <div className="leading-none">
                <div className="text-xl md:text-2xl lg:text-3xl font-primary font-extrabold font-heading">
                  Gayatri
                </div>
                <div className="text-sm md:text-base uppercase tracking-wider text-black/60">
                  Hardware & Plywood
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-5 lg:space-x-8">
            <Link to="/" className="py-3 px-4 text-base md:text-lg font-medium text-black/90 hover:text-brand-800">Home</Link>
            <Link to="/about" className="py-3 px-4 text-base md:text-lg font-medium text-black/90 hover:text-brand-800">About</Link>
            <Link to="/products" className="py-3 px-4 text-base md:text-lg font-medium text-black/90 hover:text-brand-800">Products</Link>
            <Link to="/login" className="py-3 px-4 text-base md:text-lg font-medium text-black/90 hover:text-brand-800">Login</Link>
            <Link to="/contact" className="py-3 px-4 text-base md:text-lg font-medium text-black/90 hover:text-brand-800">Contact</Link>
          </nav>

        </div>
      </div>
    </header>

  )
}

export default Navbar
