const fs = require('fs');

const indexPath = './public/index.html';
const indexFile = fs.readFileSync(indexPath, 'utf8');

const start = indexFile.indexOf('<title>');
const end = indexFile.indexOf('</title>');
const replace = 'ReactUnity Previewer v' + process.env.npm_package_version;

fs.writeFileSync(indexPath, indexFile.substring(0, start + 7) + replace + indexFile.substring(end));
