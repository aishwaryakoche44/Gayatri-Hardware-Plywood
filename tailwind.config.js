/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
  				  "./src/**/*.{js,jsx,ts,tsx}",
   				 "./public/index.html"
  			],

  theme: {
    extend: {
      fontFamily: {
        heading: ["'Playfair Display'", 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont']
      },
      colors: {
        // brand / wood palette
        brand: {
          50: '#fdf6f1',
          100: '#fbefe2',
          200: '#f6ddc5',
          300: '#efc19a',
          400: '#e8a86d',
          500: '#d48a40',
          600: '#b96d2f',
          700: '#8b5e34',
          800: '#6b4324',
          900: '#4a2e18'
        },
        accent: {
          50: '#fff8f1',
          100: '#fff1e2',
          200: '#ffe1bf',
          300: '#ffd199',
          400: '#ffc06d',
          500: '#ffb043',
          600: '#e69935',
          700: '#b36f26',
          800: '#7f5018',
          900: '#4f320f'
        }
      }
    },
  },
  plugins: [],
}

