const fs = require('fs');
const xml = fs.readFileSync('./temp/odb.xml', 'utf8');

const names = xml
	.match(/<name>[\s\S]*?<\/name>/g)
	.filter((val, idx, arr)=>arr.indexOf(val) === idx)
	.map((rawName)=>rawName.replace('<name>', '').replace('</name>', ''));

fs.writeFileSync('./temp/allNames.txt', names.join('\n'));