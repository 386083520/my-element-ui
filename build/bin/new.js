const uppercamelcase = require('uppercamelcase');
const componentname = process.argv[2];
const ComponentName = uppercamelcase(componentname);
console.log('gsd', componentname, ComponentName)

const path = require('path');
const fileSave = require('file-save');

const componentsFile = require('../../components.json');
if (componentsFile[componentname]) {
    console.error(`${componentname} 已存在.`);
    process.exit(1);
}
componentsFile[componentname] = `./packages/${componentname}/index.js`;
fileSave(path.join(__dirname, '../../components.json'))
    .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
    .end('\n');

