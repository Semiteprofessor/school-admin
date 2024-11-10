import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ranchoSky: "#C3EBFA",
        ranchoSkyLight: "#EDF9FD",
        ranchoPurple: "#CFCEFF",
        ranchoPurpleLight: "#F1F0FF",
        ranchoYellow: "#FAE27C",
        ranchoYellowLight: "#FEFCEB",
      },
    },
  },
  plugins: [],
};
export default config;
