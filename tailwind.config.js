/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './node_modules/flowbite-react/**/*.js',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors: {
          'custom-green': '#d7dacb',
        },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}