/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          bg: '#fafafa',
          sidebar: '#f3f3f3',
          border: 'rgba(0,0,0,0.08)',
          text: {
            primary: '#1a1a1a',
            secondary: '#4a4a4a',
            muted: '#8a8a8a',
          },
          hover: 'rgba(0,0,0,0.05)',
          button: '#e6e6e6',
          shadow: 'rgba(0,0,0,0.1)',
        },
        // Dark theme colors
        dark: {
          bg: '#000000',
          sidebar: '#0a0a0a',
          border: 'rgba(255,255,255,0.06)',
          text: {
            primary: '#e2e2e2',
            secondary: '#9a9a9a',
            muted: '#6d6d6d',
            comment: '#5a5a5a',
          },
          hover: 'rgba(255,255,255,0.08)',
          button: '#161616',
          shadow: 'rgba(0,0,0,0.45)',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
