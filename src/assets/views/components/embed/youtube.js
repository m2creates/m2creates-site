module.exports = ({ id, title = 'YouTube Video' } = {}) => {
	return `
    <lite-youtube videoid="${id}" style="background-image: url('https://i.ytimg.com/vi/${id}/hqdefault.jpg');"><a href="https://youtube-nocookie.com/watch?v=${id}" class="lty-playbtn" title="Play YouTube Video"><span class="lyt-visually-hidden">Play: ${title}</span></a></lite-youtube>
  `;
};

/**
 * Shortcode returns [object Object]...
 * can something be learned from https://github.com/gfscott/eleventy-plugin-youtube-embed/blob/main/lib/buildEmbed.js
 * 
 * draft:
{% YouTube {
  id: 'ULoXTeb3gkQ',
  title: 'Using Airtable as an Analytics Hub: LinkedIn with Web Clipper & Automations - Update Post Stats'
} %}
*/
