/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neutral100: "#F2F2F2",
        neutral200: "#D9D9D9",
        neutral600: "#737373",
        brand600: "#25A59E",
        neutral700: "#595959",
        neutral900: "#262626",
      },
      fontFamily: {
        gilda: ["Gilda Display", "serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      fontSize: {
        "display-desktop-1": "170px",
        "display-mobile-1": "52px",

        "heading-desktop-2": "40px",

        "heading-desktop-1": "72px",
        "heading-mobile-1": "40px",

        "heading-desktop-3": "24px",
        "heading-mobile-3": "20px",

        "body-desktop-18": "18px",
        "body-mobile-15": "16px",
      },
      lineHeight: {
        "display-desktop-1": "170px",
        "display-mobile-1": "61px",

        "heading-desktop-1": "84px",
        "heading-mobile-1": "52px",

        "heading-desktop-3": "36px",
        "heading-mobile-3": "28px",

        "body-desktop-18": "32px",
        "body-mobile-15": "24px",
      },
      maxWidth: {
        "header-text": "1340px",
      },
      spacing: {
        "header-image": "142px",
      },
    },
  },
  plugins: [],
};
