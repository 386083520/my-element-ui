const {
    stripScript,
    stripTemplate,
    genInlineComponentText
} = require('./util');
const md = require('./config');

module.exports = function(source) {
    console.log('gsdsource', source)
    const content = md.render(source);
    console.log('gsdcontent', content)

    const startTag = '<!--element-demo:';
    const startTagLen = startTag.length;
    const endTag = ':element-demo-->';
    const endTagLen = endTag.length;

    let componenetsString = '';
    let id = 0;
    let output = []; // 输出的内容
    let start = 0; // 字符串开始位置

    let commentStart = content.indexOf(startTag);
    let commentEnd = content.indexOf(endTag, commentStart + startTagLen);
    while (commentStart !== -1 && commentEnd !== -1) {
        output.push(content.slice(start, commentStart));
        const commentContent = content.slice(commentStart + startTagLen, commentEnd);
        const html = stripTemplate(commentContent);
        const script = stripScript(commentContent);
        let demoComponentContent = genInlineComponentText(html, script);
        const demoComponentName = `element-demo${id}`;
        output.push(`<template slot="source"><${demoComponentName} /></template>`);
        componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`;
        id++;
        start = commentEnd + endTagLen;
        commentStart = content.indexOf(startTag, start);
        commentEnd = content.indexOf(endTag, commentStart + startTagLen);
    }

    let pageScript = '';
    if (componenetsString) {
        pageScript = `<script>
          export default {
            name: 'component-doc',
            components: {
              ${componenetsString}
            }
          }
        </script>`;
    }else if(content.indexOf('<script>') === 0) {
    }
    console.log('gsdpageScript', pageScript)
    output.push(content.slice(start));
    console.log('gsd666', `
    <template>
      <section class="content element-doc">
        ${output.join('')}
      </section>
    </template>
    ${pageScript}
  `)
    return `
    <template>
      <section class="content element-doc">
        ${output.join('')}
      </section>
    </template>
    ${pageScript}
  `;
}
