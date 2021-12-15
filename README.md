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
