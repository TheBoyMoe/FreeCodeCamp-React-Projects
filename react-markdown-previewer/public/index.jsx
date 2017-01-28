let Input = React.createClass({
	
	getDefaultProps: function () {
		
		let text = "Heading\n=======\n\nSub-heading\n-----------\n\n\
## Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\n\
Leave 2 spaces at the end of a line to do a line break\n\n\
Text attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\n\
Shopping list:\n\n * apples\n * oranges\n * pears\n\nNumbered list:\n\n\
 1. apples\n 2. oranges\n 3. pears\n\n\
*[Bill Fero](https://freecodecamp.com/theboymo)*";
		
		return {
			markdown: text
		}
	},
	onTextInput: function () {
		let markdown = this.refs.markdownText.value;
		if(typeof markdown == 'string' && markdown.length > 0) {
			this.props.onTextUpdate(markdown);
		} else {
			this.props.onTextUpdate('Enter your markdown in the area to the left!'); // ??
		}
	},
    render: function () {
        return (
            <div id="input-area">
                <h2 className="title">Markdown Input Area</h2>
                <textarea onKeyUp={this.onTextInput} ref="markdownText" cols="10" rows="40" placeholder={this.props.markdown} />
            </div>
        )
    }
});

let Output = React.createClass({
	// use the https://github.com/chjj/marked lib to convert markdown into plain html
	generateMarkdown: function(text) {
		return {
			__html: marked(text)
		}
	},
    render: function () {
        return (
            <div id="preview-area">
                <h2 className="title">Formatted Preview Area</h2>
                <div id="markdown-text" dangerouslySetInnerHTML={this.generateMarkdown(this.props.markdown)}></div>
            </div>
        )
    }
});


let MarkdownPreview = React.createClass({
	getDefaultProps: function () {
		return {
			markdown: 'Enter your markdown in the area to the left!'
		}
	},
	getInitialState: function () {
		return {
			markdown: this.props.markdown
		}
	},
	handleTextInput: function (text) {
		if (typeof text == 'string' && text.length > 0) {
			this.setState({
				markdown: text
			});
		}
	},
	render: function () {
		return (
			<main id="content">
				<Input onTextUpdate={this.handleTextInput} />
				<Output markdown={this.state.markdown} />
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
