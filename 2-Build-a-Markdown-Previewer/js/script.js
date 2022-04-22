function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialText = `
# Markdown Previewer 
## How to use? 
## type anything & the text will be updated in the previewer below
### And here's a demonstration:

Here's some inline code: \`<div></div>\`

And some multi-line code:
\`\`\`
function example() {
    console.log("Hello world!");
}
\`\`\`

This is a **bold text**!
OYou can also make it _italic_.
Or you can choose **_both!_**
And ypu can also ~~cross things out~~.

Here's a [link](https://codepen.io/stushi/pen/jOLwdrd) to my portfolio.

> Block Quotes: "Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced." (Aldous Huxley)

You can even create tables:

JavaScript | React | HTML
------------ | ------------- | -------------
Your content | more content | even more content
Another row | more content | even more content

- There are lists:
  - bulleted like this.
     - or like that.
        - or indented even more.

1. And there are numbered lists too.
1. This is a markdown previewer project
1. by:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace("<a", "<a target='_blank' ");
};

marked.setOptions({
  breaks: true,
  renderer: renderer,
  sanitize: true });


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "previewUpdate",






    text => {
      //gets text from the editor textarea & updates the preview
      this.setState({
        text: text.target.value });

    });this.state = { text: initialText };this.previewUpdate = this.previewUpdate.bind(this);}

  render() {

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h2", null, "Editor"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", value: this.state.text, onChange: this.previewUpdate }), /*#__PURE__*/
      React.createElement("h2", null, "Previewer"), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.text) } })))));




  }}

;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));