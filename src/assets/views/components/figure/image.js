module.exports = ({ src, alt = '', caption, fit = 'cover' } = {}) => `
  <figure class="media mb-8 max-w-screen">
    <img src="${ src }" alt="${ alt }" class="object-${ fit } mb-3 aspect-w-4 aspect-h-3">
    ${ 
      caption &&
			  `<figcaption>${ caption }</figcaption>
    `}
  </figure>
`;

/* 
Nunjucks version
<figure class="mb-8 max-w-screen">
  <img src="{{ src }}" alt="{{ alt }}" class="object-{{ fit }} mb-3 aspect-w-4 aspect-h-3"/>
  {%- if caption or credit %}
  <figcaption>
    {%- if caption %}{{ caption }}{% endif -%}
    {%- if caption and credit %}<br>{% endif -%}
    {%- if credit %}<span>Image credit: {{ credit }}</span>{% endif -%}
  </figcaption>
  {% endif -%}
</figure>
*/