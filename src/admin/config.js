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
  slug: {
    encoding: 'ascii',
    clean_accents: true,
    sanitize_replacement: '-'
  },
  collections: [
    posts
  ]
}