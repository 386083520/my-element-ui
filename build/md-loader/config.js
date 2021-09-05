const Config = require('markdown-it-chain');
const anchorPlugin = require('markdown-it-anchor');
const slugify = require('transliteration').slugify;
const containers = require('./containers');

const config = new Config();

config.options.html(true).end()
    .plugin('containers').use(containers).end();

const md = config.toMd();


module.exports = md;
