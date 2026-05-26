import React from 'react'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-black/5">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-8">

          {/* Column 1: Brand and Description */}
          <div className="lg:w-1/3 xl:w-1/4">
            <Link to="/" className="flex items-center mb-6 gap-4 group">
              <img
                src="https://i.pinimg.com/1200x/ce/0a/0b/ce0a0bac2d450988d2cb5c255bed8f93.jpg"
                alt="Gayatri logo"
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl shadow-sm ring-1 ring-black/5 object-cover"
              />

              <div className="leading-tight">
                <div className="text-2xl md:text-3xl font-heading font-extrabold">Gayatri</div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-black/60">Hardware & Plywood</div>
              </div>
            </Link>

            <p className="text-black/75 text-sm md:text-base max-w-xs leading-relaxed">
              Premium plywood and trusted hardware — quality materials, honest pricing, fast local delivery.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="btn-primary" to="/about">Shop</Link>
              <Link className="btn-secondary" to="/contact">Contact</Link>
            </div>
          </div>

          {/* Columns 2-5: Links */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:w-2/3 xl:w-3/4">
            
            {/* Company */}
            <div>
              <h3 className="mb-6 text-sm md:text-base font-heading font-semibold uppercase text-black/80">Company</h3>
              <ul className="text-black/70 font-medium space-y-3">
              <li><Link to="/about" className="hover:underline hover:text-brand-800 transition-colors">About Us</Link></li>
                <li><Link to="/brands" className="hover:underline hover:text-brand-800 transition-colors">Our Brands</Link></li>
                <li><Link to="/careers" className="hover:underline hover:text-brand-800 transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="hover:underline hover:text-brand-800 transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-6 text-sm md:text-base font-heading font-semibold uppercase text-black/80">Resources</h3>
              <ul className="text-black/70 font-medium space-y-3">
                <li><Link to="/catalog" className="hover:underline hover:text-brand-800 transition-colors">Catalog & Brochures</Link></li>
                <li><Link to="/pricing" className="hover:underline hover:text-brand-800 transition-colors">Pricing Guide</Link></li>
                <li><Link to="/grades" className="hover:underline hover:text-brand-800 transition-colors">Plywood Grades</Link></li>
                <li><Link to="/tips" className="hover:underline hover:text-brand-800 transition-colors">Hardware Tips</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="mb-6 text-sm md:text-base font-heading font-semibold uppercase text-black/80">Support</h3>
              <ul className="text-black/70 font-medium space-y-3">
              <li><Link to="/contact" className="hover:underline hover:text-brand-800 transition-colors">Contact Us</Link></li>
                <li><Link to="/faqs" className="hover:underline hover:text-brand-800 transition-colors">FAQs</Link></li>
                <li><Link to="/shipping" className="hover:underline hover:text-brand-800 transition-colors">Shipping & Delivery</Link></li>
                <li><Link to="/returns" className="hover:underline hover:text-brand-800 transition-colors">Returns</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-6 text-sm md:text-base font-heading font-semibold uppercase text-black/80">Legal</h3>
              <ul className="text-black/70 font-medium space-y-3">
                <li><Link to="/privacy" className="hover:underline hover:text-brand-800 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:underline hover:text-brand-800 transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/cookies" className="hover:underline hover:text-brand-800 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="mt-12 border-t border-black/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.pinimg.com/1200x/ce/0a/0b/ce0a0bac2d450988d2cb5c255bed8f93.jpg" 
                alt="Gayatri logo" 
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg shadow-sm ring-1 ring-black/5 object-cover" 
              />
              <div className="text-sm text-black/60">
                © {new Date().getFullYear()} <span className="font-semibold text-black/80">Gayatri Hardware</span>. All rights reserved.
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-5">
              <a href="#" className="text-black/40 hover:text-blue-600 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h3.295l-.527 3.012h-2.768v7.022C18.342 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-black/40 hover:text-pink-600 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.71.01 3.68.06 1.02.04 1.79.2 2.41.46.6.26 1.13.62 1.63 1.12.5.5.86 1.03 1.12 1.63.26.62.42 1.39.46 2.41.05.97.06 1.25.06 3.68s-.01 2.71-.06 3.68c-.04 1.02-.2 1.79-.46 2.41-.26.6-.62 1.13-1.12 1.63-.5.5-.86 1.03-1.12 1.63-.62.26-1.39.42-2.41.46-.97.05-1.25.06-3.68.06s-2.71-.01-3.68-.06c-1.02-.04-1.79-.2-2.41-.46-.6-.26-1.13-.62-1.63-1.12-.5-.5-.86-1.03-1.12-1.63-.26-.62-.42-1.39-.46-2.41-.05-.97-.06-1.25-.06-3.68s.01-2.71.06-3.68c.04-1.02.2-1.79.46-2.41.26-.6.62-1.13 1.12-1.63.5-.5.86-1.03 1.12-1.63.62-.26 1.39-.42 2.41-.46.97-.05 1.25-.06 3.68-.06zm0-2c-2.67 0-3.03.01-4.12.06C6.55 2.13 5.75 2.3 5.07 2.65 3.39 3.4 2.13 4.66 1.38 6.34c-.35.68-.52 1.48-.56 2.57C.82 10.03.8 10.39.8 12s.01 1.97.06 3.06c.04 1.09.2 1.89.56 2.57.75 1.68 2.01 2.94 3.69 3.69.68.35 1.48.52 2.57.56 1.09.05 1.45.06 3.06.06s1.97-.01 3.06-.06c1.09-.04 1.89-.2 2.57-.56 1.68-.75 2.94-2.01 3.69-3.69.35-.68.52-1.48.56-2.57.05-1.09.06-1.45.06-3.06s-.01-1.97-.06-3.06c-.04-1.09-.2-1.89-.56-2.57-1.39-2.91-4.32-2.91-4.32-2.91zm-1.12 9.21c-2.31 0-4.19-1.88-4.19-4.19s1.88-4.19 4.19-4.19 4.19 1.88 4.19 4.19-1.88 4.19-4.19 4.19zm0-6.38c-1.2 0-2.18.98-2.18 2.18s.98 2.18 2.18 2.18 2.18-.98 2.18-2.18-.98-2.18-2.18-2.18zm3.62-1.14c0 .59-.48 1.07-1.07 1.07s-1.07-.48-1.07-1.07c0-.59.48-1.07 1.07-1.07s1.07.48 1.07 1.07z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
