/**
 * Add Eleventy collections here
 * @link https://www.11ty.dev/docs/collections/
 */

module.exports = {
	posts: function (collection) {
		return collection.getFilteredByGlob('src/posts/*.md').sort(function(a, b) {
      return b.data.datePublish - a.data.datePublish; // sort by date - descending
      //return a.data.datePublish - b.data.datePublish; // sort by date - ascending
    });
	},

	pages: function (collection) {
		return collection.getFilteredByGlob('src/pages/*.md');
	},

	projects: function (collection) {
		return collection.getFilteredByGlob('src/projects/*.md');
	},
};