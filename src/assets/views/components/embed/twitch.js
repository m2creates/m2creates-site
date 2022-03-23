/**
 * See assets/* for twitch.js & twitch.css
 *
 * Formats:
 * - Clip: https://clips.twitch.tv/embed?clip=<slug>&parent=<website.com>
 * - Video: https://player.twitch.tv/?video=<id>&parent=<website.com>&autoplay=false
 * - Collection https://player.twitch.tv/?collection=<id>&parent=<website.com>
 */

//TODO: parent from data/site.meta.domain OR autodetect with JS
const parent = 'melaniemagdalena.com';

module.exports = ({ id, title = 'Twitch Video', type, thumbnail } = {}) => `
  <twitch-embed videoid="${id}" type="${type}" parent="${parent}" class="twitch-playbtn" style="background-image:url('/images/${thumbnail}');">${
	type === 'clip' &&
	`<a href="https://clips.twitch.tv/embed?clip=${id}" title="${title}">`
}${
	type === 'collection' &&
	`<a href="https://player.twitch.tv/?collection=${id}" title="${title}">`
}${
	type === 'video' &&
	`<a href="https://player.twitch.tv/?video=${id}" title="${title}">`
}
  <span class="visually-hidden">Play ${title}</span></a></twitch-embed>
`;
