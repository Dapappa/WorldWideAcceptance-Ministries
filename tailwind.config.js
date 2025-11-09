/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1e3a5f',
          DEFAULT: '#2d4a6e',
          light: '#3d5a7e',
        },
        accent: {
          DEFAULT: '#d4af37',
          light: '#e5c158',
        },
        warm: {
          50: '#fefbf3',
          100: '#fef6e7',
          200: '#fae8c8',
        },
        cool: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
        },
        spirit: {
          purple: '#9b87f5',
          blue: '#7dd3fc',
          green: '#86efac',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.12)',
        'strong': '0 10px 40px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

