import React from 'react'
// import { a } from 'react-router-dom';

const products = [
  // Plywood
  { id: 1, name: "Wooden Plywood Sheet 6mm", category: "Plywood", price: 1200, image: "https://i.pinimg.com/1200x/f0/bd/1c/f0bd1cc85ccc82c328a419701e545111.jpg" },
  { id: 2, name: "Veneer Sheet 8mm", category: "Plywood", price: 800, image: "https://i.pinimg.com/1200x/18/00/fe/1800fe3cbef998adc4fb3552e29f1a8d.jpg" },
  { id: 3, name: "Blockboard Sheet", category: "Plywood", price: 1500, image: "https://static.wixstatic.com/media/38d960_ff3001c65d15473cad4d673824041ee4~mv2.jpg/v1/fill/w_625,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/38d960_ff3001c65d15473cad4d673824041ee4~mv2.jpg" },
  { id: 4, name: "Marine Plywood 12mm", category: "Plywood", price: 2200, image: "https://i.pinimg.com/1200x/fa/8f/80/fa8f8045a795fd44df54c4e3b557b3ae.jpg" },
  { id: 5, name: "Teak Plywood Sheet", category: "Plywood", price: 2500, image: "https://tiimg.tistatic.com/fp/1/004/208/plywood-sheet-979.jpg" },

  // Hardware
  { id: 6, name: "Nails Pack 1kg", category: "Hardware", price: 50, image: "https://m.media-amazon.com/images/I/518euukiIHL._AC_UF1000,1000_QL80_.jpg" },
  { id: 7, name: "Hammer", category: "Hardware", price: 300, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdmulMPhUOnU9n5z7E5LkFbdcfhX4RiUsrQ&s" },
  { id: 8, name: "Screwdriver Set", category: "Hardware", price: 450, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-VJkFsJJbdrY6uHyvQZJVo1pat4pp8P60A&s" },
  { id: 9, name: "Drill Machine", category: "Hardware", price: 1800, image: "https://m.media-amazon.com/images/I/71zcrbKkjdL.jpg" },
  { id: 10, name: "Door Handle", category: "Hardware", price: 250, image: "https://gw-assets.assaabloy.com/is/image/assaabloy/19%20copy" },
];

const Product = () => {
  return (
    <section className="pt-28 pb-20 bg-brand-50/60 min-h-screen">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-4 lg:px-6">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-black">Shop our Quality Materials</h2>
          <p className="mt-3 text-base md:text-lg text-black/75 max-w-2xl mx-auto">Hand-picked plywood, reliable hardware and pro-grade tools — selected to help you build stronger, faster and with confidence.</p>
        </header>

        {/* filters
        <div className="flex items-center justify-center gap-3 mb-8">
          <button className="btn-secondary">All</button>
          <button className="px-4 py-2 rounded-full text-sm md:text-base font-semibold text-black/85 bg-brand-100 border border-brand-200 hover:bg-brand-200">Plywood</button>
          <button className="px-4 py-2 rounded-full text-sm md:text-base font-semibold text-black/85 bg-brand-100 border border-brand-200 hover:bg-brand-200">Hardware</button>
          <button className="px-4 py-2 rounded-full text-sm md:text-base font-semibold text-black/85 bg-brand-100 border border-brand-200 hover:bg-brand-200">Tools</button>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-brand-100 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-80 md:h-[28rem]">
            <div className="w-full h-40 md:h-56 bg-gray-100 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-heading font-extrabold text-black">{product.name}</h3>
                  <p className="text-sm text-black/70">{product.category}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-black/70">Price</div>
                  <div className="mt-1 text-lg md:text-xl font-extrabold text-brand-800">₹{product.price}</div>
                </div>
              </div>

              <p className="mt-3 text-sm text-black/70 flex-1">High-quality {product.category.toLowerCase()} selected for durability and performance — the trusted choice for builders and makers.</p>

              <div className="mt-5 flex items-center gap-3">
                <button className="btn-primary">Add to cart</button>
                <a href="/" className="btn-secondary">View details</a>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Product
