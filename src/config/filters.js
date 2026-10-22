/**
 * Add Eleventy filters here
 * @link https://www.11ty.dev/docs/filters/
 */

const { DateTime } = require('luxon');
const util = require('util');

const published = (item) => new Date(item.data.datePublish || 0).getTime();
const byNewest = (a, b) => published(b) - published(a);
const visible = (items) => items.filter((item) => item.data.draft !== true);

module.exports = {
	// Debug
	debug: (obj) => {
		return util.inspect(obj);
	},

	/**
	 * Limit the amount of items returned from a collection
	 *
	 * usage/example:
	 * {% set posts = collections.posts | limit(3) %}
	 */
	limit: function (arr, limit) {
		return arr.slice(0, limit);
	},

	/**
	 * Dates via Luxon
	 * Format a date. See readableDate for example.
	 */
	format: function (date, format) {
		return DateTime.fromJSDate(date).toFormat(String(format));
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
	readableDate: function (date, format) {
		// default to America/Chicago Timezone
		if (!format) {
			format = 'dd MMMM yyyy';
		}
		return DateTime.fromJSDate(date, { zone: 'America/Chicago' }).toFormat(
			format,
		);
	},

	/**
	 * Get date in ISO
	 */
	iso: function (date) {
		return DateTime.fromJSDate(date).toISO({
			includeOffset: false,
			suppressMilliseconds: true,
		});
	},

	/**
	 * Convert Date from ISO
	 */
	fromIso: function (timestamp) {
		return DateTime.fromISO(timestamp, { zone: 'America/Chicago' }).toJSDate();
	},

	/**
	 * Convert Date to ISO
	 * Used in meta for published time
	 */
	toIso: function (dateObj) {
		return DateTime.fromJSDate(dateObj).toISO({
			includeOffset: true,
			suppressMilliseconds: true,
		});
	},

	/**
	 * For RSS Feed
	 */
	toRFC2822: function (date) {
		return DateTime.fromJSDate(date).toRFC2822();
	},

	/**
	 * For Atom Feed
	 */
	toRFC3339: function (date) {
		return DateTime.fromJSDate(date).toISO();
	},

	/**
	 * Workshop: in-progress items, newest first
	 */
	workshopShelf: function (items) {
		return visible(items)
			.filter((item) => item.data.status === 'in-progress')
			.sort(byNewest);
	},

	/**
	 * Workshop: completed items
	 * Newest of each category first, then 3 by date : 1 by `order`
	 */
	workshopCompleted: function (items) {
		const done = visible(items)
			.filter((item) => item.data.status !== 'in-progress')
			.sort(byNewest);

		const seen = new Set();
		const featured = [];
		const remaining = [];

		for (const item of done) {
			const cat = item.data.category;
			if (cat && !seen.has(cat)) {
				seen.add(cat);
				featured.push(item);
			} else {
				remaining.push(item);
			}
		}

		const recent = remaining.filter((item) => item.data.order == null);
		const curated = remaining
			.filter((item) => item.data.order != null)
			.sort((a, b) => a.data.order - b.data.order);

		const braided = [];
		while (recent.length || curated.length) {
			braided.push(...recent.splice(0, 3));
			if (curated.length) braided.push(curated.shift());
		}

		return [...featured, ...braided];
	},
};