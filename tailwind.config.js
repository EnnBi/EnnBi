/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        brutal: ['"Archivo Black"', 'Impact', 'sans-serif'],
        plex: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
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
    },
  },
  plugins: [],
};
