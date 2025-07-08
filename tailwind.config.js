module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-gold': '#B8860B',
                'accent-maroon': '#800000',
                'neutral-cream': '#FFFDD0',
                'neutral-off-white': '#FAF9F6',
                'neutral-parchment': '#f5f2e9',
                'neutral-gray': '#e6e2d6',
            },
            fontFamily: {
                'playfair': ['Playfair Display', 'serif'],
                'lora': ['Lora', 'serif'],
            },
        },
    },
    plugins: [],
}