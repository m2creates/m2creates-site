module.exports = ({ id, title = "Transistor Episode" } = {}) => `
  <iframe
    width="100%"
    height="180"
    frameborder="no"
    scrolling="no"
    seamless
    class="mb-2"
    src="https://share.transistor.fm/e/${id}"
  ></iframe>
  <a
    href="https://share.transistor.fm/s/${id}"
    title="opens in new tab, listen to '${title}' on transistor.fm"
    target="_blank">
        Listen on Transistor
  </a>
`;
