module.exports = ({ id, title = "YouTube Video" } = {}) => `
  <youtube-embed
    videoid="${id}"
    videotitle="${title}"
    class="mb-2"
    style="background-image: url('https://i.ytimg.com/vi/${id}/hqdefault.jpg');">
        <a href="https://www.youtube-nocookie.com/watch?v=${id}" class="lty-playbtn">
            <span class="visually-hidden">Play: ${title}</span>
        </a>
  </youtube-embed>
  <a
    href="https://www.youtube-nocookie.com/watch?v=${id}"
    title="opens in new tab, watch '${title}' on youtube-nocookie.com"
    target="_blank">
        Watch on YouTube
  </a>
`;
