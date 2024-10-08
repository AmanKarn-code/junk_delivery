/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  images: {
    domains: ['source.unsplash.com'],
  },
    theme: {
      extend: {},
    },
    plugins: [],
  }

