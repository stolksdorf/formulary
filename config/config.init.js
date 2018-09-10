const exists = require('fs').existsSync;
const env = process.env.NODE_ENV;

const config = require('pico-conf')
	.argv().env()
	.defaults(require('./default.js'));

if(exists(`./config/${env}.js`)) config.add(require(`./${env}.js`));
module.exports = config;