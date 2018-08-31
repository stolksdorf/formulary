//fetch
//parse
//db dump locale
// init service
//
const Service = require('./odb.service.js');
const fs = require('fs');


const Process = {
	fetch : ()=>{
		//ping url
		//return raw xml
	},

	parse : (xml)=>{
		// do yo thang
	},

	saveBackup : (json)=>{
		// fetch
		//parse
		// save into 'backup.data.json'
	},

	init : async ()=>{
		//load existing backup into service
		//start a fetch
		// parse
		// load result into service when done
	}

};


module.exports = Process;
