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
        'c-primary': '#dfb373',
      },
      textColor: {
        light: '#fff',
        dark: '#000',
      },
      borderColor: {
        light: '#fff',
      },
      width: {
        main: '1000px',
      },
      maxWidth: {
        main: '90%',
      },
      padding: {
        section: '5.25rem 0'
      },
      fill: {
        light: '#fff',
        'c-primary': '#dfb373',
      },
    },
  },
  plugins: [],
};
export default config;
