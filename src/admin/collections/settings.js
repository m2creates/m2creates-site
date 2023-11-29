const settings = {
	name: 'settings',
	label: 'Settings',
	description: 'Edit your global settings.',
	extension: 'json',
	format: 'json',
	create: false,
	editor: {
		preview: false,
	},
	files: [
		{
			label: 'Site Settings (Global)',
			name: 'site',
			file: 'src/data/site.json',
			preview: false,
			fields: [
				{
					label: 'Site Name',
					name: 'name',
					widget: 'string',
					hint: 'The name of your brand, community, or just your Twitch name. Used in your Main Menu and for Search Engines.',
				},
				{
					label: 'Site Description',
					name: 'description',
					widget: 'text',
					required: false,
					hint: 'Write a default description to appear on posts/pages via search results when a custom one does not exist.',
				},
				{
					label: 'Meta',
					name: 'meta',
					widget: 'object',
					collapsed: true,
					hint: 'Define your site meta information.',
					fields: [
						{
							label: 'Live URL',
							name: 'url',
							widget: 'string',
							hint: 'What is the URL of your site? I.e. https://streamsites.xyz',
						},
						{
							label: 'Domain',
							name: 'domain',
							widget: 'string',
							hint: 'Your URL without the protocol (https://) and no trailing slashes (/).',
						},
						{
							label: 'Language Code with Locale',
							name: 'language',
							widget: 'string',
							hint: 'Example: United States English is "en-US".',
						},
						{
							label: 'Language Code',
							name: 'locale',
							widget: 'string',
							hint: 'Example: English is "en".',
						},
					],
				},
				{
					label: 'Author',
					name: 'author',
					widget: 'object',
					collapsed: true,
					hint: 'All about you!',
					fields: [
						{
							label: 'Name',
							name: 'name',
							widget: 'string',
							hint: 'Your name!',
						},
						{
							label: 'Avatar',
							name: 'avatar',
							widget: 'image',
							media_library: {
								config: {
									multiple: false,
								},
							},
							required: false,
							hint: 'Your headshot/avatar.',
						},
						{
							label: 'Bio',
							name: 'bio',
							widget: 'string',
							hint: 'A short personal description. Shown beside your name and avatar on posts.',
						},
					],
				},
				{
					label: 'Social',
					label_singular: 'Network',
					name: 'social',
					widget: 'list',
					collapsed: true,
					hint: 'Your social networks across the web.',
					fields: [
						{
							label: 'Network',
							name: 'network',
							widget: 'string',
							hint: 'Example: twitter',
						},
						{
							label: 'Handle',
							name: 'handle',
							widget: 'string',
							hint: 'Your username on the network.',
						},
						{
							label: 'Profile URL',
							name: 'url',
							widget: 'string',
							hint: 'Link to your profile.',
						},
					],
				},
				{
					label: 'Email',
					name: 'email',
					widget: 'object',
					collapsed: true,
					hint: 'Contact information for people to reach you in general or via your privacy policy.',
					fields: [
						{
							label: 'General Email',
							name: 'general',
							widget: 'string',
							required: false,
							hint: 'Where can people reach you?',
						},
						{
							label: 'Privacy Email',
							name: 'privacy',
							widget: 'string',
							hint: 'This is displayed in your privacy policy and is required.',
						},
					],
				},
				{
					label: 'Brand',
					name: 'brand',
					widget: 'object',
					collapsed: true,
					hint: 'Add your graphics and color.',
					fields: [
						{
							label: 'Logo',
							name: 'logo',
							widget: 'image',
							media_library: {
								config: {
									multiple: false,
								},
							},
							required: false,
							hint: '',
						},
						{
							label: 'Favicon',
							name: 'favicon',
							widget: 'image',
							media_library: {
								config: {
									multiple: false,
								},
							},
							required: false,
							hint: '',
						},
						{
							label: 'Colors',
							name: 'colors',
							widget: 'object',
							fields: [
								{
									label: 'Chrome Theme Color (PWA)',
									name: 'pwa',
									widget: 'string',
									hint: 'Hexidecimal value. Tint UI options in Chrome (e.g. the URL bar) with a custom color.',
								},
							],
							hint: 'What colors should your site use?',
						},
					],
				},
				{
					label: 'SEO',
					name: 'seo',
					widget: 'object',
					collapsed: true,
					hint: 'Customize your default SEO settings for robots.',
					fields: [
						{
							label: 'Share Image',
							name: 'image',
							widget: 'object',
							collapsed: true,
							hint: 'Add a hero image to your post/page.',
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
									hint: 'Describe this image for the visually impaired. How would you describe it with your eyes closed?',
									required: false,
								},
							],
						},
						{
							label: 'Google Verification',
							name: 'google',
							widget: 'string',
							hint: 'Verify your website with Google. We already include the meta tag, so just add the unique code string.',
						},
						{
							label: 'Pinterest Verification',
							name: 'pinterest',
							widget: 'string',
							hint: 'Verify your website with Google. We already include the meta tag, so just add the unique code string.',
						},
					],
				},
				{
					label: 'Search Engine',
					name: 'search_engine',
					widget: 'select',
					options: [
						{
							label: 'Duck Duck Go',
							value: 'https://duckduckgo.com/',
						},
						{
							label: 'Ecosia',
							value: 'https://ecosia.org/search',
						},
						{
							label: 'Google',
							value: 'https://www.google.com/search',
						},
						{
							label: 'Bing',
							value: 'https://www.bing.com/search',
						},
					],
					// TODO: fix default
					default: 'Duck Duck Go',
					hint: 'Select which search engine to use on your Search page.',
				},
				{
					label: 'Robots',
					name: 'robots',
					widget: 'object',
					collapsed: true,
					hint: 'Control how robots interact with your content. The defaults are privacy focused.',
					fields: [
						{
							label: 'Let Pinterest pin your images?',
							name: 'pinterest',
							widget: 'select',
							options: [
								{
									label: 'Allow',
									value: 'allow',
								},
								{
									label: 'Disallow',
									value: 'disallow',
								},
							],
							// TODO: fix default
							default: 'Allow',
							hint: 'You can choose to block Pinterest users from pinning your content, but this is not recommended.',
						},
						{
							label: 'Let Twitter track your visitors?',
							name: 'twitter',
							widget: 'select',
							options: [
								{
									label: 'Allow',
									value: 'allow',
								},
								{
									label: 'Disallow',
									value: 'disallow',
								},
							],
							// TODO: fix default
							default: 'Disallow',
						},
						{
							label: 'Let search engines crawl your website?',
							name: 'search_crawler',
							widget: 'select',
							options: [
								{
									label: 'Follow',
									value: 'follow',
								},
								{
									label: 'No Index',
									value: 'noindex',
								},
								{
									label: 'No Follow',
									value: 'nofollow',
								},
								{
									label: 'Index, No Follow',
									value: 'index,nofollow',
								},
								{
									label: 'Index, Follow',
									value: 'index,follow',
								},
								{
									label: 'No Index, No Follow',
									value: 'noindex,nofollow',
								},
							],
							// TODO: fix default
							default: 'Follow',
						},
					],
				},
			],
		},
	],
};

export default settings;