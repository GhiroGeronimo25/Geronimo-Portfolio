/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Sora', '"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        brand: { 50: '#eef2ff', 100: '#e0e7ff', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3' },
      },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'none' } },
        float: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(20px,-30px) scale(1.1)' } },
        gradient: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        pop: {
          '0%': { opacity: 0, transform: 'scale(0.4) rotate(-25deg)' },
          '100%': { opacity: 1, transform: 'scale(1) rotate(0)' },
        },
        load: { '0%': { width: '0%' }, '100%': { width: '100%' } },
        wipe: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '45%': { transform: 'scaleX(1)', transformOrigin: 'left' },
          '55%': { transform: 'scaleX(1)', transformOrigin: 'right' },
          '100%': { transform: 'scaleX(0)', transformOrigin: 'right' },
        },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        float: 'float 9s ease-in-out infinite',
        gradient: 'gradient 6s ease infinite',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 28s linear infinite',
        pop: 'pop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        load: 'load 2.2s ease-in-out both',
        wipe: 'wipe 0.9s cubic-bezier(0.77, 0, 0.18, 1) both',
      },
    },
  },
  plugins: [],
}
