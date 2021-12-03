/**
 * Add Eleventy filters here
 * https://www.11ty.dev/docs/filters/
 */

module.exports = {
  // Debug
  debug: obj => {
    return util.inspect(obj)
  }

}