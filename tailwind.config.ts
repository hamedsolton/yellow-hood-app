import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // 8pt grid spacing scale (all tokens are multiples of 4px).
    spacing: {
      0: "0px",
      1: "0.25rem", // 4px
      2: "0.5rem", // 8px
      3: "0.75rem", // 12px
      4: "1rem", // 16px
      5: "1.25rem", // 20px
      6: "1.5rem", // 24px
      7: "1.75rem", // 28px
      8: "2rem", // 32px
      9: "2.25rem", // 36px
      10: "2.5rem", // 40px
      11: "2.75rem", // 44px
      12: "3rem", // 48px
      14: "3.5rem", // 56px
      16: "4rem", // 64px
      20: "5rem", // 80px
      24: "6rem", // 96px
      28: "7rem", // 112px
      32: "8rem", // 128px
      36: "9rem", // 144px
      40: "10rem", // 160px
      44: "11rem", // 176px
      48: "12rem", // 192px
      52: "13rem", // 208px
      56: "14rem", // 224px
      60: "15rem", // 240px
      64: "16rem", // 256px
      72: "18rem", // 288px
      80: "20rem", // 320px
      96: "24rem", // 384px
    },
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        sans: ["var(--font-nunito)", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        lead: ["1.25rem", { lineHeight: "1.6" }], // 20px subtitle / lead
      },
      fontWeight: {
        body: "400",
        label: "600",
      },
      letterSpacing: {
        tight: "-0.02em",
      },
      borderRadius: {
        "button-lg": "0.75rem", // shared large control radius
      },
      colors: {
        // Semantic tokens (mapped to CSS variables)
        primary: {
          DEFAULT: "var(--color-primary)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
        },
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          disabled: "var(--color-text-disabled)",
        },

        // Brand yellow scale
        yellow: {
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79109",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
          950: "#461602",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#d4d4d8",
              foreground: "#09090b",
            },
            secondary: {
              DEFAULT: "#f79109",
              foreground: "#09090b",
            },
            background: "#09090b",
            foreground: "#fafafa",
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#52525b",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#f79109",
              foreground: "#09090b",
            },
            background: "#ffffff",
            foreground: "#09090b",
          },
        },
      },
    }),
  ],
};
export default config;

