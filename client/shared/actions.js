const Store = require('./store.js');
const Actions = {
	init : (initState)=>{
		Store.setters.init(initState);
	},
	inc : (val = 1)=>{
		Actions.setVal(Store.getVal() + val);
	},
	setVal : (newVal)=>{
		Store.setters.setVal(newVal);
	},
};

module.exports = Actions;