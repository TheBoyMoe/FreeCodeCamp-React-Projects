/*
	References:
	
	// app examples:
	[1] https://codepen.io/freeCodeCamp/full/eZGMjp (project example)
	[2] https://codepen.io/Jarvis1010/pen/oYxzOK (responsive table using bootstrap)
	*[3] https://codepen.io/maci01/pen/YGNAGk *(UI - responsive using media queries - NO bootstrap, sort works)
	[4] https://codepen.io/Bouncey/pen/OXkgOO (uses table layout & jQuery)
	[5] https://codepen.io/jbluks/pen/bBoovv
	[6] https://codepen.io/micakce/pen/pRPQdx?editors=1010 (uses axios and promises??)**
	[7] https://codepen.io/AlexOleynyk/pen/gLLyNq
	[8] https://codepen.io/sufflavus/pen/RazqBE?editors=1010 (check code)
	[9] https://codepen.io/eddyw/pen/qNZXga (Responsive ui using bootstrap - sort works)
	*[10] https://codepen.io/thomlom/pen/zBGOYd * (top draw ui - responsive - bootstrap)
	*[11] https://codepen.io/freeCodeCamp/pen/eZGMjp/?editors=1010 (responsive ui - bootstrap)
	
	// docs:
	[12] https://facebook.github.io/react/docs/thinking-in-react.html (build a searchable table using react)
			github repo: http://codepen.io/lacker/pen/vXpAgj?editors=0010
	[13] http://jsfiddle.net/jhudson8/dahdx6eu/ (example of simple react table)
	[14] http://blog.matthewcheok.com/building-generic-components-in-react/ (simple react table)
	
	// data:
 	https://fcctop100.herokuapp.com/api/fccusers/top/recent
 	https://fcctop100.herokuapp.com/api/fccusers/top/alltime
 
	// json data
	note: FCC user profile - https://www.freecodecamp.com/[username]
 	[
		{
			username: "Manish-Giri",
			img: "https://avatars.githubusercontent.com/u/11348778?v=3",
			alltime: 3616,
			recent: 672,
			lastUpdate: "2017-01-25T02:06:27.524Z"
		},
		{
			username: "sjames1958gm",
			img: "https://avatars.githubusercontent.com/u/4639625?v=3",
			alltime: 5222,
			recent: 527,
			lastUpdate: "2017-01-26T18:14:24.778Z"
		},
		{
			username: "JohnPaulWalsh",
			img: "https://avatars.githubusercontent.com/u/9558634?v=3",
			alltime: 959,
			recent: 503,
			lastUpdate: "2017-01-27T03:58:38.153Z"
		}, etc
	 
	 ]
 	
 	

 */

const ALLTIME_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const RECENT_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

let PageHeader = React.createClass({
	render: function () {
		return (
			<h1><i className="fa fa-free-code-camp"/>FCC Camper Leader Board</h1>
		)
	}
});

let TableHeader = React.createClass({
	handleRecent: function (e) {
		e.preventDefault();
		// pass the request to the parent via function
		this.props.onFetch(RECENT_URL);
	},
	handleAlltime: function (e) {
		e.preventDefault();
		// pass the request to the parent via function
		this.props.onFetch(ALLTIME_URL);
	},
	render: function () {
		return (
			<thead>
				<tr>
					<th id="index-title">#</th>
					<th>{}</th>
					<th id="camper-title">FCC Camper</th>
					<th id="recent-score-title" onClick={this.handleRecent}>Points earned in past 30days</th>
					<th id="all-time-score-title" onClick={this.handleAlltime}>All time score</th>
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