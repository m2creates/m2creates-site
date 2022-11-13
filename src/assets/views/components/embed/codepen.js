module.exports = ({ id, title = 'Codepen by @m2creates', handle = 'm2creates' } = {}) => `
  <iframe height="400" style="width: 100%;" scrolling="no" title="${title}" src="https://codepen.io/${handle}/embed/preview/${id}?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/${handle}/pen/${id}">
    ${title}</a> by <a href="https://codepen.io/${handle}">@${handle}</a>
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>
`;