const image = {
  label: 'Hero Image',
  name: 'image',
  widget: 'object',
  collapsed: true,
  summary: 'Add a hero image to your post/page.',
  fields: [
    {
      label: 'Image',
      name: 'url',
      widget: 'image',
      required: false,
    },
    {
      label: 'Image Alt',
      name: 'alt',
      widget: 'string',
      required: false,
      hint: 'Describe this image for the visually impaired. How would you describe it with your eyes closed?'
    },
    {
      label: 'Image Credit',
      name: 'credit',
      widget: 'string',
      required: false,
      hint: 'Give credit to the image creator. For example: m2creates via Unsplash',
    },
  ],
}

export default image