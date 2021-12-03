import title from '@/partials/field_title';
import slug from '@/partials/field_slug';
import datePublish from '@/partials/field_datePublish';
import dateMod from '@/partials/field_dateMod';
import category from '@/partials/field_category';
import tags from '@/partials/field_tags';
import body from '@/partials/field_body';
import seo from '@/partials/field_seo';

const posts = {
  name: 'posts',
  label: 'Posts',
  label_singular: 'Post',
  description: 'Create or edit a post.',
  folder: 'site/posts',
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
