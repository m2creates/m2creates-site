/**
 * See assets/* for twitch.js & twitch.css
 *
 * Formats:
 * - Clip: https://clips.twitch.tv/embed?clip=<slug>&parent=<website.com>
 * - Video: https://player.twitch.tv/?video=<id>&parent=<website.com>&autoplay=false
 * - Collection https://player.twitch.tv/?collection=<id>&parent=<website.com>
 */

module.exports = ({ id, title = "Twitch Video", type, thumbnail } = {}) => `
  <twitch-embed
    videoid="${id}"
    videotitle="${title}"
    videotype="${type}"
    class="twitch-playbtn" style="${
      thumbnail && `background-image:url('/images/${thumbnail}')`
    };">
        ${(() => {
          if (type === "clip") {
            return `<a href="https://clips.twitch.tv/${id}">`;
          } else if (type === "collection") {
            return `<a href="https://www.twitch.tv/collections/${id}">`;
          } else {
            return `<a href="https://www.twitch.tv/videos/${id}">`;
          }
        })()}
        <span class="visually-hidden">Play ${title}</span>
        </a>
</twitch-embed>
`;
