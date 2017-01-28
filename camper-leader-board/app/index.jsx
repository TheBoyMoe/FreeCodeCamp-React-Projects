/*
	References:
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
	
	
	Data:
 	https://fcctop100.herokuapp.com/api/fccusers/top/recent
 	https://fcctop100.herokuapp.com/api/fccusers/top/alltime

 */
let Header = React.createClass({
	render: function () {
		return (
			<h1><i className="fa fa-free-code-camp"/>FCC Camper Leader Board</h1>
		)
	}
});

let Main = React.createClass({
	render: function () {
		return (
			<div>
				<p>content content content</p>
			</div>
		)
	}
});


let App = React.createClass({
	render: function () {
		return (
			<div id="container">
				<Header/>
				<Main/>
			</div>
		)
	}
});
ReactDOM.render(<App/>, document.getElementById('app'));