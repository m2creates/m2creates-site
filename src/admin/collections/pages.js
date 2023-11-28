// Fields
import body from '../partials/fields/body.js';
import category from '../partials/fields/category.js';
import dateMod from '../partials/fields/dateMod.js';
import datePublish from '../partials/fields/datePublish.js';
import draft from '../partials/fields/draft.js';
import postStyle from '../partials/fields/postStyle.js';
import slug from '../partials/fields/slug.js';
import tags from '../partials/fields/tags.js';
import title from '../partials/fields/title.js';

// Partials
import image from '../partials/image.js';
import seo from '../partials/seo.js';

const pages = {
	name: 'pages',
	label: 'Pages',
	label_singular: 'Page',
	description: 'Create or edit a page.',
	folder: 'src/pages',
	create: true,
	slug: '{{fields.slug}}',
	preview_path: '{{fields.slug}}',
	summary: '{{title}}',
	sortable_fields: {
		fields: [
			'commit_date',
			'datePublish',
			'title',
		],
		default: {
			field: 'commit_date',
			direction: 'Descending',
		},
	},
	view_filters: [
		{
			label: 'Drafts',
			field: 'draft',
			pattern: 'true',
		},
	],
	fields: [
		title,
		slug,
		datePublish,
		dateMod,
		draft,
		postStyle,
		image,
		category,
		tags,
		body,
		seo,
	],
};

export default pages;