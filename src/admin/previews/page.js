const PagePreview = ({ entry, widgetFor, widgetsFor }) => {
	return h(
		'div',
		{},
		h('h1', {}, entry.data.title),
		h(
			'p',
			{ className: 'tldr', style: { fontSize: '1.25rem' } },
			entry.data.tldr
		),
		h(
			'div',
			{},
			h('img', {
				src: widgetsFor('image').data.url,
				alt: widgetsFor('image').data.alt,
			}),
			h('em', {}, widgetsFor('image').data.credit)
		),
		h(
			'div',
			{
				className: 'body',
			},
			widgetFor('body')
		)
	);
};

export { PagePreview };