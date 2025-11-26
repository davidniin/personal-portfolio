/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx,html}",
    ],
    theme: {
        extend: {
            colors: {
                navy: '#0a192f',
                lightNavy: '#112240',
                lightestNavy: '#233554',
                slate: '#8892b0',
                lightSlate: '#a8b2d1',
                lightestSlate: '#ccd6f6',
                white: '#e6f1ff',
                green: '#64ffda',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
        },
    },
    plugins: [],
}
