const image = {
	label: 'Hero Image',
	name: 'image',
	widget: 'object',
	collapsed: true,
	hint: 'Add a hero image to your post/page.',
	fields: [
		{
			label: 'Image',
			name: 'url',
			widget: 'image',
			required: false,
		},
		{
			label: 'Image Alt',
			name: 'alt',
			widget: 'string',
			hint: 'Describe this image for the visually impaired. How would you describe it with your eyes closed?',
			required: false,
			// condition: {
			// 	field: 'image.url',
      //   value: true
			// },
		},
		{
			label: 'Image Credit',
			name: 'credit',
			widget: 'string',
			hint: 'Give credit to the image creator. For example: m2creates via Unsplash',
			required: false,
			// condition: {
			// 	field: 'image.url',
			// 	value: true,
			// },
		},
	],
};

export default image