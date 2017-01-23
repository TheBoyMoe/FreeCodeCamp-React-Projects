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
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

// custom components
let Main = require('Main');

// load styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
    </Router>,
    document.getElementById('app')
);

// NOTE: to run the app, run
// webpack -w & node server.js
// at the cli  in separate tabs