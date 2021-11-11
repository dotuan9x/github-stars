module.exports = {
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {}
    },
    variants: {
        extend: {
            opacity: ['disabled']
        }
    },
    plugins: [
        require('@tailwindcss/forms')
    ]
};
