require('./main.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const {} Title, Favicon } = require('vitreum/headtags');

const Main = createClass({
	displayName : 'Main',
	getDefaultProps(){
		return {
			url : '',

		};
	},
	render(){
		return <div className='Main'>
			<Title>Formulary</Title>

			Main Component Ready.
		</div>;
	}
});

module.exports = Main;