import title from '../partials/field_title.js';
import slug from '../partials/field_slug.js';
import datePublish from '../partials/field_datePublish.js';
import dateMod from '../partials/field_dateMod.js';
import category from '../partials/field_category.js';
import tags from '../partials/field_tags.js';
import body from '../partials/field_body.js';
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
    {
      label: 'Post Style',
      name: 'post_type',
      widget: 'select',
      options: [
        {
          label: 'Article',
          value: 'article'
        },
        {
          label: 'Podcast',
          value: 'podcast'
        },
        {
          label: 'Video',
          value: 'video'
        }
      ]
    },
    category,
    tags,
    body,
    seo
  ]
}

export default posts
