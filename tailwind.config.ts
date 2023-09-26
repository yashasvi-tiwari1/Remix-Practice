import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      listStyleType: {
        disc: "disc",
      },
    },
  },
  plugins: [],
} satisfies Config;
