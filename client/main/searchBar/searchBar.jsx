require('./searchBar.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');
const _ = require('lodash');


const drugNames = [
	'Claritin',
	'Phenergan',
	'Vermox',
	'Fungizone',
	'Cancidas',
	'Diflucan',
	'Teva-Fluconazole',
	'Sporanox',
	'Nizoral',
	'Mycostatin',
	'Ratio-Nystatin',
];

const DEBOUNCE = 250;


const SearchBar = createClass({
	displayName : 'SearchBar',
	getDefaultProps(){
		return {
			value : '',
			onChange : ()=>{}
		};
	},
	getInitialState(){
		return {
			search : this.props.value,
			pending : false
		}
	},
	UNSAFE_componentWillReceiveProps(props){
		if(!this.state.search){
			console.log('running');
			this.setState({search : props.value})
		}
	},
	search(val){
		clearInterval(this.timeout);
		this.setState({
			search : val,
			pending : true
		});
		this.timeout = setTimeout(()=>{
			this.props.onChange(this.state.search);
			this.setState({pending : false})
		}, DEBOUNCE)
	},
	render(){
		return <div className='SearchBar'>

			<i className={cx('fa', {
				'fa-search' : !this.state.pending,
				'fa-clock' : this.state.pending,

			})} />

			<input type='text'
				value={this.state.search}
				onChange={(evt)=>this.search(evt.target.value)}
				placeholder='search ya drug name'
			/>
		</div>;
	}
});

module.exports = SearchBar;