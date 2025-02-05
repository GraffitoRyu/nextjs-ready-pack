import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.scss",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
