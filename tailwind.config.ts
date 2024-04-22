
import type { Config } from 'tailwindcss'

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // fontFamily: {sans: ["var(--font-outfit)"]},
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // "colors": {
      //   "background": "#030206",
      //   "foreground": "#fcfbff",
      //   "neutral": {
      //     "50": "#fafafa",
      //     "100": "#f4f4f4",
      //     "200": "#e6e6e6",
      //     "300": "#d4d4d4",
      //     "400": "#a2a2a2",
      //     "500": "#727272",
      //     "600": "#535353",
      //     "700": "#404040",
      //     "800": "#272727",
      //     "900": "#181818"
      //   },
      //   "primary": {
      //     '50': '#f5f2ff',
      //     '100': '#ede8ff',
      //     '200': '#ddd4ff',
      //     '300': '#c4b1ff',
      //     '400': '#a886ff',
      //     '500': '#8d54fe',
      //     '600': '#8337f6',
      //     '700': '#711fe2',
      //     '800': '#5e1abd',
      //     '900': '#4f179b',
      //     '950': '#300c69',
      //   },
      //   "accent": {
      //     '50': '#f2f1ff',
      //     '100': '#e7e6ff',
      //     '200': '#d2d1ff',
      //     '300': '#afacff',
      //     '400': '#897cff',
      //     '500': '#6348ff',
      //     '600': '#4f23ff',
      //     '700': '#4b1ef1',
      //     '800': '#360dca',
      //     '900': '#2e0da5',
      //     '950': '#180570',
      //   }
      // },
      // "borderRadius": {
      //   "sm": "0.0625rem",
      //   "default": "0.3125rem",
      //   "md": "0.4688rem",
      //   "lg": "0.6406rem",
      //   "xl": "0.8125rem",
      //   "2xl": "1.0833rem",
      //   "3xl": "1.625rem"
      // },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
        "shine": {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        "aurora": {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "float": {
          from: { transform: 'translateY(0)', rotate: '0deg', scale: '1' },
          to: { transform: 'translateY(-50px)', rotate: '3deg', scale: '0.97' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shine": "shine 8s ease-in-out infinite",
        "aurora": "aurora 90s linear infinite",
        "float": "float 3s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = config;