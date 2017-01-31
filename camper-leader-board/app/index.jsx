/*
	References:
	
	// app examples:
	[1] https://codepen.io/freeCodeCamp/full/eZGMjp (project example)
	[2] https://codepen.io/Jarvis1010/pen/oYxzOK (responsive table using bootstrap)
	[3] https://codepen.io/maci01/pen/YGNAGk *(UI - responsive using media queries - NO bootstrap, sort works)
	[4] https://codepen.io/Bouncey/pen/OXkgOO (uses table layout & jQuery)
	[5] https://codepen.io/jbluks/pen/bBoovv
	[6] https://codepen.io/micakce/pen/pRPQdx?editors=1010 (click to user's profile on FCC)
	[7] https://codepen.io/AlexOleynyk/pen/gLLyNq
	[8] https://codepen.io/sufflavus/pen/RazqBE?editors=1010 (check code)
	[9] https://codepen.io/eddyw/pen/qNZXga (Responsive ui using bootstrap - sort works)
	[10] https://codepen.io/thomlom/pen/zBGOYd * (top draw ui - responsive - bootstrap)
	[11] https://codepen.io/freeCodeCamp/pen/eZGMjp/?editors=1010 (responsive ui - bootstrap)
	
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

let PageHeader = React.createClass({
	render: function () {
		return (
			<h1><i className="fa fa-free-code-camp"/>FCC Camper Leader Board</h1>
		)
	}
});

let TableHeader = React.createClass({
	render: function () {
		return (
			<thead>
				<tr>
					<th>#</th>
					<th>FCC Camper</th>
					<th>Points earned during the past 30days</th>
					<th>All time score</th>
				</tr>
			</thead>
		)
	}
});


let TableRow = React.createClass({
	render: function () {
		return (
			<tr>
				<td>{this.props.id}</td>
				<td>{this.props.img}</td>
				<td>{this.props.username}</td>
				<td>{this.props.recent}</td>
				<td>{this.props.alltime}</td>
			</tr>
		)
	}
});


let Table = React.createClass({
	//getDefaultProps() {
		// pass in some dummy data
		// username, img, alltime, recent, lastUpdate
		
		// this.data = [
		// 	{
		// 		username: "Manish-Giri",
		// 		img: "https://avatars.githubusercontent.com/u/11348778?v=3",
		// 		alltime: 3616,
		// 		recent: 672,
		// 		lastUpdate: "2017-01-25T02:06:27.524Z"
		// 	},
		// 	{
		// 		username: "sjames1958gm",
		// 		img: "https://avatars.githubusercontent.com/u/4639625?v=3",
		// 		alltime: 5222,
		// 		recent: 527,
		// 		lastUpdate: "2017-01-26T18:14:24.778Z"
		// 	},
		// 	{
		// 		username: "JohnPaulWalsh",
		// 		img: "https://avatars.githubusercontent.com/u/9558634?v=3",
		// 		alltime: 959,
		// 		recent: 503,
		// 		lastUpdate: "2017-01-27T03:58:38.153Z"
		// 	},
		// 	{
		// 		username: "diomed",
		// 		img: "https://avatars.githubusercontent.com/u/72777?v=3",
		// 		alltime: 2395,
		// 		recent: 495,
		// 		lastUpdate: "2017-01-23T20:00:13.854Z"
		// 	},
		// 	{
		// 		username: "revisualize",
		// 		img: "https://avatars.githubusercontent.com/u/1588399?v=3",
		// 		alltime: 2837,
		// 		recent: 417,
		// 		lastUpdate: "2017-01-26T18:09:40.213Z"
		// 	},
		// 	{
		// 		username: "anthonygallina1",
		// 		img: "https://avatars.githubusercontent.com/u/11003055?v=3",
		// 		alltime: 3061,
		// 		recent: 407,
		// 		lastUpdate: "2017-01-23T19:56:17.417Z"
		// 	},
		// 	{
		// 		username: "apottr",
		// 		img: "https://avatars.githubusercontent.com/u/1924021?v=3",
		// 		alltime: 1515,
		// 		recent: 290,
		// 		lastUpdate: "2017-01-23T20:02:21.721Z"
		// 	},
		// 	{
		// 		username: "Chrono79",
		// 		img: "https://avatars.githubusercontent.com/u/9571508?v=3",
		// 		alltime: 2898,
		// 		recent: 273,
		// 		lastUpdate: "2017-01-23T19:57:18.008Z"
		// 	},
		// 	{
		// 		username: "Azbo400",
		// 		img: "https://avatars.githubusercontent.com/u/12162628?v=3",
		// 		alltime: 490,
		// 		recent: 267,
		// 		lastUpdate: "2017-01-27T03:58:59.177Z"
		// 	},
		// 	{
		// 		username: "ArielLeslie",
		// 		img: "https://avatars.githubusercontent.com/u/6234475?v=3",
		// 		alltime: 2386,
		// 		recent: 238,
		// 		lastUpdate: "2017-01-23T19:55:02.038Z"
		// 	}
		// ];
	//},
	_getCamperInfo: function () {
		const data = [
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
			},
			{
				username: "diomed",
				img: "https://avatars.githubusercontent.com/u/72777?v=3",
				alltime: 2395,
				recent: 495,
				lastUpdate: "2017-01-23T20:00:13.854Z"
			},
			{
				username: "revisualize",
				img: "https://avatars.githubusercontent.com/u/1588399?v=3",
				alltime: 2837,
				recent: 417,
				lastUpdate: "2017-01-26T18:09:40.213Z"
			},
			{
				username: "anthonygallina1",
				img: "https://avatars.githubusercontent.com/u/11003055?v=3",
				alltime: 3061,
				recent: 407,
				lastUpdate: "2017-01-23T19:56:17.417Z"
			},
			{
				username: "apottr",
				img: "https://avatars.githubusercontent.com/u/1924021?v=3",
				alltime: 1515,
				recent: 290,
				lastUpdate: "2017-01-23T20:02:21.721Z"
			},
			{
				username: "Chrono79",
				img: "https://avatars.githubusercontent.com/u/9571508?v=3",
				alltime: 2898,
				recent: 273,
				lastUpdate: "2017-01-23T19:57:18.008Z"
			},
			{
				username: "Azbo400",
				img: "https://avatars.githubusercontent.com/u/12162628?v=3",
				alltime: 490,
				recent: 267,
				lastUpdate: "2017-01-27T03:58:59.177Z"
			},
			{
				username: "ArielLeslie",
				img: "https://avatars.githubusercontent.com/u/6234475?v=3",
				alltime: 2386,
				recent: 238,
				lastUpdate: "2017-01-23T19:55:02.038Z"
			}
		];
		let count = 0;
		return data.map(function (camper) {
			return (
				<TableRow id={camper.lastUpdate} img={camper.img} username={camper.username}
						  recent={camper.recent} alltime={camper.alltime}/>
			);
		})
		
	},
	render: function () {
		// iterate through, populate row, returning array of rows
		
		// let count = 0;
		// let rows = this.props.data.map(function (camper) {
		// 	return (
		// 		<TableRow index={++count} img={camper.img} username={camper.username}
		// 				recent={camper.recent} alltime={camper.alltime}/>
		// 	);
		// });
		
		
		
		
		return (
			<table>
				<TableHeader/>
				<tbody>{this._getCamperInfo}</tbody>
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