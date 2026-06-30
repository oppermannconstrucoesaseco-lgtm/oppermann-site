/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/cnpj/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'op-bg':    '#0b0b0d',
        'op-soft':  '#121216',
        'op-panel': '#171719',
        'op-deep':  '#202024',
        'op-text':  '#f5f2ea',
        'op-muted': '#b9b4a8',
        'op-line':  'rgba(245,242,234,0.14)',
        gold: {
          DEFAULT: '#c9a45c',
          bright:  '#e4c37a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  corePlugins: {
    preflight: false, // avoid CSS reset conflicts with existing site styles
  },
};
