import React from 'react'

const Login = () => {
  return (
  
 <div className="flex items-center justify-center min-h-screen bg-brand-50/30 dark:bg-gray-900 p-4 sm:p-6 lg:p-8 pt-20 md:pt-24">
      
      {/* --- Login Card Container --- */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl dark:bg-gray-800 lg:flex my-12 md:my-16">
        
        {/* --- Left Column: Login Form --- */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black font-heading mb-4">Welcome back</h2>
          <p className="text-black/70 text-sm md:text-base mb-6">Sign in to your Gayatri Hardware & Plywood account to access orders, pricing and bulk discounts.</p>
          
          
          {/* --- Social Login Buttons --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-black/80 bg-white border border-brand-100 rounded-lg shadow-sm hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                  <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.625-8.917 8.879 8.879 0 0 1 1.055-4.212 8.358 8.358 0 0 1 1.83-2.28 8.87 8.87 0 0 1 4.717-1.465c.571 0 1.25.109 1.77.291.688.236 1.348.572 1.957 1.018a4.385 4.385 0 0 0 1.637 1.488c.376.195.8.318 1.242.362.593.056 1.157-.101 1.57-.457.25-.213.435-.47.57-.75l.138-.285a8.847 8.847 0 0 1-1.393 5.568 9.043 9.043 0 0 1-8.514 4.542Z" clipRule="evenodd"/>
              </svg>
              Sign in with Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-black/80 bg-white border border-brand-100 rounded-lg shadow-sm hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 16">
                  <path d="M11 11.517v.5h-1v-.5l.995-1.002h.005zm.005-1.505h-.005l-.995 1.002h1v-1.002zm-1.005 1.505v.5h1v-.5l-.995-1.002h-.005zM5 2.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"/>
                  <path d="M12.9 8.243c.277.587-.123 1.25-.71 1.25H11.5v.5h1.5a1.5 1.5 0 0 1 1.5 1.5v2.5h-1v-2.5a.5.5 0 0 0-.5-.5h-1.5V14h-1V12h-1V10h-1V8.5h-1v-1h-.5a2.5 2.5 0 0 0-2.5 2.5v1h-1v-1a3.5 3.5 0 0 1 3.5-3.5h.5V5.5H8v1h.5a1.5 1.5 0 0 0 1.5-1.5V4h1v1.5h1v-1h.5a1.5 1.5 0 0 0 1.5-1.5V2h1v2.5h.5a1.5 1.5 0 0 1 1.5 1.5V7h-1v1.243Z"/>
              </svg>
              Sign in with Apple
            </button>
          </div>
          
          {/* --- Separator (OR) --- */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-brand-100"></div>
            <span className="flex-shrink mx-4 text-black/60 font-medium">OR</span>
            <div className="flex-grow border-t border-brand-100"></div>
          </div>

          {/* --- Login Form Fields --- */}
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-black/80">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white border border-brand-100 text-black/90 sm:text-sm rounded-lg focus:ring-brand-300 focus:border-brand-300 block w-full p-2.5"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-black/80">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-white border border-brand-100 text-black/90 sm:text-sm rounded-lg focus:ring-brand-300 focus:border-brand-300 block w-full p-2.5"
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-brand-200 rounded bg-white focus:ring-3 focus:ring-brand-300"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
              </div>
              <a href="#" className="text-sm font-medium text-brand-700 hover:underline">
                Forgot password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary text-center text-lg px-5 py-2.5 transition duration-150 ease-in-out"
            >
              Sign in to your account
            </button>
            
            <p className="text-sm font-light text-black/70 text-center">
              Don’t have an account? <a href="#" className="font-medium text-brand-700 hover:underline">Sign up</a>
            </p>
          </form>
        </div>

        {/* --- Right Column: Marketing/Design Section --- */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-br from-brand-700 to-brand-500 text-white rounded-r-lg p-12 flex-col justify-center items-center text-center">
          <h3 className="text-4xl font-extrabold mb-4 font-heading">Explore the <span className="text-amber-100">Best Hardware</span> &amp; <span className="text-amber-100">Plywood</span></h3>
          <p className="text-lg font-light mb-8 max-w-sm text-amber-100/90">Gayatri Hardware & Plywood is your trusted source for quality building materials and woodworking essentials.</p>
          <div className="flex -space-x-4 mb-4">
            {/* These are placeholder avatars */}
            <div className="w-10 h-10 bg-white rounded-full border-2 border-brand-200 flex items-center justify-center text-brand-700 font-bold text-sm">G</div>
            <div className="w-10 h-10 bg-white rounded-full border-2 border-brand-200 flex items-center justify-center text-brand-700 font-bold text-sm">H</div>
            <div className="w-10 h-10 bg-white rounded-full border-2 border-brand-200 flex items-center justify-center text-brand-700 font-bold text-sm">P</div>
            <div className="w-10 h-10 bg-brand-900 rounded-full border-2 border-brand-800 flex items-center justify-center text-white text-sm">5K+</div>
          </div>
          <p className="font-medium text-amber-100/95">
            Over <span className="font-extrabold">10,000</span> happy customers
          </p>
        </div>
        </div>
      </div>

  )
}

export default Login
