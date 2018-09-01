const Process = require('../odb/odb.process.js');
const ODB = require('../odb/odb.service.js');

Process.loadBackup();


const result = ODB.search('Clarith');

console.log(result);
