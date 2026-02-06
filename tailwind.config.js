/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8FAF5',
          100: '#D1F5EB',
          200: '#A3EBD7',
          300: '#75E0C3',
          400: '#47D6AF',
          500: '#00B894',
          600: '#009676',
          700: '#007459',
          800: '#00523B',
          900: '#00301E',
        },
        dark: {
          100: '#D1D5DB',
          200: '#9CA3AF',
          300: '#6B7280',
          400: '#4B5563',
          500: '#374151',
          600: '#1F2937',
          700: '#111827',
          800: '#0D1117',
          900: '#010409',
        },
        light: {
          100: '#FFFFFF',
          200: '#F9FAFB',
          300: '#F3F4F6',
          400: '#E5E7EB',
          500: '#D1D5DB',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        medium: '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
        strong: '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 50px -15px rgba(0, 0, 0, 0.1)',
        primary: '0 10px 40px -10px rgba(0, 184, 148, 0.4)',
      }
    },
  },
  plugins: [],
}