/*
	References:
	
	// app examples
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
	
	// docs
	[12] https://facebook.github.io/react/docs/thinking-in-react.html (build a searchable table using react)
	[13] http://jsfiddle.net/jhudson8/dahdx6eu/ (example of simple react table)
	
	Data:
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
			<div></div>
		)
	}
});


let TableRow = React.createClass({
	render: function () {
		return (
			<div></div>
		)
	}
});


let Table = React.createClass({
	// fetch data, iterate through and populate the rows
	render: function () {
		return (
			<div>
				
			</div>
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