/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
];
export const presets = [require("nativewind/preset")];
export const theme = {
  extend: {
    fontFamily: {
      rmono: ["Roboto-Mono", "sans-serif"],
    },
    colors: {
      "hot-pink": "#fd95a0",
      "light-pink": "#fbdbde",
      "light-gray": "#f5f5f5",
      "dark-gray": "#f7ebed",
      brown: "#b64d55",
      gray: "#917e83",
    },
  },
};
export const plugins = [];
