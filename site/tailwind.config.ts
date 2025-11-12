/** tailwind.config.ts */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: { extend: {} },
  plugins: [],
};

export default config;
