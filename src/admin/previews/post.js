// import SeoPreview from '@/previews/seo'
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

// Preview component for a Post
const PostPreview = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <article class="prose prose-md">
          <h1>${entry.getIn(['data', 'title'], null)}</h1>
          <div>${this.props.widgetFor('body')}</div>
        </article>
      </main>
    `;
  }
});

export default PostPreview;