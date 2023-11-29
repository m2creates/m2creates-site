module.exports = {
	important: false,
	content: ['./src/**/*.{js,html,md,njk}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
		},
		extend: {
			maxHeight: {
				128: '32rem',
			},
			maxWidth: {
				default: '80ch',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
};
