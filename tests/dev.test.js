const ODB = require('./odb.js');
const fs = require('fs');
const xmlParse = require('xml2js').parseString;

// ODB.fetch()
// 	.then((xml)=>{
// 		//console.log(xml);
// 		fs.writeFileSync('temp/odb.xml', xml);
// 		xmlParse(xml, (err, result)=>{
// 			console.log(err);
// 			fs.writeFileSync('temp/odb.json', JSON.stringify(result, null, '\t'));
// 		})
// 	})


const json = require('./temp/odb.json');

const parsed = ODB.parse(json);

console.log(parsed.drugs.length);

//console.log(parsed.drugs[0]);
//console.log(parsed.drugs[1]);

fs.writeFileSync('./temp/odb.parsed.json', JSON.stringify(parsed, null, '\t'), 'utf8');