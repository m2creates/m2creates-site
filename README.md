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
