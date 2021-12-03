// Import Previews
import PostPreview from '/admin/previews/post.js';
// import pagePreview from './page.js';

// Register Preview templates
CMS.registerPreviewTemplate('posts', PostPreview);
// CMS.registerPreviewTemplate('pages', pagePreview);

// Register Preview styles
// CMS.registerPreviewStyle('../css/tailwind.min.css');
CMS.registerPreviewStyle('/admin/previews/inline.css');