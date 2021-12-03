const seo = {
  label: 'SEO Settings',
  name: 'seo',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'SEO Title',
      name: 'title',
      widget: 'string',
      required: false,
      hint: 'A title to display on Social Media and Search (e.g. Google) result.',
    },
    {
      label: 'SEO Description',
      name: 'desc',
      widget: 'text',
      required: false,
      hint: 'Max 240 characters. A short description to tease this in a Search or Social Media preview.',
    },
    {
      label: 'Image',
      name: 'image_card',
      widget: 'image',
      required: false,
    },
    {
      label: 'Image Alt',
      name: 'image_card_alt',
      widget: 'string',
      required: false,
    },
  ],
}

export default seo