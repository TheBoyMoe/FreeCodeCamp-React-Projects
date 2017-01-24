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

 */

let React = require('react');
let ReactDOM = require('react-dom');

// load styles
require('style!css!sass!applicationStyles');

let exampleText = "Heading\n=======\n\nSub-heading\n-----------\n\n\
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


let Input = React.createClass({
    render: function () {
        return (
            <div id="input-area">
				<div className="wrap">
                	<h2>Input Area</h2>
					<textarea cols="60" rows="30">{exampleText}</textarea>
				</div>
            </div>
        )
    }
});

let Output = React.createClass({
    render: function () {
        return (
            <div id="preview-area">
                <h2>Preview area</h2>
            </div>
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


let App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <main id="content">
                    <Input/>
                    <div id="output-area">
						<div className="wrap">
                        	<Output/>
                        	<QuickRef/>
						</div>
                    </div>
                </main>
                <Footer/>
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