import htm from 'https://unpkg.com/htm?module';

const html= htm.bind(h);

// Preview component for a SEO Block
const SeoPreview = createClass({
  render() {

    const entry = this.props.entry;

    const seo_title = entry.getIn(['data', 'seo.title'], null);
    const seo_desc = entry.getIn(['data', 'seo.desc'], null);
    const seo_image_card = entry.getIn(['data', 'seo.image_card'], null);
    const seo_image_card_alt = entry.getIn(['data', 'seo.image_card_alt'], null);
    const link_preview = '/posts/' + entry.getIn(['data', 'slug'], '');

    return html`
      <section class="seo">
        <h2>SEO Preview</h2>
        <h3 class="preview-label"><span>Google</span></h3>
        <div class="seo-search">
          <p class="title">${seo_title}</p>
          <p class="link">${link_preview}</p>
          <p class="desc">${seo_desc}</p>
        </div>
        <h3 class="preview-label"><span>Twitter Card</span></h3>
        <div class="seo-card">
          <div class="image">
            <img src="${seo_image_card}" alt="${seo_image_card_alt}" />
          </div>
          <div class="text">
            <p class="title">${seo_title}</p>
            <p class="desc">${seo_desc}</p>
            <p class="link">${link_preview}</p>
          </div>
        </div>
        <h3 class="preview-label"><span>Open Graph/Facebook</span></h3>
        <div class="seo-og">
          <div class="image"><img src="${seo_image_card}" alt="${seo_image_card_alt}" /></div>
          <div class="text">
            <p class="link">${link_preview}</p>
            <div class="content">
              <p class="title">${seo_title}</p>
              <p class="desc">${seo_desc}</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
});

export default SeoPreview;