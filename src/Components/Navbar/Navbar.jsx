import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24 transition-all duration-300">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 md:gap-3 group">
              <img
                src="https://i.pinimg.com/1200x/ce/0a/0b/ce0a0bac2d450988d2cb5c255bed8f93.jpg"
                alt="Gayatri"
                className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg object-cover ring-1 ring-black/5 transition-transform group-hover:scale-105"
              />
              <div className="leading-none">
                <div className="text-lg md:text-xl lg:text-2xl font-heading font-extrabold text-black">
                  Gayatri
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-black/50 font-medium">
                  Hardware & Plywood
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link to="/" className="py-2 px-3 text-sm xl:text-base font-semibold text-black/60 hover:text-black hover:bg-black/5 rounded-lg transition-all">Home</Link>
            <Link to="/about" className="py-2 px-3 text-sm xl:text-base font-semibold text-black/60 hover:text-black hover:bg-black/5 rounded-lg transition-all">About</Link>
            <Link to="/products" className="py-2 px-3 text-sm xl:text-base font-semibold text-black/60 hover:text-black hover:bg-black/5 rounded-lg transition-all">Products</Link>
            <Link to="/login" className="py-2 px-3 text-sm xl:text-base font-semibold text-black/60 hover:text-black hover:bg-black/5 rounded-lg transition-all">Login</Link>
            <Link to="/contact" className="ml-4 px-6 py-2.5 bg-black text-white text-sm xl:text-base font-bold rounded-full hover:bg-neutral-800 transition-all shadow-md active:scale-95">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-black/70 hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0'}`}
        >
          <nav className="flex flex-col space-y-4 border-t border-black/5 pt-4">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-black/80 px-2"
            >Home</Link>
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-black/80 px-2"
            >About</Link>
            <Link 
              to="/products" 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-black/80 px-2"
            >Products</Link>
            <Link 
              to="/login" 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-black/80 px-2"
            >Login</Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="mx-2 px-6 py-3 bg-black text-white text-center font-bold rounded-xl shadow-lg"
            >Contact Us</Link>
          </nav>
        </div>
      </div>
    </header>

  )
}

export default Navbar
