/**
 * Add Eleventy passthrough file copies here
 * @link https://www.11ty.dev/docs/copy/
 */

module.exports = {
  cms: function () {
    return { 'src/admin': 'admin' }
  },

  images: function () {
    return { 'src/assets/images': 'assets/images' }
  },

  fonts: function () {
    return { 'src/assets/fonts': 'assets/fonts' }
  }
}