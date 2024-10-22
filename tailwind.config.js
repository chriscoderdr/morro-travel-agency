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
        "heading-desktop-1": "72px",
        "heading-desktop-2": "40px",
      },
      lineHeight: {
        "display-desktop-1": "170px",
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
