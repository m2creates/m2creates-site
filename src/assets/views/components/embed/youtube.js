module.exports = ({ id, title = 'YouTube Video' } = {}) => `
  <youtube-embed videoid="${id}" style="background-image: url('https://i.ytimg.com/vi/${id}/hqdefault.jpg');"><a href="https://youtube-nocookie.com/watch?v=${id}" class="lty-playbtn" title="Play YouTube Video"><span class="visually-hidden">Play: ${title}</span></a></youtube-embed>
`;
