function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const isOperator = /[+-/*]/;

class App extends React.Component {





  constructor(props) {
    super(props);_defineProperty(this, "state", { formula: '0', currentNum: '0', lastPressed: '' });_defineProperty(this, "handleClick",


    e => {
      const { innerText } = e.target;
      const { formula, currentNum } = this.state;

      switch (innerText) {
        case '=':
          calculate;
          break;

        case 'AC':
          this.setState({
            currentNum: '0',
            formula: '0' });

          break;

        case '.':
          const { currentNum } = this.state;
          if (this.state.currentNum === '0') {
            if (this.state.formula === '0') {
              this.setState({
                currentNum: '0' + innerText,
                formula: '0' + innerText });

            } else {
              this.setState({
                currentNum: '0' + innerText,
                formula: this.state.formula + '0' + innerText });

            }
          } else {
            if (!this.state.currentNum.includes('.')) {
              this.setState({
                formula: this.state.formula + innerText,
                currentNum: this.state.currentNum + innerText });

            }
          }
          break;

        case '-':
          if (this.state.formula.slice(-1) != '-') {
            if (this.state.formula.includes('=')) {
              this.setState({
                formula: this.state.currentNum + innerText,
                currentNum: '0' });

            } else {
              this.setState({
                formula: this.state.formula + innerText,
                currentNum: '0' });

            }
          }
          break;

        case '+':
        case '*':
        case '/':

          if (formula.includes('=')) {
            this.setState({
              formula: this.state.currentNum + innerText,
              currentNum: '0' });

          } else {
            if (formula.match(/[+\-*/]$/)) {
              this.setState({
                formula: formula.replace(/[+\-*/]+/, innerText),
                currentNum: '0' });

            } else {
              this.setState({
                formula: formula + innerText,
                currentNum: '0' });

            }
          }
          break;

        default:
          //when clicking a digit 
          if (this.state.formula === '0') {
            // if starting from scratch
            this.setState({
              formula: innerText,
              currentNum: innerText });

          } else {
            // if there's another calculation
            if (this.state.formula.includes('=')) {
              this.setState({
                formula: innerText,
                currentNum: innerText });

            } else if (this.state.currentNum === '0' && this.state.currentNum !== '0.') {
              // if num is 0 and formula isn't empty 
              this.setState({
                formula: this.state.formula + innerText,
                currentNum: innerText });

            } else {
              // if it's a non-ero and the formula isn't empty
              this.setState({
                formula: this.state.formula + innerText,
                currentNum: this.state.currentNum + innerText });

            }

          }}

    });_defineProperty(this, "calculate",

    () => {
      const result = eval(this.state.formula).toString();
      this.setState({
        currentNum: result,
        formula: this.state.formula + '=' + result });

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "container" }, /*#__PURE__*/

      React.createElement("div", { className: "row", id: "display-box" }, /*#__PURE__*/
      React.createElement("div", { className: "row", id: "formula-display" }, " ", this.state.formula, " "), /*#__PURE__*/
      React.createElement("div", { className: "row", id: "display" }, " ", this.state.currentNum, " ")), /*#__PURE__*/


      React.createElement("div", { class: "row", id: "buttons" }, /*#__PURE__*/
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("button", { id: "seven", value: "7", onClick: this.handleClick }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "eight", value: "8", onClick: this.handleClick }, "8"), /*#__PURE__*/
      React.createElement("button", { id: "nine", value: "9", onClick: this.handleClick }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "add", value: "+", onClick: this.handleClick }, "+")), /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("button", { id: "four", value: "4", onClick: this.handleClick }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "five", value: "5", onClick: this.handleClick }, "5"), /*#__PURE__*/
      React.createElement("button", { id: "six", value: "6", onClick: this.handleClick }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", value: "-", onClick: this.handleClick }, "-")), /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("button", { id: "one", value: "1", onClick: this.handleClick }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "two", value: "2", onClick: this.handleClick }, "2"), /*#__PURE__*/
      React.createElement("button", { id: "three", value: "3", onClick: this.handleClick }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "multiply", value: "*", onClick: this.handleClick }, "*")), /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("button", { id: "decimal", value: ".", onClick: this.handleClick }, "."), /*#__PURE__*/
      React.createElement("button", { id: "zero", value: "0", onClick: this.handleClick }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "equals", value: "=", onClick: this.calculate }, "="), /*#__PURE__*/
      React.createElement("button", { id: "divide", value: "/", onClick: this.handleClick }, "/")), /*#__PURE__*/


      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("button", { id: "clear", value: "AC", onClick: this.handleClick }, "AC")))));







  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
