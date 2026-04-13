/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Legacy — removed in Phase 2 cleanup
        sans: ['Poppins', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        // Brutalist design system
        brutal: ['"Archivo Black"', 'Impact', 'sans-serif'],
        plex: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Legacy palettes — removed in Phase 2 cleanup
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        radiant: {
          50: '#f0f5ff',
          100: '#dbe8ff',
          200: '#adc8ff',
          300: '#7eaaff',
          400: '#4f8cff',
          500: '#266dff',
          600: '#0054e6',
          700: '#0041b3',
          800: '#003080',
          900: '#00204d',
        },
        tango: {
          50: '#fff0f0',
          100: '#ffd9d9',
          200: '#ffb3b3',
          300: '#ff8c8c',
          400: '#ff6666',
          500: '#ff3f3f',
          600: '#e62e2e',
          700: '#b32424',
          800: '#801a1a',
          900: '#4d1010',
        },
        // Brutalist design system — mapped to tokens.css custom properties
        ink: {
          950: 'var(--ink-950)',
          900: 'var(--ink-900)',
          800: 'var(--ink-800)',
          700: 'var(--ink-700)',
          600: 'var(--ink-600)',
          500: 'var(--ink-500)',
          400: 'var(--ink-400)',
          300: 'var(--ink-300)',
          200: 'var(--ink-200)',
          100: 'var(--ink-100)',
          50:  'var(--ink-50)',
        },
        mint: {
          900: 'var(--accent-900)',
          700: 'var(--accent-700)',
          500: 'var(--accent-500)',
          300: 'var(--accent-300)',
          100: 'var(--accent-100)',
        },
        signal: {
          success: 'var(--success)',
          warning: 'var(--warning)',
          danger:  'var(--danger)',
          info:    'var(--info)',
        },
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
      },
      boxShadow: {
        'offset':        'var(--shadow-offset)',
        'offset-hover':  'var(--shadow-offset-hover)',
        'offset-active': 'none',
      },
      transitionTimingFunction: {
        'brutal':    'var(--ease-out)',
        'brutal-io': 'var(--ease-in-out)',
      },
      transitionDuration: {
        fast: '120ms',
        base: '200ms',
        slow: '350ms',
      },
      animation: {
        'scroll-down': 'scroll-down 1.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
