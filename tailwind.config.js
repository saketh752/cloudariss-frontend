/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#071B63',          // Primary Deep Navy
          blue: '#0878E8',          // Secondary Blue
          cyan: '#19BCE8',          // Bright Cyan
          orange: '#FF7A00',        // Action Orange
          'orange-hover': '#FF8A00',// Orange Highlight
          'bg-light': '#F7F9FC',    // Light background
          white: '#FFFFFF',         // White
          'surface-blue': '#EEF5FF',// Soft blue surface
          border: '#DCE5F2',        // Border
          'dark-section': '#06143D',// Dark section
          'dark-surface': '#0D285F',// Dark surface
        },
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px -2px rgba(7, 27, 99, 0.06), 0 1px 4px -1px rgba(7, 27, 99, 0.04)',
        'card': '0 4px 20px -4px rgba(7, 27, 99, 0.08), 0 2px 6px -2px rgba(7, 27, 99, 0.04)',
        'card-hover': '0 12px 32px -8px rgba(7, 27, 99, 0.12), 0 4px 12px -2px rgba(7, 27, 99, 0.06)',
        'glow-cyan': '0 0 25px -5px rgba(25, 188, 232, 0.3)',
        'glow-orange': '0 0 25px -5px rgba(255, 122, 0, 0.35)',
      },
      borderRadius: {
        'card': '12px',
        'card-lg': '16px',
      },
    },
  },
  plugins: [],
}

