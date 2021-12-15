import ButtonLink from './buttonLink.njk';

export default {
	title: 'Design System/Atoms/Button Link',
	parameters: {
		docs: {
			description: {
				component: 'A call-to-action link that looks like a button.',
			},
		},
	},
	argTypes: {
		// If component is macro
		// isStorybook: {
		// 	control: false,
		// 	description: 'Only used to display Macro in preview',
		// 	type: { default: true },
		// },
		label: {
			description: 'Replaces `{{ label }}` with custom text.',
			table: {
				category: 'Attributes',
				type: {
					summary: 'string',
				},
			},
			control: 'text',
			type: { required: true },
		},
		href: {
			description: 'Sets `{{ href }}`.',
			table: {
				category: 'Attributes',
				type: {
					summary: 'string:url',
				},
			},
			control: { type: 'text' },
			type: { required: true },
		},
		fontSize: {
			description: 'Replaces `{{ fontSize }}` with Tailwind class.',
			table: {
				category: 'Styles',
				subcategory: 'Typography',
				type: {
					summary: 'text-sm | text-base | text-lg',
				},
				defaultValue: { summary: 'text-base' },
			},
			control: { type: 'select' },
			options: ['text-sm', 'text-base', 'text-lg'],
		},
		padding: {
			description: 'Replaces `{{ spacing }}` with Tailwind class.',
			table: {
				category: 'Styles',
				subcategory: 'Spacing',
				type: {
					summary: 'p-2 | p-4 | p-8',
				},
				defaultValue: {
					summary: 'p-4',
				},
			},
			control: { type: 'select' },
			options: ['p-2', 'p-4', 'p-8'],
		},
	},
};

const Template = (args) => ButtonLink({ ...args });

export const Default = Template.bind({});
Default.args = {
	//isStorybook: true,
	label: 'My CTA Text',
	href: 'https://example.com/',
	fontSize: 'text-base',
	padding: 'p-4',
};

// Example variant
export const Large = Template.bind({});
Large.args = {
	...Default.args,
	fontSize: 'text-lg',
	padding: 'p-8',
};
Large.parameters = {
	docs: {
		storyDescription: 'Large button description.',
	},
};
