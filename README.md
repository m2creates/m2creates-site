# m2creates-site

My personal website built with 11ty, TailwindCSS, Alpine.js, and Netlify goodies.

## Structure Overview

```text
example.com                     # → Root of your project
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
│   │   └── views/
│   │       ├── components/
│   │       ├── layouts/
│   │       └── partials/
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
