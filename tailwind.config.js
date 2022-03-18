module.exports = {
	important: true,
	content: ['./src/**/*.{js,html,md,njk}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
};