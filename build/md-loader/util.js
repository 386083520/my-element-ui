const compiler = require('vue-template-compiler');
const { compileTemplate } = require('@vue/component-compiler-utils');

function stripScript(content) {
    const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}
function stripTemplate(content) {
    content = content.trim();
    if (!content) {
        return content;
    }
    return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

function genInlineComponentText(template, script) {
    const finalOptions = {
        source: `<div>${template}</div>`,
        filename: 'inline-component', // TODO：这里有待调整
        compiler
    };
    const compiled = compileTemplate(finalOptions);
    let demoComponentContent = `
      ${compiled.code}
    `;
    script = script.trim();
    if (script) {
    } else {
        script = 'const democomponentExport = {}';
    }
    demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
    })()`;
    console.log('gsddemoComponentContent', demoComponentContent)
    return demoComponentContent;
}

module.exports = {
    stripScript,
    stripTemplate,
    genInlineComponentText
};

