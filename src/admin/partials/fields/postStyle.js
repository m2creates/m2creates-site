const postStyle = {
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
  ],
  default: 'article'
}

export default postStyle