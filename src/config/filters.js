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

  // Dates via Luxon
  /**
   * Format a date. See readableDate for example.
   */
  format: function(date, format) {
    return DateTime.fromJSDate(date).toFormat(String(format))
  },

  /**
   * Get date in ISO
   */
  iso: function(date) {
    return DateTime.fromJSDate(date).toISO({
      includeOffset: false,
      suppressMilliseconds: true
    })
  },

  /**
   * Readable Date
   * Default: 'dd MMMM yyyy' in 'America/Chicago'
   *
   * Simple usage, like on a post:
   * date | readableDate
   *
   * Use with format, like in Sitemap:
   * item.date | readableDate('yyyy-LL-dd')
   */
  readableDate: function(date, format) {
    // default to America/Chicago Timezone
    if (!format) {
      format = 'dd MMMM yyyy';
    }
    return DateTime.fromJSDate(date, { zone: 'America/Chicago' }).toFormat(format);
  },

  /**
   * Convert Date from ISO
   */
  fromIso: function(timestamp) {
    return DateTime.fromISO(timestamp, { zone: 'America/Chicago' }).toJSDate();
  },

  /**
   * Convert Date to ISO
   * Used in meta for published time
   */
  dateToIso: function(dateObj) {
    return DateTime.fromJSDate(dateObj).toISO({ includeOffset: true, suppressMilliseconds: true});
  },

  /**
   * For RSS Feed
   */
  toRFC2822: function(date) {
    return DateTime.fromJSDate(date).toRFC2822();
  }

}