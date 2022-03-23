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
class TwitchEmbed extends HTMLElement {
	connectedCallback() {
		this.videoId = this.getAttribute('videoid');
		this.videoTitle = this.getAttribute('title');
    this.videoParent = this.getAttribute('parent');
    this.videoType = this.getAttribute('type');

		let playBtnEl = this.querySelector('.twitch-playbtn');
		// A label for the button takes priority over a [playlabel] attribute on the custom-element
		this.playLabel =
			(playBtnEl && playBtnEl.textContent.trim()) ||
			this.getAttribute('playlabel') ||
			'Play';

		/**
		 * Lo, the placeholder image!  (aka the thumbnail, poster image, etc)
		 * TODO: Consider using webp if supported, falling back to jpg
		 */
		if (!this.style.backgroundImage) {
			this.style.backgroundImage = `none`;
		}

		// Set up play button, and its visually hidden label
		if (!playBtnEl) {
			playBtnEl = document.createElement('button');
			playBtnEl.type = 'button';
			playBtnEl.classList.add('twitch-playbtn');
			this.append(playBtnEl);
		}
		if (!playBtnEl.textContent) {
			const playBtnLabelEl = document.createElement('span');
			playBtnLabelEl.className = 'visually-hidden';
			playBtnLabelEl.textContent = this.playLabel;
			playBtnEl.append(playBtnLabelEl);
		}

		// On hover (or tap), warm up the TCP connections we're (likely) about to use.
		this.addEventListener('pointerover', TwitchEmbed.warmConnections, {
			once: true,
		});

		// Once the user clicks, add the real iframe and drop our play button
		// TODO: In the future we could be like amp-youtube and silently swap in the iframe during idle time
		//   We'd want to only do this for in-viewport or near-viewport ones: https://github.com/ampproject/amphtml/pull/5003
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
	// static warmConnections() {
	// 	if (LiteYTEmbed.preconnected) return;

	// 	// The iframe document and most of its subresources come right off youtube.com
	// 	LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube-nocookie.com');
	// 	// The botguard script is fetched off from google.com
	// 	LiteYTEmbed.addPrefetch('preconnect', 'https://www.google.com');

	// 	// Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling.
	// 	LiteYTEmbed.addPrefetch(
	// 		'preconnect',
	// 		'https://googleads.g.doubleclick.net'
	// 	);
	// 	LiteYTEmbed.addPrefetch('preconnect', 'https://static.doubleclick.net');

	// 	LiteYTEmbed.preconnected = true;
	// }

	addIframe(e) {
		if (this.classList.contains('twitch-activated')) return;
		e.preventDefault();
		this.classList.add('twitch-activated');

		const params = new URLSearchParams(this.getAttribute('params') || []);
		params.append('autoplay', '1');

		const iframeEl = document.createElement('iframe');
		iframeEl.width = 560;
		iframeEl.height = 315;
		// No encoding necessary as [title] is safe. https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#:~:text=Safe%20HTML%20Attributes%20include
		iframeEl.title = this.videoTitle;
		iframeEl.allowFullscreen = true;
		// AFAIK, the encoding here isn't necessary for XSS, but we'll do it only because this is a URL
		// https://stackoverflow.com/q/64959723/89484

    if (this.videoType === 'clip') {
			iframeEl.src = `https://clips.twitch.tv/embed?clip=${encodeURIComponent(
				this.videoId
			)}?${params.toString()}&parent=${this.videoParent}`;
		} else if (this.videoType === 'collection') {
			iframeEl.src = `https://player.twitch.tv/?collection=${encodeURIComponent(
				this.videoId
			)}?${params.toString()}&video=videoId&parent=${this.videoParent}`;
		} else {
			iframeEl.src = `https://player.twitch.tv/?video=${encodeURIComponent(
				this.videoId
			)}?${params.toString()}&parent=${this.videoParent}&autoplay=false`;
		}
		
		this.append(iframeEl);

		// Set focus for a11y
		iframeEl.focus();
	}
}
// Register custom element
customElements.define('twitch-embed', TwitchEmbed);
