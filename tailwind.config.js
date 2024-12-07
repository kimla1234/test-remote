/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kontumruy Pro', 'sans-serif'],
      },
      fontSize: {
        h1: [
          "52px",
          {
            lineHeight: "78px",
            fontWeight: "700",
          },
        ],
        h2: [
          "20px",
          {
            lineHeight: "30px",
            fontWeight: "600",
          },
        ],
        h3: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        h4: [
          "14px",
          {
            lineHeight: "21px",
            fontWeight: "400",
          },
        ],
        title: [
          "18px",
          {
            lineHeight: "27px",
            fontWeight: "400",
          },
        ],
        body: [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: "400",
          },
        ],
        SubText: [
          "10px",
          {
            lineHeight: "15px",
            fontWeight: "400",
          },
        ],
        Header: [
          "32px",
          {
            lineHeight: "48px",
            fontWeight: "600",
          },
        ],


      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],

}

