/** @type {import('tailwindcss').Config} */
const color = (token) => 'rgb(var(--' + token + ') / <alpha-value>)';
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: 'var(--container-gutter)',
      screens: { sm: '80rem', md: '80rem', lg: '80rem', xl: '80rem', '2xl': '80rem' },
    },
    extend: {
      colors: {
        background: color('background'),
        foreground: color('foreground'),
        primary: {
          DEFAULT: color('primary'),
          foreground: color('primary-foreground'),
          hover: color('primary-hover'),
        },
        secondary: { DEFAULT: color('secondary'), foreground: color('secondary-foreground') },
        accent: { DEFAULT: color('accent'), foreground: color('accent-foreground') },
        muted: { DEFAULT: color('muted'), foreground: color('muted-foreground') },
        card: { DEFAULT: color('card'), foreground: color('card-foreground') },
        elevated: color('elevated'),
        subtle: color('subtle-foreground'),
        border: 'rgb(var(--border) / calc(var(--border-opacity) * <alpha-value>))',
        input: color('input'),
        ring: color('ring'),
      },
      opacity: { 8: '0.08', 15: '0.15' },
      borderRadius: {
        sm: '0.375rem',
        DEFAULT: 'var(--radius-control)',
        md: '0.625rem',
        lg: 'var(--radius-component)',
        xl: 'var(--radius-card)',
        '2xl': 'var(--radius-bento)',
      },
      fontFamily: { sans: ['var(--font-sans)'], mono: ['var(--font-mono)'] },
      spacing: {
        section: 'var(--section-space)',
        gutter: 'var(--container-gutter)',
        content: 'var(--content-gap)',
      },
      maxWidth: { portfolio: 'var(--container-width)' },
      transitionDuration: { DEFAULT: '200ms' },
      transitionTimingFunction: { DEFAULT: 'var(--ease-standard)' },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
