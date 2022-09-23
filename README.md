# m2creates gets JAMstacked

My personal website powered by a NEAT stack:

- [**N**etlify CMS](https://netlifycms.org/docs) with:
  - [manual initialization](https://www.netlifycms.org/docs/beta-features/#manual-initialization)
  - custom previews
- [**E**leventy](https://11ty.dev/docs) (aka 11ty) with:
  - plugins TBD
- [**A**lpineJS]([https://](https://alpinejs.dev/start-here)) for sprinkles of JS-powered interactivity
- [**T**ailwindCSS](https://tailwindcss.com/docs) for styling with:
  - [postcss](https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor) for preprocessing
  - [@tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography) to "autostyle" markdown
  - [@tailwindcss-forms](https://github.com/tailwindlabs/tailwindcss-forms) to beautify form elements

And an integrated Design System:

- [Storybook (HTML)](https://storybook.js.org/docs/html/get-started/introduction) on Webpack 4 with:
  - [simple-nunjucks-loader](https://www.npmjs.com/package/simple-nunjucks-loader) (v2.*)

## Structure Overview

```text
example.com                     # → Root of your project
|
├── .storybook/                 # → Config: Storybook (https://storybook.js.org/docs/html/get-started/introduction)
│   ├── main.js                 # → Register addons and configure additional webpack loaders
│   ├── manager.js              # → Configure Storybook>Global UI
│   ├── preview.js              # → Configure the theme and layout for Storybook>Docs preview
│   └── theme.js                # → Style the Storybook theme (https://storybook.js.org/docs/html/configure/theming)
|
├── src/                        # → Source directory
│   │
│   ├── admin/                  # → Netlify CMS
│   │   ├── collections/
│   │   ├── partials/
│   │   │   └── fields/
│   │   ├── previews/
│   │   │   └── index.js        # → Register preview templates and styles
│   │   ├── config.js           # → Manual initialization (https://www.netlifycms.org/docs/beta-features/#manual-initialization)
│   │   └── index.html
│   │
│   ├── assets/                 # → Site assets
│   │   ├── fonts/
│   │   ├── images/
│   │   ├── scripts/
│   │   ├── styles/
│   │   │   └── tailwind.css
│   │   │
│   │   └── views/              # → Templatize with nunjucks!
│   │       ├── components/     # → Each component has a folder with a base njk component, njk macro, and story.
│   │       |   └── component/
│   │       |       ├── component.njk
│   │       |       ├── component.macro.njk
│   │       |       └── component.stories.js
│   │       |
│   │       ├── layouts/        # → Combine partials and components (e.g. pages)
│   │       └── partials/       # → Combine components (e.g. navigation)
│   │
│   ├── config/                 # → Eleventy configuration
│   │   ├── collections.js      # → Add and configure collections (https://www.11ty.dev/docs/collections/)
│   │   ├── filters.js          # → Add and configure filters (https://www.11ty.dev/docs/filters/)
│   │   ├── passthroughs.js     # → Add and configure passthroughs (https://www.11ty.dev/docs/copy/)
│   │   ├── plugins.js          # → Add and configure plugins (https://www.11ty.dev/docs/plugins/)
│   │   ├── shortcodes.js       # → Add and configure shortcodes (https://www.11ty.dev/docs/shortcodes/)
│   │   └── watchtargets.js     # → Add and configure watch targets (https://www.11ty.dev/docs/watch-serve/)
│   │
│   ├── data                    # → Customize site data (https://www.11ty.dev/docs/data/)
│   │   ├── navigation.json     # → Site navigation configuration
│   │   └── site.json           # → Site metadata configuration
│   │
│   ├── pages                   # → Add "pages" collection items here
│   │   ├── index.md            # → Default index page
│   │   └── pages.json          # → Shared pages attributes
│   │
│   └── posts                   # → Add "posts" collection items here
│       ├── index.md            # → Default index page
│       ├── posts.11tydata.js   # → Calculate if posts are drafts and shouldn't be published
│       └── posts.json          # → Shared posts attributes
│
├── .eleventy.js                # → Configure: Eleventy
├── .gitignore                  # → Ignores all the node stuff that doesn't need to take up space on GitHub
├── LICENSE                     # → Project license (for example: MIT)
├── netlify.toml                # → Netlify deployment and plugin configuration (optional)
├── package.json                # → Your project's metadata, dependencies, etc.
├── postcss.config.js           # → Configure: PostCSS
├── README.md                   # → Your project's readme (this file you're reading!)
└── tailwind.config.js          # → Configure: TailwindCSS
```

## Getting Started

### Setup

Clone this repo, then via command line go to the project's directory to install the dependencies.

```bash
cd directory/to/the/project
npm install
```

### Watching with Live Reload

After installing, you can run the BrowserSync server and view the site as you edit it.

```bash
npm run watch:dev
```

You can also watch only CSS for changes.

```bash
npm run watch:css
```

***

After installing, you can to run the storybook server and view the components you'll create.

```bash
npm run watch:sb
```

### Building

Build a **production** version of the site (1) with purged and minified CSS and (2) no drafts.

```bash
npm run build:prod
```

***

Build a **staging** version of the site (1) with purged and minified CSS and (2) include all drafts. I use this for [Netlify Deploy Previews](https://docs.netlify.com/site-deploys/overview/#deploy-preview-controls) so I can proof my drafts but with lean styles.

```bash
npm run build:staging
```

***

Build a **development** version of the site (1) without purging CSS and (2) include all drafts. The output will be the same as when you use `npm run watch:dev` but without live reloading.

```bash
npm run build:dev
```

***

Build a **production** version of Storybook.

```bash
npm run build:sb
```

***

## Filters

### Content

| Filter       | Description                              | Example/Usage                  |
|--------------|------------------------------------------|--------------------------------|
| content      | markdown body of a collection item       | `{{ content }}`                |
| raw          | allows processing njk within markdown    | `{{ content \| raw }}`          |
| readingTime  | calculates time to read, i.e. `content`  | `{{ content \| readingTime }}`  |

### Dates

| Filter       | Description                              | Example/Usage                             |
|--------------|------------------------------------------|-------------------------------------------|
| date         | default unformatted date                 | `{{ date }}`                              |
| iso          | display date in ISO format               | `{{ date \| iso }}`                        |
| readableDate | display date in 'dd MMMM yyyy' format    | `{{ date \| readableDate }}`               |
| readableDate custom  | or set a custom format           | `{{ date \| readableDate('yyyy-LL-dd') }}` |
| toIso        | Used in meta for published time          | `{{ date \| toIso }}`                  |
| toRFC2822    | For RSS Feed                             | `{{ date \| toRFC2822 }}`                  |

***

## Macros & Shortcodes

### Image

[Shortcode](https://github.com/m2creates/m2creates-site/tree/main/src/assets/views/components/figure/image.js): Add an image to a page or post with `alt` text, caption, and image credit.

| Parameter | Value                                                                            |
|-----------|----------------------------------------------------------------------------------|
| url       | /path/to/the/image (required)                                                    |
| alt       | alt text (required, unless it is decoration only)                                |
| credit*    | image credit (optional)                                                          |
| caption   | describe the image in a caption (optional)                                       |
| fit       | default: `cover`; additional values are `contain`, `fill`, `scale-down`, `none`) |

Example Usage:

```njk
<!-- Example input -->
{% Image {
  src: 'https://images.unsplash.com/photo-1500754088824-ce0582cfe45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80',
  alt: 'Latern Fest',
  caption: 'Lift off at Lantern Fest 2015',
  fit: 'contain'
} %}
```

```html
<!-- Example output -->
<figure class="mb-8 media max-w-screen">
  <img src="https://images.unsplash.com/photo-1500754088824-ce0582cfe45f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1776&amp;q=80" alt="Latern Fest" class="object-contain mb-3 aspect-w-4 aspect-h-3">
  <figcaption>Lift off at Lantern Fest 2015</figcaption>
</figure>
```

### Link

```njk
<!-- Example input -->
{% ExternalLink {
  url: 'https://google.com',
  text: 'External Link via shortcode'
} %}
```

```html
<!-- Example output -->
<a class="external-link" href="https://google.com" title="Open external link in new tab" target="_blank" rel="noopener">External Link via shortcode</a>
```

### Videos

Enable additional CSS and Scripts under `blocks` in a post's YAML. Options available: `youtube`, `twitch`.

```yml
# List the webcomponent blocks to load on this page
blocks:
  - youtube
  - twitch
```

#### YouTube

```njk
<!-- Example input: YouTube -->
{% YouTube {
  id: 'UO2gTHLwzSg',
  title: 'BuiltOnAir [All Things Airtable] S03:E08 - Melanie Magdalena, Digital Consultant'
} %}
```

```html
<!-- Example output: YouTube -->
<youtube-embed 
  videoid="UO2gTHLwzSg"
  videotitle="BuiltOnAir [All Things Airtable] S03:E08 - Melanie Magdalena, Digital Consultant"
  style="background-image: url('https://i.ytimg.com/vi/UO2gTHLwzSg/hqdefault.jpg');">
    <a href="https://youtube-nocookie.com/watch?v=UO2gTHLwzSg" class="lty-playbtn">
      <span class="visually-hidden">Play: BuiltOnAir [All Things Airtable] S03:E08 - Melanie Magdalena, Digital Consultant</span>
    </a>
</youtube-embed>
<a
  href="https://youtube-nocookie.com/watch?v=UO2gTHLwzSg"
  title="opens in new tab, watch 'BuiltOnAir [All Things Airtable] S03:E08 - Melanie Magdalena, Digital Consultant' on youtube-nocookie.com"
  target="_blank">
  Watch on YouTube
</a>
```

#### Twitch

```njk
<!-- Example input: Twitch -->
{% Twitch {
  id: '0WkbOP5xexWgGw',
  title: 'Project: Shatter [Ship Saturday]',
  type: 'collection',
  thumbnail: '[optional, has fallback]'
} %}
```

```html
<!-- Example output: Twitch -->
<twitch-embed
  videoid="0WkbOP5xexWgGw"
  videotitle="Project: Shatter [Ship Saturday]"
  videotype="collection"
  class="twitch-playbtn mb-2" style="background-image:url('https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/a16daa79e340800357c7_eli_archgirl_32268743152_1085421880/thumb/custom-45341f1f-72f0-4c76-9ed4-1b2628cf7f31-320x180.jpeg')">
      <a href="https://www.twitch.tv/collections/0WkbOP5xexWgGw">
          <span class="visually-hidden">Play Project: Shatter [Ship Saturday]</span>
      </a>
</twitch-embed>
<a href="https://www.twitch.tv/collections/0WkbOP5xexWgGw"
  title="opens in new tab, watch collection 'Project: Shatter [Ship Saturday]' on twitch.tv"
  target="_blank">
  Watch collection on Twitch
</a>
```

### Other Embedded Media

#### Transistor 

```njk
<!-- Example input: Transistor -->
{% Transistor {
  id: 'f44edcde',
  title: 'BuiltOnAir [All Things Airtable] S03:E08 - Melanie Magdalena, Digital Consultant'
} %}
```

```html
<!-- Example output: Transistor -->
<iframe
    width="100%"
    height="180"
    frameborder="no"
    scrolling="no"
    seamless
    class="mb-2"
    src="https://share.transistor.fm/e/f44edcde"
></iframe>
<a
  href="https://share.transistor.fm/s/f44edcde"
  title="opens in new tab, listen to 'BuiltOnAir [All Things Airtable] S03:E08 - Melanie Magdalena, Digital Consultant' on transistor.fm"
  target="_blank">
  Listen on Transistor
</a>
```

## Reading List

The following resources assisted in the creation of my site!

### General

- About the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) specification

### Componentizing with Nunjucks

- [Nunjucks templating features](https://mozilla.github.io/nunjucks/templating.html) (general documentation)
- ["Flexible components in Eleventy with Nunjucks macros" by Iain Bean](https://iainbean.com/posts/2020/flexible-components-in-eleventy-with-nunjucks-macros/) is a comprehensive guide to macros with plenty of examples.
- ["Using parameters in your eleventy includes with nunjucks macros" by Thomas Michael Semmler](https://helloyes.dev/blog/2021/using-parameters-in-your-eleventy-includes-with-nunjucks-macros/) showcases a parameter approach for macros. I haven't figured out how to use this and keep args in stories functioning.

### Working with Storybook

- On using nunjucks as a valid component format... [This buried issue and reply](https://github.com/storybookjs/storybook/issues/5506#issuecomment-680955689) was open on my phone for about six months until I finally got around to setting up Storybook on an 11ty project. Radum, thank you for sharing your knowledge.
  - **IMPORTANT**: You have to use version `^2.*` for the loader, not `^3.*` because Storybook uses Webpack 4. I only wasted an hour of my life with errors cuz I failed to read the nice notice on the loader's README. :face_palm:
- Nunjucks-ifying: [eleventy-starter-storybook](https://github.com/MKlblangenois/eleventy-starter-storybook) is a great proof-of-concept for how to use njk components in stories. Plus it has [a cool macro output](https://github.com/MKlblangenois/eleventy-starter-storybook/blob/master/src/_includes/components/atoms/buttons/button.njk) that is [only used in the story](https://github.com/MKlblangenois/eleventy-starter-storybook/blob/master/src/stories/Button.stories.js#L7)!
- [tailwind-ui-alpinejs-storybook](https://github.com/ylsideas/tailwind-ui-alpinejs-storybook) has a [great visual for **how** to add Tailwind and Alpine](https://github.com/ylsideas/tailwind-ui-alpinejs-storybook/blob/master/.storybook/preview.js) to Storybook and have the thing actually work.

### Edit and Preview everything with Netlify CMS

Manual initialization:

- ["Consolidating Netlify CMS" by Zach Schnackel](https://zslabs.com/articles/consolidating-netlify-cms) is a quick introduction to Manual Initialization for Netlify CMS, instead of using YAML.
- ["DRY Netlify CMS config with Manual Initialization" by Wojciech Kałużny](https://mrkaluzny.com/blog/dry-netlify-cms-config-with-manual-initialization/) has great examples for how to create and use partials for collections.
- ["Splitting huge NetlifyCMS config.yml file to multiple JS files" by Ilias Trichopoulos](https://www.iliascreates.com/blog/post/splitting-netlifycms-config-to-multiple-js-files/) has more complex examples of partials. I haven't gone this deep yet... but it's an option.

Customizing the preview pane:

- [Official documentation](https://www.netlifycms.org/docs/customization/) by Netlify CMS
- Inspiration, plus **how** to "query" data from the widgets so it shows up the preview: [eleventy-netlify-boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate/tree/master/admin/preview-templates) and [spacebook](https://github.com/broeker/spacebook/tree/main/admin/preview-templates)

Make your own widgets and editor components:

- [Offical documentation](https://www.netlifycms.org/docs/custom-widgets/) by Netlify CMS
- ["Master Netlify CMS: custom editor components" by Monica Norris](https://www.neotericdesign.com/articles/editor-components-with-netlify-cms/) explains how to make a custom Editor Component for video (Hugo-focused).
- ["Creating Custom Netlify Editor Components" by Lukas Murdock](https://lukasmurdock.com/custom-netlify-editor-component/) is an example of how to make a blockquote Editor Component.
- ["Styling custom Netlify CMS widgets is confusing" by Dave Meyer](https://todayilearned.io/til/styling-netlify-cms-widgets-is-confusing) expands on the official documentation to explain how to load stylesheets explictly into widgets and preview components.
