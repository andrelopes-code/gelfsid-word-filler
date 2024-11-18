/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["src/frontend/**/*.js", "src/frontend/**/*.html"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#d68367",
                },
                background: {
                    DEFAULT: "#f4f6f6",
                    lighter: "#f7faff",
                },
                font: {
                    DEFAULT: "#485160",
                },
                border: {
                    DEFAULT: "#ecf0f3",
                },
            },
        },
    },
    plugins: [],
};
