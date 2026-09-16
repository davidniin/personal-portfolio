/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx,html}",
    ],
    theme: {
        // Cap the container at 1280px (omitting '2xl' entirely) so wide/
        // ultra-wide monitors get generous outer margins past that point,
        // instead of growing all the way to Tailwind's default 1536px cap
        // and leaving a content box that's mostly empty on the inside.
        container: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
        },
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
