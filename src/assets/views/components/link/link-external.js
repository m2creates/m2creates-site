module.exports = ({
	url,
	text,
	title = 'Open external link in new tab',
} = {}) => `
<a class="external-link" href="${url}" title="${title}" target="_blank" rel="noopener">${text}</a>`;
