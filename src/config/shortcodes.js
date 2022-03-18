/**
 * Add Eleventy shortcodes here
 * @link https://www.11ty.dev/docs/shortcodes/
 */
module.exports = {
	Button: function shortcode() {
		const Button = require('./src/assets/views/components/button/button.js');
		return Button;
	},
	ExternalLink: function shortcode() {
		let shortcode = require('./src/assets/views/components/link/link-external.js');
		return shortcode;
	},
	Image: function shortcode() {
		const Image = require('./src/assets/views/components/figure/image.js');
		return Image;
	}
};