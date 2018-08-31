const request   = require('superagent');
const _         = require('lodash');
const shortHash = require('short-hash');
const xmlParse  = require('xml2js').parseString;

/** Utils **/
const removeParen = (str)=>str.replace(/ *\([^)]*\) */g, "");
const genId = (a,b)=>shortHash(`${a}|${b}`);
const processGroupName = (name)=>removeParen(name).split(' ').map(_.capitalize).join(' ');

const ODB = {

	fetch : async ()=>{
		return request.get('http://www.health.gov.on.ca/en/pro/programs/drugs/data_extract.xml')
			.then((res)=>res.text)
			.then((xml)=>{
				return new Promise((resolve, reject)=>{
					xmlParse(xml, (err, result)=>err?reject(err):resolve(result))
				});
			})
			.then((json)=>ODB.parse(json));
	},

	parse : (json)=>{
		let data = {};
		const parseManufacturer = (json)=>{
			return json.extract.manufacturerList[0].manufacturer.reduce((acc, manu)=>{
				const id = manu.$.id;
				acc[id] ={
					id,
					name : manu._.replace(` - "DO NOT USE"`, ''),
					valid : manu._.indexOf(` - "DO NOT USE"`) == -1
				}
				return acc;
			}, {});
		};

		const parseInfo = (json)=>{
			return {
				edition : json.extract.formulary[0].$.edition,
				lastUpdated : json.extract.formulary[0].$.formularyDate,
			}
		};

		const parseDrug = (drugs, item, groups)=>{
			const drugName = groups.pop();
			item.drug.map((drug)=>{
				const id = genId(drug.name[0], drugName);
				if(!drugs[id]){
					drugs[id] = {
						id             : id,
						brandName      : drug.name[0],
						drugName       : drugName,
						manufacturerId : drug.manufacturerId[0],
						classification : groups,
						dosages        : []
					};
				}

				drugs[id].dosages.push({
					npn           : drug.$.id,
					strength      : item.strength && item.strength[0],
					form          : item.dosageForm && item.dosageForm[0],
					isCovered     : drug.$.notABenefit != 'Y',
					coveredAmount : (drug.amountMOHLTCPays ? Number(drug.amountMOHLTCPays[0]) : 0),
					price         : (drug.individualPrice ? Number(drug.individualPrice[0]) : 0),
					limitedUse    : drug.$.sec12 == 'Y',
					chronic       : drug.$.chronicUseMed == 'Y',
					listingData   : drug.listingDate[0],
					lccNote       : false
				})
			});
			return drugs;
		};

		const parseDrugs = (json)=>{
			let drugs = {};
			const loop = (obj, groups=[])=>{
				if(obj.name) groups = groups.concat(processGroupName(obj.name[0]));
				//TODO: Add check of lccNote, "reasonForUseId"
				['pcg2','pcg6','pcg9','pcgGroup','genericName'].map((key)=>{
					if(obj[key]) obj[key].map((i)=>loop(i, groups));
				});
				if(obj.drug) drugs = parseDrug(drugs, obj, groups.slice(0));
			};
			loop(json.extract.formulary[0]);
			return drugs;
		};

		data.info = parseInfo(json);
		data.drugs = parseDrugs(json);
		//data.manufacturers = parseManufacturer(json);
		return data;
	}
}

module.exports = ODB;