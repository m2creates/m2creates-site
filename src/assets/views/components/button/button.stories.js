import Button from './button.njk';

export default {
	title: 'Design System/Atoms/Button',
	parameters: {
		docs: {
			description: {
				component: 'An HTML button.',
			},
		},
	},
	argTypes: {
		// If component is macro
		isStorybook: {
			control: false,
			description: 'Only used to display Macro in preview',
			type: { default: true },
		},
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
		type: {
			description: 'Replaces `{{ type }}`.',
			table: {
				category: 'Attributes',
				type: {
					summary: 'submit | button',
				},
				defaultValue: { summary: 'button' },
			},
			control: { type: 'select' },
			options: ['button', 'submit'],
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

const Template = (args) => Button({ ...args });

export const Default = Template.bind({});
Default.args = {
	//isStorybook: true,
	label: 'My Button Text',
	type: 'button',
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