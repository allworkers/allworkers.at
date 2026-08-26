/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Industrial-premium palette
        ink: {
          950: '#0a0b0d',
          900: '#0e1013',
          850: '#14171b',
          800: '#1a1e24',
          700: '#242a32',
          600: '#333b45',
        },
        steel: {
          400: '#9aa6b2',
          300: '#b9c2cc',
          200: '#d5dbe1',
        },
        amber: {
          // safety amber accent
          400: '#ffb020',
          500: '#ff9800',
          600: '#f57c00',
        },
        ember: '#ff5722',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Oswald', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        ar: ['"IBM Plex Sans Arabic"', 'Tahoma', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(18px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spark: {
          '0%,100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        floatUp: 'floatUp 0.7s ease-out both',
        marquee: 'marquee 32s linear infinite',
        spark: 'spark 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
