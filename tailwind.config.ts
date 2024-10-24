import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B2DF7",
          foreground: "hsl(var(--primary-foreground))",
        },
        purple: {
          "100": "#E8D5FD",
          "200": "#D1ABFC",
          "300": "#B981FA",
          "400": "#A257F9",
          "600": "#6F24C6",
          "700": "#531B94",
          "800": "#381263",
          "900": "#1C0931",
          DEFAULT: "#8B2DF7",
        },
        black: {
          "100": "#D1D0D1",
          "200": "#A2A2A3",
          "300": "#747376",
          "400": "#454548",
          "600": "#121215",
          "700": "#0E0D10",
          "800": "#09090A",
          "900": "#050405",
          DEFAULT: "#17161A",
        },
        white: "#FEFEFE",
        circle: {
          dark: "#2E2D31",
        },
        backgroundImage: {
          "purple-gradient":
            "linear-gradient(45deg, #E8D5FD, #8B2DF7, #1C0931)",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        success: {
          light: "#D1FAE5",
          DEFAULT: "#10B981",
          dark: "#065F46",
        },
        warning: {
          light: "#FEF3C7",
          DEFAULT: "#F59E0B",
          dark: "#B45309",
        },
        danger: {
          light: "#FEE2E2",
          DEFAULT: "#EF4444",
          dark: "#991B1B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
