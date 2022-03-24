class WebAppManifest {
  data() {
    return {
      permalink: "/site.webmanifest"
    };
  }

  render(data) {

    const content = {
			short_name: data.site.name,
			name: data.site.name,
			description: data.site.description,
			icons: [
				{
					src: data.site.brand.favicon,
					type: 'image/png',
					sizes: '512x512',
				},
			],
			theme_color: data.site.brand.colors.pwa,
			background_color: data.site.brand.colors.pwa,
			display: 'standalone',
			start_url: '/',
			scope: '/',
		};
    return JSON.stringify(content);
  }
}

module.exports = WebAppManifest;
