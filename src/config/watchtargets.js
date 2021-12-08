/**
 * Add Eleventy watch targets here
 * @link https://www.11ty.dev/docs/watch-serve/
 */

module.exports = {
  assets: function () {
    return "./src/assets";
  },

  tailwind: function () {
    return "./tailwind.config.js";
  }
}