{
	brandName : "Apo-Cetirizine"
	drugName : "Cetirizine hydrochloride"
	group : ["Antihistamines"],
	manufacorId: '',
	dosages : [
		{
			strength : '10mg',
			form : 'tab',
			coverage : {
				//"id": "02223554",
				"notABenefit": "Y", (not covered, doens;t exist if not)
				"sec3b": "Y", (??)
				"sec3": "Y" (??)
				"sec12": "Y" (Limited Use)
				//amountMOHLTCPays -> how much is covered
			},
			lccNote : {
				text : ''
				"reasonForUseId": "528"
				period : '', ("_": "LU Authorization Period: Indefinite.",)
			}
		},
		{
			strength  : '20mg',
			form : 'tab'
			coverage : {
				"id": "01900978",
				"notABenefit": "Y",
				"sec3b": "Y",
				"sec3": "Y"
			}
		}
	]
},

/** ----------------- **/

{
	brandName : "Reactine"
	drugName : "Cetirizine hydrochloride"
	group : ["Antihistamines"],
	manufacorId: '',
	dosages : [
		{
			strength : '10mg',
			form : 'tab',
			coverage : {
				"id": "02223554",
				"notABenefit": "Y",
				"sec3b": "Y",
				"sec3": "Y"
			}
		},
		{
			strength  : '20mg',
			form : 'tab'
			coverage : {
				"id": "01900978",
				"notABenefit": "Y",
				"sec3b": "Y",
				"sec3": "Y"
			}
		}
	]
},