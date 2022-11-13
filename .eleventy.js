// 11ty Config
const collections = require("./src/config/collections");
const filters = require("./src/config/filters");
const passthroughs = require("./src/config/passthroughs");
const plugins = require("./src/config/plugins");
//const shortcodes = require('./src/config/shortcodes');

const inputDir = "src/assets/views";
const componentsDir = `${inputDir}/components`;
const Button = require(`./${componentsDir}/button/button.js`);
const ExternalLink = require(`./${componentsDir}/link/link-external.js`);
const Image = require(`./${componentsDir}/figure/image.js`);
const YouTube = require(`./${componentsDir}/embed/youtube.js`);
const Twitch = require(`./${componentsDir}/embed/twitch.js`);
const Transistor = require(`./${componentsDir}/embed/transistor.js`);
const Codepen = require(`./${componentsDir}/embed/codepen.js`);
const UpLabs = require(`./${componentsDir}/callout/uplabs.js`);

const watchtargets = require("./src/config/watchtargets");

const fs = require("fs");

/**
 * Eleventy configuration
 * @link https://www.11ty.dev/docs/config/
 */
module.exports = function (eleventyConfig) {
  /**
   * Start pretty console output
   */
  console.group("\n", "🛠  Building —");

  /**
   * Echo the registered collections in the terminal
   * Create collections from /src/config/collections.js
   */
  console.group("📚  Collections (/src/config/collections.js)");
  Object.keys(collections).forEach((collectionName) => {
    console.log(" · " + collectionName);
    eleventyConfig.addCollection(collectionName, collections[collectionName]);
  });
  console.groupEnd();

  /**
   * Echo the registered collections in the terminal
   * Add Eleventy plugins from /src/config/plugins.js
   */
  console.group("🔌  Plugins (/src/config/plugins.js)");
  Object.keys(plugins).forEach((pluginName) => {
    console.log(" · " + pluginName);
    plugins[pluginName](eleventyConfig);
  });
  console.groupEnd();

  /**
   * Add shortcodes from /src/config/shortcodes.js
   */
  console.group("🧩  Shortcodes (/src/config/shortcodes.js)");
  // Object.keys(shortcodes).forEach((shortcodeName) => {eleventyConfig.addShortcode("Twitch", Twitch);eleventyConfig.addShortcode("Twitch", Twitch);
  //   console.log(' · ' + shortcodeName);
  //   eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName]);
  // });
  eleventyConfig.addShortcode("Image", Image);
  eleventyConfig.addShortcode("Button", Button);
  eleventyConfig.addShortcode("ExternalLink", ExternalLink);
  eleventyConfig.addShortcode("YouTube", YouTube);
  eleventyConfig.addShortcode("Twitch", Twitch);
  eleventyConfig.addShortcode("Transistor", Transistor);
  eleventyConfig.addShortcode('Codepen', Codepen);
  eleventyConfig.addShortcode('UpLabs', UpLabs);
  console.groupEnd();

  /**
   * Add filters from /src/config/filters.js
   */
  console.group("🔍  Filters (/src/config/filters.js)");
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });
  console.groupEnd();

  /**
   * Add passthrough copy from /src/config/passthroughs.js
   */
  console.group("📑  Passthroughs (/src/config/passthroughs.js)");
  Object.keys(passthroughs).forEach((passthroughName) => {
    console.log(" · " + passthroughName);
    eleventyConfig.addPassthroughCopy(passthroughs[passthroughName]());
  });
  console.groupEnd();

  /**
   * Add watch targets from /src/config/watchtargets.js
   */
  console.group("👀  Watchtargets (/src/config/watchtargets.js)");
  Object.keys(watchtargets).forEach((watchtargetName) => {
    eleventyConfig.addWatchTarget(watchtargets[watchtargetName]());
  });
  console.groupEnd();

  /**
   * End pretty console output
   */
  console.log("\n");
  console.groupEnd();

  /**
   * Configure browsersync
   * @link https://www.11ty.dev/docs/config/#override-browsersync-server-options
   */
  eleventyConfig.setBrowserSyncConfig({
    open: false,
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("dist/404.html");
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  /**
   * Enable quiet mode
   */
  eleventyConfig.setQuietMode(true);

  /**
   * Return the config to Eleventy
   */
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "data",
      includes: "assets/views",
      layouts: "assets/views/layouts",
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "html", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
