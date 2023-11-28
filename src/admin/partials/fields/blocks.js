const blocks = {
	label: 'Blocks',
	label_singular: 'Block',
	name: 'blocks',
	widget: 'list',
	required: false,
	delimeter: ',',
	fields: [
		{
			name: 'block',
			label: 'Block',
			widget: 'select',
			options: [
				{
					label: 'Transistor',
					value: 'transition'
				},
				{
					label: 'Twitch',
					value: 'twitch'
				},
				{
					label: 'YouTube',
					value: 'youtube'
				}
			],
			default: ''
		},
	],
	hint: 'Add stycles & scripts for fancy content, such as YouTube embeds.',
};

export default blocks