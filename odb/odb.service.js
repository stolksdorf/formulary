const levenshtein = require('fast-levenshtein');
const _ = require('lodash');

//levenshtein.get('mikailovitch', 'Mikhaïlovitch', { useCollator: true});

let cache = {
	info: {},
	drugs : {}
};


const score = (search, val)=>{
	if(val.startsWith(search)) return 0;
	if(val.indexOf(search) !== -1) return 0.1;
	return levenshtein.get(search, val, { useCollator : true });
}

const scoreDrug = (term, drug)=>{
	return Math.min(
		score(term, drug.drugName),
		score(term, drug.brandName)
	);
}

const Service = {
	set : (db)=>cache=db,
	get : ()=>cache,

	search : (term, classification=false)=>{
		return _.map(cache.drugs, (drug)=>{
			drug.score = scoreDrug(term, drug)
			return drug;
		})
		.filter((drug)=>drug.score < 2)
		.sort((drug)=>drug.score)
	},
}

module.exports = Service;
