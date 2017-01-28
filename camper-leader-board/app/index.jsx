
let Header = React.createClass({
	render: function () {
		return (
			<h1>React Camper Leader Board</h1>
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