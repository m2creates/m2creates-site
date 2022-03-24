/**
 * A lightweight youtube embed. Still should feel the same to the user, just MUCH faster to initialize and paint.
 * Source: https://github.com/paulirish/lite-youtube-embed
 *
 * Thx to these as the inspiration
 *   https://storage.googleapis.com/amp-vs-non-amp/youtube-lazy.html
 *   https://autoplay-youtube-player.glitch.me/
 *
 * Once built it, I also found these:
 *   https://github.com/ampproject/amphtml/blob/master/extensions/amp-youtube (👍👍)
 *   https://github.com/Daugilas/lazyYT
 *   https://github.com/vb/lazyframe
 */
class LiteYTEmbed extends HTMLElement {
	connectedCallback() {
		this.videoId = this.getAttribute('videoid');
    this.videoTitle = this.getAttribute('videotitle');

		let playBtnEl = this.querySelector('.lty-playbtn');
		// A label for the button takes priority over a [playlabel] attribute on the custom-element
		this.playLabel =
			(playBtnEl && playBtnEl.textContent.trim()) ||
			this.getAttribute('playlabel') ||
			'Play';

		/**
		 * Placeholder image - use the video thumbnail from YouTube
		 * See https://github.com/paulirish/lite-youtube-embed/blob/master/youtube-thumbnail-urls.md
		 */
		if (!this.style.backgroundImage) {
			this.style.backgroundImage = `url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`;
		}

		// Set up play button, and its visually hidden label
		if (!playBtnEl) {
			playBtnEl = document.createElement('button');
			playBtnEl.type = 'button';
			playBtnEl.classList.add('lty-playbtn');
			this.append(playBtnEl);
		}
		if (!playBtnEl.textContent) {
			const playBtnLabelEl = document.createElement('span');
			playBtnLabelEl.className = 'visually-hidden';
			playBtnLabelEl.textContent = this.playLabel;
			playBtnEl.append(playBtnLabelEl);
		}

		// On hover (or tap), warm up the TCP connections we're (likely) about to use.
		this.addEventListener('pointerover', LiteYTEmbed.warmConnections, {
			once: true,
		});

		// Once the user clicks, add the real iframe and drop our play button
		this.addEventListener('click', this.addIframe);
	}

	/**
	 * Add a <link rel={preload | preconnect} ...> to the head
	 */
	static addPrefetch(kind, url, as) {
		const linkEl = document.createElement('link');
		linkEl.rel = kind;
		linkEl.href = url;
		if (as) {
			linkEl.as = as;
		}
		document.head.append(linkEl);
	}

	/**
	 * Begin pre-connecting to warm up the iframe load
	 * Since the embed's network requests load within its iframe,
	 *   preload/prefetch'ing them outside the iframe will only cause double-downloads.
	 * So, the best we can do is warm up a few connections to origins that are in the critical path.
	 *
	 * Maybe `<link rel=preload as=document>` would work, but it's unsupported: http://crbug.com/593267
	 * But TBH, I don't think it'll happen soon with Site Isolation and split caches adding serious complexity.
	 */
	static warmConnections() {
		if (LiteYTEmbed.preconnected) return;

		// The iframe document and most of its subresources come right off youtube.com
		LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube-nocookie.com');
		// The botguard script is fetched off from google.com
		LiteYTEmbed.addPrefetch('preconnect', 'https://www.google.com');

		// Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling.
		// LiteYTEmbed.addPrefetch(
		// 	'preconnect',
		// 	'https://googleads.g.doubleclick.net'
		// );
		// LiteYTEmbed.addPrefetch('preconnect', 'https://static.doubleclick.net');

		LiteYTEmbed.preconnected = true;
	}

	addIframe(e) {
		if (this.classList.contains('lyt-activated')) return;
		e.preventDefault();
		this.classList.add('lyt-activated');

		const params = new URLSearchParams(this.getAttribute('params') || []);
		params.append('autoplay', '1');

		const iframeEl = document.createElement('iframe');
		iframeEl.width = 560;
		iframeEl.height = 315;
		iframeEl.title = this.videoTitle;
		iframeEl.allow =
			'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
		iframeEl.allowFullscreen = true;
		iframeEl.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
			this.videoId
		)}?${params.toString()}`;
		this.append(iframeEl);

		// Set focus for a11y
		iframeEl.focus();
	}
}
// Register custom element
customElements.define('youtube-embed', LiteYTEmbed);
