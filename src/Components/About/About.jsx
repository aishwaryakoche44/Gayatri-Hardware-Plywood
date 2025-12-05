import React from 'react'
// import { a } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <section className="pt-28 bg-brand-50/40 py-16">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-4 lg:px-6 space-y-16">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-6/12 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-black">About Gayatri — Quality Plywood & Trusted Hardware</h2>
            <p className="text-black/80 text-lg md:text-xl leading-relaxed max-w-3xl">We help builders, carpenters and local contractors source high-quality plywood and reliable hardware — at fair prices and with real expertise. For years our customers choose Gayatri when they need durable materials, fast local delivery and friendly service.</p>

            <p className="text-black/70">Our mission is simple: provide the right materials, at the right time, so every build succeeds. Whether it's a quick repair or a full-scale fit-out, our products and expertise are here to support your project from start to finish.</p>

            <div className="flex items-center gap-3 mt-4">
              <a href="#products" className="btn-primary">Shop materials</a>
              <a href="#contact" className="btn-secondary">Contact us</a>
            </div>
          </div>

          <div className="lg:w-6/12">
            <img src="https://content.jdmagicbox.com/comp/latur/g2/9999p2382.2382.190729113509.f4g2/catalogue/gayatri-ply-and-laminates-kawa-road-latur-hardware-shops-4nyg8u8o2c.jpg" alt="Plywood shop" className="rounded-3xl w-full h-96 object-cover shadow-2xl border border-brand-100" />
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-black mb-8">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-brand-100 hover:shadow-2xl transition-shadow text-left">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-brand-100 text-brand-800">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 7h18M3 21h18M6 3v4M18 3v4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-heading font-semibold text-black">High-quality plywood</h4>
                  <p className="text-black/70 text-sm">Sheets, blockboards and veneer sourced for stability and finish.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-brand-100 hover:shadow-2xl transition-shadow text-left">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-brand-100 text-brand-800">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 1v22M3 7h18M3 17h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-heading font-semibold text-black">Tools & Hardware</h4>
                  <p className="text-black/70 text-sm">A curated range of hammers, drills, fasteners and accessories.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-brand-100 hover:shadow-2xl transition-shadow text-left">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-brand-100 text-brand-800">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7z" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-heading font-semibold text-black">Trusted Service</h4>
                  <p className="text-black/70 text-sm">Experienced staff, bulk orders, and reliable delivery for every job.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-6/12">
            <img src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80" alt="Inside shop" className="rounded-3xl w-full h-96 object-cover shadow-2xl border border-brand-100" />
          </div>
          <div className="lg:w-6/12 space-y-4">
            <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-black">Why choose Gayatri?</h3>
            <ul className="list-disc list-inside text-black/75 space-y-3 text-base md:text-lg">
              <li>Curated range of plywood and hardware backed by quality checks.</li>
              <li>Competitive prices — discounts for bulk and trade customers.</li>
              <li>Skilled staff and product advisors ready to help you pick the right materials.</li>
              <li>Convenient local delivery and fast dispatch for urgent projects.</li>
            </ul>
            <div className="mt-4">
              <a href="#contact" className="btn-primary">Get in touch</a>
            </div>
          </div>
        </div>
      </div>
      </section>

    </div>
  )
}

export default About
