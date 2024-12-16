/** @type {import('tailwindcss').Config} */
import { createColorSet, withAccountKitUi } from "@account-kit/react/tailwind";

export default withAccountKitUi({
  // your tailwind config here
  // docs on setting up tailwind here: https://tailwindcss.com/docs/installation/using-postcss
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  // override account kit themes
  colors: {
    "btn-primary": createColorSet("#4a90e2", "#FF66CC"),
    "fg-accent-brand": createColorSet("#4a90e2", "#FF66CC"),
    "borderRadius": "10px",
    "border": "1px solid #000000",
  },
  plugins: [],
});
