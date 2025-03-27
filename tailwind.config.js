/** @type {import('tailwindcss').Config} */
import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [require('tailwind-scrollbar-hide')],
};

export default keepTheme(config);

