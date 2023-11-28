// COLLECTIONS
import posts from './collections/posts.js';
import pages from './collections/pages.js';
import settings from './collections/settings.js';

CMS.registerAdditionalLink({
	id: 'analytics',
	title: 'Analytics',
	data: 'https://app.usefathom.com/share/sdxtreof/melaniemagdalena.com',
});

// PREVIEWS
import {
	PostPreviewCard,
	PostDraftFieldPreview,
	PostPreview,
} from './previews/post.js';

CMS.registerPreviewCard('posts', PostPreviewCard, () => 300);
CMS.registerFieldPreview('posts', 'draft', PostDraftFieldPreview);
CMS.registerPreviewTemplate('posts', PostPreview);

// EXPORT
export default {
	backend: {
		name: 'git-gateway',
		branch: 'main',
	},
	local_backend: true,
	load_config_file: false,
	media_folder: 'src/assets/images',
	public_folder: '/images',
	site_url: `${window.location.protocol}//${window.location.host}`,
	display_url: `${window.location.protocol}//${window.location.host}`,
	logo_url: `${window.location.protocol}//${window.location.host}/images/logo_512.png`,
	show_preview_links: true,
	slug: {
		encoding: 'ascii',
		clean_accents: true,
		sanitize_replacement: '-',
	},
	collections: [posts, pages, settings],
};
