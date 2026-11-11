/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FBF7F0',
        'surface-alt': '#F3EBDD',
        primary: '#0F5C4D',
        'primary-dark': '#0A3D33',
        accent: '#E8A33D',
        'secondary-accent': '#C8553D',
        ink: '#1E2A26',
        muted: '#5C6B65',
        border: '#E5DAC6',
      },
      fontFamily: {
        body: ['"DM Sans"', 'sans-serif'],
        heading: ['"Fraunces"', 'serif'],
        arabic: ['"Amiri"', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 35px rgba(19,27,25,0.08)',
      },
    },
  },
  plugins: [],
}

