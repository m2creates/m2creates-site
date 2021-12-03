/**
 * Add Eleventy passthrough file copies here
 * @link https://www.11ty.dev/docs/copy/
 */

module.exports = {
  admin: function () {
    return { 'src/admin': 'admin' }
  },

  fonts: function () {
    return { 'src/assets/fonts': 'assets/fonts' }
  },

  images: function () {
    return { 'src/assets/images': 'assets/images' }
  }

}