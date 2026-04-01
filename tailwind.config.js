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
			typography: {
				DEFAULT: {
					css: {
						a: {
							textDecoration: 'underline',
							'&:hover': {
								color: '#1C5B72',
							},
						},
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
};
