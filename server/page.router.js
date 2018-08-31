const router = require('express').Router();
const mainRenderer = require('../build/main/render.js');
const Service = require('../odb/odb.service.js');


router.get('/', (req, res)=>{
	return res.send(mainRenderer({
		url : req.url,
		data : Service.getDatabase()
	}));
});

module.exports = router;