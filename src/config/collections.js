/**
 * Add Eleventy collections here
 * @link https://www.11ty.dev/docs/collections/
 */

module.exports = {
	posts: function (collection) {
		const post = collection.getFilteredByGlob('src/posts/*.md');

		for (let i = 0; i < post.length; i++) {
			const prevPost = post[i - 1];
			const nextPost = post[i + 1];

			post[i].data['prevPost'] = prevPost;
			post[i].data['nextPost'] = nextPost;
		}

		return post.sort(function (a, b) {
			return b.data.datePublish - a.data.datePublish; // sort by date - descending
			//return a.data.datePublish - b.data.datePublish; // sort by date - ascending
		});
	},

	pages: function (collection) {
		return collection.getFilteredByGlob('src/pages/*.md');
	},

	projects: function (collection) {
		return collection
			.getFilteredByGlob('src/projects/*.md')
			.sort(function (a, b) {
				return b.data.datePublish - a.data.datePublish; // sort by date - descending
				//return a.data.datePublish - b.data.datePublish; // sort by date - ascending
			});
	},

	projectsFeatured: function (collection) {
		const projects = collection
			.getFilteredByGlob('src/projects/*.md')
			.filter(function (item) {
				// Side-step tags and do your own filtering
				return 'featured' in item.data;
			});

		return projects.sort(function (a, b) {
			// return b.data.priority - a.data.priority; // sort by priority - descending
			return a.data.priority - b.data.priority; // sort by date - ascending
		});
	},
};