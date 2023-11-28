const seo = {
  label: 'SEO Settings (Advanced)',
  name: 'seo',
  widget: 'object',
  collapsed: true,
  hint: 'Customize how this shows up on social media (e.g. Twitter) and search results (e.g. Google).',
  fields: [
    {
      label: 'SEO Title',
      name: 'title',
      widget: 'string',
      required: false,
      pattern: ['^.{0,60}$', "Title should be 30-60 characters"],
      hint: 'Max. 60 characters. A click-friendly title that is attention grabbing and provides a reader with relevant information.',
    },
    {
      label: 'SEO Description',
      name: 'desc',
      widget: 'text',
      required: false,
      pattern: ['^.{0,240}$', "Description should be 120-240 characters"],
      hint: 'Max 240 characters. A short description to tease this in a Search or Social Media preview. Should expand on the title without saying the exact same thing.',
    },
    {
      label: 'Image',
      name: 'image_url',
      widget: 'image',
      required: false,
    },
    {
      label: 'Image Alt',
      name: 'image_alt',
      widget: 'string',
      required: false,
      hint: 'Describe this image for the visually impaired. How would you describe it with your eyes closed?'
    },
  ],
}

export default seo