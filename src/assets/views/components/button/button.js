module.exports = (text, type) => {
	return `
    <button class="button" type="${ type }">
      ${ text }
    </button>
  `;
};
