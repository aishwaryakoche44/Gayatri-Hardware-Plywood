import React from 'react'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

function submitform(e) {
  e.preventDefault()

  Swal.fire({
    title: 'Inquiry Submitted!',
    text: 'Your inquiry has been submitted successfully.',
    icon: 'success',
    confirmButtonColor: '#b45309',
  })
}

const Home = () => {
  return (
    <div>

      {/* HERO SECTION */}
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
                Durable Plywood
              </div>

              <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-brand-100/70 shadow-sm">
                Hardware & Tools
              </div>

              <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-brand-100/70 shadow-sm">
                Fast Local Delivery
              </div>

            </div>

            <Link
              to="/products"
              className="btn-primary mr-3 inline-flex items-center px-5 py-2 text-white font-semibold rounded-lg shadow"
            >
              Shop Products
            </Link>

            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center px-5 py-2 text-black font-semibold rounded-lg shadow ml-3"
            >
              Contact Us
            </Link>

          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-end">

            <img
              src="https://www.greenply.com:5001/banner1710149516055-3700.jpg"
              alt="plywood mockup"
              className="rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 max-w-full"
            />

          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="bg-brand-50/60 dark:bg-gray-900/80 py-12 lg:py-20">

        <div className="max-w-screen-xl mx-auto px-3">

          <div className="mb-8 md:mb-12 text-center">

            <h2 className="text-3xl md:text-4xl font-extrabold text-black">
              Catalogue — Featured Products
            </h2>

            <p className="mt-2 text-black/80 max-w-2xl mx-auto">
              Handpicked materials and tools ready for builders, carpenters and DIYers.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-brand-100">

              <img
                src="https://i.pinimg.com/1200x/c2/c5/61/c2c56113e47df2891728f382f9994ae9.jpg"
                alt="Premium plywood"
                className="w-full h-48 object-cover"
              />

              <div className="p-6">

                <h3 className="mt-4 text-xl font-extrabold text-black">
                  Ultra Plywood — 12mm
                </h3>

                <p className="mt-2 text-black/80">
                  Durable plywood built to last.
                </p>

                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold rounded-lg shadow"
                  >
                    Add to cart
                  </a>
                </div>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-brand-100">

              <img
                src="https://www.aspltd.co.uk/wp-content/uploads/2025/04/nails-or-screws-which-is-the-best-fastener.jpg"
                alt="Hardware tools"
                className="w-full h-48 object-cover"
              />

              <div className="p-6">

                <h3 className="mt-4 text-xl font-extrabold text-black">
                  Nails, Screws & Fasteners
                </h3>

                <p className="mt-2 text-black/80">
                  High-strength fasteners for durable builds.
                </p>

                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold rounded-lg shadow"
                  >
                    Add to cart
                  </a>
                </div>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-brand-100">

              <img
                src="https://m.media-amazon.com/images/I/71X24K9AfoL.jpg"
                alt="Building tools"
                className="w-full h-48 object-cover"
              />

              <div className="p-6">

                <h3 className="mt-4 text-xl font-extrabold text-black">
                  Cordless Drill Kit
                </h3>

                <p className="mt-2 text-black/80">
                  Powerful cordless drill for all projects.
                </p>

                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold rounded-lg shadow"
                  >
                    Add to cart
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INQUIRE FORM */}
      <section className="py-12 px-3 bg-brand-50/40">

        <div className="max-w-screen-xl mx-auto">

          <form
            onSubmit={submitform}
            className="w-full bg-white rounded-2xl shadow-lg border border-brand-100 p-6 md:p-10"
          >

            <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">
              Inquire Now
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Name */}
              <div className="flex flex-col">

                <label className="font-medium mb-1">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Type here"
                  className="border-b border-gray-400 focus:border-black outline-none py-2"
                />

              </div>

              {/* Contact */}
              <div className="flex flex-col">

                <label className="font-medium mb-1">
                  Contact No.
                </label>

                <div className="flex items-center border-b border-gray-400 focus-within:border-black">

                  <span className="pr-2">
                    +91
                  </span>

                  <input
                    type="tel"
                    placeholder="Phone"
                    className="outline-none py-2 flex-1"
                  />

                </div>

              </div>

              {/* Pincode */}
              <div className="flex flex-col">

                <label className="font-medium mb-1">
                  Pincode
                </label>

                <input
                  type="text"
                  placeholder="473446"
                  className="border-b border-gray-400 focus:border-black outline-none py-2"
                />

              </div>

              {/* Inquiry Type */}
              <div className="flex flex-col">

                <label className="font-medium mb-1">
                  Inquiry Type
                </label>

                <select className="border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent">

                  <option>
                    Please select inquiry type
                  </option>

                  <option>
                    Support
                  </option>

                  <option>
                    Sales
                  </option>

                  <option>
                    General
                  </option>

                </select>

              </div>

            </div>

            {/* Checkbox */}
            <div className="mt-6 flex items-start gap-2">

              <input
                type="checkbox"
                className="w-4 h-4 mt-1"
              />

              <p className="text-sm text-gray-700">
                Bringing you updates and ideas you’ll love.
              </p>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-8 btn-primary text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-800 transition-all duration-300"
            >
              Submit <span>→</span>
            </button>

          </form>

        </div>

      </section>

    </div>
  )
}

export default Home