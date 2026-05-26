import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const Login = () => {

  const [showSignup, setShowSignup] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  // Load remembered details
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberEmail')
    const savedPassword = localStorage.getItem('rememberPassword')

    if (savedEmail && savedPassword) {
      setEmail(savedEmail)
      setPassword(savedPassword)
      setRememberMe(true)
    }
  }, [])

  // Login Function
  const handleLogin = (e) => {
    e.preventDefault()

    // Save details if remember me checked
    if (rememberMe) {
      localStorage.setItem('rememberEmail', email)
      localStorage.setItem('rememberPassword', password)
    } else {
      localStorage.removeItem('rememberEmail')
      localStorage.removeItem('rememberPassword')
    }

    Swal.fire({
      title: 'Success!',
      text: 'Sign In Successful',
      icon: 'success',
      confirmButtonColor: '#b45309',
    })
  }

  // Signup Function
  const handleSignup = (e) => {
    e.preventDefault()

    Swal.fire({
      title: 'Account Created!',
      text: 'Sign Up Successful',
      icon: 'success',
      confirmButtonColor: '#b45309',
    })
  }

  // Forgot Password
  const handleForgotPassword = () => {

    localStorage.removeItem('rememberEmail')
    localStorage.removeItem('rememberPassword')

    setEmail('')
    setPassword('')
    setRememberMe(false)

    Swal.fire({
      title: 'Password Reset!',
      text: 'Saved login details removed successfully.',
      icon: 'info',
      confirmButtonColor: '#b45309',
    })
  }

  return (

    <div className="flex items-center justify-center min-h-screen bg-brand-50/30 dark:bg-gray-900 p-4 sm:p-6 lg:p-8 pt-20 md:pt-24">

      {/* Login Container */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl dark:bg-gray-800 lg:flex my-12 md:my-16">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12">

          <h2 className="text-3xl md:text-4xl font-extrabold text-black font-heading mb-4">
            {showSignup ? 'Create Account' : 'Welcome back'}
          </h2>

          <p className="text-black/70 text-sm md:text-base mb-6">
            {showSignup
              ? 'Create your Gayatri Hardware & Plywood account.'
              : 'Sign in to your Gayatri Hardware & Plywood account.'
            }
          </p>

          {/* Social Buttons
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

            <button
              type="button"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-black/80 bg-white border border-brand-100 rounded-lg shadow-sm hover:bg-brand-50"
            >
              Sign in with Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-black/80 bg-white border border-brand-100 rounded-lg shadow-sm hover:bg-brand-50"
            >
              Sign in with Apple
            </button>

          </div> */}

          {/* OR
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-brand-100"></div>
            <span className="flex-shrink mx-4 text-black/60 font-medium">
              OR
            </span>
            <div className="flex-grow border-t border-brand-100"></div>
          </div> */}

          {/* Form */}
          <form
            className="space-y-6"
            onSubmit={showSignup ? handleSignup : handleLogin}
          >

            {/* Full Name */}
            {showSignup && (
              <div>
                <label className="block mb-2 text-sm font-medium text-black/80">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="bg-white border border-brand-100 text-black/90 sm:text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black/80">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white border border-brand-100 text-black/90 sm:text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black/80">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-white border border-brand-100 text-black/90 sm:text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>

            {/* Confirm Password */}
            {showSignup && (
              <div>
                <label className="block mb-2 text-sm font-medium text-black/80">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-white border border-brand-100 text-black/90 sm:text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
            )}

            {/* Remember Me */}
            {!showSignup && (
              <div className="flex items-center justify-between">

                <div className="flex items-start">

                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 border border-brand-200 rounded"
                    />
                  </div>

                  <div className="ml-3 text-sm">
                    <label className="text-gray-500">
                      Remember me
                    </label>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm font-medium text-brand-700 hover:underline"
                >
                  Forgot password?
                </button>

              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary text-center text-lg px-5 py-2.5 transition duration-150 ease-in-out"
            >
              {showSignup ? 'Create Account' : 'Sign in to your account'}
            </button>

            {/* Toggle */}
            <p className="text-sm font-light text-black/70 text-center">

              {showSignup
                ? 'Already have an account?'
                : "Don't have an account?"
              }

              <button
                type="button"
                onClick={() => setShowSignup(!showSignup)}
                className="ml-1 font-medium text-brand-700 hover:underline"
              >
                {showSignup ? 'Sign In' : 'Sign Up'}
              </button>

            </p>

          </form>

        </div>

        {/* Right Side */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-br from-brand-700 to-brand-500 text-white rounded-r-lg p-12 flex-col justify-center items-center text-center">

          <h3 className="text-4xl font-extrabold mb-4 font-heading">
            Explore the <span className="text-amber-100">Best Hardware</span> &amp; <span className="text-amber-100">Plywood</span>
          </h3>

          <p className="text-lg font-light mb-8 max-w-sm text-amber-100/90">
            Gayatri Hardware & Plywood is your trusted source for quality building materials.
          </p>

          <div className="flex -space-x-4 mb-4">

            <div className="w-10 h-10 bg-white rounded-full border-2 border-brand-200 flex items-center justify-center text-brand-700 font-bold text-sm">
              G
            </div>

            <div className="w-10 h-10 bg-white rounded-full border-2 border-brand-200 flex items-center justify-center text-brand-700 font-bold text-sm">
              H
            </div>

            <div className="w-10 h-10 bg-white rounded-full border-2 border-brand-200 flex items-center justify-center text-brand-700 font-bold text-sm">
              P
            </div>

            <div className="w-10 h-10 bg-brand-900 rounded-full border-2 border-brand-800 flex items-center justify-center text-white text-sm">
              5K+
            </div>

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