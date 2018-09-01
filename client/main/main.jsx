require('../client.init.js');
require('./main.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const { Title, Favicon } = require('vitreum/headtags');

const SearchBar = require('./searchBar/searchBar.jsx');
const DrugContainer = require('./drugContainer/drugContainer.jsx');

const ODB = require('../../odb/odb.service.js');


const updateQuery = (term)=>{
	if (typeof window !== 'undefined' && history.pushState) {
		let newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
		if(term) newUrl = `${newUrl}?search=${encodeURIComponent(term)}`
		window.history.pushState({path:newUrl},'',newUrl);
	}
}

const Main = createClass({
	displayName : 'Main',
	getDefaultProps(){
		return {
			url : '',
			initialSearch : ''
		};
	},
	getInitialState(){
		return {
			search : '',
			searchedDrugs : []
		}
	},
	componentWillMount(){
		this.search(this.props.initialSearch)
	},
	search(term){
		updateQuery(term);
		if(term == ''){
			return this.setState({
				search : '',
				searchedDrugs : []
			});
		}
		this.setState({
			search : term,
			searchedDrugs : ODB.search(term)
		});
	},
	render(){
		return <div className='Main'>
			<Title>Formulary</Title>
			<nav>
				<i className='fa fa-prescription-bottle' />
				<h3>Formulary</h3>
			</nav>
			<div className='container'>
				<SearchBar value={this.state.search} onChange={this.search} />
				<DrugContainer drugs={this.state.searchedDrugs} />
			</div>

		</div>;
	}
});

module.exports = Main;