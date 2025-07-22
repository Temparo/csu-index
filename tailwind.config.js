/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{html,vue,js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {'sans': ['Inter', 'PingFang SC', 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],},
        extend: {},
    },
    plugins: [],
}

