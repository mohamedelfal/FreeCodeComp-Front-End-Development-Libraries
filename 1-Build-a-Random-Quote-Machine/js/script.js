function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // list of quotes
const quotesData = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class QuoteMachineApp extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [],
      index: -1 });_defineProperty(this, "getRandomIndex",











    () => {
      // gets a random index from 0 to quotes length
      const quotes = this.state.quotes;
      if (quotes.length != 0) {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({
          index });

      }
    });}componentDidMount() {// gets quotesData and updates state
    fetch(quotesData).then(data => data.json()).then(data => {this.setState({ quotes: data.quotes }, this.getRandomIndex);});}
  render() {
    const { quotes, index } = this.state;
    const quote = quotes[index];
    const tweetLink = `https://twitter.com/intent/tweet?text=${quote && quote.quote}-${quote && quote.author}`;

    return /*#__PURE__*/(
      React.createElement("div", { className: "container text-center position-absolute top-50 start-50 translate-middle" }, /*#__PURE__*/
      React.createElement("div", { className: "d-flex flex-row justify-content-center flex-middle" }, /*#__PURE__*/
      React.createElement("div", { id: "quote-box", className: "quote-box col-8 bg-white p-2 rounded w-50" }, /*#__PURE__*/
      React.createElement("p", { id: "text", className: "text" }, "\"", quote && quote.quote, "\""), /*#__PURE__*/
      React.createElement("p", { id: "author" }, "-", quote && quote.author), /*#__PURE__*/
      React.createElement("div", { className: "d-flex justify-content-between" }, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: tweetLink, target: "_top", className: "btn btn-outline-primary" }, "Tweet"), /*#__PURE__*/
      React.createElement("button", { id: "new-quote", class: "btn btn-outline-primary", onClick: this.getRandomIndex }, "New Quote"))))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(QuoteMachineApp, null), document.getElementById('app'));