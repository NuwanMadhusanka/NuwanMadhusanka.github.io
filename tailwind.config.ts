import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080B10',
        surface: 'rgba(19,26,35,.55)',
        'surface-deep': '#0B1016',
        border: 'rgba(255,255,255,.08)',
        'border-hover': 'rgba(255,255,255,.18)',
        divider: 'rgba(255,255,255,.06)',
        text: '#E6EAF0',
        'text-2': '#C9D1DC',
        'text-3': '#9AA6B8',
        'text-muted': '#8D99AB',
        // Accents
        backend: '#7DD3C0', // teal
        cloud: '#8AB4F8', // blue
        ai: '#A78BFA', // violet
        ml: '#F5A97F', // clay
        data: '#C9D24A', // citron
        devops: '#F3A5C0', // pink
        'link-hover': '#B9D2FB',
      },
      borderRadius: {
        card: '16px',
        contact: '20px',
        btn: '10px',
        chip: '5px',
        pill: '999px',
      },
      boxShadow: {
        'card-hover': '0 18px 40px -24px rgba(0,0,0,.85)',
      },
      fontFamily: {
        sans: ['var(--font-figtree)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: {
        container: '1180px',
      },
    },
  },
  plugins: [],
};

export default config;
