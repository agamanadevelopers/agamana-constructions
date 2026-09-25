import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Agamana brand
        brand: {
          // Primary dark green — anchor colour
          DEFAULT: '#01473A',
          dark: '#01473A',
          deep: '#013128',
          // Secondary green — accents
          green: '#51BA7C',
          greenSoft: '#7ECBA0',
          // Very light green background
          mist: '#E9FFF7',
          mistDeep: '#DCF6EC',
        },
        // Warm neutrals
        cream: '#FBFAF7',
        sand: '#F4F2EC',
        ink: '#1A211E',
        muted: '#5E6B64',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1320px',
      },
      borderRadius: {
        card: '18px',
        xl2: '22px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(1, 71, 58, 0.04), 0 12px 30px -18px rgba(1, 71, 58, 0.18)',
        cardHover: '0 2px 4px rgba(1, 71, 58, 0.06), 0 22px 48px -20px rgba(1, 71, 58, 0.28)',
        soft: '0 1px 2px rgba(26, 33, 30, 0.04), 0 8px 24px -16px rgba(26, 33, 30, 0.16)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
};

export default config;
