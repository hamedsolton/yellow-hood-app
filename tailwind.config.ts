import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import path from "path";

// resolve theme path regardless of worktree or monorepo setup
const nextUIThemeDist = path.join(
  path.dirname(require.resolve("@nextui-org/theme/package.json")),
  "dist"
);

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    `${nextUIThemeDist}/**/*.{js,ts,jsx,tsx,mjs}`,
  ],
  theme: {
    // 8pt grid spacing scale (all tokens are multiples of 4px).
    spacing: {
      0: "0px",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        sans: ["var(--font-nunito)", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        lead: ["1.25rem", { lineHeight: "1.6" }],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#F59E0B",
              foreground: "#09090b",
            },
            secondary: {
              DEFAULT: "#78716c",
              foreground: "#ffffff",
            },
            background: "#ffffff",
            foreground: "#09090b",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#F59E0B",
              foreground: "#09090b",
            },
            secondary: {
              DEFAULT: "#57534e",
              foreground: "#ffffff",
            },
            background: "#09090b",
            foreground: "#fafafa",
          },
        },
      },
    }),
  ],
};
export default config;

