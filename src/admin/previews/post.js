// import SeoPreview from '@/previews/seo'

import htm from 'https://unpkg.com/htm?module';

const html= htm.bind(h);

// Preview component for a Post
const Post = createClass({
  render() {

    const entry = this.props.entry;

    const title = entry.getIn(['data', 'title'], null);
    // TODO: show the date and tags
    // const date = entry.getIn(['data', 'date'], null);
    // const tags = entry.getIn(['data', 'tags'], null);

    const image_card = entry.getIn(['data', 'image_card'], null);
    const image_card_alt = entry.getIn(['data', 'image_card_alt'], null);
    const image_card_credit = entry.getIn(['data', 'image_card_credit'], null);

    const body = entry.getIn(['data', 'body'], null);

    // const seo_title = entry.getIn(['data', 'seo.title'], null);
    // const seo_desc = entry.getIn(['data', 'seo.desc'], null);
    // const seo_image_card = entry.getIn(['data', 'seo.image_card'], null);
    // const seo_image_card_alt = entry.getIn(['data', 'seo.image_card_alt'], null);
    // const link_preview = '/posts/' + entry.getIn(['data', 'slug'], '');

    return html`
      <article>
        <h1>${title}</h1>
        <figure>
          <div><img src="${image_card}" alt="${image_card_alt}" /></div>
          <figcaption>${image_card_credit}</figcaption>
        </figure>
        <div dangerouslySetInnerHTML=${{__html: body}}></div>
      </article>
    `;

    //return SeoPreview;

  }
});

export default Post;