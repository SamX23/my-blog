import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rog-crimson": "#ff0055",
        "background": "#0b0c10",
        "obsidian-surface": "#0d0e13",
        "obsidian-deep": "#050608",
        "obsidian-elevated": "#141721",
        "surface-variant": "#1c1e26",
        "solar-amber": "#ff7700",
        "surface-tint": "#00f0ff",
        "neon-cyan": "#00f0ff",
        "tactical-slate": "#4c556b",
        "wireframe-steel": "#1e2433",
        "high-volt-white": "#f2f5f8",
        "surface": "#0b0c10",
        "surface-container-lowest": "#06070a",
        "surface-container-low": "#0f1118",
        "surface-container": "#131620",
        "surface-container-high": "#1c2130",
        "surface-container-highest": "#252b3c",
        "on-surface": "#e3e2e8",
        "on-surface-variant": "#9db4bf",
      },
      fontFamily: {
        space: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
