/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require("@iconify/tailwind");

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};
