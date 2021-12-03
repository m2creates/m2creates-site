require('dotenv').config();

/**
 * Drafts
 * @link https://dev.to/jkc_codes/creating-drafts-in-eleventy-1103
 */

const isDevEnv = process.env.ELEVENTY_ENV !== 'production';
const todaysDate = new Date();

function showDraft(data) {
    const isDraft = 'draft' in data && data.draft !== false;
    const isFutureDate = data.page.datePublish > todaysDate;
    return isDevEnv || (!isDraft && !isFutureDate);
}

module.exports = function() {
    return {
        eleventyComputed: {
            eleventyExcludeFromCollections: function(data) {
                if(showDraft(data)) {
                    return data.eleventyExcludeFromCollections;
                }
                else {
                    return true;
                }
            },
            permalink: function(data) {
                if(showDraft(data)) {
                    return data.permalink
                }
                else {
                    return false;
                }
            }
        }
    }
}