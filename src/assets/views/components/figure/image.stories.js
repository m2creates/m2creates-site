import Image from './image.js';

export default {
	title: 'Design System/Atoms/Image',
	parameters: {
		docs: {
			description: {
				component: 'A figure with an image and optional figcaption.',
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
		url: {
			description: 'Fills `{{ url }}` with path to image.',
			table: {
				category: 'Attributes',
				type: {
					summary: 'string:url',
				},
			},
			control: 'text',
			type: { required: true },
		},
		alt: {
			description: 'Fills `{{ alt }}` with alternate image text.',
			table: {
				category: 'Attributes',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
			type: { required: false },
		},
		caption: {
			description: 'Fills `{{ caption }}` with figcaption text.',
			table: {
				category: 'Attributes',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
			type: { required: false },
		},
		// credit: {
		// 	description: 'Fills `{{ credit }}` with image credit text.',
		// 	table: {
		// 		category: 'Attributes',
		// 		type: {
		// 			summary: 'string',
		// 		},
		// 	},
		// 	control: { type: 'text' },
		// 	type: { required: false },
		// },
		fit: {
			description: 'Defines how the image should fit the container',
			table: {
				category: 'Styles',
				type: {
					summary: 'cover | contain | fill | scale-down | none',
				},
				defaultValue: {
					summary: 'cover',
				},
			},
			control: { type: 'select' },
			options: ['cover', 'contain', 'fill', 'scale-down', 'none'],
		},
	},
};

const Template = (args) => Image({ ...args });

export const Default = Template.bind({});
Default.args = {
	// isStorybook: true,
	url='https://images.unsplash.com/photo-1500754088824-ce0582cfe45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80',
  alt='Latern Fest',
  //credit='m2creates via Unsplash',
  caption='Lift off at Lantern Fest 2015',
  fit='contain'
};