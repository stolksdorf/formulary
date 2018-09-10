//FIXME: Actally, just bump this into a client.init.js and skip the pico-flux part



const ODB = require('../../odb/odb.service.js');

const Actions = {
	init : (initState)=>{
		ODB.set(initState);
	},
	inc : (val = 1)=>{
		Actions.setVal(Store.getVal() + val);
	},
	setVal : (newVal)=>{
		Store.setters.setVal(newVal);
	},
};

module.exports = Actions;