const ALLTIME_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const RECENT_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

let PageHeader = React.createClass({
	render: function () {
		return (
			<h1 className="page-title"><i className="fa fa-free-code-camp"/> FCC Camper Leader Board</h1>
		)
	}
});

let TableHeader = React.createClass({
	handleRecent: function (e) {
		e.preventDefault();
		this.props.onFetch(RECENT_URL);
		this.addActiveClassList(e);
	},
	handleAlltime: function (e) {
		e.preventDefault();
		this.props.onFetch(ALLTIME_URL);
		this.addActiveClassList(e);
	},
	addActiveClassList: function (e) {
		if(!e.target.classList.contains('active')) {
			this.removeActiveClassName();
			e.target.classList.add('active');
		}
	},
	removeActiveClassName: function () {
		let elms = document.getElementsByClassName('score');
		for(let i = 0; i < elms.length; i++) {
			if(elms.item(i).classList.contains('active'))
				elms.item(i).classList.remove('active');
		}
	},
	render: function () {
		return (
			<thead>
				<tr>
					<th id="index-title">#</th>
					<th>{}</th>
					<th id="camper-title">FCC Camper</th>
					<th id="recent-score-title" className="score active" onClick={this.handleRecent}>Points earned in past 30days</th>
					<th id="all-time-score-title" className="score" onClick={this.handleAlltime}>All time score</th>
				</tr>
			</thead>
		)
	}
});


let TableRow = React.createClass({
	handleClick: function (e) {
		e.preventDefault();
		window.open('http://freecodecamp.com/' + this.props.username, '_blank');
	},
	render: function () {
		return (
			<tr className="camper-info" onClick={this.handleClick}>
				<td className="index">{this.props.id}</td>
				<td className="avatar">
					<img src={this.props.img} alt="Camper avatar"/>
				</td>
				<td className="camper">{this.props.username}</td>
				<td className="recent-score">{this.props.recent}</td>
				<td className="all-time-score">{this.props.alltime}</td>
			</tr>
		)
	}
});


let Table = React.createClass({
	getInitialState: function () {
		return {
			data: []
		};
	},
	setCamperInfo: function () {
		// iterate through, populate row, returning array of rows
		return this.state.data.map(function (camper, i) {
			return (
				<TableRow key={i + 1} id={i + 1} img={camper.img} username={camper.username}
						  recent={camper.recent} alltime={camper.alltime}/>
			);
		})
	},
	fetchCamperInfo: function (url) {
		// make the api call using axios and a js promise
		return axios.get(url).then(function (response) {
			if(response) return response.data; // array of camper json objects
		}, function (error) {
			throw new Error('Error connecting to server');
		});
	},
	componentWillMount: function () {
		let that = this;
		// fetch the initial data from server prior to mounting the component
		this.fetchCamperInfo(RECENT_URL).then(function (data) {
			that.setState({
				data: data
			})
		}, function (errorMessage) {
			alert(errorMessage);
		});
	},
	updateComponentState: function(url) {
		// update component state post when ever a user has clicked
		// on either recent/allTime column headings
		let that = this;
		this.fetchCamperInfo(url).then(function (data) {
			that.setState({
				data: data
			})
		}, function (errorMessage) {
			alert(errorMessage);
		})
	},
	render: function () {
		return (
			<table>
				<TableHeader onFetch={this.updateComponentState}/>
				<tbody>{this.setCamperInfo()}</tbody>
			</table>
		)
	}
});


let App = React.createClass({
	render: function () {
		return (
			<div id="container">
				<PageHeader/>
				<Table/>
			</div>
		)
	}
});
ReactDOM.render(<App/>, document.getElementById('app'));