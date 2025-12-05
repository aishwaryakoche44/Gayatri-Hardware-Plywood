import React from 'react'
import { Link } from "react-router-dom";

function submitform()
{
  alert("Submitted Successfully!");
}
const Home = () => {
  return (
 <div>
  <section className="from-brand-50 via-brand-100 to-white dark:bg-gray-900 pt-20 md:pt-24 lg:pt-28">
    <div className="grid max-w-screen-xl px-3 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-3xl mb-4 text-2xl font-bold font-primary md:text-5xl xl:text-6xl text-black dark:text-white/90">
          Premium Plywood & Trusted Hardware — Build with Confidence
        </h1>
        <p className="max-w-2xl mb-6 text-lg md:text-xl text-black/80 font-medium leading-relaxed lg:mb-8">
          From quick repairs to full-scale builds, we stock durable plywood, quality hardware and supplies — everything contractors and DIYers need at honest prices.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-black/70 font-semibold mb-6">
          <div className="inline-flex items-center gap-2 bg-brand-100/70 py-1.5 px-3 rounded-full shadow-sm">
            <svg className="w-4 h-4 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M9 3v4M15 3v4M21 21H3" />
            </svg>
            Durable Plywood
          </div>
          <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-brand-100/70 shadow-sm">
            <svg className="w-4 h-4 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3M20.618 15.618A9 9 0 1112 3v1" />
            </svg>
            Hardware & Tools
          </div>
          <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-brand-100/70 shadow-sm">
            <svg className="w-4 h-4 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M12 3v18" />
            </svg>
            Fast Local Delivery
          </div>
        </div>
        <Link to="/products" className="btn-primary mr-3 inline-flex items-center px-5 py-2 text-white font-semibold rounded-lg shadow">
          Shop Products
          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
        <Link to="/contact" className="btn-secondary inline-flex items-center px-5 py-2 text-black font-semibold rounded-lg shadow ml-3">
          Contact Us
        </Link>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-end">
        <img src="https://www.greenply.com:5001/banner1710149516055-3700.jpg" alt="plywood mockup" className="rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 max-w-full" />
      </div>
    </div>
  </section>

  <section className="bg-brand-50/60 dark:bg-gray-900/80 py-12 lg:py-20">
    <div className="max-w-screen-xl mx-auto px-3">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">Catalogue — Featured Products</h2>
        <p className="mt-2 text-black/80 max-w-2xl mx-auto">
          Handpicked materials and tools ready for builders, carpenters and DIYers. High-quality plywood, reliable hardware and purpose-built tools.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-brand-100">
          <img src="https://i.pinimg.com/1200x/c2/c5/61/c2c56113e47df2891728f382f9994ae9.jpg" alt="Premium plywood" className="w-full h-48 object-cover" />
          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-brand-700 bg-brand-100/60 px-3 py-1 rounded-full">Best Seller</span>
              <span className="text-sm font-bold text-black">From ₹150 / ft²</span>
            </div>
            <h3 className="mt-4 text-xl font-extrabold text-black">Ultra Plywood — 12mm</h3>
            <p className="mt-2 text-black/80">Durable cross-laminated plywood built to last-perfect for cabinets, furniture, & heavy-duty projects.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="inline-flex items-center px-4 py-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold rounded-lg shadow">Add to cart</a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-brand-100">
          <img src="https://www.aspltd.co.uk/wp-content/uploads/2025/04/nails-or-screws-which-is-the-best-fastener.jpg" alt="Hardware tools" className="w-full h-48 object-cover" />
          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-brand-700 bg-brand-100/60 px-3 py-1 rounded-full">Trusted</span>
              <span className="text-sm font-bold text-black">From ₹20 / pc</span>
            </div>
            <h3 className="mt-4 text-xl font-extrabold text-black">Nails, Screws & Fasteners</h3>
            <p className="mt-2 text-black/80">High-strength fasteners and hardware for secure joins and long-lasting builds.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="inline-flex items-center px-4 py-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold rounded-lg shadow">Add to cart</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-brand-100">
          <img src="https://m.media-amazon.com/images/I/71X24K9AfoL.jpg" alt="Building tools" className="w-full h-48 object-cover" />
          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-brand-700 bg-brand-100/60 px-3 py-1 rounded-full">Pro-Grade</span>
              <span className="text-sm font-bold text-black">From ₹999</span>
            </div>
            <h3 className="mt-4 text-xl font-extrabold text-black">Cordless Drill Kit</h3>
            <p className="mt-2 text-black/80">A high-torque drill set with battery and accessories for all on-site needs.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="inline-flex items-center px-4 py-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold rounded-lg shadow">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div>
    <form className="w-70 pl-20 pr-20 pt-2 pb-10 bg-white rounded-2xl shadow-lg border border-brand-100">
      <h2 className="text-3xl font-semibold mb-6">Inquire Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Name */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Name</label>
          <input type="text" placeholder="Type here" className="border-b border-gray-400 focus:border-black outline-none py-1" />
        </div>
        {/* Contact */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Contact No.</label>
          <div className="flex items-center border-b border-gray-400 focus-within:border-black">
            <span className="pr-2">+91</span>
            <input type="tel" placeholder="Phone" className="outline-none py-1 flex-1" />
          </div>
        </div>
        {/* Pincode */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Pincode</label>
          <input type="text" placeholder="473446" className="border-b border-gray-400 focus:border-black outline-none py-1" />
        </div>
        {/* Inquiry Type */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Inquiry Type</label>
          <select className="border-b border-gray-400 focus:border-black outline-none py-1 bg-transparent">
            <option>Please select inquiry type</option>
            <option>Support</option>
            <option>Sales</option>
            <option>General</option>
          </select>
        </div>
      </div>
      {/* Checkbox */}
      <div className="mt-4 flex items-start gap-2">
        <input type="checkbox" className="w-4 h-4 mt-1" />
        <p className="text-sm text-gray-700">
          Bringing you updates and ideas you’ll love. By sharing your details,
          you agree to our <span className="font-semibold text-green-700">Privacy Policy</span>.
        </p>
      </div>
      {/* Button */}
      <button onClick={submitform} type="submit" className="mt-6 btn-primary text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-800">
        Submit <span>→</span>
      </button>
    </form>
  </div>
</div>

  )
}

export default Home
