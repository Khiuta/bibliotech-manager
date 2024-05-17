/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'main': '#242529',
      'lend-bg': '#36383E',
      'green-main': '#05704F',
      'lend-bar': '#E88919',
      'pend-bar': '#FC400F',
      'selected': '#37393F'
    }
  },
  plugins: [],
}
