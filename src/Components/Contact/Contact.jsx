import React from 'react'


const Contact = () => {
  return (
    <div>
      
      <section className="bg-brand-50/40 dark:bg-gray-900 py-16 lg:py-24 pt-20 md:pt-24 my-12 md:my-16">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        
        {/* --- Header Section --- */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black font-heading">
            Get in touch — we’re here to help
          </h2>
          <p className="mt-4 text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
            Whether you’re looking for plywood, hardware, or expert advice — our team is ready to help you choose the right materials for your project.
          </p>
        </div>

        {/* --- Main Content Layout --- */}
        <div className="flex flex-col lg:flex-row shadow-xl rounded-lg overflow-hidden bg-white">

          {/* --- Right Side: Contact Form --- */}
          <div className="w-full lg:w-2/3 p-8 sm:p-12 lg:p-16">
            <h3 className="text-2xl md:text-3xl font-extrabold text-black font-heading mb-4">Send us a message</h3>
            <p className="text-black/80 mb-6">Tell us about your project, product question, or bulk-order needs — we’ll respond quickly.</p>
            <form className="space-y-6">
              
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-black/80">Your Name</label>
                  <input type="text" id="name" className="bg-white border border-brand-100 text-black/90 text-sm rounded-lg focus:ring-brand-300 focus:border-brand-300 block w-full p-3" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-black/80">Your Email</label>
                  <input type="email" id="email" className="bg-white border border-brand-100 text-black/90 text-sm rounded-lg focus:ring-brand-300 focus:border-brand-300 block w-full p-3" placeholder="name@company.com" required />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black/80">Subject</label>
                <input type="text" id="subject" className="bg-white border border-brand-100 text-black/90 text-sm rounded-lg focus:ring-brand-300 focus:border-brand-300 block w-full p-3" placeholder="Product inquiry / order status" required />
              </div>

              {/* Message Field */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-black/80">Your Message</label>
                <textarea id="message" rows="6" className="block p-3 w-full text-sm text-black/80 bg-white rounded-lg border border-brand-100 focus:ring-brand-300 focus:border-brand-300" placeholder="Leave a detailed message..."></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full sm:w-auto btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* --- Left Side: Contact Info Sidebar --- */}
          <div className="w-full lg:w-1/3 bg-gradient-to-br from-brand-700 to-brand-500 p-8 sm:p-12 flex flex-col justify-between text-white">
            <div>
              <h3 className="text-3xl font-bold mb-4 font-heading">Reach us directly</h3>
              <p className="mb-8 text-amber-100/95">Visit our store or contact us by phone/email for quick, friendly support and local delivery options.</p>

              {/* Contact Details List */}
              <ul className="space-y-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-amber-100/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <div>
                    <span className="font-semibold block text-amber-100">Visit our store</span>
                    <a href="#" className="opacity-80 hover:underline text-amber-100/90">
                      123 Gayatri Road, Nagpur, Maharashtra-440034
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-amber-100/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <div>
                    <span className="font-semibold block text-amber-100">Call us</span>
                    <a href="tel:+911234567890" className="opacity-80 hover:underline text-amber-100/90">
                      +91 9356071058
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-amber-100/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.84 5.23a2 2 0 002.32 0L21 8m-2 4v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 2a2 2 0 00-2 2v1h8V4a2 2 0 00-2-2h-4z"></path></svg>
                  <div>
                    <span className="font-semibold block text-amber-100">Email support</span>
                    <a href="mailto:info@gayatritrade.com" className="opacity-80 hover:underline text-amber-100/90">
                      aashukoche44@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Optional Footer/Hours */}
            <div className="mt-10 pt-6 border-t border-brand-200 opacity-90">
                <p className="font-medium">Business Hours:</p>
                <p className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-sm">Sunday: Closed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
      
    </div>
  )
}

export default Contact
