const uses = {
  label: 'Uses',
  label_singular: 'Tool',
  name: 'uses',
  widget: 'list',
  required: false,
  delimeter: ',',
  fields: [
    {
      name: 'tool',
      label: 'Tool',
      widget: 'string',
    },
  ],
  hint: 'Apply tools to create archives of posts that use the same tools/tech.'
}

export default uses