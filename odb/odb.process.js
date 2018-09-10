const request   = require('superagent');
const _         = require('lodash');
const shortHash = require('short-hash');

const fs = require('fs');

const Parse = require('./odb.parse.js');

//fetch
//parse
//db dump locale
// init service
//

const BACKUP_NAME = 'backup.data.json';

const ODB = require('./odb.service.js');


const Process = {
	fetch : async ()=>{
		return request.get('http://www.health.gov.on.ca/en/pro/programs/drugs/data_extract.xml')
			.then((res)=>res.text)
	},
	saveBackup : async (json)=>{
		return Process.fetch()
			.then(Parse)
			.then((data)=>{
				fs.writeFileSync(`./odb/${BACKUP_NAME}`, JSON.stringify(data, null, '\t'));
			})
	},
	loadBackup(){
		ODB.set(require(`./${BACKUP_NAME}`));
	},
	init : async (fetch=true)=>{
		Process.loadBackup();
		if(fetch){
			return Process
				.fetch()
				.then(Parse)
				.then(ODB.set);
		}
	}

};


module.exports = Process;
