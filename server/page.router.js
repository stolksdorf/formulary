const router = require('express').Router();
const mainRenderer = require('../build/main/render.js');
const ODB = require('../odb/odb.service.js');


router.get('/', (req, res)=>{
	return res.send(mainRenderer({
		url : req.url,
		odbData : ODB.get(),
		initialSearch : req.query.search
	}));
});

module.exports = router;