/*
    References
    [1] https://www.freecodecamp.com/challenges/build-a-markdown-previewer (project requirements)
    [2] https://codepen.io/freeCodeCamp/full/JXrLLE/ (example - code) *
    [3] http://codepen.io/micopc/full/oBWdLw/ (example - ui) *
    [4] https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet (markdown cheat sheet) *
    [5] http://codepen.io/Beaglefoot/full/zNZmRm/ (example)
    [6] http://codepen.io/tnga/full/LNmeaR/ (example with formatting toolbar)
    [7] https://simplemde.com/ & https://github.com/NextStepWebs/simplemde-markdown-editor (markdown editor toolbar)
    [8] http://codepen.io/JayV30/pen/zqBbqQ (example - code) *
    [9] http://codepen.io/saintgeo23/pen/mPoYRj (example - code, responsive)
    [10] http://codepen.io/labiej/pen/dXwvLy (example - code - includes tabs)
    [11] http://codepen.io/jchimienti/pen/YqrPMm (example - text)
    [12] http://codepen.io/ColtonBoston/pen/XKVvYq (example - code)
    [13] http://codepen.io/alamm/pen/oLOqvN (example)
    [14] https://gist.github.com/hcatlin/1027867 (scss reset style sheet)
	[15] http://pxtoem.com/
	[16] http://stackoverflow.com/questions/31081320/flexbox-stretch-textarea-in-column
    [17] https://codepen.io/raphaelgoetter/pen/NqPQBa (flexbox form)
    [18] http://stackoverflow.com/questions/4804581/css-expand-float-child-div-height-to-parents-height
    
    html/css/js tabs:
    [19] http://www.w3schools.com/howto/howto_js_tabs.asp
    [20] http://callmenick.com/post/simple-responsive-tabs-javascript-css
    [21] https://github.com/callmenick/responsive-tabs
    
    react tabs:
    [22] https://github.com/reactjs/react-tabs (npm plugin)
    [23] https://codepen.io/trey/post/tabbed-navigation-react & http://codepen.io/trey/pen/raZmej
    [24] http://blog.ricardofilipe.com/post/react-tabs-component
    [25] https://toddmotto.com/creating-a-tabs-component-with-react/ *
    [26] http://codepen.io/mihalik/pen/IHgvh (example)

 */

let React = require('react');
let ReactDOM = require('react-dom');

// load styles
require('style!css!sass!applicationStyles');

let text = "Heading\n=======\n\nSub-heading\n-----------\n\n\
## Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\n\
Leave 2 spaces at the end of a line to do a line break\n\n\
Text attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\n\
Shopping list:\n\n * apples\n * oranges\n * pears\n\nNumbered list:\n\n\
 1. apples\n 2. oranges\n 3. pears\n\n\
*[Bill Fero](https://freecodecamp.com/theboymo)*";


let Header = React.createClass({
    render: function () {
        return (
            <header>
                <h1>Markdown Preview App</h1>
            </header>
        )
    }
});

let Footer = React.createClass({
    render: function () {
        let date = new Date();
        return (
            <footer>
                <p>Built by Bill Fero using React, ES6m JSX and Babel. Copyright &copy; {date.getFullYear()}</p>
            </footer>
        )
    }
});

let QuickRef = React.createClass({
	render: function () {
		return (
			<div id="quick-reference-area">
				<h2>Quick reference area</h2>
			</div>
		)
	}
});


let Input = React.createClass({
	getDefaultProps: function () {
		return {
			markdown: text
		}
	},
	onTextInput: function () {
		let markdown = this.refs.markdownText.value;
		console.log(markdown);
	},
    render: function () {
        return (
            <div id="input-area">
                <h2>Markdown Input Area</h2>
                <textarea onKeyUp={this.onTextInput} ref="markdownText" cols="10" rows="40" placeholder={this.props.markdown} />
            </div>
        )
    }
});

let Output = React.createClass({
    render: function () {
        return (
            <div id="preview-area">
                <h2>Preview area</h2>
                <p>{text}</p>
            </div>
        )
    }
});


let MarkdownPreview = React.createClass({
	// getDefaultProps: function () {
	// 	return {
	// 		markdown: text
	// 	}
	// },
	getInitialState: function () {
		return {
			//markdown: this.props.markdown
			markdown: ''
		}
	},
	handleTextInput: function (text) {
		// text received from input, update state & forwarded to output
		this.setState({
			markdown: text
		})
	},
	render: function () {
		return (
			<main id="content">
				<Input onTextInput={this.handleTextInput} />
				<Output/>
			</main>
		)
	}
});


let App = React.createClass({
    render: function () {
        return (
            <div id="container">
                <MarkdownPreview/>
            </div>
        )
    }
});


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

// NOTE: to run the app, run
// webpack -w & node server.js
// at the cli  in separate tabs