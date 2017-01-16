let React = require('react');
let PreviewArea = require('PreviewArea');
let TextArea = require('TextArea');

let PreviewContainer = React.createClass({
   render: function () {
       return (
           <div>
               <TextArea />
               <PreviewArea/>
           </div>
       )
   }
});
module.exports = PreviewContainer;