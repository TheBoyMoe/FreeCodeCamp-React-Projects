let React = require('react');
let ReactDOM = require('react-dom');
let PreviewContainer = require('PreviewContainer');

ReactDOM.render(
    <PreviewContainer/>,
    document.getElementById('app')
);

// NOTE: to run the app, run
// webpack -w & node server.js
// at the cli  in separate tabs