/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'french-lilac': {
        '50': 'hsl(284, 100%, 98%)',
        '100': 'hsl(284, 100%, 95%)',
        '200': 'hsl(285, 96%, 89%)',
        '300': 'hsl(288, 93%, 83%)',
        '400': 'hsl(289, 91%, 73%)',
        '500': 'hsl(289, 84%, 61%)',
        '600': 'hsl(290, 69%, 49%)',
        '700': 'hsl(292, 72%, 40%)',
        '800': 'hsl(292, 70%, 33%)',
        '900': 'hsl(293, 64%, 28%)',
        '950': 'hsl(294, 90%, 16%)',
    },
    backgroundColor: {
      'fair-pink-50': '#ffebeb',
      'fair-pink-100': '#ffe4e4',
      'fair-pink-200': '#fecdd0',
      'fair-pink-300': '#fda4a9',
      'fair-pink-400': '#fb717b',
      'fair-pink-500': '#f43f51',
      'fair-pink-600': '#e11d3a',
      'fair-pink-700': '#be1230',
      'fair-pink-800': '#9f122f',
      'fair-pink-900': '#88132f',
      'fair-pink-950': '#4c0514',
    },
  
    
    },
  },
  plugins: [],
}