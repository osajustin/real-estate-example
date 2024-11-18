import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Merriweather", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        h1: ["4.052rem", { lineHeight: "5.394rem", letterSpacing: "-0.02em" }],
        h2: ["3.242rem", { lineHeight: "4.313rem", letterSpacing: "-0.02em" }],
        h3: ["2.594rem", { lineHeight: "3.45rem", letterSpacing: "-0.02em" }],
        h4: ["2.075rem", { lineHeight: "2.763rem", letterSpacing: "-0.02em" }],
        h5: ["1.66rem", { lineHeight: "2.206rem", letterSpacing: "-0.02em" }],
        h6: ["1.344rem", { lineHeight: "1.769rem", letterSpacing: "-0.02em" }],
        p: ["1.063rem", { lineHeight: "1.594rem", letterSpacing: "0" }],
        subheadline: [
          "1.328rem",
          { lineHeight: "1.769rem", letterSpacing: "-0.02em" },
        ],
        a: ["1.063rem", { lineHeight: "0.938rem", letterSpacing: "0" }],
        // Desktop sizes
        "h1-desktop": ["4rem", { lineHeight: "4.5rem" }], // 64px -> 4rem
        "h2-desktop": ["3rem", { lineHeight: "3.5rem" }], // 48px -> 3rem
        "body-desktop": ["1rem", { lineHeight: "1.5rem" }], // 16px -> 1rem
        "caption-desktop": ["0.875rem", { lineHeight: "1.25rem" }], // 14px -> 0.875rem

        // Tablet sizes
        "headline-tablet": ["3.5rem", { lineHeight: "4rem" }], // 56px -> 3.5rem
        "subheadline-tablet": ["2.5rem", { lineHeight: "3rem" }], // 40px -> 2.5rem
        "body-tablet": ["0.9375rem", { lineHeight: "1.375rem" }], // 15px -> 0.9375rem
        "caption-tablet": ["0.8125rem", { lineHeight: "1.125rem" }], // 13px -> 0.8125rem

        // Mobile sizes
        "headline-mobile": ["3rem", { lineHeight: "3.5rem" }], // 48px -> 3rem
        "subheadline-mobile": ["2rem", { lineHeight: "2.5rem" }], // 32px -> 2rem
        "body-mobile": ["0.875rem", { lineHeight: "1.25rem" }], // 14px -> 0.875rem
        "caption-mobile": ["0.75rem", { lineHeight: "1rem" }], // 12px -> 0.75rem
      },
      colors: {
        primary: {
          darkBlue: "#091638",
          blue: "#1C3988",
          lightBlue: "#F3F3FA",
          hover: "#6E8AE9",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};

export default config;
