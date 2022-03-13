/**
 * Add Eleventy plugins here
 * @link https://www.11ty.dev/docs/plugins/
 */

module.exports = {
  readingTime: function (eleventyConfig) {
    let plugin = require('eleventy-plugin-reading-time');
    eleventyConfig.addPlugin(plugin);
  }
}