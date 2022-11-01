/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'box' : ['Digitaltech']
    },
    extend: {
      colors: {
        neon : {
          100:'#0FFF50'
        }
      }
    },
  },
  plugins: [],
}
