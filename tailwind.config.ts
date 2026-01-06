import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: '#ffd400',
        muted: '#777777'
      },
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};

export default config;
