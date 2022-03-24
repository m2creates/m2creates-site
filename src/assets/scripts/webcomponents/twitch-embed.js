/**
 * TwitchEmbed - based on lite-youtube-embed
 * Source: https://github.com/paulirish/lite-youtube-embed
 */

class TwitchEmbed extends HTMLElement {
	connectedCallback() {
		this.videoId = this.getAttribute('videoid');
		this.videoTitle = this.getAttribute('videotitle');
		this.videoType = this.getAttribute('videotype');

		let playBtnEl = this.querySelector('.twitch-playbtn');
		// A label for the button takes priority over a [title] attribute on the custom-element
		this.playLabel =
			(playBtnEl && playBtnEl.textContent.trim()) ||
			`Play ${this.getAttribute('title')}` ||
			'Play';

		/**
		 * Placeholder image - use the video thumbnail from Twitch
		 */
		if (!this.style.backgroundImage) {
			this.style.backgroundImage = `none`;
			this.style.backgroundColor = `#9146FF`;
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
		this.addEventListener('click', this.addIframe);
	}

	/**
	 * Add a <link rel={preload | preconnect} ...> to the head
	 */
	// static addPrefetch(kind, url, as) {
	// 	const linkEl = document.createElement('link');
	// 	linkEl.rel = kind;
	// 	linkEl.href = url;
	// 	if (as) {
	// 		linkEl.as = as;
	// 	}
	// 	document.head.append(linkEl);
	// }

	addIframe(e) {
		if (this.classList.contains('twitch-activated')) return;
		e.preventDefault();
		this.classList.add('twitch-activated');

		const params = new URLSearchParams(this.getAttribute('params') || []);
		params.append('autoplay', '1');

		this.videoParent = window.location.hostname;

		const iframeEl = document.createElement('iframe');
		iframeEl.width = 560;
		iframeEl.height = 315;
		iframeEl.title = this.videoTitle;
		iframeEl.allowFullscreen = true;

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
