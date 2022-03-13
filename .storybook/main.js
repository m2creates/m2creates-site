/**
 * Storybook - Design System
 * @link https://storybook.js.org/docs/html/configure/overview
 *
 * Creating stories
 * @link https://storybook.js.org/docs/react/essentials/controls#configuration
 * @link https://storybook.js.org/docs/react/writing-stories/args
 * @link https://storybook.js.org/docs/react/api/argtypes
 * @link https://storybook.js.org/docs/react/writing-docs/doc-blocks#customizing
 * @link https://storybook.js.org/tutorials/design-systems-for-developers/react/en/document/
 *
 */

module.exports = {
	stories: ['../src/assets/**/*.stories.@(js|jsx|md|mdx)'],
	addons: [
		'@storybook/addon-a11y', // https://storybook.js.org/addons/@storybook/addon-a11y
		'@storybook/addon-essentials', // https://storybook.js.org/addons/tag/essentials
		'@storybook/addon-links', // https://storybook.js.org/addons/@storybook/addon-links
		'storybook-dark-mode', // https://storybook.js.org/addons/storybook-dark-mode
	],
	framework: '@storybook/html',
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Nunjucks
		config.module.rules.push({
			test: /\.(njk|html)$/,
			use: [
				{
					loader: 'simple-nunjucks-loader',
					options: {},
				},
			],
		});

		// Return the altered config
		return config;
	},
};
