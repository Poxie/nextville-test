import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: '#000',
        light: '#fff',
        'light-secondary': '#F2F2F2',
        'c-primary': '#dfb373',
      },
      textColor: {
        light: '#fff',
        dark: '#000',
      },
      borderColor: {
        light: '#fff',
        dark: '#000',
      },
      width: {
        main: '1100px',
      },
      maxWidth: {
        main: '90%',
      },
      padding: {
        section: '5.25rem 0'
      },
      fill: {
        dark: '#000',
        light: '#fff',
        'light-secondary': '#F2F2F2',
        'c-primary': '#dfb373',
      },
      animation: {
        bubble: 'bubble 5s infinite',
      },
      keyframes: {
        bubble: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
