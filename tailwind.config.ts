import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000687",

          secondary: "#c93060",

          accent: "#93f99d",

          neutral: "#1d141f",

          "base-100": "#3b3d4e",

          info: "#7094d2",

          success: "#7ee7aa",

          warning: "#d77f04",

          error: "#fb4741",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
};
export default config;
