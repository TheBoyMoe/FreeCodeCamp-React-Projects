let React = require('react');
let PreviewArea = require('PreviewArea');
let TextArea = require('TextArea');

let PreviewContainer = React.createClass({
   render: function () {
       return (
           <div>
               <h1 className="page-title">React Markdown Previewer App</h1>
               <TextArea />
               <PreviewArea/>
           </div>
       )
   }
});
module.exports = PreviewContainer;