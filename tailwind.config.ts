import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-clr": "#F8FF37",
        "cyan-clr": "#0FEFFF",
        "turquoise-clr": "#1AE7AD",
        "green-clr": "#1ED760",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
