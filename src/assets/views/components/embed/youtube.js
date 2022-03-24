module.exports = ({ id, title = 'YouTube Video' } = {}) => `
  <youtube-embed videoid="${id}" videotitle="${title}" style="background-image: url('https://i.ytimg.com/vi/${id}/hqdefault.jpg');"><a href="https://youtube-nocookie.com/watch?v=${id}" class="lty-playbtn"><span class="visually-hidden">Play: ${title}</span></a></youtube-embed>
`;
