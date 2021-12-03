/**
 * Add Eleventy filters here
 * https://www.11ty.dev/docs/filters/
 */

const { DateTime } = require('luxon');

module.exports = {
  // Debug
  debug: obj => {
    return util.inspect(obj)
  },

  /**
   * Get date in ISO
   */
  iso: function(date) {
    return DateTime.fromJSDate(date).toISO({
      includeOffset: false,
      suppressMilliseconds: true
    })
  }

}