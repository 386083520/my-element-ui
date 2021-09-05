const md = require('./config');

module.exports = function(source) {
    console.log('gsdsource', source)
    const content = md.render(source);
    console.log('gsdcontent', content)

    let componenetsString = '';
    let output = []; // 输出的内容
    let start = 0; // 字符串开始位置

    let pageScript = '';
    if (componenetsString) {
    }else if(content.indexOf('<script>') === 0) {
    }
    console.log('gsdpageScript', pageScript)
    output.push(content.slice(start));
    return `
    <template>
      <section class="content element-doc">
        ${output.join('')}
      </section>
    </template>
    ${pageScript}
  `;
}
