require('./drugContainer.less');
const React       = require('react');
const createClass = require('create-react-class');

const DrugCard = require('./drugCard/drugCard.jsx');

const DrugContainer = createClass({
	displayName : 'DrugContainer',
	getDefaultProps(){
		return {
			drugs : []
		};
	},
	getInitialState(){
		return {
			numVisibile : 25
		}
	},
	showMore(){
		this.setState({ numVisibile : this.state.numVisibile + 10});
	},
	render(){
		return <div className='DrugContainer'>
			<div className='drugs'>
				{this.props.drugs.slice(0, this.state.numVisibile)
					.map((drug, idx)=><DrugCard key={idx} {...drug} />)}
			</div>

			{this.state.numVisibile < this.props.drugs.length &&
				<button onClick={this.showMore}>show more</button>
			}
		</div>;
	}
});

module.exports = DrugContainer;