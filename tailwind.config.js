/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Syne', '"Space Grotesk"', 'sans-serif'],
        mono: ['"DM Mono"', '"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ninja: {
          bg: 'var(--bg-main)',
          card: 'var(--bg-card)',
          tertiary: 'var(--bg-tertiary)',
          accent: 'var(--accent)',
          accentHover: 'var(--accent-hover)',
          text: 'var(--text-main)',
          muted: 'var(--text-muted)',
          disabled: 'var(--text-disabled)',
          border: 'var(--border-main)',
          nav: 'var(--nav-bg)',
          navBorder: 'var(--nav-border)',
          tagBg: 'var(--tag-bg)',
          tagText: 'var(--tag-text)',
        }
      },
      letterSpacing: {
        tighter: '-0.05em',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}
