if (typeof Jailbreak == "undefined") {
  Jailbreak = {};
} 

Jailbreak.ContentPage = function(opts, args) {
  this.url = null;
};

/**
 * Janitor's key to the site.
 * 
 * the whole pipeline starts with:
 *  * theme name
 *  * contentmap (like a sitemap, but includes content references)
 *
 * opts: options array
 */
Jailbreak.ContentMap = function(opts, args) {
  this.initialize(args);
  this.pages = [];
};

Jailbreak.ContentMap.prototype.initialize = function(args) {
};
 