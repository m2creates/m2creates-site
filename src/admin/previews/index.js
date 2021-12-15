// Import Previews
import PostPreview from '/admin/previews/post.js';
import PagePreview from './page.js';

// Register Preview templates
CMS.registerPreviewTemplate('posts', PostPreview);
CMS.registerPreviewTemplate('pages', PagePreview);

// Register Preview styles
CMS.registerPreviewStyle('/assets/tailwind.css');
CMS.registerPreviewStyle('/admin/previews/inline.css');