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
        brand600: '#25A59E'
      },
      fontFamily: {
        gilda: ['Gilda Display', 'serif'],
        urbanist: ['Urbanist', 'sans-serif']
      },
      fontSize: {
        'display-desktop-1': '170px'
      },
      lineHeight: {
        'display-desktop-1': '170px',
      },
      maxWidth: {
        'header-text': '1340px'
      },
      spacing: {
        'header-image': '142px'
      }
    },
  },
  plugins: [],
};
