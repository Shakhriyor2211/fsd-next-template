/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    "postcss-100vh-fix",
    "tailwindcss/nesting",
    "tailwindcss",
    "autoprefixer",
  ],
};

export default config;
