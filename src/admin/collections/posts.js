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

const posts = {
  name: 'posts',
  label: 'Posts',
  label_singular: 'Post',
  description: 'Create or edit a post.',
  folder: 'src/posts',
  create: true,
  slug: '{{fields.slug}}',
  preview_path: 'posts/{{fields.slug}}',
  sortableFields: ['title', 'datePublish'],
  view_filters: [
    {
      label: 'Drafts',
      field: 'draft',
      pattern: 'true'
    },
    {
      label: 'Articles',
      field: 'post_type',
      pattern: 'article'
    },
    {
      label: 'Podcasts',
      field: 'post_type',
      pattern: 'podcast'
    },
    {
      label: 'Videos',
      field: 'post_type',
      pattern: 'video'
    }
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
    seo
  ]
}

export default posts
