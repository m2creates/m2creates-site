const tags = {
	label: 'Tags',
	label_singular: 'Tag',
	name: 'tags',
	widget: 'list',
	required: false,
	delimeter: ',',
	fields: [
		{
			name: 'tag',
			label: 'Tag',
			widget: 'string',
		},
	],
	hint: 'Apply tags to create archives of posts that are similar and/or related.',
};

export default tags