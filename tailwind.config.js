/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6B00',
          50:  '#fff4eb',
          100: '#ffe0c2',
          200: '#ffbd85',
          300: '#ff9a47',
          400: '#ff8533',
          500: '#FF6B00',
          600: '#cc5500',
          700: '#994000',
          800: '#662b00',
          900: '#331500',
        },
        bg: {
          DEFAULT: '#080a0f',
          card:    '#0d1117',
          glass:   'rgba(13,17,23,0.85)',
        },
        border: {
          DEFAULT: 'rgba(255,107,0,0.15)',
          bright:  'rgba(255,107,0,0.40)',
        },
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono:     ['JetBrains Mono', 'Courier New', 'monospace'],
        sans:     ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)
        `,
        'orange-glow': 'radial-gradient(circle at 100% 0%, rgba(255,107,0,0.08) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'orange-glow':  '0 0 20px rgba(255,107,0,0.3)',
        'orange-glow-lg': '0 0 40px rgba(255,107,0,0.3), 0 0 80px rgba(255,107,0,0.15)',
        'card-hover':   '0 16px 48px rgba(0,0,0,0.4)',
      },
      animation: {
        'blink':       'blink 1s step-end infinite',
        'float':       'float 6s ease-in-out infinite',
        'pulse-glow':  'pulseGlow 2s ease-in-out infinite',
        'scan-line':   'scanLine 8s linear infinite',
        'slide-in-right': 'slideInRight 0.3s ease',
        'fade-up':     'fadeUp 0.7s ease forwards',
        'shimmer':     'shimmer 2s linear infinite',
        'spin-slow':   'spin 20s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%':      { transform: 'translateY(-18px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,107,0,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(255,107,0,0.5), 0 0 80px rgba(255,107,0,0.2)' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
