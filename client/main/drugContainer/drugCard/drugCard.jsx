require('./drugCard.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');


const DrugCard = createClass({
	displayName : 'DrugCard',
	getDefaultProps(){
		return {
			drugName : '',
			brandName : '',
			dosages : []
		};
	},
	render(){
		return <div className='DrugCard'>
			<h2>{this.props.brandName}</h2>
			<h4>{this.props.drugName}</h4>


			<pre><code>
				{JSON.stringify(this.props.dosages, null, '  ')}
			</code></pre>


		</div>;
	}
});

module.exports = DrugCard;