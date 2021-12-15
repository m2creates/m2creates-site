import { themes } from '@storybook/theming';
//import logo from '../src/assets/images/logo-m2creates-unicorn.png';

export const parameters = {
	actions: {
		argTypesRegex: '^on[A-Z].*',
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	darkMode: {
		dark: {
			...themes.dark,
			//brandImage: logo
		},
		light: {
			...themes.normal,
			//brandImage: logo
		},
	},
	layout: 'centered',
};
