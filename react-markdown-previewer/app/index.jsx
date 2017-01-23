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


 */

let React = require('react');
let ReactDOM = require('react-dom');

// load styles
require('style!css!sass!applicationStyles');

let Header = React.createClass({
    render: function () {
        return (
            <H1>Markdown Preview App</H1>
        )
    }
});

let Footer = React.createClass({
    render: function () {
        let date = new Date();
        return (
            <div>
                <p>Built by Bill Fero using React, ES6m JSX and Babel. Copyright &copy; {date.getFullYear()}</p>
            </div>
        )
    }
});


let Input = React.createClass({
    render: function () {
        return (
            <textarea>Enter your text here</textarea>
        )
    }
});

let Output = React.createClass({
    render: function () {
        return (
            <div>Preview area</div>
        )
    }
});

let QuickRef = React.createClass({
    render: function () {
        return (
            <div>Quick reference area</div>
        )
    }
});


let App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <div>
                    <Input/>
                    <div>
                        <Output/>
                        <QuickRef/>
                    </div>
                </div>
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