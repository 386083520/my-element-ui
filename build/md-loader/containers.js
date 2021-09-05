const mdContainer = require('markdown-it-container');
module.exports = md => {
    md.use(mdContainer, 'tip');
}
