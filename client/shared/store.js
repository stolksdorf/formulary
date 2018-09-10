const flux = require('pico-flux');
let State = {
	value : 0
};
const Store = flux({
	init(state){
		State = Object.assign(State, state);
	},
	setVal(val){
		State.value = val;
	}
});

Store.getValue=()=>State.value;

module.exports = Store;