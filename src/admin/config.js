// Import Collections
import posts from './collections/posts.js';
// import pages from './collections/pages.js';

export default {
  backend: {
    name: 'git-gateway',
    branch: 'main'
  },
  load_config_file: false,
  media_folder: 'assets/images',
  site_url: `${window.location.protocol}//${window.location.host}`,
  display_url: `${window.location.protocol}//${window.location.host}`,
  show_preview_links: true,
  collections: [
    posts
  ]
}

// Import Previews
import Post from './previews/post.js';
// import Page from './previews/page.js';

// Register Previews
CMS.registerPreviewTemplate('post', Post);
// CMS.registerPreviewTemplate('page', Page);

// TODO: Register preview styles
// CMS.registerPreviewStyle('../css/tailwind.min.css');
CMS.registerPreviewStyle('./previews/inline.css');