import React from 'react'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
  
<div>
  <footer className=" bg-white text-black border-t border-black/5">
    <div className="mx-auto w-full max-w-screen-xl px-3 sm:px-4 lg:px-6 py-12">
      <div className="md:flex md:justify-between md:items-start gap-8">

        {/* Column 1: Brand and Description */}
        <div className="mb-6 md:mb-0 md:w-1/4">
          <a href="#home" className="flex items-center mb-4 gap-4">
            <img
              src="https://i.pinimg.com/1200x/ce/0a/0b/ce0a0bac2d450988d2cb5c255bed8f93.jpg"
              alt="Gayatri logo"
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-sm ring-1 ring-black/5 object-cover"
            />

            <div className="leading-none">
              <div className="text-2xl md:text-3xl font-heading font-extrabold">Gayatri</div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-black/60">Hardware & Plywood</div>
            </div>
          </a>

          <p className="text-black/75 text-sm max-w-sm">
            Premium plywood and trusted hardware — quality materials, honest pricing, fast local delivery.
          </p>

          <div className="mt-4 flex gap-3">
            <Link className="btn-primary" to="/about">Shop</Link>
            <Link className="btn-secondary" to="/contact">Contact</Link>
          </div>
        </div>

        {/* Columns 2-5: Links */}
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 md:w-3/4">
          
          {/* Company */}
          <div>
            <h3 className="mb-6 text-sm md:text-base font-heading font-semibold uppercase text-black/80">Company</h3>
            <ul className="text-black/70 font-medium space-y-3">
              <li><a href="#about" className="hover:underline hover:text-brand-800">About Us</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Our Brands</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:underline hover:text-brand-800">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-sm md:text-base font-heading font-semibold uppercase text-black/80">Resources</h3>
            <ul className="text-black/70 font-medium space-y-3">
              <li><a href="#" className="hover:underline hover:text-brand-800">Catalog & Brochures</a></li>
              <li><a href="#" className="hover:underline hover:text-brand-800">Pricing Guide</a></li>
              <li><a href="#" className="hover:underline hover:text-brand-800">Plywood Grades</a></li>
              <li><a href="#" className="hover:underline hover:text-brand-800">Hardware Tips</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-sm md:text-base font-heading font-semibold uppercase text-black/80">Support</h3>
            <ul className="text-black/70 font-medium space-y-3">
              <li><a href="#contact" className="hover:underline hover:text-brand-800">Contact Us</a></li>
              <li><a href="#" className="hover:underline hover:text-brand-800">FAQs</a></li>
              <li><a href="#" className="hover:underline hover:text-brand-800">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:underline hover:text-brand-800">Returns</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-sm md:text-base font-heading font-semibold uppercase text-black/80">Legal</h3>
            <ul className="text-black/70 font-medium space-y-3">
              <li><a href="#" className="hover:underline hover:text-brand-800">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline hover:text-brand-800">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline hover:text-brand-800">Cookie Policy</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Optional Newsletter Section (commented out) */}

      <div className="mt-8 border-t border-black/5 pt-8"></div>

      {/* Copyright Bar */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="sm:flex sm:items-center sm:justify-between w-full">
          <div className="flex items-center gap-3">
            <img src="https://i.pinimg.com/1200x/ce/0a/0b/ce0a0bac2d450988d2cb5c255bed8f93.jpg" alt="Gayatri logo" className="w-10 h-10 md:w-12 md:h-12 rounded-md shadow-sm ring-1 ring-black/5 object-cover" />
            <div className="text-sm text-black/70">© {new Date().getFullYear()} <span className="font-semibold">Gayatri Hardware</span>. All rights reserved.</div>
          </div>

          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition duration-150">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h3.295l-.527 3.012h-2.768v7.022C18.342 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-600 dark:hover:text-pink-500 transition duration-150">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.71.01 3.68.06 1.02.04 1.79.2 2.41.46.6.26 1.13.62 1.63 1.12.5.5.86 1.03 1.12 1.63.26.62.42 1.39.46 2.41.05.97.06 1.25.06 3.68s-.01 2.71-.06 3.68c-.04 1.02-.2 1.79-.46 2.41-.26.6-.62 1.13-1.12 1.63-.5.5-.86 1.03-1.12 1.63-.62.26-1.39.42-2.41.46-.97.05-1.25.06-3.68.06s-2.71-.01-3.68-.06c-1.02-.04-1.79-.2-2.41-.46-.6-.26-1.13-.62-1.63-1.12-.5-.5-.86-1.03-1.12-1.63-.26-.62-.42-1.39-.46-2.41-.05-.97-.06-1.25-.06-3.68s.01-2.71.06-3.68c.04-1.02.2-1.79.46-2.41.26-.6.62-1.13 1.12-1.63.5-.5.86-1.03 1.12-1.63.62-.26 1.39-.42 2.41-.46.97-.05 1.25-.06 3.68-.06zm0-2c-2.67 0-3.03.01-4.12.06C6.55 2.13 5.75 2.3 5.07 2.65 3.39 3.4 2.13 4.66 1.38 6.34c-.35.68-.52 1.48-.56 2.57C.82 10.03.8 10.39.8 12s.01 1.97.06 3.06c.04 1.09.2 1.89.56 2.57.75 1.68 2.01 2.94 3.69 3.69.68.35 1.48.52 2.57.56 1.09.05 1.45.06 3.06.06s1.97-.01 3.06-.06c1.09-.04 1.89-.2 2.57-.56 1.68-.75 2.94-2.01 3.69-3.69.35-.68.52-1.48.56-2.57.05-1.09.06-1.45.06-3.06s-.01-1.97-.06-3.06c-.04-1.09-.2-1.89-.56-2.57-1.39-2.91-4.32-2.91-4.32-2.91zm-1.12 9.21c-2.31 0-4.19-1.88-4.19-4.19s1.88-4.19 4.19-4.19 4.19 1.88 4.19 4.19-1.88 4.19-4.19 4.19zm0-6.38c-1.2 0-2.18.98-2.18 2.18s.98 2.18 2.18 2.18 2.18-.98 2.18-2.18-.98-2.18-2.18-2.18zm3.62-1.14c0 .59-.48 1.07-1.07 1.07s-1.07-.48-1.07-1.07c0-.59.48-1.07 1.07-1.07s1.07.48 1.07 1.07z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  </div>
  

  )
}

export default Footer
