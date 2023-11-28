// Post Previews

const PostPreviewCard = ({ widgetsFor, entry }) => {
	return h(
		'div',
		{
			style: {
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			},
		},
		h(
			'div',
			{ style: { flex: '1' } },
			h('img', {
				src: widgetsFor('image').data.url,
				style: {
					borderRadius: '8px 8px 0 0',
					width: '100%',
					height: '100%',
					objectFit: 'cover',
				},
			})
		),
		h(
			'div',
			{
				style: {
					padding: '16px',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					justifyContent: 'space-between',
					alignItems: 'start',
					gap: '8px',
				},
			},
			h(
				'p',
				{
					style: {
						fontSize: '1rem',
						display: '-webkit-box',
						'-webkit-line-clamp': '3',
						'-webkit-box-orient': 'vertical',
						overflow: 'hidden',
					},
				},
				h('strong', {}, entry.data.title)
			),
			h(
				'p',
				{},
				h(
					'span',
					{ style: { fontSize: '0.8rem' } },
					entry.data.draft === true ? 'DRAFT' : 'PUBLISHED'
				),
				h(
					'span',
					{ style: { fontSize: '0.8rem' } },
					' • ' + entry.data.datePublish
				)
			)
		)
	);
};

const PostDraftFieldPreview = ({ value }) => {
	return h('span', {}, value === true ? 'Draft' : 'Published');
};
// USES: AIRTABLE / 2 MIN READ / PUBLISHED: 07 AUG 2021
const PostPreview = ({ entry, widgetFor, widgetsFor }) => {
	return h(
		'div',
		{},
		h('h1', {}, entry.data.title),
		h(
			'p',
			{},
			// TODO: include USES and TAGS
			h(
				'time',
				{ datetime: entry.data.datePublish },
				'Published: ' + entry.data.datePublish
			)
		),
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
		h('div', { className: 'body' }, widgetFor('body') )
	);
};

export {
	PostPreviewCard,
	PostDraftFieldPreview,
  PostPreview
};